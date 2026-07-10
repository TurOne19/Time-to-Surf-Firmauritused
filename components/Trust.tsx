"use client";

import { useLanguage } from "@/lib/language-context";

export default function Trust() {
  const { t } = useLanguage();

  return (
    <section id="why" className="bg-sand">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32">
        <div className="max-w-2xl mb-16">
          <p className="font-label text-ink/60 text-xs tracking-widest2 uppercase mb-4">
            {t.trust.eyebrow}
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.12] text-balance">
            {t.trust.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10">
          {t.trust.items.map((item, i) => (
            <div key={i} className="bg-sand p-8 md:p-9 flex flex-col gap-4">
              <span className="text-gold-2 text-2xl" aria-hidden="true">
                {i % 2 === 0 ? "❖" : "⟡"}
              </span>
              <h3 className="font-display text-lg md:text-xl text-ink leading-snug">
                {item.title}
              </h3>
              <p className="font-body text-ink/65 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
