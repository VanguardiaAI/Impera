import './Hero.css'

const Hero = () => {
  const services = [
    {
      id: 1,
      icon: 'phone',
      title: 'Telefonía Corporativa',
      color: '#ff6b6b'
    },
    {
      id: 2,
      icon: 'support_agent',
      title: 'Centros de Contacto',
      color: '#4ecdc4'
    },
    {
      id: 3,
      icon: 'dns',
      title: 'Infraestructura TI',
      color: '#45aaf2'
    },
    {
      id: 4,
      icon: 'code',
      title: 'Desarrollo de software',
      color: '#fdcb6e'
    }
  ]

  return (
    <section className="hero">
      <div className="hero-background">
        <img src="/background.png" alt="World map" />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          Soluciones Tecnológicas A<br />
          La Medida De Tu Negocio
        </h1>
        <p className="hero-description">
          En IMPERA Diseñamos, Desarrollamos Y Gestionamos Servicios De Telecomunicaciones, Infraestructura TI<br />
          Y Software Para Empresas Que Buscan Crecer Con Confianza, Eficiencia Y Acompañamiento Real.
        </p>
        <div className="hero-buttons">
          <button className="hero-cta primary">
            <span>Contáctanos</span>
            <div className="button-icon">→</div>
          </button>
          <button className="hero-cta secondary">
            <span>Servicios</span>
            <div className="button-icon">→</div>
          </button>
        </div>
        
        <div className="hero-services">
          <h3 className="services-subtitle">Te ayudamos con:</h3>
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-item">
                <div className="service-icon" style={{ backgroundColor: service.color + '20' }}>
                  <span className="material-icons" style={{ color: service.color, fontSize: '16px' }}>
                    {service.icon}
                  </span>
                </div>
                <span className="service-name">{service.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero