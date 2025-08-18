import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SobreNosotros from './pages/SobreNosotros'
import Servicios from './pages/Servicios'
import DetallesDeServicio from './pages/DetallesDeServicio'
import Contacto from './pages/Contacto'
import Blog from './pages/Blog'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/detalles-de-servicio" element={<DetallesDeServicio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App