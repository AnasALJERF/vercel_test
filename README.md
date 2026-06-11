# Shahd Furniture — شهد للمفروشات

A luxury furniture **showroom** website (not an e-commerce store). It showcases
collections and craftsmanship, builds the brand, and generates inquiries and
quotation requests. No cart, no checkout, no prices.

Built with **Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion.**

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # run the production build
```

Deploy to **Vercel**: push to a Git repo and import it — zero config needed.

---

## Brand identity — "Honey & Walnut"

The name **شهد (Shahd)** means *honey / nectar*. The identity is built from that:
warm honey-gold on deep walnut, with a **honeycomb hexagon** mark that doubles as
a symbol of craftsmanship. Logos live in `public/logos/`
(`logo-primary.svg`, `logo-icon.svg`, `logo-mono.svg`).

**Colors** (in `tailwind.config.ts`)

| Token       | Hex       | Use                         |
|-------------|-----------|-----------------------------|
| `espresso`  | `#15100A` | Deepest background          |
| `walnut`    | `#241B12` | Primary dark surface        |
| `bark`      | `#3A2C1E` | Raised cards                |
| `honey`     | `#C79A3C` | Primary accent              |
| `amber`     | `#E4BC6B` | Highlight                   |
| `bone`      | `#EFE8DA` | Primary text / light surface|
| `taupe`     | `#9A8A74` | Muted secondary text        |

**Typography** — Display: *Fraunces* (serif). Body: *Inter*. Arabic: *El Messiri*.
Loaded via `<link>` in `src/app/layout.tsx`. Swap to `next/font` or self-hosted
fonts for production if you prefer.

---

## Structure

```
src/
  app/
    layout.tsx            # shell, SEO base, fonts, JSON-LD, Navbar/Footer
    page.tsx              # Home
    about/page.tsx
    services/page.tsx
    products/page.tsx             # catalogue (search + filter)
    products/[slug]/page.tsx      # single collection (the key showcase page)
    quote/page.tsx
    contact/page.tsx
    sitemap.ts · robots.ts · not-found.tsx
    globals.css           # design system / utilities
  components/             # Navbar, Footer, Hero, ProductCard, ServiceCard,
                          # QuoteForm, ContactForm, Gallery, Testimonials,
                          # CTA, Reveal, SectionHeading, PageHero, StatStrip, …
  lib/
    data.ts               # collections, services, testimonials, timeline …
    motion.ts             # shared Framer Motion variants
    seo.ts                # site config, page metadata helper, structured data
public/logos/             # logo set
```

---

## Customizing

- **Content** — edit `src/lib/data.ts` (collections, services, testimonials…).
- **Site details** — name, URL, phone, email, address in `src/lib/seo.ts`.
- **Photography** — the site ships with branded gradient placeholders via
  `<FrameImage>`. Drop real images into `public/` and pass `src="/your-image.jpg"`
  to `FrameImage` (or switch it to `next/image`). Search the codebase for
  `FrameImage` to find every spot.
- **Forms** — `QuoteForm` and `ContactForm` currently show a success state on the
  client. Wire `onSubmit` to a Next.js Route Handler (`app/api/quote/route.ts`),
  your CRM, or an email service to actually deliver submissions.

---

## What's included vs. what to finish

This is a complete, runnable, well-architected foundation: full design system,
logo set, all seven page types, reusable components, animations, SEO metadata,
Open Graph, sitemap, robots, and JSON-LD structured data.

Before launch you'll want to: add real photography, finalize copy, connect the
forms to a backend/email, add an OG share image at `public/og.jpg`, and review
accessibility and content with a native Arabic copywriter if you ship a bilingual
version.
