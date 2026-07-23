"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { loadSiteState } from "./supabase";

export const SITE_CONFIG_KEY = "time-to-surf-site-config-v1";
export const CONTENT_CONFIG_KEY = "time-to-surf-content-config-v1";

export interface MediaEntry {
  id: string;
  type: "photo" | "video";
  src: string;
  poster?: string;
}

export interface SiteConfig {
  links: {
    telegram: string;
    phoneDisplay: string;
    phoneTel: string;
    email: string;
    instagram: string;
    facebook: string;
    mapsEmbed: string;
    mapsLink: string;
    northpixel: string;
  };
  seo: { title: string; description: string; favicon: string };
  media: {
    hero: string;
    introPrimary: string;
    introSecondary: string;
    trust: string;
    finalCta: string;
    curated: string[];
    gallery: MediaEntry[];
  };
}

export const defaultSiteConfig: SiteConfig = {
  links: {
    telegram: "https://t.me/Andrei_Time_to_Surf",
    phoneDisplay: "+372 55 512 872",
    phoneTel: "+37255512872",
    email: "info.timetosurf@gmail.com",
    instagram: "https://www.instagram.com/timetosurf.ee/",
    facebook: "https://www.facebook.com/timetosurf.ee/",
    mapsEmbed: "https://www.google.com/maps?q=Time+to+Surf+Stroomi%4059.4363311,24.6806022&z=16&output=embed",
    mapsLink: "https://www.google.com/maps/place/Time+to+Surf+Stroomi/@59.4363311,24.6806022,15z/data=!4m6!3m5!1s0x4692955380633d83:0xa1aa05ed4600829!8m2!3d59.4363311!4d24.6806022!16s%2Fg%2F11ygnnj2j3",
    northpixel: "https://northpixel.ee",
  },
  seo: {
    title: "Suvine rannaüritus Tallinnas - Time to Surf Stroomi rand",
    description: "Korralda ettevõtte suvepäev või firmaüritus Tallinnas Stroomi rannas. Time to Surf pakub turvalist veeprogrammi, instruktoreid, varustust ja rannajaama.",
    favicon: "/favicon.png",
  },
  media: {
    hero: "/gallery/IMG_8818.JPG",
    introPrimary: "/gallery/IMG_9183.JPG",
    introSecondary: "/gallery/IMG_8785.JPG",
    trust: "/gallery/DSC_9017.jpg",
    finalCta: "/gallery/DSC_8897.jpg",
    curated: [
      "/gallery/DSC_8879.jpg", "/gallery/DSC_8978.jpg", "/gallery/IMG_8781.JPG",
      "/gallery/DSC_9001.jpg", "/gallery/DSC_8989.jpg",
    ],
    gallery: [
      ...[
        "DSC_8879.jpg", "DSC_8897.jpg", "DSC_8900.jpg", "DSC_8938.jpg",
        "DSC_8978.jpg", "DSC_8986.jpg", "DSC_8989.jpg", "DSC_9001.jpg",
        "DSC_9017.jpg", "IMG_8779.JPG", "IMG_8781.JPG", "IMG_8785.JPG",
        "IMG_8818.JPG", "IMG_9183.JPG",
      ].map<MediaEntry>((file, index) => ({ id: `photo-${index + 1}`, type: "photo", src: `/gallery/${file}` })),
      { id: "video-1", type: "video" as const, src: "/gallery/IMG_8820.mp4", poster: "/gallery/DSC_8900.jpg" },
    ],
  },
};

function loadConfig(): SiteConfig {
  try {
    const stored = window.localStorage.getItem(SITE_CONFIG_KEY);
    return stored ? { ...defaultSiteConfig, ...JSON.parse(stored) } : defaultSiteConfig;
  } catch {
    return defaultSiteConfig;
  }
}

const SiteConfigContext = createContext<SiteConfig>(defaultSiteConfig);

export function SiteConfigProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState(defaultSiteConfig);

  useEffect(() => {
    const refresh = async () => {
      setConfig(loadConfig());
      try {
        const remote = await loadSiteState();
        if (remote?.config) setConfig(remote.config);
      } catch { /* SQL may not have been installed yet; local defaults remain */ }
    };
    refresh();
    window.addEventListener("storage", refresh);
    window.addEventListener("tts-admin-updated", refresh);
    return () => {
      window.removeEventListener("storage", refresh);
      window.removeEventListener("tts-admin-updated", refresh);
    };
  }, []);

  useEffect(() => {
    document.title = config.seo.title;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", config.seo.description);
    document.querySelectorAll('link[rel="icon"], link[rel="apple-touch-icon"]').forEach((node) => node.setAttribute("href", config.seo.favicon));
  }, [config.seo]);

  const value = useMemo(() => config, [config]);
  return <SiteConfigContext.Provider value={value}>{children}</SiteConfigContext.Provider>;
}

export function useSiteConfig() {
  return useContext(SiteConfigContext);
}
