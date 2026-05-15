"use client";

import { Download, Mail, Github } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { profile, tagline, ui } from "@/data/content";

export default function Hero() {
  const { lang } = useLanguage();

  return (
    <section className="hero" id="top">
      <div className="container-x">
        <div className="hero-grid">
          <div>
            <span className="hero-eyebrow reveal">
              <span className="dot" />
              {ui.labels.available[lang]}
            </span>

            <h1 className="hero-name reveal">
              <span className="first">{profile.firstName}</span>
              <span className="last">{profile.lastName}</span>
            </h1>

            <div className="hero-role reveal">
              <span className="hero-role-chip">
                <span className="gold">›</span>{" "}
                <strong>{profile.role[lang]}</strong>
              </span>
              <span className="hero-stack-line">
                Java<span className="sep">·</span>Spring Boot
                <span className="sep">·</span>REST APIs
              </span>
            </div>

            <p className="hero-tagline reveal">{tagline[lang]}</p>

            <div className="hero-meta reveal">
              <span>
                <span className="key">loc:</span> {profile.location[lang]}
              </span>
              <span>
                <span className="key">edu:</span> UIT — VNU-HCM
              </span>
              <span>
                <span className="key">status:</span>{" "}
                <span className="jade">{ui.labels.openToWork[lang]}</span>
              </span>
            </div>

            <div className="hero-ctas reveal">
              <a
                className="btn btn-primary"
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <Download size={14} /> {ui.labels.downloadCv[lang]}
              </a>
              <a className="btn btn-ghost" href="#contact">
                <Mail size={14} /> {ui.labels.sayHello[lang]}
              </a>
              <a
                className="btn btn-ghost"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={14} /> GitHub
              </a>
            </div>
          </div>

          <div className="seal-wrap reveal">
            <Seal />
          </div>
        </div>
      </div>
    </section>
  );
}

function Seal() {
  return (
    <div className="seal">
      <div className="seal-ring r1" />
      <div className="seal-ring r2" />
      <div className="seal-ring r3" />

      <svg className="seal-text-ring" viewBox="0 0 200 200" aria-hidden="true">
        <defs>
          <path
            id="seal-circ"
            d="M 100, 100 m -82, 0 a 82,82 0 1,1 164,0 a 82,82 0 1,1 -164,0"
          />
        </defs>
        <text>
          <textPath href="#seal-circ" startOffset="0%">
            BACKEND · ENGINEER · JAVA · SPRING · REST · DOCKER · POSTGRES ·{" "}
          </textPath>
        </text>
      </svg>

      <div className="orbit-tag tag-tl">
        <span>{"{ }"}</span> JSON
      </div>
      <div className="orbit-tag tag-tr">
        JWT <span className="dot" />
      </div>
      <div className="orbit-tag tag-bl">
        SQL <span className="dot" />
      </div>
      <div className="orbit-tag tag-br">
        <span>›_</span> API
      </div>

      <div className="seal-core">
        <div className="seal-status">
          <span className="led" /> LIVE
        </div>
        <div className="seal-mono">
          <span className="sheen">{profile.initials}</span>
        </div>
        <div className="seal-bars" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>

      <Console />
    </div>
  );
}

function Console() {
  return (
    <div className="console-card">
      <div className="console-bar">
        <span className="console-dot r" />
        <span className="console-dot y" />
        <span className="console-dot g" />
        <span className="console-title">~/minhphuong — bash</span>
      </div>
      <div className="console-line">
        <span className="prompt">$</span> whoami
      </div>
      <div className="console-line">
        <span className="out">→ backend.engineer@uit</span>
      </div>
      <div className="console-line">
        <span className="prompt">$</span> curl /api/status
      </div>
      <div className="console-line">
        <span className="out">→ {"{ "}</span>
        <span className="ok">&quot;available&quot;</span>
        <span className="out">: </span>
        <span className="ok">true</span>
        <span className="out">{" }"}</span>
      </div>
    </div>
  );
}
