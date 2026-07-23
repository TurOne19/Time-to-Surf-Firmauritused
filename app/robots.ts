import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://time-to-surf-firmauritused.vercel.app";
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/admin"] },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
