"use client";

import { useLanguage } from "@/lib/language-context";

export default function FinalCta() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="relative bg-ink overflow-hidden"
    >
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
            href="tel:+37255512872"
            className="inline-flex items-center gap-2 bg-gold text-ink px-8 py-4 font-label text-xs tracking-wideish uppercase font-medium hover:bg-ivory transition-colors"
          >
            {t.finalCta.cta} · {t.finalCta.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
