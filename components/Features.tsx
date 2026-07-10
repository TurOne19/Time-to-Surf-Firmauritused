"use client";

import { useLanguage } from "@/lib/language-context";

export default function Features() {
  const { t } = useLanguage();

  return (
    <section id="program" className="bg-ink relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32">
        <div className="max-w-2xl mb-16 md:mb-20">
          <p className="font-label text-gold text-xs tracking-widest2 uppercase mb-4">
            {t.features.eyebrow}
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ivory leading-[1.12] text-balance mb-5">
            {t.features.title}
          </h2>
          <p className="font-body text-ivory/65 text-base md:text-lg leading-relaxed">
            {t.features.subtitle}
          </p>
        </div>

        <ol className="relative">
          <div className="absolute left-[27px] md:left-[35px] top-3 bottom-3 w-px bg-gradient-to-b from-gold/60 via-gold/20 to-transparent" />
          {t.features.items.map((item, i) => (
            <li key={i} className="relative flex gap-6 md:gap-10 pb-14 md:pb-16 last:pb-0">
              <div className="relative shrink-0 w-14 md:w-[70px] flex items-start justify-center pt-1">
                <span className="relative z-10 w-14 h-14 md:w-[70px] md:h-[70px] rounded-full border border-gold/40 bg-ink flex items-center justify-center font-display text-gold text-lg md:text-xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="pt-2 md:pt-4">
                <h3 className="font-display text-xl md:text-2xl text-ivory mb-2.5">
                  {item.title}
                </h3>
                <p className="font-body text-ivory/65 text-sm md:text-base leading-relaxed max-w-2xl">
                  {item.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
