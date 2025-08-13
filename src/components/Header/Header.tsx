import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src="/logo_impera.png" alt="IMPERA - Ideas que predominan" />
          </Link>
        </div>
        
        {/* Hamburger Menu Button */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link to="/sobre-nosotros" className="nav-link" onClick={closeMenu}>Sobre nosotros</Link>
          <Link to="/servicios" className="nav-link" onClick={closeMenu}>Servicios</Link>
          <a href="#blog" className="nav-link" onClick={closeMenu}>Blog</a>
          <button className="cta-button">
            <span>Contáctanos</span>
            <div className="button-icon">→</div>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header