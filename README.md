# INNOCORELIX

INNOCORELIX is a **biotech marketing / informational website** presenting a molecular-intelligence platform for pathogen defense. The site explains the company narrative, technology pillars, research focus, pipeline status, and provides contact and recruiting entry points.

Built with **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**, with motion/interaction via **Framer Motion**.

## What’s on the website

### Primary pages (routes)
- `/` — Home (hero + problem framing + discovery engine + CTA)
- `/technology` — Technology pillars (BRET biosensors, ATG4/ATG8 targeting, HTS, binding analysis, AI prioritization, suppression systems)
- `/research` — Research program overview + featured publication highlight
- `/platform` — “Discovery OS” platform overview + dashboard-style modules
- `/pipeline` — Therapeutic pipeline view + active programs
- `/science` — Interactive mechanism explainer (autophagy / ATG4 / BRET / docking)
- `/publications` — Searchable/filterable publication list (links out to DOI pages)
- `/team` — Team / founders
- `/investors` — Investment thesis + key metrics
- `/careers` — Open roles (static list)
- `/contact` — Contact form + company contact info (demo form shows an alert on submit)

### UI/UX notes
- Consistent `Navbar` + `Footer` across pages (`app/layout.tsx`).
- Scroll-based reveals via `components/animations/ScrollReveal.tsx`.
- “Glass” / dark biotech theme implemented in `app/globals.css` + Tailwind utilities.

## Getting started

### Prerequisites
- Node.js 18+ (recommended) and npm

### Install
```bash
npm install
```

### Run locally
This project runs Next.js on port **5000**:
```bash
npm run dev
```

Open http://localhost:5000

## Scripts
- `npm run dev` — start the dev server on port 5000
- `npm run build` — production build
- `npm run start` — run the production server
- `npm run lint` — run Next.js lint

## Project structure
- `app/` — routes and pages (Next.js App Router)
- `components/` — layout, sections, and animations
- `lib/` — helpers/utilities
- `public/` — static assets (including `logo.png`)
- `Logo/` — source logo assets (design exports)

## Deployment (Vercel)
- Import the repo in Vercel
- Build command: `npm run build`
- Output: Next.js default
- Start command (non-Vercel hosting): `npm run start`

## License
Private repository — no license granted unless explicitly added.
