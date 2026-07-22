import type { SiteConfig } from "./site-config";
import type { Dictionary, Locale } from "./content-v2";

export const SUPABASE_URL = "https://qhcaywzruhvpjzhgvgsu.supabase.co";
export const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoY2F5d3pydWh2cGp6aGd2Z3N1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ3NTE1ODksImV4cCI6MjEwMDMyNzU4OX0.nSxtEM8zKujlPScyGPsW9BqoocwWac8ZUhftEG24Qxo";

const headers = { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}`, "Content-Type": "application/json" };

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${SUPABASE_URL}${path}`, { ...init, headers: { ...headers, ...(init?.headers || {}) }, cache: "no-store" });
  if (!response.ok) throw new Error((await response.text()) || `Supabase error ${response.status}`);
  if (response.status === 204) return undefined as T;
  const text = await response.text();
  return text ? JSON.parse(text) : undefined as T;
}

export interface ReviewRecord {
  id: string;
  name: string;
  role: string | null;
  company: string;
  event_type: string;
  event_size: number;
  event_date: string;
  contact?: string;
  rating: number;
  text: string;
  status: "pending" | "approved" | "rejected";
  created_at: string;
}

export async function loadSiteState(): Promise<{ content: Record<Locale, Dictionary>; config: SiteConfig } | null> {
  const rows = await request<{ content: Record<Locale, Dictionary>; config: SiteConfig }[]>("/rest/v1/site_state?id=eq.1&select=content,config");
  return rows[0] || null;
}

export async function checkAdminPassword(password: string): Promise<boolean> {
  return request<boolean>("/rest/v1/rpc/admin_check", { method: "POST", body: JSON.stringify({ p_password: password }) });
}

export async function saveSiteState(password: string, content: Record<Locale, Dictionary>, config: SiteConfig) {
  await request("/rest/v1/rpc/admin_save_site", { method: "POST", body: JSON.stringify({ p_password: password, p_content: content, p_config: config }) });
}

export async function submitReview(review: Omit<ReviewRecord, "id" | "status" | "created_at"> & { contact: string; consent: boolean }) {
  await request("/rest/v1/reviews", { method: "POST", headers: { Prefer: "return=minimal" }, body: JSON.stringify({ ...review, status: "pending" }) });
}

export async function loadApprovedReviews() {
  return request<ReviewRecord[]>("/rest/v1/reviews?status=eq.approved&select=id,name,role,company,event_type,event_size,event_date,rating,text,status,created_at&order=created_at.desc");
}

export async function loadAdminReviews(password: string) {
  return request<ReviewRecord[]>("/rest/v1/rpc/admin_list_reviews", { method: "POST", body: JSON.stringify({ p_password: password }) });
}

export async function moderateReview(password: string, id: string, action: "approve" | "reject" | "delete") {
  await request("/rest/v1/rpc/admin_moderate_review", { method: "POST", body: JSON.stringify({ p_password: password, p_review_id: id, p_action: action }) });
}
