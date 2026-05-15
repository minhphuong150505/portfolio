"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center font-mono text-[11px] border border-border bg-bg-surface/60 backdrop-blur-sm">
      <button
        onClick={() => setLang("en")}
        className={`px-2.5 py-1 transition-colors ${
          lang === "en"
            ? "bg-accent/15 text-accent"
            : "text-text-tertiary hover:text-text-secondary"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-text-muted">/</span>
      <button
        onClick={() => setLang("vi")}
        className={`px-2.5 py-1 transition-colors ${
          lang === "vi"
            ? "bg-accent/15 text-accent"
            : "text-text-tertiary hover:text-text-secondary"
        }`}
        aria-label="Switch to Vietnamese"
      >
        VI
      </button>
    </div>
  );
}
