"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { about, ui } from "@/data/content";
import SectionHeader from "./SectionHeader";

export default function About() {
  const { lang } = useLanguage();

  return (
    <section
      id="about"
      className="section-anchor py-24 lg:py-32 relative"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <SectionHeader
          number="01"
          title={ui.sections.about[lang]}
          command="cat about.md"
        />

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Left: paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 space-y-5 text-text-secondary leading-relaxed text-[15px] sm:text-base"
          >
            {about[lang].map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </motion.div>

          {/* Right: side card with quick facts */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-4"
          >
            <div className="border border-border bg-bg-surface/40 backdrop-blur-sm p-5 font-mono text-[12.5px]">
              <div className="text-text-muted mb-3 text-[11px] uppercase tracking-wider">
                — info.json
              </div>
              <div className="space-y-2.5">
                <FactRow
                  k="role"
                  v={lang === "en" ? "Backend Dev" : "Backend Dev"}
                />
                <FactRow k="focus" v="Spring Boot · APIs" />
                <FactRow
                  k="university"
                  v="UIT — VNU-HCM"
                  vClass="text-accent"
                />
                <FactRow k="gpa" v="8.5 / 10" vClass="text-spring" />
                <FactRow
                  k="status"
                  v={lang === "en" ? "seeking internship" : "tìm internship"}
                  vClass="text-warning"
                />
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function FactRow({
  k,
  v,
  vClass,
}: {
  k: string;
  v: string;
  vClass?: string;
}) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="text-text-muted">{k}:</span>
      <span className={`text-text-primary ${vClass ?? ""}`}>{`"${v}"`}</span>
    </div>
  );
}
