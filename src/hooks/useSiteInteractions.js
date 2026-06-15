import { useEffect } from 'react'

/* =============================================================================
   BUTJER — interactions  (port of js/main.js)
   Sticky nav frost · overlay menu · reveal choreography · in-page smooth nav
   · menu rail scrollspy · wordmark counter-parallax · open/closed status.
   Element guards mean the same hook runs on both pages; per-page parts that
   have no matching DOM (e.g. the overlay menu only exists on Home) simply
   no-op. Everything is torn down on unmount / route change.
   ============================================================================= */
export default function useSiteInteractions() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const cleanups = []

    /* ── Sticky nav: frost on scroll ─────────────────────────────────────── */
    const nav = document.querySelector('.topnav')
    const onNavScroll = () => {
      if (!nav) return
      nav.classList.toggle('scrolled', window.scrollY > 40)
      nav.classList.toggle('show-brand', window.scrollY > (window.innerHeight || 600) * 0.6)
    }
    window.addEventListener('scroll', onNavScroll, { passive: true })
    cleanups.push(() => window.removeEventListener('scroll', onNavScroll))
    onNavScroll()

    /* ── Overlay menu (top-right toggle) ─────────────────────────────────── */
    const navToggle = document.getElementById('nav-toggle')
    const menuOverlay = document.getElementById('menu-overlay')
    if (navToggle && menuOverlay) {
      const menuLinks = menuOverlay.querySelectorAll('.menu-overlay-nav a')
      menuLinks.forEach((a, i) => a.style.setProperty('--d', i * 45 + 'ms'))

      const openMenu = () => {
        menuOverlay.hidden = false
        requestAnimationFrame(() => menuOverlay.classList.add('open'))
        navToggle.setAttribute('aria-expanded', 'true')
        navToggle.setAttribute('aria-label', 'Menü schließen')
        document.body.classList.add('menu-open')
      }
      const closeMenu = () => {
        menuOverlay.classList.remove('open')
        navToggle.setAttribute('aria-expanded', 'false')
        navToggle.setAttribute('aria-label', 'Menü öffnen')
        document.body.classList.remove('menu-open')
        const done = () => { menuOverlay.hidden = true; menuOverlay.removeEventListener('transitionend', done) }
        if (reduceMotion) menuOverlay.hidden = true
        else menuOverlay.addEventListener('transitionend', done)
      }
      const isOpen = () => navToggle.getAttribute('aria-expanded') === 'true'

      const onToggle = () => (isOpen() ? closeMenu() : openMenu())
      const onOverlayClick = () => closeMenu()
      const onKey = (e) => { if (e.key === 'Escape' && isOpen()) closeMenu() }

      navToggle.addEventListener('click', onToggle)
      menuOverlay.addEventListener('click', onOverlayClick)
      document.addEventListener('keydown', onKey)
      cleanups.push(() => {
        navToggle.removeEventListener('click', onToggle)
        menuOverlay.removeEventListener('click', onOverlayClick)
        document.removeEventListener('keydown', onKey)
        document.body.classList.remove('menu-open')
      })
    }

    /* ── Reveal choreography (asymmetric enter/exit) ─────────────────────── */
    const revealEls = document.querySelectorAll('.reveal')
    if ('IntersectionObserver' in window && !reduceMotion) {
      const ro = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add('in')
              en.target.classList.remove('out')
            } else {
              en.target.classList.add('out')
            }
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
      )
      revealEls.forEach((el) => ro.observe(el))
      cleanups.push(() => ro.disconnect())
    } else {
      revealEls.forEach((el) => el.classList.add('in'))
    }

    /* ── Smooth in-page nav ──────────────────────────────────────────────── */
    const scrollAnchors = []
    document.querySelectorAll('a[data-scroll]').forEach((a) => {
      const onClick = (e) => {
        const id = a.getAttribute('href')
        if (!id || id.charAt(0) !== '#') return
        const t = document.querySelector(id)
        if (!t) return
        e.preventDefault()
        const top = t.getBoundingClientRect().top + window.scrollY - 80
        window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' })
      }
      a.addEventListener('click', onClick)
      scrollAnchors.push([a, onClick])
    })
    cleanups.push(() => scrollAnchors.forEach(([a, h]) => a.removeEventListener('click', h)))

    /* ── Menu rail scrollspy ─────────────────────────────────────────────── */
    const railLinks = Array.prototype.slice.call(document.querySelectorAll('.menu-rail a'))
    const cats = railLinks
      .map((a) => document.querySelector(a.getAttribute('href')))
      .filter(Boolean)
    if (cats.length && 'IntersectionObserver' in window) {
      const spy = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (!en.isIntersecting) return
            const id = '#' + en.target.id
            railLinks.forEach((l) => l.classList.toggle('active', l.getAttribute('href') === id))
          })
        },
        { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
      )
      cats.forEach((c) => spy.observe(c))
      cleanups.push(() => spy.disconnect())
    }

    /* ── Wordmark counter-parallax on scroll ─────────────────────────────── */
    const word = document.querySelector('.hero-wordmark')
    if (word && !reduceMotion) {
      const onWordScroll = () => {
        const y = window.scrollY
        if (y < window.innerHeight) {
          word.style.transform = 'translateY(' + y * 0.12 + 'px)'
          word.style.opacity = String(Math.max(0, 1 - y / (window.innerHeight * 0.85)))
        }
      }
      window.addEventListener('scroll', onWordScroll, { passive: true })
      cleanups.push(() => window.removeEventListener('scroll', onWordScroll))
    }

    /* ── Open / closed status from opening hours ─────────────────────────── */
    const hours = {
      0: [12 * 60, 21 * 60], 1: [15 * 60, 22 * 60], 2: [15 * 60, 22 * 60],
      3: [15 * 60, 22 * 60], 4: [15 * 60, 22 * 60], 5: [15 * 60, 22 * 60], 6: [15 * 60, 22 * 60],
    }
    const dayNames = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
    const fmt = (min) => {
      const h = Math.floor(min / 60), m = min % 60
      return (h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m)
    }
    const pill = document.getElementById('status-pill')
    if (pill) {
      const now = new Date()
      const day = now.getDay()
      const mins = now.getHours() * 60 + now.getMinutes()
      const todayH = hours[day]
      const open = mins >= todayH[0] && mins < todayH[1]
      const label = pill.querySelector('.status-label')
      if (open) {
        pill.classList.add('is-open')
        label.textContent = 'Jetzt geöffnet · bis ' + fmt(todayH[1]) + ' Uhr'
      } else {
        pill.classList.add('is-closed')
        let di = day, addDays = 0, openMin
        if (mins < todayH[0]) {
          openMin = todayH[0]
        } else {
          for (let k = 1; k <= 7; k++) {
            const nd = (day + k) % 7
            if (hours[nd]) { di = nd; addDays = k; openMin = hours[nd][0]; break }
          }
        }
        const prefix = addDays === 0 ? 'heute' : addDays === 1 ? 'morgen' : dayNames[di]
        label.textContent = 'Geschlossen · öffnet ' + prefix + ' ' + fmt(openMin) + ' Uhr'
      }
      const todayRow = document.querySelector('.hours-line[data-day="' + day + '"]')
      if (todayRow) todayRow.classList.add('today')
    }

    return () => cleanups.forEach((fn) => fn())
  }, [])
}
