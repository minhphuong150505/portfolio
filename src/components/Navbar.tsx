"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ui, profile } from "@/data/content";
import LanguageToggle from "./LanguageToggle";

const navItems = [
  { id: "about", key: "about" as const },
  { id: "skills", key: "skills" as const },
  { id: "projects", key: "projects" as const },
  { id: "education", key: "education" as const },
  { id: "contact", key: "contact" as const },
];

export default function Navbar() {
  const { lang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <a className="nav-brand" href="#top">
        <span className="nav-brand-mark">
          <span>{profile.seal}</span>
        </span>
        <span>
          minh phương<span style={{ opacity: 0.5 }}>.dev</span>
        </span>
      </a>

      <div className="nav-links">
        {navItems.map((item) => (
          <a key={item.id} className="nav-link" href={`#${item.id}`}>
            {ui.nav[item.key][lang]}
          </a>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <LanguageToggle />
        <a
          className="nav-cta"
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <Download size={13} />
          {ui.labels.downloadCv[lang]}
        </a>
      </div>
    </nav>
  );
}
