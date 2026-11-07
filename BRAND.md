# Stoney Ridge Farm — Brand & Design System

Single reference for copy, colours, type and components. The live source of
truth for content is `src/data/site.ts` — never hardcode numbers, prices or
copy elsewhere.

## Brand

- **Name:** Stoney Ridge Farm
- **Tagline:** From farm to table
- **Established:** 2026
- **Voice:** warm, grounded, honest; sentence case everywhere except small
  tracked uppercase labels (eyebrows, stats, buttons).
- **Logo:** `public/images/badge.png` (circular farm badge, transparent
  corners). Rendered by `src/components/Logo.tsx` — variants `full`,
  `mark`, `light`. Never redraw the badge.

## Colour tokens (`src/index.css` `:root`)

| Token | Hex | Use |
|---|---|---|
| `--forest` | `#26351e` | headings, dark surfaces, theme-color |
| `--deep-forest` | `#1b2715` | footer |
| `--soft-green` | `#3b5030` | contact section |
| `--sage` | `#c9d6b8` | text on dark |
| `--sage-100` | `#e6eddc` | harvest section bg |
| `--cream` | `#fbf8f0` | page bg, sticky header |
| `--cream-2` | `#f6f0e2` | alternating section bg |
| `--sand` | `#e8dfc6` | marquee + how-it-works bg |
| `--border` | `#d9d0b8` | 1px borders |
| `--ink-600` | `#5b6650` | secondary text |
| `--gold-bright` | `#d8a95b` | gold text **on dark** (6.05:1 on forest) |
| `--honey-500` | `#c9962b` | gold buttons (with `--forest-800` text, 4.84:1) |
| `--honey-600` | `#b08220` | italic accent words on light (large text) |
| `--honey-700` | `#8a6415` | small gold text on light (5.06:1) |
| `--success` / `--warning` / `--error` | `#3b6d11` / `#854f0b` / `#a32d2d` | status chips, form errors |

Never hardcode hex in components — always use the tokens.

## Typography

- **Headings:** Fraunces (500–600), Google Fonts with `display=swap`.
- **Body/UI:** Inter 400/500 only.
- **Scale:** h1 `clamp(36px, 8vw, 60px)` · h2 `clamp(28px, 5vw, 40px)` ·
  h3 20/24px · body 16→18px · small 14 · caption 12.
- **Hero H1:** `clamp(52px, 10vw, 96px)`, line-height 1.04.
- **Labels:** uppercase, 12–13px, letter-spacing `.14em` (nav/tagline `.2em`,
  eyebrows `.08em`).
- Section titles contain exactly ONE `*accent*` word → rendered as italic
  gold `<em class="accent">` by `SectionHead`.

## Layout

- Container 1200px; side padding 20 / 32 / 48px; section padding 64 / 96px.
- Pills (`999px`) for buttons, chips, badges; cards 16–20px radius.
- One shadow token: `0 1px 2px rgba(38,53,30,.08)` — sticky header + card
  hover only.
- Section background rhythm: hero (photo) → sand marquee → cream → cream-2 →
  sage-100 → cream → **forest** (tours) → cream-2 → sand → cream →
  **soft-green** (contact) → **deep-forest** (footer).

## Components

- **Header** — sticky cream, scroll-spy nav (gold active state), gold scroll
  progress hairline, mobile drawer (Escape closes), CTA pill ≥1200px.
- **Hero** — full-bleed photo, forest gradient scrim (94%→12% left→right),
  ken-burns 20s (off for reduced motion), gold stats count-up, ridge
  divider into the marquee.
- **Order tray** — context + localStorage (`srf-order-tray`); sticky bar on
  mobile, floating pill + panel ≥1024px; builds the WhatsApp message via
  `buildOrderMessage()`. FAB hides while the tray is open.
- **Gallery** — grid + lightbox (Esc, arrows, focus on close).
- **Contact** — WhatsApp-first; email form renders only when
  `CONTACT_EMAIL` or `VITE_CONTACT_ENDPOINT` is set (mailto fallback,
  honeypot, inline validation).
- **Testimonials** — renders nothing while `TESTIMONIALS` is empty. Never
  invent quotes.

## Accessibility

WCAG 2.2 AA: skip link, one h1, focus rings `2px --honey-500`, keyboard
support for menu/tray/filter/lightbox/FAQ, `aria-hidden` on decorative
icons, alt text everywhere, `prefers-reduced-motion` disables ken-burns,
marquee, reveal, count-up and hover zooms.

## Motion

- Reveal: fade + 10px rise, 400ms, stagger 60ms (`.reveal` / `.is-visible`).
- Hover: buttons lift 1px + arrow slide; product/gallery images zoom 1.05 /
  500ms.
- Easing: `cubic-bezier(.22, 1, .36, 1)`.

## Assets

- Hero: `public/images/hero.jpg`
- Badge: `public/images/badge.png` (favicon/apple-touch/OG derive from it)
- OG image: `public/og-image.png` (regenerate: `scripts/make-og.ps1`)
- Product + gallery photos: `public/products/*`, `public/*.jpeg`
