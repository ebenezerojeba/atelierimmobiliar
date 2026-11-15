# Real estate website

Romanian-first, multilingual (RO · EN · FR · DE · IT) real estate website.
Vite + React 19 + TypeScript + Tailwind CSS v4 + Motion (Framer Motion) + i18next + Lenis.

## Run

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + production build into dist/
npm run preview   # serve the production build
```

The site is a single-page app with client-side routes (`/` and `/proprietati/:id`).
When deploying, configure the host to rewrite unknown paths to `index.html`
(Netlify `_redirects`, Vercel `rewrites`, Nginx `try_files`, etc.).

## Placeholders to replace

Nothing below is real company data. Update these before going live:

| What | Where |
| --- | --- |
| Company name | `src/config/site.ts` → `brandName` (also `<title>` in `index.html`) |
| Phone, email, address, opening hours | `src/config/site.ts` → `contact` (shown as "De completat" until set) |
| Social media URLs | `src/config/site.ts` → `social` (`null` hides a network) |
| Logo | `src/components/ui/Logo.tsx` (typographic placeholder) and `public/favicon.svg` |
| Property prices, rooms, area, dates | `src/data/properties.ts` (illustrative values) |
| Property names, locations, descriptions | `src/i18n/locales/*.ts` → `properties.items` |
| Privacy policy / terms links | `src/components/layout/Footer.tsx` |
| Contact form delivery | `.env` → `VITE_CONTACT_ENDPOINT` (see `.env.example`); without it, submissions are simulated |

## Project structure

```
assets/                    original photographs (untouched)
src/
  assets/images/           working copies; responsive AVIF/WebP/JPEG are generated at build time
  config/site.ts           company details (placeholders)
  data/properties.ts       listing data (non-translatable fields)
  i18n/
    languages.ts           language registry (code, locale, name)
    locales/ro.ts          source dictionary — Romanian
    locales/{en,fr,de,it}  translations, type-checked against ro.ts
    format.ts              locale-aware currency / number / area / date formatting
  components/
    layout/                Navbar, MobileMenu, LanguageSelector, Footer, PageTransition, SmoothScroll
    sections/              Hero, Manifesto, About, Interlude, Properties, Services, Contact
    property/              shared property media / meta / specs
    motion/                Reveal, RevealText, ImageReveal, Parallax
    ui/                    Button, Picture, Flag, Logo, SocialLinks, SectionLabel
  pages/                   Home, PropertyPage, NotFound
```

## Languages

- Romanian is the default. A visitor's explicit choice is saved in `localStorage` (`site-language`)
  and kept across pages and visits. The browser language is deliberately not auto-detected.
- To add a language: create `src/i18n/locales/<code>.ts` typed as `Dictionary`, register it in
  `src/i18n/index.ts`, add it to `src/i18n/languages.ts` and add a flag in `src/components/ui/Flag.tsx`.
  TypeScript reports any missing key.

## Adding a property

1. Put the photo in `src/assets/images/` and register it in `src/lib/images.ts`.
2. Add an entry to `src/data/properties.ts` (extend the `PropertyId` union).
3. Add its translated text under `properties.items.<id>` in every locale file.
4. Lay it out in `src/components/sections/Properties.tsx`.

## Motion & accessibility

All animation respects `prefers-reduced-motion`. Smooth scrolling is turned off, transforms are skipped,
and the scroll-driven interludes become static. Navigation, the language menu, the mobile menu and the form
all work from the keyboard, with visible focus states.
