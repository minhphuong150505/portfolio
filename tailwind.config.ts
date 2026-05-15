import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#09090b",
          surface: "#0f0f12",
          elevated: "#16161a",
        },
        border: {
          DEFAULT: "#1f1f24",
          hover: "#2a2a32",
          accent: "rgba(34, 211, 238, 0.3)",
        },
        text: {
          primary: "#e4e4e7",
          secondary: "#a1a1aa",
          tertiary: "#71717a",
          muted: "#52525b",
        },
        accent: {
          DEFAULT: "#22d3ee",
          glow: "rgba(34, 211, 238, 0.15)",
          dim: "#0891b2",
        },
        spring: "#6db33f",
        warning: "#f59e0b",
        success: "#10b981",
      },
      fontFamily: {
        sans: ["var(--font-plex)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      animation: {
        "blink": "blink 1.2s step-end infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "glow": "glow 3s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.6" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse at top, rgba(34, 211, 238, 0.08), transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
