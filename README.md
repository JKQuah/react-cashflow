# Cashflow — Landing Page

Marketing landing page for the **Cashflow** mobile app by [Olzytech Solutions](https://olzytech.com). Cashflow is a payday-cycle finance app for Malaysia — track expenses by credit or debit, get credit card cutoff reminders, and see your real cashflow by payday cycle.

**Live site:** https://cashflow.olzytech.com

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.3.3 (App Router) |
| UI Library | React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Animation | Motion (Framer Motion v13) |
| Icons | Phosphor Icons, Lucide React |
| World Map | dotted-map |
| Font | Space Grotesk + Noto Sans SC (Google Fonts) |

---

## Features

- **Bilingual** — English and Simplified Chinese, toggled via a Translate button in the navbar
- **Dark / Light theme** — persisted via `data-theme` on `<html>`, CSS custom properties throughout
- **Fully SEO-optimised** — metadata, Open Graph, Twitter card, JSON-LD structured data, sitemap, robots.txt, PWA manifest, hreflang alternates, geo tags
- **Dynamic OG image** — edge-rendered at `/opengraph-image`
- **Smooth scroll** — JS-driven anchor scroll (no CSS `scroll-behavior: smooth`)
- **Real app screenshots** — displayed inside an iPhone frame with a floating CSS animation
- **Legal pages** — Privacy Policy and Terms of Service at `/privacy` and `/terms`

---

## Project Structure

```
cashflow-landing/
├── app/
│   ├── layout.tsx              # Root layout, metadata, viewport, fonts
│   ├── page.tsx                # Home page + JSON-LD structured data
│   ├── globals.css             # Theme tokens, global styles, utility classes
│   ├── opengraph-image.tsx     # Dynamic OG image (edge runtime)
│   ├── twitter-image.tsx       # Twitter card image (re-exports OG)
│   ├── manifest.ts             # PWA manifest
│   ├── sitemap.ts              # XML sitemap
│   ├── robots.ts               # robots.txt
│   ├── privacy/page.tsx        # Privacy Policy
│   └── terms/page.tsx          # Terms of Service
│
├── components/
│   ├── Navbar.tsx              # Sticky nav, theme toggle, language toggle
│   ├── Hero.tsx                # Full-height hero with aurora headline + store buttons
│   ├── AppShowcase.tsx         # iPhone demo screenshots with floating animation
│   ├── Features.tsx            # 6-feature grid
│   ├── HowItWorks.tsx          # 3-step process
│   ├── Stats.tsx               # Key metrics + world map
│   ├── Pricing.tsx             # Free vs Pro pricing cards
│   ├── Testimonials.tsx        # 3 user reviews
│   ├── FAQ.tsx                 # Accordion FAQ
│   ├── CTABanner.tsx           # Mid-page call-to-action
│   ├── Contact.tsx             # Contact form + WhatsApp / email links
│   ├── Footer.tsx              # Links, download buttons, wordmark
│   └── ui/                     # Shared primitives (blur-fade, aurora-text, iphone, …)
│
├── lib/
│   ├── i18n.tsx                # Language context + full EN/ZH translation object
│   ├── theme.tsx               # Theme context (dark/light)
│   ├── useMediaQuery.ts        # Responsive hook
│   └── utils.ts                # cn() helper
│
└── public/
    ├── logo.png
    ├── app-screenshot-summary.png
    └── app-screenshot-expenses.png
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or pnpm / yarn)

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## Theme System

Theme is driven by CSS custom properties defined in `app/globals.css`:

```css
:root { /* light */ }
[data-theme="dark"] { /* dark */ }
```

`ThemeProvider` in `lib/theme.tsx` sets `document.documentElement.dataset.theme` on toggle. Components reference variables like `var(--bg)`, `var(--surface)`, `var(--text-primary)`, `var(--success)`, etc. — never hardcoded hex values.

---

## Internationalisation

All copy lives in `lib/i18n.tsx` as a single `translations` object with `en` and `zh` keys. The `LanguageProvider` exposes `{ t, lang, toggle }` via context. Switch languages by clicking the Translate icon in the navbar.

To update copy, edit the relevant key in `lib/i18n.tsx`.

---

## Deployment

The site is designed to deploy on **Vercel** (zero-config for Next.js App Router).

1. Push to GitHub
2. Import the repo in Vercel
3. Set `NEXT_PUBLIC_BASE_URL` if needed (defaults hardcoded to `https://cashflow.olzytech.com`)

For other platforms, run `npm run build` then serve the `.next` output with `npm run start`.

---

## Contact

**Olzytech Solutions**
- Email: support@olzytech.com
- WhatsApp: +60 19-969 2350
- Website: https://olzytech.com
