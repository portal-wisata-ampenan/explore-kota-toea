import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Menu from './Pages/Menu.jsx'
import Artikel from './Pages/Artikel.jsx'
import Spots from './Pages/Spots.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Router>
        <Routes>
          <Route path="/home" element={<App />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/photo-spots" element={<Spots />} />
          <Route path="/history" element={<Artikel />} />
        </Routes>
      </Router>
  </StrictMode>,
)
