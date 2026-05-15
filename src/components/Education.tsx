"use client";

import { useLanguage } from "@/context/LanguageContext";
import { education, awards, ui } from "@/data/content";
import SectionHeader from "./SectionHeader";

export default function Education() {
  const { lang } = useLanguage();
  const edu = education[0];

  return (
    <section className="section" id="education">
      <div className="container-x">
        <SectionHeader
          num="04 — "
          label={ui.sections.education[lang]}
          title={ui.sections.eduTitle[lang]}
          subtitle={ui.sections.eduSub[lang]}
        />

        <div className="edu-grid">
          <div className="edu-card card reveal">
            <h3 className="edu-school">{edu.school[lang]}</h3>
            <p className="edu-degree">
              {edu.degree[lang]} · {edu.location[lang]}
            </p>
            <div className="edu-stat-row">
              <div className="edu-stat">
                <div className="k">{ui.labels.years[lang]}</div>
                <div className="v">{edu.period}</div>
              </div>
              <div className="edu-stat">
                <div className="k">{ui.labels.gpa[lang]}</div>
                <div className="v accent">{edu.gpa}</div>
              </div>
              <div className="edu-stat">
                <div className="k">{ui.labels.major[lang]}</div>
                <div className="v">{edu.major[lang]}</div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <div
              className="highlights-label"
              style={{ marginBottom: 14 }}
            >
              {ui.labels.awards[lang]}
            </div>
            <div className="awards-list">
              {awards.map((a, i) => (
                <div key={i} className="award">
                  <div className="award-medal">{a.glyph}</div>
                  <div>
                    <div className="award-title">{a.title[lang]}</div>
                    <div className="award-meta">{a.period[lang]}</div>
                  </div>
                  <span className="award-issuer">{a.issuer}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
