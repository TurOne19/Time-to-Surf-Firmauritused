"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Locale, Dictionary, dictionaries, defaultLocale } from "./content";

const LOCALE_STORAGE_KEY = "time-to-surf-locale";
const SCROLL_STORAGE_KEY = "time-to-surf-scroll";

function isLocale(value: string | null): value is Locale {
  return value !== null && Object.prototype.hasOwnProperty.call(dictionaries, value);
}

interface LanguageContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const [preferencesLoaded, setPreferencesLoaded] = useState(false);
  const initialScrollY = useRef<number | null>(null);

  useEffect(() => {
    const savedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    const savedScroll = window.sessionStorage.getItem(SCROLL_STORAGE_KEY);

    if (isLocale(savedLocale)) setLocale(savedLocale);

    if (!window.location.hash && savedScroll !== null) {
      const scrollY = Number(savedScroll);
      if (Number.isFinite(scrollY) && scrollY >= 0) initialScrollY.current = scrollY;
    }

    setPreferencesLoaded(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.setAttribute("data-locale", locale);
  }, [locale]);

  useEffect(() => {
    if (!preferencesLoaded || initialScrollY.current === null) return;

    const scrollY = initialScrollY.current;
    initialScrollY.current = null;
    window.history.scrollRestoration = "manual";

    const restoreScroll = () => window.scrollTo({ top: scrollY, left: 0 });
    const frame = window.requestAnimationFrame(() => {
      restoreScroll();
      window.requestAnimationFrame(restoreScroll);
    });

    document.fonts?.ready.then(restoreScroll);
    window.addEventListener("load", restoreScroll, { once: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("load", restoreScroll);
    };
  }, [preferencesLoaded, locale]);

  useEffect(() => {
    if (!preferencesLoaded) return;

    let frame: number | null = null;
    const saveScroll = () => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(() => {
        window.sessionStorage.setItem(SCROLL_STORAGE_KEY, String(window.scrollY));
        frame = null;
      });
    };

    const saveImmediately = () => {
      window.sessionStorage.setItem(SCROLL_STORAGE_KEY, String(window.scrollY));
    };

    window.addEventListener("scroll", saveScroll, { passive: true });
    window.addEventListener("pagehide", saveImmediately);

    return () => {
      window.removeEventListener("scroll", saveScroll);
      window.removeEventListener("pagehide", saveImmediately);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, [preferencesLoaded]);

  const changeLocale = useCallback((nextLocale: Locale) => {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);
    setLocale(nextLocale);
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale: changeLocale,
      t: dictionaries[locale],
    }),
    [changeLocale, locale]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
