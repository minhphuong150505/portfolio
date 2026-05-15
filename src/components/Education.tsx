"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { education, awards, ui } from "@/data/content";
import SectionHeader from "./SectionHeader";

export default function Education() {
  const { lang } = useLanguage();

  return (
    <section
      id="education"
      className="section-anchor py-24 lg:py-32 relative"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <SectionHeader
          number="04"
          title={ui.sections.education[lang]}
          command="cat education.yml"
        />

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Education */}
          <div className="lg:col-span-7 space-y-4">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border border-border bg-bg-surface/40 backdrop-blur-sm p-5 sm:p-6 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 border border-accent/30 bg-accent/5 shrink-0">
                    <GraduationCap size={18} className="text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-3 flex-wrap mb-1">
                      <h3 className="text-base sm:text-lg font-semibold text-text-primary">
                        {edu.school[lang]}
                      </h3>
                      <span className="font-mono text-[11.5px] text-text-tertiary shrink-0">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-text-secondary text-sm mb-2.5">
                      {edu.degree[lang]}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 font-mono text-[12px] text-text-tertiary">
                      <span>📍 {edu.location[lang]}</span>
                      <span className="text-text-muted">·</span>
                      <span>
                        GPA: <span className="text-spring">{edu.gpa}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Awards */}
          <div className="lg:col-span-5">
            <div className="border border-border bg-bg-surface/40 backdrop-blur-sm p-5 sm:p-6 h-full">
              <div className="flex items-center gap-2 mb-5">
                <Award size={16} className="text-warning" />
                <h3 className="font-mono text-[12.5px] uppercase tracking-wider text-text-primary">
                  {ui.labels.awards[lang]}
                </h3>
              </div>
              <ul className="space-y-4">
                {awards.map((award, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="relative pl-5 border-l-2 border-warning/30"
                  >
                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-warning rounded-full" />
                    <p className="text-[14px] text-text-primary font-medium leading-snug mb-0.5">
                      {award.title[lang]}
                    </p>
                    <p className="font-mono text-[11.5px] text-text-tertiary">
                      {award.issuer} · {award.period[lang]}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
