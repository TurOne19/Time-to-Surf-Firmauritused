"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { locales } from "@/lib/content-v2";
import { useSiteConfig } from "@/lib/site-config";

const anchors = ["program", "gallery", "pricing", "why", "faq", "contact"];

export default function Nav() {
  const { t, locale, setLocale } = useLanguage();
  const { links } = useSiteConfig();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-md shadow-[0_1px_0_rgba(217,169,78,0.25)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="font-display text-lg md:text-xl tracking-wide text-ivory">
          Time <span className="text-gold">to</span> Surf
        </a>

        <nav className="hidden lg:flex items-center gap-8 font-label text-xs tracking-widest2 uppercase text-ivory/85">
          {anchors.map((a, i) => (
            <a key={a} href={`#${a}`} className="hover:text-gold transition-colors">
              {t.nav.links[i]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-1 font-label text-xs tracking-wideish">
            {locales.map((l) => (
              <button
                key={l.code}
                onClick={() => setLocale(l.code)}
                className={`px-2 py-1 rounded-sm transition-colors ${
                  locale === l.code
                    ? "text-gold"
                    : "text-ivory/50 hover:text-ivory"
                }`}
                aria-pressed={locale === l.code}
              >
                {l.label}
              </button>
            ))}
          </div>

          <a
            href={links.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 border border-gold/70 text-gold px-4 py-2 text-xs font-label tracking-wideish uppercase hover:bg-gold hover:text-ink transition-colors"
          >
            {t.nav.cta}
          </a>

          <button
            className="lg:hidden text-ivory p-2"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M2 6h18M2 11h18M2 16h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-ink/97 backdrop-blur-md border-t border-gold/20">
          <div className="px-5 py-6 flex flex-col gap-5 font-label text-sm tracking-wideish uppercase text-ivory">
            {anchors.map((a, i) => (
              <a key={a} href={`#${a}`} onClick={() => setOpen(false)}>
                {t.nav.links[i]}
              </a>
            ))}
            <div className="flex gap-3 pt-2 border-t border-gold/20 mt-1">
              {locales.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLocale(l.code)}
                  className={locale === l.code ? "text-gold" : "text-ivory/50"}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
