"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="lang-toggle">
      <button
        onClick={() => setLang("vi")}
        className={lang === "vi" ? "active" : ""}
        aria-label="Tiếng Việt"
      >
        VI
      </button>
      <button
        onClick={() => setLang("en")}
        className={lang === "en" ? "active" : ""}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
