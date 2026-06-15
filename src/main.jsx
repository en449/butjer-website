import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles.css'

// No <StrictMode>: the ported hero/site effects attach rAF loops + window
// listeners that we tear down on unmount; StrictMode's double-invoke in dev
// would briefly run two rAF loops. Behaviour matches the original site.
const root = document.getElementById('root')
const tree = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

// Production pages are prerendered (SSG) → hydrate the existing markup.
// Dev server ships an empty #root → mount fresh.
if (root.firstElementChild) {
  hydrateRoot(root, tree)
} else {
  createRoot(root).render(tree)
}
