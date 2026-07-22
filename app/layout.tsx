import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Manrope, Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";

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
  title: "Suvine rannaüritus - Stroomi Rand, Time to surf",
  description:
    "Ettevõttepäev mere ääres Stroomi rannas: turvaline veeprogramm, instruktorid ja varustus Time to Surfilt.",
  icons: { icon: "/favicon.png", apple: "/favicon.png" },
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
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
