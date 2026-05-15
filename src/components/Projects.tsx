"use client";

import { Github, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { projects, ui } from "@/data/content";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  const { lang } = useLanguage();

  return (
    <section className="section" id="projects">
      <div className="container-x">
        <SectionHeader
          num="03 — "
          label={ui.sections.projects[lang]}
          title={ui.sections.projectsTitle[lang]}
          subtitle={ui.sections.projectsSub[lang]}
        />

        <div className="projects-list">
          {projects.map((p) => (
            <article key={p.name} className="project reveal">
              <div className="project-meta">
                <div className="endpoint-row">
                  <span className="method">{p.method}</span>
                  <code className="endpoint-path">
                    {p.endpoint
                      .split("/")
                      .filter(Boolean)
                      .map((seg, j) => (
                        <span key={j}>
                          <span className="muted">/</span>
                          <span className="seg">{seg}</span>
                        </span>
                      ))}
                  </code>
                </div>

                <h3>{p.name}</h3>
                <p className="project-subtitle">{p.subtitle[lang]}</p>
                <span className="project-period">
                  {lang === "vi" ? "Năm · " : "Year · "}
                  {p.period}
                </span>

                <div className="project-links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer">
                      <Github size={13} /> {ui.labels.viewCode[lang]}
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={13} /> {ui.labels.liveDemo[lang]}
                    </a>
                  )}
                </div>
              </div>

              <div className="project-body">
                <p className="desc">{p.description[lang]}</p>

                <div className="highlights-label">
                  {ui.labels.highlights[lang]}
                </div>
                <ul className="highlights">
                  {p.highlights[lang].map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>

                <div
                  className="highlights-label"
                  style={{ marginTop: 18 }}
                >
                  {ui.labels.techStack[lang]}
                </div>
                <div className="chip-row">
                  {p.tech.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
