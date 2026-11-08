# Stoney Ridge Farm

Marketing + ordering site for Stoney Ridge Farm — React app with a
WhatsApp-first ordering flow, farm tours, gallery and contact form.

**Live:** https://stoney-ridge-farm.vercel.app

## Stack

- [Vite](https://vite.dev) + React 19 + TypeScript
- [react-router-dom](https://reactrouter.com) (path routes: `/`, `/our-farm`,
  `/products`, `/gallery`, `/farm-tours`, `/our-values`, `/contact`,
  `/privacy`, 404)
- Plain CSS with design tokens — see [`BRAND.md`](./BRAND.md)
- [lucide-react](https://lucide.dev) icons only

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production build → dist/
npm run preview    # serve dist/ locally
```

## Deploy

```bash
npx vercel --yes --prod
```

Project is linked to Vercel (`mujuks1/stoney-ridge-farm`). Every push to
`main` can also be auto-deployed if the Git integration is connected.

## Edit content — one file

All copy, prices, links and data live in **`src/data/site.ts`**:

- `WHATSAPP_NUMBER` — international format, no `+` (currently `254115375306`)
- `CONTACT.email` via `CONTACT_EMAIL` — enables the email form (falls back
  to WhatsApp when empty)
- `PRODUCTS` — the nine offerings, categories and `price` fields
- `HARVEST_BOARD.rows`, `FARM_TOURS`, `FAQ.items`, `VALUES`, `GALLERY`
- `TESTIMONIALS` — section stays hidden while the array is empty; never
  invent quotes

Optional env (`.env.local`):

- `VITE_CONTACT_ENDPOINT` — POST endpoint for the contact form JSON
  (`{ name, email, message }`); otherwise the form uses `mailto:`

## Supply checklist (before launch)

- [x] WhatsApp number in `src/data/site.ts` → `WHATSAPP_NUMBER` (`254115375306`)
- [ ] Real email → `CONTACT_EMAIL` (or set `VITE_CONTACT_ENDPOINT`)
- [ ] Real prices for all nine products (`KES 000` → actual)
- [ ] Delivery areas, pickup hours, minimum order, tour price/duration
- [ ] Gallery / product photos if you want to swap the current set
- [ ] About text in `OUR_FARM` if you want to rewrite the story
- [ ] Real customer quotes → `TESTIMONIALS` (optional)

## Project layout

```
public/            images, favicon, robots.txt, sitemap.xml, og-image.png
scripts/make-og.ps1  regenerate the OG share image (Windows PowerShell)
src/
  data/site.ts     ← single source of truth for all content
  components/      Header, Hero, sections, OrderTray, Lightbox, Footer…
  pages/           Home, Privacy, NotFound
  index.css        design tokens + all styles (see BRAND.md)
BRAND.md           colour type and component reference
```

## SEO

- Meta description, Open Graph + Twitter cards, canonical URL
- `public/robots.txt` + `public/sitemap.xml`
- JSON-LD `LocalBusiness` in `index.html`
- Branded 1200×630 OG image (`public/og-image.png`)
