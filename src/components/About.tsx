"use client";

import { useLanguage } from "@/context/LanguageContext";
import { about, profile, ui } from "@/data/content";
import SectionHeader from "./SectionHeader";

export default function About() {
  const { lang } = useLanguage();
  const paras = about[lang];

  return (
    <section className="section" id="about">
      <div className="container-x">
        <SectionHeader
          num="01 — "
          label={ui.sections.about[lang]}
          title={ui.sections.aboutTitle[lang]}
          subtitle={ui.sections.aboutSub[lang]}
        />

        <div className="about-grid">
          <aside className="about-aside reveal">
            <span className="label">{ui.sections.aboutAsideLabel[lang]}</span>
            <h3>{ui.sections.aboutAsideTitle[lang]}</h3>
            <ul className="about-meta-list">
              <li>
                <span className="k">{ui.labels.role[lang]}</span>
                <span className="v">{profile.role[lang]}</span>
              </li>
              <li>
                <span className="k">{ui.labels.basedIn[lang]}</span>
                <span className="v">{profile.location[lang]}</span>
              </li>
              <li>
                <span className="k">{ui.labels.school[lang]}</span>
                <span className="v">UIT — VNU-HCM</span>
              </li>
              <li>
                <span className="k">GPA</span>
                <span className="v">
                  <span className="accent">8.5</span> / 10
                </span>
              </li>
              <li>
                <span className="k">{ui.labels.statusKey[lang]}</span>
                <span className="v">
                  <span className="accent">{ui.labels.statusValue[lang]}</span>
                </span>
              </li>
            </ul>
          </aside>

          <div className="about-body">
            {paras.map((p, i) => (
              <p key={i} className="reveal">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
