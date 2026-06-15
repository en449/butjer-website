# BUTJER — React app

Faithful React (Vite) port of the original static BUTJER site. Same visual
design, layout, interactions, copy, and assets — now as a real React SPA.

## Stack
- React 18 + react-router-dom 6 (two routes: `/` and `/speisekarte`)
- Vite 5 build
- Original `css/styles.css` reused verbatim → `src/styles.css`
- Assets copied verbatim → `public/assets/`

## Structure
```
react-app/
  index.html              # Vite entry (Google Fonts in <head>)
  src/
    main.jsx              # mounts <App/> in BrowserRouter
    App.jsx               # routes + cross-route hash scrolling
    styles.css            # original stylesheet (unchanged)
    pages/Home.jsx        # port of index.html  (hero, story, teaser, signatures, events, visit, footer)
    pages/Speisekarte.jsx # port of speisekarte.html (full menu)
    hooks/useHeroAnimation.js   # port of js/hero.js  (exploded-build hero)
    hooks/useSiteInteractions.js# port of js/main.js  (nav, overlay menu, reveal, scrollspy, status pill)
  public/assets/          # images (burger-hero, ingredients/, photos, logo)
```
The original static files (`index.html`, `speisekarte.html`, `css/`, `js/`,
`assets/`) are left untouched at the project root and still work standalone.

## Commands

Run (dev, hot reload):
```bash
cd react-app
npm install      # first time only
npm run dev      # → http://localhost:5173
```

Preview (production build):
```bash
npm run build    # → dist/
npm run preview  # → http://localhost:4173
```

## Verify
- `npm run build` completes with no errors (38 modules).
- Open `/` — hero burger floats in the BUTJER wordmark, ingredients assemble,
  status pill shows open/closed, sections reveal on scroll.
- Open `/speisekarte` — full menu, sticky category rail highlights on scroll,
  cross-page links (`Story`, `Besuch`, back-link) return to the right section.
- No broken images; no console errors.

## Notes
- Internal navigation uses react-router `<Link>`; same-page `#anchor` jumps keep
  the original `data-scroll` smooth-scroll behaviour.
- `<StrictMode>` is intentionally omitted so the rAF-based hero loop isn't
  double-invoked in dev; all effects clean up window listeners / observers /
  rAF on unmount.
