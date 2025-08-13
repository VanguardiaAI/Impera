import './About.css'

const About = () => {
  return (
    <section className="about">
      <div className="about-ellipse">
        <img src="/Ellipse.png" alt="" />
      </div>
      <div className="about-container">
        <div className="about-content">
          <div className="about-image-wrapper">
            <img src="/section1.webp" alt="Equipo celebrando" />
            <div className="success-card">
              <div className="success-header">Casos de Éxito</div>
              <div className="success-content">
                <div className="avatars-group">
                  <img src="https://i.pravatar.cc/60?img=1" alt="" />
                  <img src="https://i.pravatar.cc/60?img=2" alt="" />
                  <img src="https://i.pravatar.cc/60?img=3" alt="" />
                  <img src="https://i.pravatar.cc/60?img=4" alt="" />
                  <img src="https://i.pravatar.cc/60?img=5" alt="" />
                  <img src="https://i.pravatar.cc/60?img=6" alt="" />
                </div>
                <div className="success-text">
                  <div className="stars"><img src="/stars.png" alt="5 estrellas" style={{ height: '12px', width: 'auto', display: 'inline-block' }} /></div>
                  <div className="count">+200</div>
                  <div className="label">Clientes Satisfechos</div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-text">
            <h4 className="about-label">QUIENES SOMOS</h4>
            <h2 className="about-title">
              Somos Una Empresa Seria,<br />
              Honesta Y Comprometida
            </h2>
            <p className="about-description">
              En IMPERA Diseñamos, Desarrollamos Y Gestionamos Servicios De
              Telecomunicaciones, Infraestructura TI Y Software Para Empresas Que Buscan Crecer
              Con Confianza, Eficiencia Y Acompañamiento Real.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About