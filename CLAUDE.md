
@AGENTS.md

# Maintenance Rule
**At the start of every session, and after any structural change (new component, new page, new dependency, changed contact/brand info, changed conventions), update the relevant section of this file to keep it accurate.** Do not wait to be asked — treat this file as the live source of truth for the project.

---

# Project Context: Ajay Builders & Consultant Website

## Overview
A Next.js website for **Ajay Builders & Consultant** — an architecture, engineering, and real estate firm based in Gwalior, MP, India. Established 1984, 40+ years of experience, 1000+ projects. Formerly known as Ajay Builder & Consultants.

**Contact:** 0751-2373134 / 91110 789 00 | ar.ajaybansal@gmail.com | nibaventures@gmail.com
**Address:** S 34–35 Sanjay Complex, Jayendraganj, Gwalior (MP) – 474009

## Tech Stack
- **Framework:** Next.js 16.2.0 (App Router) with TypeScript
- **Styling:** Tailwind CSS v4 + CSS custom properties defined in `globals.css`
- **Icons:** Lucide React
- **Animations:** Framer Motion v12 (`AnimatePresence`, `motion`, `useInView`)
- **Smooth scroll:** Lenis v1 (`src/components/SmoothScroll.tsx`)
- **Theme:** Light/dark via `ThemeContext` + `ThemeSwitcher` component

## Site Structure
| Route | File |
|-------|------|
| Home | `src/app/page.tsx` |
| About | `src/app/about/page.tsx` |
| Services | `src/app/services/page.tsx` |
| Portfolio | `src/app/portfolio/page.tsx` |
| Contact | `src/app/contact/page.tsx` |
| Sitemap | `src/app/sitemap.ts` |

## Components
- `Navbar` — site navigation (fixed, transparent on home hero, dark on scroll)
- `Footer` — site footer with contact details and quick links
- `HeroCarousel` — full-screen image carousel on homepage (Ken Burns effect)
- `RevealOnScroll` — Framer Motion scroll-triggered animation wrapper
- `PageTransition` — Framer Motion page transition (fade+slide + gold sweep bar)
- `SmoothScroll` — Lenis smooth scroll initializer (renders null, lives in layout)
- `ThemeSwitcher` — dark/light toggle

## RevealOnScroll Usage
Props: `delay` (ms, default 0), `variant` (default `"slideUp"`), `threshold` (0–1, default 0.15)

Available variants:
- `slideUp` — fade in + translate Y (default)
- `fadeIn` — opacity only
- `slideLeft` — fade in + translate from left
- `slideRight` — fade in + translate from right
- `scaleUp` — fade in + scale from 0.92

```tsx
<RevealOnScroll variant="slideLeft" delay={200}>...</RevealOnScroll>
```

## Data (`src/lib/data.ts`)
All site content is centralized here. Key exports:
- `companyInfo` — name, tagline, contact details, stats
- `stats` — 4 headline numbers (40+ years, 1000+ projects, 6 domains, pan-India)
- `services` — 6 services: Architecture, Structural Engineering, Interior Design, Real Estate Development, Valuation & Assessment, Turn-Key Solutions
- `projects` — 14 projects with id, title, location, category, description, images[], featured flag
- `categories` — All, Residential, Commercial, Hospitality, Infrastructure, Retail & Interiors
- `valueApproach` — 6-step process (Discovery → Handover)
- `trustedClients` — list of government/institutional clients

## Images
- Active logo: `public/images/logos/ABC Logo2.png` (used everywhere)
- Project images: `public/images/projects/slide{N}_img{N}.{jpg|png}`

## CSS Conventions
- CSS vars for colors: `var(--t-dark)`, `var(--t-dark-2)`, `var(--t-accent)`, `var(--t-light-2)`, etc.
- Utility classes from `globals.css`: `btn-gold`, `btn-outline`, `luxury-card`, `card-hover`, `gold-underline`, `zoom-wrap`
- Font: `font-serif` for headings, default sans for body
- The `.reveal` / `.reveal.visible` CSS classes have been removed — all scroll animations now use Framer Motion via `RevealOnScroll`
