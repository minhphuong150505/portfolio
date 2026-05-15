"use client";

import { formatEmphasis } from "@/lib/utils";

interface SectionHeaderProps {
  num: string;
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({
  num,
  label,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <>
      <div className="section-label reveal">
        <span>
          <span className="section-num">{num}</span>
          {label}
        </span>
      </div>
      <h2 className="section-title reveal">{formatEmphasis(title)}</h2>
      {subtitle && <p className="section-subtitle reveal">{subtitle}</p>}
    </>
  );
}
