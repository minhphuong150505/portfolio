"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeaderProps {
  number: string;
  title: string;
  command?: string;
  children?: ReactNode;
}

export default function SectionHeader({
  number,
  title,
  command,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-12 lg:mb-16"
    >
      {command && (
        <div className="font-mono text-[12px] text-text-tertiary mb-3 flex items-center gap-2">
          <span className="text-spring">$</span>
          <span>{command}</span>
        </div>
      )}
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-accent text-base">{number}.</span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-text-primary">
          {title}
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent ml-2" />
      </div>
    </motion.div>
  );
}
