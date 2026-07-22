"use client";

import { useLanguage } from "@/lib/language-context";
import { useSiteConfig } from "@/lib/site-config";

function LocationIcon({ type }: { type: "pin" | "bus" | "parking" }) {
  if (type === "pin") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M20 10C20 15.5 12 21 12 21S4 15.5 4 10a8 8 0 1 1 16 0Z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }

  if (type === "bus") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 17V6.8C5 4.8 6.6 3.5 8.6 3.5h6.8c2 0 3.6 1.3 3.6 3.3V17" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 9h14M7.5 17v2.5M16.5 17v2.5M5 17h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="8" cy="13.5" r="1" fill="currentColor" />
        <circle cx="16" cy="13.5" r="1" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 17V7h3.7a3.2 3.2 0 0 1 0 6.4H9M9 13.4h3.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function LocationStrip() {
  const { t } = useLanguage();
  const { links } = useSiteConfig();
  const details = [
    { type: "pin" as const, label: t.location.addressLabel, text: t.location.addressText },
    { type: "bus" as const, label: t.location.howToLabel, text: t.location.howToText },
    { type: "parking" as const, label: t.location.parkingLabel, text: t.location.parkingText },
  ];

  return (
    <section id="location" className="relative overflow-hidden border-b border-ivory/10 bg-ink">
      <div className="pointer-events-none absolute -right-28 top-0 font-display text-[18rem] leading-none text-ivory/[0.025]" aria-hidden="true">
        ≈
      </div>

      <div className="relative mx-auto max-w-[90rem] px-5 py-24 sm:px-8 md:py-28 lg:px-12 lg:py-32">
        <div className="mb-12 grid gap-8 md:grid-cols-12 md:items-end lg:mb-16">
          <div className="md:col-span-7">
            <p className="mb-5 flex items-center gap-3 font-label text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              <span className="h-px w-10 bg-gold" aria-hidden="true" />
              {t.location.eyebrow}
            </p>
            <h2 className="max-w-2xl text-balance font-display text-4xl font-medium leading-[1.02] tracking-[-0.025em] text-ivory sm:text-5xl md:text-6xl">
              {t.location.title}
            </h2>
          </div>

          <div className="md:col-span-5">
            <p className="font-display text-2xl leading-tight text-gold md:text-3xl">
              {t.location.advantageTitle}
            </p>
            <p className="mt-3 max-w-lg font-body text-sm leading-relaxed text-ivory/60">
              {t.location.advantageText}
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-10">
          <div className="relative min-h-[420px] overflow-hidden border border-ivory/15 bg-ink-2 lg:col-span-7 lg:min-h-[560px]">
            <iframe
              src={links.mapsEmbed}
              title="Time to Surf Stroomi - interactive map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
              style={{ border: 0 }}
            />
          </div>

          <div className="flex flex-col lg:col-span-5">
            <div className="border-t border-ivory/15">
              {details.map((detail) => (
                <div key={detail.label} className="grid grid-cols-[48px_1fr] gap-4 border-b border-ivory/15 py-7 md:py-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold">
                    <LocationIcon type={detail.type} />
                  </span>
                  <div>
                    <p className="font-label text-[10px] font-semibold uppercase tracking-[0.17em] text-gold">
                      {detail.label}
                    </p>
                    <p className="mt-2 font-body text-sm leading-relaxed text-ivory/70 md:text-base">
                      {detail.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={links.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 flex min-h-[56px] w-full items-center justify-between gap-5 bg-gold px-6 py-4 font-label text-[10px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:bg-ivory"
            >
              {t.location.openInMaps}
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/25 text-lg transition-transform group-hover:translate-x-1" aria-hidden="true">
                ↗
              </span>
            </a>

            <p className="mt-auto hidden pt-8 font-label text-[9px] uppercase tracking-[0.18em] text-ivory/30 lg:block">
              {t.location.coordinates}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
