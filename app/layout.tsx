import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Manrope, Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import { SiteConfigProvider } from "@/lib/site-config";

// Fraunces has no Cyrillic glyphs at all (Google only ships latin,
// latin-ext, vietnamese for it), so it's used for ET/EN headlines only.
const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

// Playfair Display does ship Cyrillic, so RU headlines swap to this at
// the same weight/personality (high-contrast display serif) instead of
// silently falling back to a generic system serif.
const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

// Space Grotesk also has no Cyrillic glyphs; Russian label text falls
// back to the body font automatically (handled in globals.css).
const grotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://time-to-surf-firmauritused.vercel.app"),
  title: {
    default: "Suvine rannaüritus Tallinnas - Time to Surf Stroomi rand",
    template: "%s | Time to Surf",
  },
  description:
    "Korralda ettevõtte suvepäev või firmaüritus Tallinnas Stroomi rannas. Time to Surf pakub turvalist veeprogrammi, instruktoreid, varustust ja rannajaama.",
  applicationName: "Time to Surf",
  authors: [{ name: "Time to Surf", url: "https://time-to-surf-firmauritused.vercel.app" }],
  creator: "Time to Surf",
  publisher: "Time to Surf",
  category: "Corporate events and water sports",
  keywords: [
    "firmaüritus Tallinn",
    "ettevõtte suvepäev",
    "rannaüritus Tallinn",
    "Stroomi rand",
    "korporatiivüritus",
    "team building Tallinn",
    "corporate event Tallinn",
    "водный корпоратив Таллинн",
    "корпоратив у моря",
    "SUP Tallinn",
    "windsurf Tallinn",
    "Time to Surf",
  ],
  alternates: {
    canonical: "/",
    languages: { "et-EE": "/", "en-GB": "/", "ru-EE": "/", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Time to Surf",
    title: "Suvine rannaüritus Tallinnas - Time to Surf",
    description: "Ettevõttepäev mere ääres Stroomi rannas koos turvalise veeprogrammi, instruktorite ja varustusega.",
    locale: "et_EE",
    alternateLocale: ["en_GB", "ru_EE"],
    images: [{ url: "/gallery/IMG_8818.JPG", width: 1200, height: 630, alt: "Time to Surf ettevõttepäev Stroomi rannas Tallinnas" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suvine rannaüritus Tallinnas - Time to Surf",
    description: "Ettevõttepäev mere ääres Stroomi rannas koos veeprogrammi ja varustusega.",
    images: ["/gallery/IMG_8818.JPG"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  other: {
    "geo.region": "EE-37",
    "geo.placename": "Tallinn",
    "geo.position": "59.4363311;24.6806022",
    ICBM: "59.4363311, 24.6806022",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="et">
      <body
        className={`${fraunces.variable} ${playfair.variable} ${manrope.variable} ${grotesk.variable} font-body antialiased`}
      >
        <SiteConfigProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </SiteConfigProvider>
      </body>
    </html>
  );
}
