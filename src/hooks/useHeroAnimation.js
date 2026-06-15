import { useEffect } from 'react'

/* =============================================================================
   Hero — "Exploded Build"  (port of js/hero.js)
   Ingredient cutouts start scattered, fly in and assemble onto the burger on
   load (CSS @keyframes). Then JS owns each layer's transform: scroll
   re-explodes them outward + mouse adds a playful tilt. GPU transforms only.
   Pauses when offscreen. Full prefers-reduced-motion fallback.
   Runs after the Home DOM has mounted; tears everything down on unmount.
   ============================================================================= */
export default function useHeroAnimation() {
  useEffect(() => {
    const stage = document.getElementById('hero-stage')
    if (!stage) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const burger = document.getElementById('hero-burger')
    const ings = Array.prototype.slice.call(document.querySelectorAll('.hero .ingredient'))

    const assemble = (el) => el.classList.add('assembled')

    if (reduce) {
      ings.forEach(assemble)
      if (burger) burger.classList.add('assembled')
      return
    }

    const onAnimEnd = []
    ings.forEach((el) => {
      const h = () => assemble(el)
      el.addEventListener('animationend', h, { once: true })
      onAnimEnd.push([el, h])
    })
    let burgerAnimH = null
    if (burger) {
      burgerAnimH = () => burger.classList.add('assembled')
      burger.addEventListener('animationend', burgerAnimH, { once: true })
    }
    const safety = setTimeout(() => {
      ings.forEach(assemble)
      if (burger) burger.classList.add('assembled')
    }, 2200)

    const data = ings.map((el) => {
      const s = el.style
      return {
        el,
        dx: parseFloat(s.getPropertyValue('--dx')) || 0,
        dy: parseFloat(s.getPropertyValue('--dy')) || 0,
        dr: parseFloat(s.getPropertyValue('--dr')) || 0,
        depth: parseFloat(el.getAttribute('data-depth')) || 0.5,
      }
    })

    let tf = 0, f = 0, tmx = 0, tmy = 0, mx = 0, my = 0
    let visible = true
    let raf = 0

    const onScroll = () => {
      const r = stage.getBoundingClientRect()
      tf = Math.min(1, Math.max(0, -r.top / ((window.innerHeight || 1) * 0.9)))
    }
    const onMove = (e) => {
      tmx = (e.clientX / window.innerWidth - 0.5) * 2
      tmy = (e.clientY / window.innerHeight - 0.5) * 2
    }
    const onLeave = () => { tmx = 0; tmy = 0 }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('pointermove', onMove, { passive: true })
    stage.addEventListener('pointerleave', onLeave)

    const loop = () => {
      raf = requestAnimationFrame(loop)
      if (!visible) return
      f += (tf - f) * 0.12
      mx += (tmx - mx) * 0.06
      my += (tmy - my) * 0.06
      for (let i = 0; i < data.length; i++) {
        const d = data[i]
        const k = f * d.depth * 1.2
        const x = d.dx * k + mx * 26 * d.depth
        const y = d.dy * k + my * 20 * d.depth
        const rot = d.dr * k + mx * 4 * d.depth
        d.el.style.transform =
          'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px) rotate(' +
          rot.toFixed(1) + 'deg) scale(' + (1 - 0.12 * f).toFixed(3) + ')'
      }
      if (burger) {
        burger.style.transform =
          'translate(' + (mx * 10).toFixed(1) + 'px,' + (my * 7 - f * 42).toFixed(1) +
          'px) rotate(' + (mx * 3 - f * 4).toFixed(2) + 'deg) scale(' + (1 - 0.05 * f).toFixed(3) + ')'
      }
    }

    let io = null
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver((e) => { visible = e[0].isIntersecting }, { threshold: 0.01 })
      io.observe(stage)
    }
    onScroll()
    loop()

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(safety)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('pointermove', onMove)
      stage.removeEventListener('pointerleave', onLeave)
      onAnimEnd.forEach(([el, h]) => el.removeEventListener('animationend', h))
      if (burger && burgerAnimH) burger.removeEventListener('animationend', burgerAnimH)
      if (io) io.disconnect()
    }
  }, [])
}
