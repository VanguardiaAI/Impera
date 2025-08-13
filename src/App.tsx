import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SobreNosotros from './pages/SobreNosotros'
import Servicios from './pages/Servicios'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/servicios" element={<Servicios />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App