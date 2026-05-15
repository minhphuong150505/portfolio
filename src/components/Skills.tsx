"use client";

import { useLanguage } from "@/context/LanguageContext";
import { skills, ui } from "@/data/content";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  const { lang } = useLanguage();

  return (
    <section className="section" id="skills">
      <div className="container-x">
        <SectionHeader
          num="02 — "
          label={ui.sections.skills[lang]}
          title={ui.sections.skillsTitle[lang]}
          subtitle={ui.sections.skillsSub[lang]}
        />

        <div className="skills-grid">
          {skills.map((s, i) => (
            <div key={i} className="skill-card reveal">
              <div className="skill-card-header">
                <h4 className="skill-card-title">{s.category[lang]}</h4>
                <span className="skill-card-idx">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="chip-row">
                {s.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
