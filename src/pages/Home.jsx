import { Link } from 'react-router-dom'
import useSiteInteractions from '../hooks/useSiteInteractions.js'
import useHeroAnimation from '../hooks/useHeroAnimation.js'

const WOLT = 'https://wolt.com/de/deu/hanover/restaurant/butjer'
const IG = 'https://www.instagram.com/butjer_/'

export default function Home() {
  useSiteInteractions()
  useHeroAnimation()

  return (
    <>
      {/* ─── NAV ───────────────────────────────────────────────── */}
      <header className="topnav" data-od-id="topnav">
        <div className="container topnav-inner">
          <a href="#top" className="brand" data-scroll="">BUTJER</a>
          <nav aria-label="Hauptnavigation">
            <a href="#story" data-scroll="">Story</a>
            <Link to="/speisekarte">Speisekarte</Link>
            <a href="#signatures" data-scroll="">Signatures</a>
            <a href="#events" data-scroll="">Events</a>
            <a href="#visit" data-scroll="">Besuch</a>
          </nav>
          <a className="btn btn-primary nav-cta" href={WOLT} target="_blank" rel="noopener">Auf Wolt bestellen</a>
          <button className="nav-toggle" id="nav-toggle" aria-label="Menü öffnen" aria-expanded="false" aria-controls="menu-overlay">
            <span className="nav-toggle-bars" aria-hidden="true"></span>
          </button>
        </div>
      </header>

      {/* ─── Overlay menu ──────────────────────────────────────── */}
      <div className="menu-overlay" id="menu-overlay" hidden>
        <nav className="menu-overlay-nav" aria-label="Menü">
          <a href="#story" data-scroll="" data-menu-link=""><span className="mo-no">01</span>Story</a>
          <Link to="/speisekarte" data-menu-link=""><span className="mo-no">02</span>Speisekarte</Link>
          <a href="#signatures" data-scroll="" data-menu-link=""><span className="mo-no">03</span>Signatures</a>
          <a href="#events" data-scroll="" data-menu-link=""><span className="mo-no">04</span>Events</a>
          <a href="#visit" data-scroll="" data-menu-link=""><span className="mo-no">05</span>Karte &amp; Besuch</a>
        </nav>
        <div className="menu-overlay-foot">
          <a className="btn btn-primary" href={WOLT} target="_blank" rel="noopener" data-menu-link="">Auf Wolt bestellen <span className="arrow" aria-hidden="true">→</span></a>
          <div className="menu-overlay-meta">
            <a href={IG} target="_blank" rel="noopener" data-menu-link="">Instagram @butjer_</a>
            <a href="tel:+4951121339062" data-menu-link="">+49 511 21339062</a>
            <span>Falkenstraße 11 · Linden, Hannover</span>
          </div>
        </div>
      </div>

      <main id="top">
        {/* ─── 1 · HERO ──────────────────────────────────────── */}
        <section className="hero" data-od-id="hero" aria-label="Butjer Smashed Burger">
          <div className="ingredient" data-depth="0.9" style={{ top: '14%', left: '12%', '--rot': '-8deg', '--bob': '6.5s', '--dx': '-150px', '--dy': '-110px', '--dr': '-50deg', '--d': '.05s' }}><div className="ing-inner"><img src="/assets/ingredients/ingredient-02.png" alt="" loading="lazy" decoding="async" /></div></div>
          <div className="ingredient deep" data-depth="0.45" style={{ top: '22%', right: '10%', '--rot': '10deg', '--bob': '8.5s', '--dx': '160px', '--dy': '-90px', '--dr': '55deg', '--d': '.13s' }}><div className="ing-inner"><img src="/assets/ingredients/ingredient-04.png" alt="" loading="lazy" decoding="async" /></div></div>
          <div className="ingredient" data-depth="0.8" style={{ bottom: '30%', left: '8%', '--rot': '6deg', '--bob': '7.5s', '--dx': '-160px', '--dy': '110px', '--dr': '-60deg', '--d': '.21s' }}><div className="ing-inner"><img src="/assets/ingredients/ingredient-05.png" alt="" loading="lazy" decoding="async" /></div></div>
          <div className="ingredient deep" data-depth="0.5" style={{ bottom: '34%', right: '13%', '--rot': '-12deg', '--bob': '9s', '--dx': '150px', '--dy': '120px', '--dr': '60deg', '--d': '.29s' }}><div className="ing-inner"><img src="/assets/ingredients/ingredient-03.png" alt="" loading="lazy" decoding="async" /></div></div>
          <div className="ingredient" data-depth="0.65" style={{ top: '40%', right: '6%', '--rot': '18deg', '--bob': '7s', '--dx': '180px', '--dy': '0px', '--dr': '70deg', '--d': '.37s' }}><div className="ing-inner"><img src="/assets/ingredients/ingredient-06.png" alt="" loading="lazy" decoding="async" /></div></div>

          <div className="hero-stage" id="hero-stage">
            <div className="hero-glow"></div>
            <div className="hero-burger-wrap">
              <img id="hero-burger" className="hero-burger" src="/assets/burger-hero.png" alt="Smashed Burger, frisch gestapelt" style={{ width: '400px', height: '400px', paddingTop: '0px', paddingBottom: '0px' }} />
            </div>
            <div className="hero-contact"></div>
          </div>

          <h1 className="hero-wordmark" aria-label="Butjer">BUTJER</h1>

          <div className="hero-foot">
            <span className="status-pill" id="status-pill" role="status">
              <span className="status-dot" aria-hidden="true"></span>
              <span className="status-label">Öffnungszeiten werden geladen …</span>
            </span>
            <p className="hero-tagline">It's not just food.<br /><em>It's a feeling.</em></p>
            <div className="hero-cta">
              <a className="btn btn-primary" href={WOLT} target="_blank" rel="noopener">Auf Wolt bestellen <span className="arrow" aria-hidden="true">→</span></a>
              <Link className="btn btn-secondary" to="/speisekarte">Speisekarte</Link>
            </div>
          </div>

          <span className="scroll-hint" aria-hidden="true">Scrollen<span className="line"></span></span>
        </section>

        {/* ─── 2 · STORY ─────────────────────────────────────── */}
        <section className="section story" id="story" data-od-id="story">
          <span className="section-no" style={{ top: '6%', right: '2%' }}>02</span>
          <div className="container story-grid">
            <div className="reveal">
              <p className="eyebrow">Die Geschichte</p>
              <h2 className="story-quote">Aus der Not geboren —<span>aus Überzeugung gewachsen.</span></h2>
              <div className="story-body">
                <p className="lead">Mitten in der Pandemie, als alles stillstand, hat Diana Schweinfort Butjer gegründet. Kein Konzern, kein Franchise — eine Nachbarschafts-Idee aus Linden, die geblieben ist.</p>
                <p>Jeder Patty wird auf der Plancha smashed: dünn, mit krosser Kruste, Halal-Beef auf Martin's Potato Rolls. Handgemacht, ehrlich, jeden Tag frisch. Dazu eine Bar mit Charakter statt Fast-Food-Glanz.</p>
              </div>
              <div className="story-stats">
                <div className="story-stat">
                  <div className="n num">2020</div>
                  <div className="l">In der Pandemie gegründet — in Linden geblieben</div>
                </div>
                <div className="story-stat">
                  <div className="n">100%</div>
                  <div className="l">Halal-Beef auf Martin's Potato Rolls</div>
                </div>
              </div>
              <div className="story-sign">
                <span className="name">Diana Schweinfort</span>
                <span className="role">Gründerin · Butjer Linden</span>
              </div>
            </div>
            <figure className="story-figure reveal" data-delay="1">
              <img src="/assets/venue.jpg" alt="Warmer, dunkler Gastraum mit Holzvertäfelung im Butjer in Linden" loading="lazy" decoding="async" />
              <figcaption>Der Laden · Falkenstraße 11</figcaption>
            </figure>
          </div>
        </section>

        {/* ─── 3 · MENU TEASER ───────────────────────────────── */}
        <section className="section menu-teaser" id="menu" data-od-id="menu-teaser">
          <span className="section-no" style={{ top: '2%', left: '1%' }}>03</span>
          <div className="container teaser-grid">
            <div className="reveal">
              <p className="eyebrow">Speisekarte</p>
              <h2 className="display">Smashed, geladen,<br />handgemacht.</h2>
              <p className="lead" style={{ marginTop: 'var(--s5)' }}>Über 30 Gerichte — Halal-Beef auf Martin's Potato Rolls, Loaded Fries zum Teilen, eine ernstzunehmende vegane Ecke und eine Bar mit Charakter.</p>
              <div className="teaser-chips">
                <Link to="/speisekarte#cat-classics">Smashed Classics</Link>
                <Link to="/speisekarte#cat-vegan">Vegan</Link>
                <Link to="/speisekarte#cat-loaded">Loaded Fries</Link>
                <Link to="/speisekarte#cat-sides">Sides &amp; Salat</Link>
                <Link to="/speisekarte#cat-drinks">Drinks</Link>
              </div>
              <Link className="btn btn-primary" to="/speisekarte">Ganze Speisekarte <span className="arrow" aria-hidden="true">→</span></Link>
            </div>
            <div className="teaser-list reveal" data-delay="1" aria-label="Auswahl beliebter Gerichte">
              <div className="ti"><div className="n">Smashed Classic<small>Der Anfang von allem</small></div><div className="p num">12,50&nbsp;€</div></div>
              <div className="ti"><div className="n">Smashed Capo<small>Mozzarella, Himbeer-Chutney, Aioli</small></div><div className="p num">14,70&nbsp;€</div></div>
              <div className="ti"><div className="n">Yakuza Fries<small>Loaded — perfekt zum Teilen</small></div><div className="p num">15,00&nbsp;€</div></div>
              <div className="ti"><div className="n">The Truffle Mushroom<small>100% vegan</small></div><div className="p num">14,50&nbsp;€</div></div>
              <div className="ti"><div className="n">Butjer Fried Chicken<small>Geröstetes Halal-Chicken</small></div><div className="p num">14,70&nbsp;€</div></div>
            </div>
          </div>
        </section>

        {/* ─── 4 · SIGNATURES ────────────────────────────────── */}
        <section className="section sig" id="signatures" data-od-id="signatures">
          <span className="section-no" style={{ top: '2%', left: '1%' }}>04</span>
          <div className="container">
            <div className="menu-head reveal" style={{ marginBottom: 'var(--s7)' }}>
              <div>
                <p className="eyebrow">Hausnummern</p>
                <h2 className="display">Die, für die man<br />wiederkommt.</h2>
              </div>
            </div>
            <div className="sig-grid">
              <article className="sig-card feature reveal">
                <img src="/assets/burger2.jpg" alt="Smashed Classic im Butcher-Paper auf rotem Hintergrund" loading="lazy" decoding="async" />
                <div className="sig-body">
                  <span className="sig-kicker">Der Klassiker</span>
                  <h3>Smashed Classic</h3>
                  <p>Zwei dünn gesmashte 80-g-Patties, doppelt American Cheese, Butjersoße. So fing alles an.</p>
                  <div className="sig-price num">12,50&nbsp;€</div>
                </div>
              </article>
              <article className="sig-card tall reveal" data-delay="1">
                <img src="/assets/footer.jpg" alt="Frisch frittierte, krosse Pommes auf Butcher-Paper" loading="lazy" decoding="async" />
                <div className="sig-body">
                  <span className="sig-kicker">Zum Teilen</span>
                  <h3>Yakuza Fries</h3>
                  <p>Crunchy Fries, Chicken Tender, Cheese-Soße, Sriracha-Mayo, Sesam-Teriyaki &amp; Koriander.</p>
                  <div className="sig-price num">15,00&nbsp;€</div>
                </div>
              </article>
              <article className="sig-card small reveal" data-delay="1">
                <img src="/assets/burger1.jpg" alt="Butjer-Team mit Smashed Burgern vor dem Laden in Linden" loading="lazy" decoding="async" />
                <div className="sig-body">
                  <span className="sig-kicker">Mit Charakter</span>
                  <h3>Smashed Capo</h3>
                  <p>Gebackener Mozzarella, Rucola, rote Zwiebeln, Himbeer-Chutney &amp; Aioli. Süß trifft herzhaft.</p>
                  <div className="sig-price num">14,70&nbsp;€</div>
                </div>
              </article>
              <article className="sig-card wide reveal" data-delay="2" style={{ background: 'linear-gradient(180deg, var(--oxblood), var(--deep-red))' }}>
                <div className="sig-body">
                  <span className="sig-kicker">100% pflanzlich</span>
                  <h3>The Truffle Mushroom</h3>
                  <p>Erbsenprotein-Patties, veganer Cheddar, vegane Trüffel-Mayo &amp; Cashew-Champignon-Creme. <span className="script" style={{ fontSize: '1.4em', display: 'block', marginTop: '8px' }}>vegan kann auch laut.</span></p>
                  <div className="sig-price num">14,50&nbsp;€</div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ─── 5 · EVENTS & SPACES ───────────────────────────── */}
        <section className="section events" id="events" data-od-id="events">
          <div className="container">
            <div className="menu-head reveal" style={{ marginBottom: 'var(--s7)' }}>
              <div>
                <p className="eyebrow">Events &amp; Räume</p>
                <h2 className="display">Mehr als ein<br />Burgerladen.</h2>
              </div>
              <a className="btn btn-secondary" href="mailto:info@butjer-linden.de?subject=Anfrage%20Event%20%2F%20Catering">Anfrage senden</a>
            </div>
            <div className="events-grid">
              <article className="event-card text-only reveal">
                <div>
                  <span className="ec-tag">Wöchentlich</span>
                  <h3>Pub Quiz</h3>
                  <p>Teams, kalte Drinks, Bragging Rights. Tische füllen sich schnell — früh da sein lohnt.</p>
                </div>
                <div className="ec-when">Jeden Dienstag · <b>19:30 Uhr</b></div>
              </article>
              <article className="event-card reveal" data-delay="1">
                <div className="ec-media"><img src="/assets/foodtruck.png" alt="Butjer Food Truck für Catering und Events" loading="lazy" decoding="async" /></div>
                <div className="ec-body">
                  <span className="ec-tag">On the road</span>
                  <h3>Food Truck &amp; Catering</h3>
                  <p>Wir bringen Smashed zu deinem Event — Firmenfeier, Festival oder private Party.</p>
                </div>
              </article>
              <article className="event-card reveal" data-delay="2">
                <div className="ec-media"><img src="/assets/event.jpg" alt="Warmer Barbereich mit Holzhockern zum Mieten" loading="lazy" decoding="async" /></div>
                <div className="ec-body">
                  <span className="ec-tag">Location mieten</span>
                  <h3>Deine Feier bei uns</h3>
                  <p>Bis zu <b style={{ color: 'var(--cream)' }}>50 Plätze</b> drinnen, <b style={{ color: 'var(--cream)' }}>40</b> draußen. Geburtstag, Crew-Dinner, After-Work.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ─── 6 · VISIT ─────────────────────────────────────── */}
        <section className="section visit" id="visit" data-od-id="visit">
          <span className="section-no" style={{ top: 0, right: '1%' }}>06</span>
          <div className="container">
            <div className="menu-head reveal" style={{ marginBottom: 'var(--s7)' }}>
              <div>
                <p className="eyebrow">Besuch</p>
                <h2 className="display">Falkenstraße 11,<br />mitten in Linden.</h2>
              </div>
            </div>
            <div className="visit-grid">
              <div className="visit-info reveal">
                <dl>
                  <div className="visit-row">
                    <dt>Adresse</dt>
                    <dd>Falkenstraße 11<br />30449 Hannover · Linden</dd>
                  </div>
                  <div className="visit-row">
                    <dt>Öffnungszeiten</dt>
                    <dd>
                      <div className="hours-line" data-day="1"><span>Montag</span><b>15:00 – 22:00</b></div>
                      <div className="hours-line" data-day="2"><span>Dienstag</span><b>15:00 – 22:00</b></div>
                      <div className="hours-line" data-day="3"><span>Mittwoch</span><b>15:00 – 22:00</b></div>
                      <div className="hours-line" data-day="4"><span>Donnerstag</span><b>15:00 – 22:00</b></div>
                      <div className="hours-line" data-day="5"><span>Freitag</span><b>15:00 – 22:00</b></div>
                      <div className="hours-line" data-day="6"><span>Samstag</span><b>15:00 – 22:00</b></div>
                      <div className="hours-line" data-day="0"><span>Sonntag</span><b>12:00 – 21:00</b></div>
                    </dd>
                  </div>
                  <div className="visit-row">
                    <dt>Kontakt</dt>
                    <dd><a href="tel:+4951121339062">+49 511 21339062</a><br /><a href="mailto:info@butjer-linden.de">info@butjer-linden.de</a></dd>
                  </div>
                </dl>
                <div className="visit-cta">
                  <a className="btn btn-primary" href={WOLT} target="_blank" rel="noopener">Auf Wolt bestellen <span className="arrow" aria-hidden="true">→</span></a>
                  <a className="btn btn-secondary" href={IG} target="_blank" rel="noopener">@butjer_</a>
                </div>
              </div>

              <div className="map-card reveal" data-delay="1" aria-label="Karte: Falkenstraße 11, Linden">
                <span className="road r1"></span><span className="road r2"></span><span className="road r3"></span>
                <div className="map-pin">
                  <div className="dot" aria-hidden="true"></div>
                  <div className="place">BUTJER</div>
                  <div className="addr">Falkenstraße 11 · Linden</div>
                </div>
                <a className="map-link" href="https://www.google.com/maps/search/?api=1&query=Falkenstra%C3%9Fe+11+30449+Hannover" target="_blank" rel="noopener">In Google Maps öffnen →</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}

export function SiteFooter() {
  return (
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
            <Link to="/speisekarte#cat-classics">Smashed Classics</Link>
            <Link to="/speisekarte#cat-vegan">Vegan</Link>
            <Link to="/speisekarte#cat-loaded">Loaded Fries</Link>
            <Link to="/speisekarte">Ganze Speisekarte</Link>
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
          <span><a href="#">Impressum</a> &nbsp;·&nbsp; <a href="#">Datenschutz</a></span>
        </div>
      </div>
    </footer>
  )
}
