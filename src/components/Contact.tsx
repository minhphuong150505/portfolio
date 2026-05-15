"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Facebook, Phone, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { profile, ui } from "@/data/content";
import SectionHeader from "./SectionHeader";

const contactLinks = [
  {
    label: "email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: Mail,
  },
  {
    label: "github",
    value: profile.githubHandle,
    href: profile.github,
    Icon: Github,
  },
  {
    label: "linkedin",
    value: profile.linkedinHandle,
    href: profile.linkedin,
    Icon: Linkedin,
  },
  {
    label: "facebook",
    value: profile.facebookHandle,
    href: profile.facebook,
    Icon: Facebook,
  },
  {
    label: "phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    Icon: Phone,
  },
];

export default function Contact() {
  const { lang } = useLanguage();

  return (
    <section
      id="contact"
      className="section-anchor py-24 lg:py-32 relative"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <SectionHeader
          number="05"
          title={ui.sections.contact[lang]}
          command="curl -X POST /api/contact"
        />

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight mb-4 leading-tight">
              {lang === "en"
                ? "Let's build something."
                : "Cùng nhau xây dựng."}
            </h3>
            <p className="text-text-secondary leading-relaxed text-[15px] mb-6">
              {lang === "en"
                ? "I'm currently looking for backend developer internship opportunities. Whether you have a role in mind, a project to collaborate on, or just want to say hi — my inbox is always open."
                : "Mình đang tìm cơ hội thực tập Backend Developer. Dù bạn có vị trí phù hợp, dự án muốn hợp tác, hay đơn giản muốn nói lời chào — inbox của mình luôn rộng mở."}
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-bg font-mono text-[13px] font-medium hover:bg-accent/90 transition-colors group"
            >
              <Mail size={14} />
              <span>{ui.labels.sayHello[lang]}()</span>
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </motion.div>

          {/* Right: contact links table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="border border-border bg-bg-surface/40 backdrop-blur-sm">
              <div className="px-5 py-3 border-b border-border bg-bg-elevated/40 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-text-muted/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-text-muted/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-text-muted/40" />
                </div>
                <span className="font-mono text-[11.5px] text-text-tertiary ml-2">
                  contact.json
                </span>
              </div>
              <ul className="divide-y divide-border">
                {contactLinks.map((link) => {
                  const Icon = link.Icon;
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-4 px-5 py-3.5 hover:bg-accent/5 transition-colors group"
                      >
                        <Icon
                          size={16}
                          className="text-text-tertiary group-hover:text-accent transition-colors shrink-0"
                        />
                        <span className="font-mono text-[12.5px] text-text-muted w-20 shrink-0">
                          {link.label}:
                        </span>
                        <span className="font-mono text-[13px] text-text-primary group-hover:text-accent transition-colors truncate">
                          {link.value}
                        </span>
                        <ArrowUpRight
                          size={13}
                          className="ml-auto text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
