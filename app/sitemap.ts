import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{
    url: "https://time-to-surf-firmauritused.vercel.app/",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
    images: [
      "https://time-to-surf-firmauritused.vercel.app/gallery/IMG_8818.JPG",
      "https://time-to-surf-firmauritused.vercel.app/gallery/DSC_8879.jpg",
      "https://time-to-surf-firmauritused.vercel.app/gallery/DSC_9017.jpg",
    ],
  }];
}
