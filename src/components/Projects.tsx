"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { projects, ui } from "@/data/content";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  const { lang } = useLanguage();

  return (
    <section
      id="projects"
      className="section-anchor py-24 lg:py-32 relative"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <SectionHeader
          number="03"
          title={ui.sections.projects[lang]}
          command="git log --oneline ./projects"
        />

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative border border-border bg-bg-surface/40 backdrop-blur-sm card-hover"
            >
              {/* Top bar - API endpoint style */}
              <div className="flex items-center gap-3 px-5 py-3 border-b border-border bg-bg-elevated/40">
                <span
                  className={`http-badge ${
                    project.method === "GET" ? "http-get" : "http-post"
                  }`}
                >
                  {project.method}
                </span>
                <code className="font-mono text-[12.5px] text-text-secondary">
                  {project.endpoint}
                </code>
                <span className="flex-1" />
                <span className="font-mono text-[11px] text-text-muted">
                  {project.period}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 lg:p-7">
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mb-1.5">
                  {project.name}
                </h3>
                <p className="text-text-tertiary text-sm mb-4">
                  {project.subtitle[lang]}
                </p>

                {/* Description */}
                <p className="text-text-secondary leading-relaxed text-[14.5px] mb-6 max-w-3xl">
                  {project.description[lang]}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-text-muted mb-3">
                    — {ui.labels.highlights[lang]}
                  </div>
                  <ul className="space-y-2">
                    {project.highlights[lang].map((h, i) => (
                      <li
                        key={i}
                        className="flex gap-2.5 text-[14px] text-text-secondary leading-relaxed"
                      >
                        <ChevronRight
                          size={14}
                          className="text-accent shrink-0 mt-[5px]"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack */}
                <div className="mb-6">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-text-muted mb-3">
                    — {ui.labels.techStack[lang]}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action links */}
                <div className="flex flex-wrap gap-4 pt-2 border-t border-border">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-[12.5px] text-text-secondary hover:text-accent transition-colors pt-4"
                  >
                    <Github size={14} />
                    {ui.labels.viewCode[lang]}
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-[12.5px] text-text-secondary hover:text-accent transition-colors pt-4"
                    >
                      <ExternalLink size={14} />
                      {ui.labels.liveDemo[lang]}
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
