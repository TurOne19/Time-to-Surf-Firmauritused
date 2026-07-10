"use client";

import { useLanguage } from "@/lib/language-context";

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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 pb-20 md:pb-28 pt-40">
        <p className="reveal font-label text-gold text-xs md:text-sm tracking-widest2 uppercase mb-5 flex items-center gap-3">
          <span aria-hidden="true">✦</span>
          {t.hero.eyebrow}
        </p>

        <h1
          className="reveal font-display text-ivory text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl"
          style={{ animationDelay: "0.1s" }}
        >
          {t.hero.title}
        </h1>

        <p
          className="reveal font-body text-ivory/85 text-base md:text-lg max-w-xl mt-6 leading-relaxed"
          style={{ animationDelay: "0.2s" }}
        >
          {t.hero.subtitle}
        </p>

        <div
          className="reveal flex flex-wrap items-center gap-4 md:gap-6 mt-9"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gold text-ink px-7 py-3.5 font-label text-xs tracking-wideish uppercase font-medium hover:bg-ivory transition-colors"
          >
            {t.hero.ctaPrimary}
          </a>
          <a
            href="#program"
            className="inline-flex items-center gap-2 border border-ivory/40 text-ivory px-7 py-3.5 font-label text-xs tracking-wideish uppercase hover:border-gold hover:text-gold transition-colors"
          >
            {t.hero.ctaSecondary}
          </a>
          <a
            href="tel:+37255512872"
            className="inline-flex items-center gap-2 text-ivory/80 font-label text-xs tracking-wideish uppercase"
          >
            <span className="text-gold" aria-hidden="true">⟡</span>
            {t.hero.phoneLabel} · +372 55 512 872
          </a>
        </div>
      </div>
    </section>
  );
}
