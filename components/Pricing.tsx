"use client";

import { useLanguage } from "@/lib/language-context";
import StringLights from "./StringLights";

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="bg-ink relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-5">
            <p className="font-label text-gold text-xs tracking-widest2 uppercase mb-4">
              {t.pricing.eyebrow}
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ivory leading-[1.12] text-balance mb-5">
              {t.pricing.title}
            </h2>
            <p className="font-body text-ivory/60 leading-relaxed">
              {t.pricing.durationNote}
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="border border-gold/30 bg-ink-2/60 p-8 md:p-12">
              <p className="font-body text-ivory/70 text-sm md:text-base mb-6">
                {t.pricing.packageName}
              </p>

              <div className="flex items-baseline gap-3 mb-8">
                <span className="font-label text-ivory/50 text-sm uppercase tracking-wideish">
                  {t.pricing.priceNote}
                </span>
                <span className="font-display text-5xl md:text-6xl text-gold">€350</span>
              </div>

              <ul className="flex flex-col gap-3.5 mb-9">
                {t.pricing.includes.map((inc, i) => (
                  <li key={i} className="flex items-start gap-3 font-body text-ivory/80 text-sm md:text-base">
                    <span className="text-gold mt-0.5 shrink-0" aria-hidden="true">⟡</span>
                    {inc}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gold text-ink px-7 py-3.5 font-label text-xs tracking-wideish uppercase font-medium hover:bg-ivory transition-colors"
              >
                {t.pricing.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
      <StringLights variant="onInk" />
    </section>
  );
}
