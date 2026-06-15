import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import useSiteInteractions from '../hooks/useSiteInteractions.js'

const WOLT = 'https://wolt.com/de/deu/hanover/restaurant/butjer'
const IG = 'https://www.instagram.com/butjer_/'

export default function Speisekarte() {
  useSiteInteractions()
  // Page <title> per the original speisekarte.html <head>.
  useEffect(() => {
    const prev = document.title
    document.title = 'Speisekarte · BUTJER Smashed Burger · Linden, Hannover'
    return () => { document.title = prev }
  }, [])

  return (
    <>
      {/* ─── NAV ───────────────────────────────────────────────── */}
      <header className="topnav scrolled" data-od-id="topnav">
        <div className="container topnav-inner">
          <Link to="/" className="brand">BUTJER</Link>
          <nav aria-label="Hauptnavigation">
            <Link to="/#story">Story</Link>
            <Link to="/speisekarte" aria-current="page" style={{ color: 'var(--gold)' }}>Speisekarte</Link>
            <Link to="/#signatures">Signatures</Link>
            <Link to="/#events">Events</Link>
            <Link to="/#visit">Besuch</Link>
          </nav>
          <a className="btn btn-primary nav-cta" href={WOLT} target="_blank" rel="noopener">Auf Wolt bestellen</a>
        </div>
      </header>

      <main id="top">
        {/* ─── PAGE HEADER ────────────────────────────────────── */}
        <header className="page-header" data-od-id="menu-header">
          <span className="section-no" style={{ top: '10%', right: '1%' }}>01</span>
          <div className="container">
            <Link className="back-link reveal" to="/">← Zurück zur Startseite</Link>
            <p className="eyebrow reveal">Speisekarte</p>
            <h1 className="display reveal">Smashed, geladen,<br />handgemacht.</h1>
            <p className="lead reveal" data-delay="1">Über 30 Gerichte aus Linden — Halal-Beef auf Martin's Potato Rolls, Loaded Fries zum Teilen, eine ernstzunehmende vegane Ecke und eine Bar mit Charakter.</p>
            <div className="menu-badges reveal" data-delay="2">
              <span className="badge solid">Halal</span>
              <span className="badge">Veg / Vegan-Patty möglich</span>
              <span className="badge">Lieferung via Wolt</span>
            </div>
          </div>
        </header>

        {/* ─── MENU ───────────────────────────────────────────── */}
        <section className="section menu" id="menu" data-od-id="menu" style={{ paddingTop: 'var(--s8)' }}>
          <div className="container">
            <div className="menu-layout">
              <nav className="menu-rail" aria-label="Speisekarte-Kategorien">
                <a href="#cat-classics" data-scroll="" className="active">Classics</a>
                <a href="#cat-buddies" data-scroll="">Buddies</a>
                <a href="#cat-baked" data-scroll="">Baked &amp; Fried</a>
                <a href="#cat-tender" data-scroll="">Tender Date</a>
                <a href="#cat-vegan" data-scroll="">Vegan</a>
                <a href="#cat-loaded" data-scroll="">Loaded Fries</a>
                <a href="#cat-sides" data-scroll="">Sides &amp; Salat</a>
                <a href="#cat-drinks" data-scroll="">Drinks</a>
                <p className="rail-note">Preise in € inkl. MwSt. Lieferpreise auf Wolt können abweichen.</p>
              </nav>

              <div className="menu-cols">
                {/* Classics */}
                <div className="menu-cat reveal" id="cat-classics">
                  <div className="menu-cat-head">
                    <span className="cat-no num">01</span>
                    <h3>Smashed Classics</h3>
                    <span className="cat-tag">Halal-Beef · Potato Bun · veg/vegan möglich</span>
                  </div>
                  <div className="menu-item"><div><div className="mi-name">Smashed Classic</div><div className="mi-desc">2×80 g Halal-Beef, doppelt American Cheese, Salat, Zwiebeln, Pickles, Butjersoße, Ketchup, Senf</div></div><div className="mi-price num">12,50&nbsp;€</div></div>
                  <div className="menu-item"><div><div className="mi-name">Butjer Royal</div><div className="mi-desc">Double Beef, vierfach Cheese, Zwiebeln, Pickles, Senf, Ketchup</div></div><div className="mi-price num">13,50&nbsp;€</div></div>
                  <div className="menu-item"><div><div className="mi-name">Butjer Royal TS</div><div className="mi-desc">Double Beef, vierfach Cheese, Salat, Tomate, Mayo</div></div><div className="mi-price num">14,00&nbsp;€</div></div>
                  <div className="menu-item"><div><div className="mi-name">Smashed Chili Cheese</div><div className="mi-desc">Double Beef, 4× Cheese, gebackener Cheddar, Salat, Zwiebeln, Jalapeños, Chili-Cheese-Nuggets, Chili-Cheese-Soße</div></div><div className="mi-price num">13,70&nbsp;€</div></div>
                  <div className="menu-item"><div><div className="mi-name">Smashed TS Bacon</div><div className="mi-desc">Double Beef, Double Cheese, Bacon, Salat, Tomate, karamellisierte Zwiebeln, Pickles, Soßen</div></div><div className="mi-price num">14,70&nbsp;€</div></div>
                  <div className="menu-item"><div><div className="mi-name">Smashed BBQ</div><div className="mi-desc">Double Beef, Double Cheese, Salat, Coleslaw, Onion Rings, BBQ- &amp; Cheese-Soße</div></div><div className="mi-price num">14,70&nbsp;€</div></div>
                  <div className="menu-item"><div><div className="mi-name">Smashed Capo</div><div className="mi-desc">2×80 g Beef, Cheese, gebackener Mozzarella, Rucola, rote Zwiebeln, Himbeer-Chutney, Aioli</div></div><div className="mi-price num">14,70&nbsp;€</div></div>
                  <div className="menu-item"><div><div className="mi-name">Chipotle South West</div><div className="mi-desc">Double Smashed Beef, 4× Cheddar, Chipotle-Soße, Ketchup, Pickles</div></div><div className="mi-price num">14,90&nbsp;€</div></div>
                </div>

                {/* Buddies */}
                <div className="menu-cat reveal" id="cat-buddies">
                  <div className="menu-cat-head">
                    <span className="cat-no num">02</span>
                    <h3>Buddies</h3>
                    <span className="cat-tag">Single Patty · der kleine Hunger</span>
                  </div>
                  <div className="menu-item"><div><div className="mi-name">Be a Ronald</div><div className="mi-desc">Single Beef, Cheese, Zwiebeln, Gurke, Tomate, Senf, Ketchup, Mayo</div></div><div className="mi-price num">8,00&nbsp;€</div></div>
                  <div className="menu-item"><div><div className="mi-name">Be a Joppie</div><div className="mi-desc">Single Beef, Cheese, Joppie-Soße, Ketchup, Röstzwiebeln, Pickles</div></div><div className="mi-price num">8,00&nbsp;€</div></div>
                </div>

                {/* Baked & Fried */}
                <div className="menu-cat reveal" id="cat-baked">
                  <div className="menu-cat-head">
                    <span className="cat-no num">03</span>
                    <h3>Baked &amp; Fried</h3>
                  </div>
                  <div className="menu-item"><div><div className="mi-name">Butjer Fried Chicken</div><div className="mi-desc">Geröstetes Halal-Chicken, Cheese, Salat, Tomate, Pickles, Mayo</div></div><div className="mi-price num">14,70&nbsp;€</div></div>
                  <div className="menu-item"><div><div className="mi-name">James Cod (Fish)</div><div className="mi-desc">Gebackener Kabeljau, Salat, rote Zwiebeln, Pickles, Mayo</div></div><div className="mi-price num">10,50&nbsp;€</div></div>
                </div>

                {/* Tender Date */}
                <div className="menu-cat reveal" id="cat-tender">
                  <div className="menu-cat-head">
                    <span className="cat-no num">04</span>
                    <h3>Tender Date</h3>
                    <span className="cat-tag">Buttermilch-Chicken-Fingers</span>
                  </div>
                  <div className="menu-item">
                    <div><div className="mi-name">Tender Date</div><div className="mi-desc">Knusprige Buttermilch-Chicken-Fingers — wähle deine Portion</div></div>
                    <div className="price-row">
                      <span className="num">8,50&nbsp;€<small>6 Stk</small></span>
                      <span className="num">12,50&nbsp;€<small>9 Stk</small></span>
                      <span className="num">18,50&nbsp;€<small>15 Stk</small></span>
                    </div>
                  </div>
                </div>

                {/* Vegan */}
                <div className="menu-cat reveal" id="cat-vegan">
                  <div className="menu-cat-head">
                    <span className="cat-no num">05</span>
                    <h3>Vegan</h3>
                    <span className="cat-tag">100% pflanzlich</span>
                  </div>
                  <div className="menu-item"><div><div className="mi-name">The Truffle Mushroom <span className="veg">VEGAN</span></div><div className="mi-desc">2×80 g Erbsenprotein-Patties, veganer Cheddar, Röstzwiebeln, Rucola, Tomate, vegane Trüffel-Mayo, Cashew-Champignon-Creme</div></div><div className="mi-price num">14,50&nbsp;€</div></div>
                  <div className="menu-item"><div><div className="mi-name">Vegan Currywurst + Fries <span className="veg">VEGAN</span></div><div className="mi-desc">Regionale vegane Currywurst mit Pommes</div></div><div className="mi-price num">12,90&nbsp;€</div></div>
                  <div className="menu-item"><div><div className="mi-name">Cauliflower Wings <span className="veg">VEGAN</span></div><div className="mi-desc">Knusprige Blumenkohl-Wings</div></div><div className="mi-price num">7,50&nbsp;€</div></div>
                  <div className="menu-item">
                    <div><div className="mi-name">Vegan Nuggets <span className="veg">VEGAN</span></div><div className="mi-desc">The Vegetarian Butcher — wähle deine Portion</div></div>
                    <div className="price-row">
                      <span className="num">7,90&nbsp;€<small>6 Stk</small></span>
                      <span className="num">11,90&nbsp;€<small>9 Stk</small></span>
                      <span className="num">16,90&nbsp;€<small>15 Stk</small></span>
                    </div>
                  </div>
                </div>

                {/* Loaded Fries */}
                <div className="menu-cat reveal" id="cat-loaded">
                  <div className="menu-cat-head">
                    <span className="cat-no num">06</span>
                    <h3>Loaded Fries</h3>
                    <span className="cat-tag">perfekt zum Teilen — 2 Personen</span>
                  </div>
                  <div className="menu-item"><div><div className="mi-name">Yakuza Fries</div><div className="mi-desc">Crunchy Fries, Chicken Tender, Cashew-Mix, Cheese-Soße, Sriracha-Mayo, Sesam-Teriyaki, Koriander</div></div><div className="mi-price num">15,00&nbsp;€</div></div>
                  <div className="menu-item"><div><div className="mi-name">Garlic Cheese Fries</div><div className="mi-desc">Petersilien-Pesto, geschmolzener Käse, Knoblauchsoße, Sriracha</div></div><div className="mi-price num">9,70&nbsp;€</div></div>
                  <div className="menu-item"><div><div className="mi-name">Cheese Fries</div><div className="mi-desc">Petersilien-Pesto, geschmolzener Käse, Sriracha</div></div><div className="mi-price num">9,40&nbsp;€</div></div>
                </div>

                {/* Sides & Salads */}
                <div className="menu-cat reveal" id="cat-sides">
                  <div className="menu-cat-head">
                    <span className="cat-no num">07</span>
                    <h3>Sides &amp; Salat</h3>
                  </div>
                  <div className="menu-item"><div><div className="mi-name">Really Crunchy Fries</div><div className="mi-desc">Lamb-Weston-Pommes, frisch frittiert</div></div><div className="mi-price num">5,20&nbsp;€</div></div>
                  <div className="menu-item"><div><div className="mi-name">Sweet Potato Fries</div><div className="mi-desc">Süßkartoffel-Pommes</div></div><div className="mi-price num">5,70&nbsp;€</div></div>
                  <div className="menu-item"><div><div className="mi-name">OH MY GOAT</div><div className="mi-desc">Rucola, getrocknete Tomaten, Ziegenkäse, Cashews, Balsamico, Wildbeeren-Creme</div></div><div className="mi-price num">15,00&nbsp;€</div></div>
                  <div className="menu-item"><div><div className="mi-name">Gurkensalat</div><div className="mi-desc">Gurke, Dill, Zwiebeln, Joghurt, Apfelessig</div></div><div className="mi-price num">4,00&nbsp;€</div></div>
                  <div className="menu-item"><div><div className="mi-name">Coleslaw</div><div className="mi-desc">Cremiger Krautsalat</div></div><div className="mi-price num">4,20&nbsp;€</div></div>
                </div>

                {/* Drinks */}
                <div className="menu-cat reveal" id="cat-drinks">
                  <div className="menu-cat-head">
                    <span className="cat-no num">08</span>
                    <h3>Drinks</h3>
                    <span className="cat-tag">Lieferbar via Wolt</span>
                  </div>
                  <div className="menu-item"><div><div className="mi-name">Softdrinks</div><div className="mi-desc">Pepsi · Pepsi Max · Schwip Schwap Orange · 7up · Fritz-Limo Honigmelone · 0,2 l</div></div><div className="mi-price num">3,30&nbsp;€</div></div>
                  <div className="menu-item"><div><div className="mi-name">Selters</div><div className="mi-desc">Classic / Naturell · 0,25 l</div></div><div className="mi-price num">3,30&nbsp;€</div></div>
                  <div className="menu-item"><div><div className="mi-name">Cocio</div><div className="mi-desc">Skandinavische Schokomilch · 0,33 l</div></div><div className="mi-price num">3,90&nbsp;€</div></div>
                  <div className="menu-item"><div><div className="mi-name">Elephant Bay Ice Tea</div><div className="mi-desc">Mango-Pineapple · Peach · Blueberry · Pomegranate · 0,33 l</div></div><div className="mi-price num">4,00&nbsp;€</div></div>
                  <div className="menu-item"><div><div className="mi-name">Jever Fun</div><div className="mi-desc">Alkoholfrei · 0,33 l</div></div><div className="mi-price num">4,00&nbsp;€</div></div>
                  <div className="menu-item"><div><div className="mi-name">Guinness Draught</div><div className="mi-desc">Alkoholfrei · 0,44 l</div></div><div className="mi-price num">4,75&nbsp;€</div></div>
                  <div className="menu-item"><div><div className="mi-name">Corona Extra</div><div className="mi-desc">0,33 l</div></div><div className="mi-price num">4,00&nbsp;€</div></div>
                  <div className="menu-item"><div><div className="mi-name">Lindener Spezial</div><div className="mi-desc">Aus der Nachbarschaft · 0,33 l</div></div><div className="mi-price num">4,00&nbsp;€</div></div>

                  <div className="menu-note">
                    <span className="mn-mark" aria-hidden="true">”</span>
                    <div>
                      <h4>Getränke an der Theke</h4>
                      <p>Longdrinks, Shots, Wein &amp; Aperitif, Whisky, Hot Drinks und Bier vom Fass gibt's nur vor Ort. Preise im Haus — komm vorbei, der Tresen wartet.</p>
                    </div>
                  </div>

                  <div className="menu-note" style={{ marginTop: 'var(--s4)' }}>
                    <span className="mn-mark" aria-hidden="true">+</span>
                    <div>
                      <h4>Dips &amp; Saucen</h4>
                      <p><b style={{ color: 'var(--gold)' }}>1,00&nbsp;€</b> &nbsp;Ketchup · Mayo · BBQ &nbsp;&nbsp;|&nbsp;&nbsp; <b style={{ color: 'var(--gold)' }}>1,50&nbsp;€</b> &nbsp;Butjersoße · Aioli · Cheese · White BBQ · Sriracha-Mayo · Sour Cream · Garlic &nbsp;&nbsp;|&nbsp;&nbsp; <b style={{ color: 'var(--gold)' }}>2,00&nbsp;€</b> &nbsp;Joppie · Trüffel-Mayo · Vegane Trüffel-Mayo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA BAND ───────────────────────────────────────── */}
        <section className="section events" data-od-id="menu-cta" style={{ textAlign: 'center' }}>
          <div className="container reveal" style={{ maxWidth: '680px' }}>
            <p className="eyebrow" style={{ justifyContent: 'center' }}>Hunger?</p>
            <h2 className="display" style={{ marginBottom: 'var(--s5)' }}>Smashed kommt<br />zu dir.</h2>
            <p className="lead" style={{ margin: '0 auto var(--s6)' }}>Liefern lassen oder vorbeikommen — Falkenstraße 11, mitten in Linden.</p>
            <div className="hero-cta" style={{ justifyContent: 'center' }}>
              <a className="btn btn-primary" href={WOLT} target="_blank" rel="noopener">Auf Wolt bestellen <span className="arrow" aria-hidden="true">→</span></a>
              <Link className="btn btn-secondary" to="/#visit">Besuch &amp; Öffnungszeiten</Link>
            </div>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ─────────────────────────────────────────────── */}
      <footer className="pagefoot" data-od-id="footer">
        <img className="foot-bg" src="/assets/footer.jpg" alt="" aria-hidden="true" loading="lazy" decoding="async" />
        <div className="container foot-inner">
          <div className="foot-word">BUTJER</div>
          <div className="foot-cols">
            <div>
              <p className="foot-tag">It's not just food. It's a feeling.</p>
              <p style={{ marginTop: '12px' }}>Smashed Burger, handgemacht in Linden, Hannover. Halal-Beef auf Martin's Potato Rolls.</p>
            </div>
            <div>
              <h5>Menü</h5>
              <a href="#cat-classics" data-scroll="">Smashed Classics</a>
              <a href="#cat-vegan" data-scroll="">Vegan</a>
              <a href="#cat-loaded" data-scroll="">Loaded Fries</a>
              <a href="#cat-drinks" data-scroll="">Drinks</a>
            </div>
            <div>
              <h5>Besuch</h5>
              <p>Falkenstraße 11<br />30449 Hannover</p>
              <p>Mo–Sa 15–22 Uhr<br />So 12–21 Uhr</p>
            </div>
            <div>
              <h5>Folgen</h5>
              <a href={IG} target="_blank" rel="noopener">Instagram @butjer_</a>
              <a href={WOLT} target="_blank" rel="noopener">Bestellen auf Wolt</a>
              <a href="tel:+4951121339062">+49 511 21339062</a>
            </div>
          </div>
          <div className="foot-legal">
            <span>© 2026 Butjer Smashed · Linden, Hannover</span>
            <span><Link to="/">Startseite</Link> &nbsp;·&nbsp; <a href="#">Impressum</a> &nbsp;·&nbsp; <a href="#">Datenschutz</a></span>
          </div>
        </div>
      </footer>
    </>
  )
}
