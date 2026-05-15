"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { profile, tagline, ui } from "@/data/content";

export default function Hero() {
  const { lang } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-12"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10 w-full">
        {/* Terminal-style prompt */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-mono text-[13px] text-text-tertiary mb-6 flex items-center gap-2"
        >
          <span className="text-spring">$</span>
          <span>whoami</span>
          <span className="terminal-cursor" />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold tracking-tight leading-[1.05] mb-3"
        >
          <span className="block text-text-primary">{profile.name}.</span>
        </motion.h1>

        {/* Role + stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-[clamp(1.25rem,3vw,2rem)] text-text-secondary font-light tracking-tight mb-8 flex flex-wrap items-baseline gap-x-3"
        >
          <span>{profile.role[lang]}</span>
          <span className="text-text-muted">·</span>
          <span className="font-mono text-accent text-[clamp(0.9rem,1.8vw,1.15rem)]">
            {profile.stack}
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="text-text-secondary text-base sm:text-lg max-w-2xl leading-relaxed mb-10"
        >
          {tagline[lang]}
        </motion.p>

        {/* Meta info row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[12.5px] text-text-tertiary mb-12"
        >
          <span className="flex items-center gap-1.5">
            <MapPin size={13} className="text-accent" />
            {profile.location[lang]}
          </span>

          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-spring opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-spring" />
            </span>
            <span className="text-text-secondary">
              {ui.labels.availableFor[lang]}
            </span>
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-bg font-mono text-[13px] font-medium hover:bg-accent/90 transition-colors"
          >
            <span>{ui.nav.projects[lang]}.view()</span>
            <ArrowDown
              size={14}
              className="group-hover:translate-y-0.5 transition-transform"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-border hover:border-accent/40 text-text-secondary hover:text-accent font-mono text-[13px] transition-colors"
          >
            <span>{ui.labels.sayHello[lang]}()</span>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-text-muted"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase">
            scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-text-muted to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
