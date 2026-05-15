# Nguyễn Minh Phương — Portfolio

A personal portfolio site built with **Next.js 15** and **Tailwind CSS**, designed with a *terminal-native developer* aesthetic — monospace typography, hairline borders, subtle grid background, and Spring Boot-green / cyan accents.

**Live:** [your-portfolio.vercel.app](https://your-portfolio.vercel.app) *(update after deploy)*

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3 + custom CSS variables
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** IBM Plex Sans (body) + JetBrains Mono (display/code)
- **Deployment:** Vercel

---

## Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf              ← Your CV
├── src/
│   ├── app/
│   │   ├── globals.css         ← Theme tokens + utility styles
│   │   ├── layout.tsx          ← Root layout + fonts + metadata
│   │   └── page.tsx            ← Composes all sections
│   ├── components/
│   │   ├── BackgroundGrid.tsx
│   │   ├── Navbar.tsx
│   │   ├── LanguageToggle.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── context/
│   │   └── LanguageContext.tsx ← EN/VI toggle state
│   ├── data/
│   │   └── content.ts          ← ⭐ ALL content lives here
│   └── lib/
│       └── utils.ts
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
└── package.json
```

> **All site content is centralized in `src/data/content.ts`** — edit that one file to update your name, bio, projects, skills, etc. Everything else is generic UI scaffolding.

---

## Run Locally

You'll need **Node.js 18.18+** (Node 20 recommended).

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:3000
```

Other scripts:

```bash
npm run build    # Production build
npm run start    # Run production build locally
npm run lint     # ESLint check
```

---

## Deploy to Vercel (via GitHub)

### Step 1 — Push to GitHub

```bash
# In the portfolio/ folder:
git init
git add .
git commit -m "Initial portfolio"
git branch -M main

# Create a new empty repo on github.com first (no README, no .gitignore),
# then connect:
git remote add origin https://github.com/minhphuong150505/portfolio.git
git push -u origin main
```

### Step 2 — Connect Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub (free).
2. Click **Add New → Project**.
3. **Import** your `portfolio` repository.
4. Vercel auto-detects Next.js — just click **Deploy**. No env vars or config needed.
5. After ~60s you'll get a URL like `portfolio-abc123.vercel.app`.

### Step 3 — Custom domain (optional)

If you own a domain (e.g. `minhphuong.dev`):

1. Vercel project → **Settings → Domains → Add**.
2. Enter your domain. Vercel shows DNS records to set at your registrar.
3. Add a CNAME (or A record) pointing to Vercel. HTTPS is automatic.

### Step 4 — Auto-deploy

After connecting, **every `git push` to `main` triggers a new deployment automatically.** Pull requests get preview URLs. No CI/CD setup needed.

---

## Update Your Content

### Edit text, projects, skills

Open `src/data/content.ts`. Everything is structured and bilingual:

```ts
export const profile = {
  name: "...",
  role: { en: "...", vi: "..." },
  email: "...",
  // ...
};

export const projects = [
  {
    name: "Camera Shop Backend",
    description: { en: "...", vi: "..." },
    highlights: { en: [...], vi: [...] },
    tech: [...],
    github: "...",
  },
  // add more projects here
];
```

### Replace the CV

Drop a new file at `public/resume.pdf` (keep the same filename).

### Add a project image

1. Save image to `public/projects/your-project.jpg`.
2. Add an `image: "/projects/your-project.jpg"` field to the project in `content.ts`.
3. Render it in `src/components/Projects.tsx` (currently no image element — easy to add).

### Change colors / theme

Edit `tailwind.config.ts` color palette, or override CSS variables in `src/app/globals.css` (`:root` block).

---

## Customization Quick Reference

| What you want to change       | Where                                        |
| ----------------------------- | -------------------------------------------- |
| Name, bio, contact            | `src/data/content.ts` → `profile`, `about`   |
| Tagline (hero subtitle)       | `src/data/content.ts` → `tagline`            |
| Add/edit a project            | `src/data/content.ts` → `projects` array     |
| Add/edit skills               | `src/data/content.ts` → `skills` array       |
| Awards, education             | `src/data/content.ts` → `awards`, `education`|
| Page title, SEO meta          | `src/app/layout.tsx` → `metadata`            |
| Theme colors                  | `tailwind.config.ts` + `src/app/globals.css` |
| Fonts                         | `src/app/layout.tsx` (Google Fonts import)   |
| Hide/reorder sections         | `src/app/page.tsx`                           |

---

## Notes

- **No Resume API needed** — the CV is served as a static file from `public/resume.pdf`.
- **No contact form backend** — contact section uses direct `mailto:` and social links.
- **Language preference is saved** in localStorage per browser.

---

## Credits

Built by **Nguyễn Minh Phương** · UIT — VNU-HCM
