import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/logo_impera.png" alt="IMPERA - Ideas que predominan" />
        </div>
        <nav className="nav">
          <a href="#nosotros" className="nav-link">Sobre nosotros</a>
          <a href="#servicios" className="nav-link">Servicios</a>
          <a href="#blog" className="nav-link">Blog</a>
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