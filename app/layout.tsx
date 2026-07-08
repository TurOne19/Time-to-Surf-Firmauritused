import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Time to Surf | Beach Corporate",
  description: "Summer beach corporate event with BBQ, SUP and team building at Stroomi rand."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="et">
      <body>{children}</body>
    </html>
  );
}
