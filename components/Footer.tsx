"use client";

import { useLanguage } from "@/lib/language-context";
import LocationStrip from "./LocationStrip";
import {
  TELEGRAM_URL,
  PHONE_TEL,
  PHONE_DISPLAY,
  EMAIL,
  INSTAGRAM_URL,
  FACEBOOK_URL,
} from "@/lib/constants";

const anchors = ["program", "gallery", "pricing", "why", "faq", "contact"];

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink border-t border-gold/15">
      <LocationStrip />

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-8">
          <div>
            <p className="font-display text-lg text-ivory mb-2 flex items-center gap-2">
              <span className="text-gold" aria-hidden="true">≈</span>
              Time <span className="text-gold">to</span> Surf
            </p>
            <p className="font-body text-ivory/50 text-sm mb-5 max-w-xs">{t.footer.tagline}</p>
            <div className="flex flex-wrap gap-2">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-label text-[11px] tracking-wideish uppercase border border-ivory/20 text-ivory/70 rounded-full px-4 py-2 hover:border-gold hover:text-gold transition-colors"
              >
                Facebook
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-label text-[11px] tracking-wideish uppercase border border-ivory/20 text-ivory/70 rounded-full px-4 py-2 hover:border-gold hover:text-gold transition-colors"
              >
                Instagram
              </a>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-label text-[11px] tracking-wideish uppercase border border-ivory/20 text-ivory/70 rounded-full px-4 py-2 hover:border-gold hover:text-gold transition-colors"
              >
                Telegram
              </a>
            </div>
          </div>

          <div>
            <p className="font-label text-xs tracking-widest2 uppercase text-gold/80 mb-4">
              {t.footer.linksTitle}
            </p>
            <ul className="flex flex-col gap-2.5">
              {anchors.map((a, i) => (
                <li key={a}>
                  <a href={`#${a}`} className="font-body text-sm text-ivory/70 hover:text-gold transition-colors">
                    {t.nav.links[i]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-label text-xs tracking-widest2 uppercase text-gold/80 mb-4">
              {t.footer.contactTitle}
            </p>
            <ul className="flex flex-col gap-2.5 font-body text-sm text-ivory/70">
              <li>
                <a href={`tel:${PHONE_TEL}`} className="hover:text-gold transition-colors">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:text-gold transition-colors">
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="max-w-7xl mx-auto flex flex-col gap-3 px-5 py-5 font-label text-[11px] uppercase tracking-wideish text-ivory/35 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <span>© {year} TIME TO SURF - {t.footer.rights}</span>
          <a
            href="https://northpixel.ee"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit rounded-full border border-ivory/20 px-4 py-2 text-ivory/55 transition-colors hover:border-gold hover:text-gold"
          >
            Webpage by northpixel
          </a>
        </div>
      </div>
    </footer>
  );
}
