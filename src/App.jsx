import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Speisekarte from './pages/Speisekarte.jsx'

/* Cross-route scroll: jump to top on navigation, or to a #hash target
   (e.g. /speisekarte links back to "/#story"). Mirrors the original
   multi-page anchors now that everything is one SPA. */
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80
        window.scrollTo({ top, behavior: 'auto' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/speisekarte" element={<Speisekarte />} />
      </Routes>
    </>
  )
}
