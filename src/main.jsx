import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles.css'

// No <StrictMode>: the ported hero/site effects attach rAF loops + window
// listeners that we tear down on unmount; StrictMode's double-invoke in dev
// would briefly run two rAF loops. Behaviour matches the original site.
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
