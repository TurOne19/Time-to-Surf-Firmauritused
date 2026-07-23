"use client";

import { useLanguage } from "@/lib/language-context";
import { useSiteConfig } from "@/lib/site-config";

export default function Hero() {
  const { t } = useLanguage();
  const { links, media } = useSiteConfig();

  return (
    <section id="top" className="relative flex min-h-[100svh] items-start overflow-hidden md:items-end">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url('${media.hero}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_65%,rgba(12,38,48,0.08),rgba(12,38,48,0.6)_72%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[90rem] px-5 pb-16 pt-40 sm:px-8 sm:pb-20 sm:pt-40 md:pb-32 md:pt-48 lg:px-12 lg:pb-36">
        <p className="reveal mb-5 inline-flex items-center gap-3 rounded-full border border-ivory/25 bg-ink/25 px-4 py-2 font-label text-[10px] font-semibold uppercase tracking-[0.16em] text-ivory backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.08)_inset] sm:text-[11px] md:mb-7 md:text-xs md:tracking-[0.18em]">
          <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_0_4px_rgba(217,169,78,0.14)]" aria-hidden="true" />
          {t.hero.eyebrow}
        </p>

        <h1
          className="reveal max-w-6xl text-balance font-display text-[2.4rem] font-medium leading-[0.98] tracking-[-0.035em] text-ivory min-[390px]:text-[2.55rem] sm:text-6xl md:text-7xl md:leading-[0.96] lg:text-[5.5rem] xl:text-[6.25rem]"
          style={{ animationDelay: "0.1s" }}
        >
          {t.hero.title}
        </h1>

        <p
          className="reveal mt-5 max-w-2xl font-body text-[15px] leading-relaxed text-ivory/85 md:mt-9 md:text-lg lg:text-xl"
          style={{ animationDelay: "0.2s" }}
        >
          {t.hero.subtitle}
        </p>

        <div
          className="reveal mt-6 flex flex-wrap items-center gap-2.5 md:mt-11 md:gap-5"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href={links.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 bg-gold px-6 py-3 font-label text-[11px] font-semibold uppercase tracking-wideish text-ink transition-colors hover:bg-ivory md:min-h-12 md:px-8 md:py-3.5 md:text-xs"
          >
            {t.hero.ctaPrimary}
          </a>
          <a
            href="#program"
            className="inline-flex min-h-11 items-center justify-center gap-2 border border-ivory/45 px-6 py-3 font-label text-[11px] uppercase tracking-wideish text-ivory transition-colors hover:border-gold hover:text-gold md:min-h-12 md:px-8 md:py-3.5 md:text-xs"
          >
            {t.hero.ctaSecondary}
          </a>
          <a
            href={`tel:${links.phoneTel}`}
            className="inline-flex items-center gap-2 text-ivory/80 font-label text-xs tracking-wideish uppercase"
          >
            <span className="text-gold" aria-hidden="true">⟡</span>
            {t.hero.phoneLabel} · {links.phoneDisplay}
          </a>
        </div>

        <div
          className="reveal mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-ivory/20 pt-4 font-label text-[9px] font-medium uppercase tracking-[0.1em] text-ivory/80 sm:text-[10px] md:mt-8 md:w-fit md:gap-x-6 md:gap-y-3 md:pr-10 md:pt-5 md:text-[11px] md:tracking-[0.12em]"
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
