import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-cta-section">
          <div className="footer-cta-container">
            <div className="footer-cta-content">
              <h2 className="footer-cta-title">Lo Que Hacemos Por Ti</h2>
              <p className="footer-cta-description">
                Si Buscas Una Empresa Que Entienda Tus Necesidades, Que Trabaje Con<br />
                Profesionalismo Y Que Realmente Se Involucre En Tu Crecimiento, Hablemos.
              </p>
              <button className="footer-cta-button">
                <span>Contáctanos</span>
                <div className="button-icon">→</div>
              </button>
            </div>
            <img src="/Group.png" alt="" className="footer-cta-decoration" />
          </div>
        </div>
        
        <div className="footer-main">
          <div className="footer-container">
            <div className="footer-content">
              <div className="footer-left">
                <p className="footer-copyright">
                  © 2025 Impera. Todos los derechos reservados.
                </p>
              </div>
              
              <div className="footer-right">
                <nav className="footer-nav">
                  <a href="#" className="footer-link">Sobre nosotros</a>
                  <a href="#" className="footer-link">Servicios</a>
                  <a href="#" className="footer-link">Blog</a>
                </nav>
                <button className="footer-contact-button">
                  <span>Contáctanos</span>
                  <div className="button-icon">→</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer