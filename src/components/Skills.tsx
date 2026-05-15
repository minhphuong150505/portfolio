"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { skills, ui } from "@/data/content";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  const { lang } = useLanguage();

  return (
    <section
      id="skills"
      className="section-anchor py-24 lg:py-32 relative"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <SectionHeader
          number="02"
          title={ui.sections.skills[lang]}
          command="ls -la ./skills"
        />

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-8">
          {skills.map((group, idx) => (
            <motion.div
              key={group.category.en}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-[11px] text-spring">
                  ▸
                </span>
                <h3 className="font-mono text-[13px] text-text-primary tracking-wide uppercase">
                  {group.category[lang]}
                </h3>
                <div className="flex-1 h-px bg-border ml-2" />
                <span className="font-mono text-[11px] text-text-muted">
                  {String(group.items.length).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
