"use client";

import { useLanguage } from "@/context/LanguageContext";
import { profile, ui } from "@/data/content";

export default function Footer() {
  const { lang } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-12 py-8">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-[11.5px] text-text-tertiary">
        <div className="flex items-center gap-2">
          <span className="text-accent">©</span>
          <span>
            {year} {profile.name}.{" "}
            {lang === "en" ? "All rights reserved." : "Bảo lưu mọi quyền."}
          </span>
        </div>
        <div>{ui.labels.builtWith[lang]}</div>
      </div>
    </footer>
  );
}
