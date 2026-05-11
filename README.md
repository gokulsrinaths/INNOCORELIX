# INNOCORELIX

INNOCORELIX is a **biotech marketing / informational website** presenting a molecular-intelligence platform for pathogen defense. The site explains the company narrative, technology pillars, research focus, pipeline status, and provides contact and recruiting entry points.

Built with **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**, with motion/interaction via **Framer Motion**.

## Whatâ€™s on the website

### Primary pages (routes)
- `/` â€” Home (hero + problem framing + discovery engine + CTA)
- `/technology` â€” Technology pillars (BRET biosensors, ATG4/ATG8 targeting, HTS, binding analysis, AI prioritization, suppression systems)
- `/research` â€” Research program overview + featured publication highlight
- `/platform` â€” â€œDiscovery OSâ€ platform overview + dashboard-style modules
- `/pipeline` â€” Therapeutic pipeline view + active programs
- `/science` â€” Interactive mechanism explainer (autophagy / ATG4 / BRET / docking)
- `/publications` â€” Searchable/filterable publication list (links out to DOI pages)
- `/team` â€” Team / founders
- `/investors` â€” Investment thesis + key metrics
- `/careers` â€” Open roles (static list)
- `/contact` â€” Contact form + company contact info (demo form shows an alert on submit)

### UI/UX notes
- Consistent `Navbar` + `Footer` across pages (`app/layout.tsx`).
- Scroll-based reveals via `components/animations/ScrollReveal.tsx`.
- â€œGlassâ€ / dark biotech theme implemented in `app/globals.css` + Tailwind utilities.

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
- `npm run dev` â€” start the dev server on port 5000
- `npm run build` â€” production build
- `npm run start` â€” run the production server
- `npm run lint` â€” run Next.js lint

## Project structure
- `app/` â€” routes and pages (Next.js App Router)
- `components/` â€” layout, sections, and animations
- `lib/` â€” helpers/utilities
- `public/` â€” static assets (including `logo.png`)
- `Logo/` â€” source logo assets (design exports)

## Deployment (Vercel)
- Import the repo in Vercel
- Build command: `npm run build`
- Output: Next.js default
- Start command (non-Vercel hosting): `npm run start`

## License
Private repository â€” no license granted unless explicitly added.

