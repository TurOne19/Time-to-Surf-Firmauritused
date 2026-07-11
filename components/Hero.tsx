"use client";

import { useLanguage } from "@/lib/language-context";
import { TELEGRAM_URL, PHONE_TEL, PHONE_DISPLAY } from "@/lib/constants";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative min-h-[100svh] flex items-end overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_65%,rgba(12,38,48,0.08),rgba(12,38,48,0.6)_72%)]" />

      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-5 sm:px-8 lg:px-12 pb-24 md:pb-32 lg:pb-36 pt-40 md:pt-48">
        <p className="reveal inline-flex items-center gap-3 rounded-full border border-ivory/25 bg-ink/25 px-4 py-2 font-label text-ivory text-[11px] md:text-xs font-semibold tracking-[0.18em] uppercase mb-7 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.08)_inset]">
          <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_0_4px_rgba(217,169,78,0.14)]" aria-hidden="true" />
          {t.hero.eyebrow}
        </p>

        <h1
          className="reveal font-display text-ivory text-balance text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.25rem] font-medium tracking-[-0.035em] leading-[0.96] max-w-6xl"
          style={{ animationDelay: "0.1s" }}
        >
          {t.hero.title}
        </h1>

        <p
          className="reveal font-body text-ivory/85 text-base md:text-lg lg:text-xl max-w-2xl mt-7 md:mt-9 leading-relaxed"
          style={{ animationDelay: "0.2s" }}
        >
          {t.hero.subtitle}
        </p>

        <div
          className="reveal flex flex-wrap items-center gap-3 md:gap-5 mt-9 md:mt-11"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gold text-ink min-h-12 px-8 py-3.5 font-label text-xs tracking-wideish uppercase font-semibold hover:bg-ivory transition-colors"
          >
            {t.hero.ctaPrimary}
          </a>
          <a
            href="#program"
            className="inline-flex items-center justify-center gap-2 border border-ivory/45 text-ivory min-h-12 px-8 py-3.5 font-label text-xs tracking-wideish uppercase hover:border-gold hover:text-gold transition-colors"
          >
            {t.hero.ctaSecondary}
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 text-ivory/80 font-label text-xs tracking-wideish uppercase"
          >
            <span className="text-gold" aria-hidden="true">⟡</span>
            {t.hero.phoneLabel} · {PHONE_DISPLAY}
          </a>
        </div>

        <div
          className="reveal mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-ivory/20 pt-5 font-label text-[10px] sm:text-[11px] font-medium tracking-[0.12em] text-ivory/80 uppercase md:w-fit md:pr-10"
          style={{ animationDelay: "0.4s" }}
          aria-label={t.hero.detailsLabel}
        >
          {t.hero.details.map((detail, index) => (
            <span key={detail} className="flex items-center gap-2.5">
              <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
              {detail}
              {index < t.hero.details.length - 1 && (
                <span className="ml-3 hidden h-4 w-px bg-ivory/20 sm:block" aria-hidden="true" />
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Signature: a gentle wave-cut edge instead of a hard rectangular cut,
          transitioning the photo into the sand-colored section below. */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[60px] md:h-[90px] text-sand"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,40 C240,90 480,0 720,30 C960,60 1200,10 1440,45 L1440,90 L0,90 Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}
