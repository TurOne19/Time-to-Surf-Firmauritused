"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { locales } from "@/lib/content-v2";
import { useSiteConfig } from "@/lib/site-config";

const anchors = ["program", "gallery", "pricing", "why", "faq", "contact"];

export default function Nav() {
  const { t, locale, setLocale } = useLanguage();
  const { links, seo } = useSiteConfig();
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
      <div className="flex h-16 w-full items-center gap-5 px-5 md:h-20 md:px-8 xl:gap-8 xl:px-10">
        <a href="#top" className="flex shrink-0 items-center gap-2.5 font-display text-lg tracking-wide text-ivory md:text-xl">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-1 shadow-[0_0_0_1px_rgba(255,255,255,0.25)] md:h-10 md:w-10">
            <img src={seo.favicon} alt="" width="40" height="40" className="h-full w-full rounded-full object-cover" />
          </span>
          <span className="hidden sm:inline">{t.footer.brandName}</span>
        </a>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-5 font-label text-[11px] uppercase tracking-[0.15em] text-ivory/85 lg:flex xl:gap-7 xl:text-xs xl:tracking-widest2">
          {anchors.map((a, i) => (
            <a key={a} href={`#${a}`} className="hover:text-gold transition-colors">
              {t.nav.links[i]}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-3 xl:gap-4">
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
