import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dist = path.resolve(__dirname, '../dist')
const { render } = await import('../dist-ssr/entry-server.js')
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8')

const SITE = 'https://butjer-website.vercel.app'
const OG_IMAGE = SITE + '/assets/burger-hero.png'

const routes = [
  {
    path: '/',
    file: 'index.html',
    title: 'BUTJER Smashed Burger · Linden, Hannover',
    desc: "Smashed Burger, handgemacht in Linden, Hannover. Halal-Beef auf Martin's Potato Rolls. It's not just food. It's a feeling.",
  },
  {
    path: '/speisekarte',
    file: 'speisekarte.html',
    title: 'Speisekarte · BUTJER Smashed Burger · Linden, Hannover',
    desc: 'Die ganze Speisekarte von Butjer Smashed Burger — Smashed Classics, Loaded Fries, Vegan, Sides & Drinks. Halal-Beef auf Martin’s Potato Rolls.',
  },
]

// ─── Restaurant (LocalBusiness) JSON-LD ──────────────────────────────────────
// NOTE: no geo coordinates included on purpose — Google geocodes the address.
// Add exact lat/lng from the Google Business Profile when available.
const restaurant = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': SITE + '/#restaurant',
  name: 'BUTJER Smashed Burger',
  url: SITE + '/',
  image: OG_IMAGE,
  telephone: '+49 511 21339062',
  email: 'info@butjer-linden.de',
  priceRange: '€€',
  servesCuisine: ['Burger', 'American', 'Halal'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Falkenstraße 11',
    addressLocality: 'Hannover',
    addressRegion: 'Niedersachsen',
    postalCode: '30449',
    addressCountry: 'DE',
  },
  hasMap: 'https://www.google.com/maps/search/?api=1&query=Falkenstra%C3%9Fe+11+30449+Hannover',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '15:00', closes: '22:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '12:00', closes: '21:00' },
  ],
  menu: SITE + '/speisekarte',
  acceptsReservations: false,
  sameAs: ['https://www.instagram.com/butjer_/', 'https://wolt.com/de/deu/hanover/restaurant/butjer'],
}

// ─── Menu JSON-LD (sections + items + prices) ────────────────────────────────
const eur = (v) => ({ '@type': 'Offer', price: v.toFixed(2), priceCurrency: 'EUR' })
const item = (name, price, desc) => ({
  '@type': 'MenuItem', name, ...(desc ? { description: desc } : {}), offers: eur(price),
})
const section = (name, items) => ({ '@type': 'MenuSection', name, hasMenuItem: items })

const menu = {
  '@context': 'https://schema.org',
  '@type': 'Menu',
  '@id': SITE + '/speisekarte#menu',
  name: 'Speisekarte · BUTJER Smashed Burger',
  url: SITE + '/speisekarte',
  inLanguage: 'de',
  hasMenuSection: [
    section('Smashed Classics', [
      item('Smashed Classic', 12.5, '2×80 g Halal-Beef, doppelt American Cheese, Salat, Zwiebeln, Pickles, Butjersoße'),
      item('Butjer Royal', 13.5), item('Butjer Royal TS', 14.0),
      item('Smashed Chili Cheese', 13.7), item('Smashed TS Bacon', 14.7),
      item('Smashed BBQ', 14.7), item('Smashed Capo', 14.7), item('Chipotle South West', 14.9),
    ]),
    section('Buddies', [item('Be a Ronald', 8.0), item('Be a Joppie', 8.0)]),
    section('Baked & Fried', [item('Butjer Fried Chicken', 14.7), item('James Cod (Fish)', 10.5)]),
    section('Tender Date', [item('Tender Date · 6 Stk', 8.5), item('Tender Date · 9 Stk', 12.5), item('Tender Date · 15 Stk', 18.5)]),
    section('Vegan', [
      item('The Truffle Mushroom', 14.5), item('Vegan Currywurst + Fries', 12.9),
      item('Cauliflower Wings', 7.5), item('Vegan Nuggets · 6 Stk', 7.9),
      item('Vegan Nuggets · 9 Stk', 11.9), item('Vegan Nuggets · 15 Stk', 16.9),
    ]),
    section('Loaded Fries', [item('Yakuza Fries', 15.0), item('Garlic Cheese Fries', 9.7), item('Cheese Fries', 9.4)]),
    section('Sides & Salat', [
      item('Really Crunchy Fries', 5.2), item('Sweet Potato Fries', 5.7),
      item('OH MY GOAT', 15.0), item('Gurkensalat', 4.0), item('Coleslaw', 4.2),
    ]),
    section('Drinks', [
      item('Softdrinks 0,2 l', 3.3), item('Selters 0,25 l', 3.3), item('Cocio 0,33 l', 3.9),
      item('Elephant Bay Ice Tea 0,33 l', 4.0), item('Jever Fun (alkoholfrei) 0,33 l', 4.0),
      item('Guinness Draught (alkoholfrei) 0,44 l', 4.75), item('Corona Extra 0,33 l', 4.0),
      item('Lindener Spezial 0,33 l', 4.0),
    ]),
  ],
}

function headFor(r) {
  const canonical = SITE + (r.path === '/' ? '/' : r.path)
  const social = [
    `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="BUTJER Smashed Burger" />`,
    `<meta property="og:locale" content="de_DE" />`,
    `<meta property="og:title" content="${r.title}" />`,
    `<meta property="og:description" content="${r.desc}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta property="og:image:width" content="1175" />`,
    `<meta property="og:image:height" content="1175" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${r.title}" />`,
    `<meta name="twitter:description" content="${r.desc}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
  ].join('\n  ')
  const schemas = r.path === '/' ? [restaurant] : [restaurant, menu]
  const ld = schemas
    .map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`)
    .join('\n  ')
  return `  ${social}\n  ${ld}\n`
}

for (const r of routes) {
  const appHtml = render(r.path)
  const html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${r.title}</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${r.desc}" />`)
    .replace('</head>', headFor(r) + '</head>')
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
  fs.writeFileSync(path.join(dist, r.file), html)
  console.log('prerendered', r.file, `(${appHtml.length} bytes of markup)`)
}

// SSG output is final — drop the SSR bundle so it doesn't ship.
fs.rmSync(path.resolve(__dirname, '../dist-ssr'), { recursive: true, force: true })
