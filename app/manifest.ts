import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Time to Surf - firmaüritused Stroomi rannas",
    short_name: "Time to Surf",
    description: "Ettevõttepäevad ja turvalised veeprogrammid Tallinnas Stroomi rannas.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4ead4",
    theme_color: "#092a32",
    lang: "et",
    icons: [{ src: "/favicon.png", sizes: "512x512", type: "image/png", purpose: "maskable" }],
  };
}
