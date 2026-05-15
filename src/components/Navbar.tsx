"use client";

import { useEffect, useState } from "react";
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
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Find current section in view
      const sections = navItems.map((item) =>
        document.getElementById(item.id)
      );
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="font-mono text-sm flex items-center gap-2 group"
        >
          <span className="text-accent">~/</span>
          <span className="text-text-primary group-hover:text-accent transition-colors">
            {profile.githubHandle}
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1 font-mono text-[12.5px]">
          {navItems.map((item, idx) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`px-3 py-1.5 transition-colors ${
                  activeSection === item.id
                    ? "text-accent"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                <span className="text-text-muted mr-1">
                  0{idx + 1}.
                </span>
                {ui.nav[item.key][lang]}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: language + resume */}
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex font-mono text-[11.5px] px-3 py-1.5 border border-accent/30 text-accent hover:bg-accent/10 transition-colors"
          >
            {ui.labels.downloadCv[lang]}
            <span className="ml-1.5">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
