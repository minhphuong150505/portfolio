"use client";

import { useLanguage } from "@/context/LanguageContext";
import { profile, ui } from "@/data/content";

export default function Footer() {
  const { lang } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container-x">
        <div className="footer-row">
          <div className="footer-mark">
            <span className="glyph">{profile.seal}</span>
            <span>
              © {year} {profile.name}
            </span>
          </div>
          <span>{ui.labels.builtWith[lang]}</span>
        </div>
      </div>
    </footer>
  );
}
