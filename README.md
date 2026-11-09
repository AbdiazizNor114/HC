# Outdoor Home Curtains

A mobile-first, front-end-only Next.js App Router demo by Smidify. No backend, payments, authentication, or real order submission.

## Run

```sh
npm install
npm run dev
```

Open http://localhost:3000. `npm run build` creates a production build; `npm start` serves it. Deploy to Vercel using its standard Next.js preset with no extra configuration.

## Customise

- **Catalogue and photos:** `data/products.ts` contains all 15 products and named image slots. Replace the supplied demo photos with the owner’s photos, or use paths such as `/images/royal-ivory.jpg` with files in `public/images`. Remote image domains must be allowed in `next.config.ts`.
- **Prices:** all catalogue starting prices, calculator rates, extra-layer pricing, and the estimate formula live in `data/config.ts`. Rates are per square metre; width × height × fullness × (base rate + additional layers × extra-layer rate). Additional layers means layers after the first. Delivery/fitting excluded.
- **Contact:** replace `shop` in `data/config.ts`. The current WhatsApp number and address are explicitly placeholders. Confirm the number before using the links with real customers.
- **Logo:** edit `Logo` in `components/Layout.tsx`. It is text, not an image. Edit metadata in `app/layout.tsx` and colours in `app/globals.css`.
- **Copy:** home content is in `app/page.tsx`; About and Contact have their own routes. Testimonials are illustrative demo reviews and must be replaced before a real launch.

## Demo interactions

Client-side category, style, colour, and material filters; product galleries and swatches; centimetre/metre conversion; fullness and layered pricing; measurement guide; and an order list held in React state and sessionStorage for navigation/refresh continuity. Remove items in the order summary. The validated order form only displays a demo success message. It makes no network submission and does not store customer details. WhatsApp opens an external link with a prefilled enquiry to a placeholder number.

Carpets and blinds use a starting-price enquiry rather than the curtain fabric calculator. Photographs are lifestyle placeholders and do not represent exact products. Next/image optimises the bundled images; next/font/local serves bundled fonts with their licenses. An internet connection is needed for installation only; the demo photos and fonts are bundled locally.

## Validation

`npm run typecheck` checks TypeScript. `npm run build` validates all routes and creates the production build.

## Selected curtain images

The curtain imagery is supplied by the user and stored in `public/images/catalogue`:

- `terracotta-charcoal.jpg`: layered orange and charcoal curtains.
- `navy-silver.jpg`: layered navy and silver curtains.
- `ivory-classic.webp`: classic cream curtains.
- `layered-design.jpg`: ivory sheer curtains, converted from the supplied AVIF for compatibility.

These four images are used across the home page, curtain category cards, product cards, and curtain galleries. The previous sourced curtain photographs are no longer referenced. Product names, colour choices, and prices remain demo catalogue data.

The Blinds category uses the supplied `roman-blind.webp`; Carpets uses the supplied `woven-carpet.webp`, both in `public/images/catalogue`.

## Live demo and responsive verification

Production: https://outdoor-home-curtains.vercel.app

Vercel is connected to `AbdiazizNor114/HC`; pushes to `main` trigger production deployments. The local `.vercel` account/project metadata is ignored.

Verified Home, Collections, Product Detail, Calculator, Order, About, and Contact at 320, 390, 768, 1024, and 1440 px widths without document-level horizontal overflow. Also visually checked the narrow-phone calculator and populated order, mobile navigation, tablet product gallery, and deployed mobile homepage. All six supplied images are bundled locally. Contact details and prices remain demo placeholders.
