"use client";

import { useLanguage } from "@/lib/language-context";
import { TELEGRAM_URL, PHONE_TEL, PHONE_DISPLAY } from "@/lib/constants";

export default function FinalCta() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative bg-ink overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />

      <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 py-28 md:py-36 text-center flex flex-col items-center">
        <span className="text-gold text-2xl mb-6" aria-hidden="true">✦</span>
        <h2 className="font-display text-3xl md:text-5xl text-ivory text-balance leading-[1.12] mb-6">
          {t.finalCta.title}
        </h2>
        <p className="font-body text-ivory/70 text-base md:text-lg max-w-xl mb-10">
          {t.finalCta.subtitle}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gold text-ink px-8 py-4 font-label text-xs tracking-wideish uppercase font-medium hover:bg-ivory transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M21.5 3.5L2.5 11L9 13.5M21.5 3.5L18.5 20.5L9 13.5M21.5 3.5L9 13.5M9 13.5V19L12.3 15.9"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {t.finalCta.telegramCta}
          </a>

          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 text-ivory/75 font-label text-xs tracking-wideish uppercase hover:text-gold transition-colors"
          >
            {t.finalCta.callLabel} · {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
