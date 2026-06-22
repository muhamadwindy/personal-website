"use client";
import { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react";

const LanguageContext = createContext({ lang: "en", toggleLang: () => {} });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "id" || saved === "en") setLang(saved);
  }, []);

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === "en" ? "id" : "en";
      localStorage.setItem("lang", next);
      return next;
    });
  }, []);

  const value = useMemo(() => ({ lang, toggleLang }), [lang, toggleLang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
