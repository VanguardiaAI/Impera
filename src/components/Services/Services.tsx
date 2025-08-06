import './Services.css'

const Services = () => {
  const services = [
    {
      id: 1,
      icon: '📞',
      title: 'Telefonía Corporativa',
      color: '#ff6b6b'
    },
    {
      id: 2,
      icon: '🏢',
      title: 'Centros de Contacto',
      color: '#4ecdc4'
    },
    {
      id: 3,
      icon: '🔧',
      title: 'Infraestructura TI',
      color: '#45aaf2'
    },
    {
      id: 4,
      icon: '💻',
      title: 'Desarrollo de software',
      color: '#fdcb6e'
    }
  ]

  return (
    <section className="services">
      <div className="services-container">
        <h2 className="services-title">Te ayudamos con:</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div 
                className="service-icon" 
                style={{ backgroundColor: `${service.color}20` }}
              >
                <span>{service.icon}</span>
              </div>
              <h3 className="service-name">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services