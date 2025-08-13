import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './Header.css'

const Header = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
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
          {isHomePage ? (
            <>
              <a href="#nosotros" className="nav-link" onClick={closeMenu}>Sobre nosotros</a>
              <a href="#servicios" className="nav-link" onClick={closeMenu}>Servicios</a>
              <a href="#blog" className="nav-link" onClick={closeMenu}>Blog</a>
            </>
          ) : (
            <>
              <Link to="/sobre-nosotros" className="nav-link" onClick={closeMenu}>Sobre nosotros</Link>
              <Link to="/#servicios" className="nav-link" onClick={closeMenu}>Servicios</Link>
              <Link to="/#blog" className="nav-link" onClick={closeMenu}>Blog</Link>
            </>
          )}
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