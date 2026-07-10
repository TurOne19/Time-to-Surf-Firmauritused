"use client";

import { useLanguage } from "@/lib/language-context";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink border-t border-gold/15">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-display text-lg text-ivory mb-1.5">
            Time <span className="text-gold">to</span> Surf
          </p>
          <p className="font-body text-ivory/50 text-sm">{t.footer.tagline}</p>
        </div>

        <div className="font-body text-ivory/50 text-sm flex flex-col md:items-end gap-1">
          <span>{t.footer.address}</span>
          <a href="tel:+37255512872" className="hover:text-gold transition-colors">
            +372 55 512 872
          </a>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 font-label text-[11px] tracking-wideish uppercase text-ivory/35">
          © {year} Time to Surf — {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
