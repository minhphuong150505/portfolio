"use client";

import { Mail, Github, Linkedin, Facebook, Phone, ArrowRight } from "lucide-react";
import { ReactNode } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { profile, ui } from "@/data/content";
import SectionHeader from "./SectionHeader";

interface Channel {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
}

export default function Contact() {
  const { lang } = useLanguage();

  const channels: Channel[] = [
    {
      icon: <Mail size={14} />,
      label: lang === "vi" ? "Email" : "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: <Phone size={14} />,
      label: lang === "vi" ? "Điện thoại" : "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
    },
    {
      icon: <Github size={14} />,
      label: "GitHub",
      value: "@" + profile.githubHandle,
      href: profile.github,
    },
    {
      icon: <Linkedin size={14} />,
      label: "LinkedIn",
      value: "/in/" + profile.linkedinHandle,
      href: profile.linkedin,
    },
    {
      icon: <Facebook size={14} />,
      label: "Facebook",
      value: "@" + profile.facebookHandle,
      href: profile.facebook,
    },
  ];

  return (
    <section className="section" id="contact">
      <div className="container-x">
        <SectionHeader
          num="05 — "
          label={ui.sections.contact[lang]}
          title={ui.sections.contactTitle[lang]}
        />

        <div className="contact-wrap">
          <div>
            <p className="contact-intro reveal">
              {ui.sections.contactIntro[lang]}
            </p>
            <div className="contact-channels">
              {channels.map((ch, i) => (
                <a
                  key={i}
                  href={ch.href}
                  target={ch.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    ch.href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="channel reveal"
                >
                  <span className="channel-icon">{ch.icon}</span>
                  <span className="channel-label">{ch.label}</span>
                  <span className="channel-value">{ch.value}</span>
                  <ArrowRight size={14} className="channel-arrow" />
                </a>
              ))}
            </div>
          </div>

          <div className="contact-card reveal">
            <span className="stamp">◇ {ui.sections.stampLabel[lang]} ◇</span>
            <h4>{ui.sections.contactCardTitle[lang]}</h4>
            <p>{ui.sections.contactCardBody[lang]}</p>
            <a
              className="btn btn-primary"
              href={`mailto:${profile.email}`}
              style={{ marginBottom: 18 }}
            >
              <Mail size={14} /> {ui.labels.sayHello[lang]}
            </a>
            <div className="resp-time">
              <span className="dot" />
              {ui.sections.respTime[lang]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
