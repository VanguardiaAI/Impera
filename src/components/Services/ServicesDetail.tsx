import './ServicesDetail.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

interface Service {
  id: number
  title: string
  description: string
  isOpen: boolean
}

const ServicesDetail = () => {
  const [services, setServices] = useState<Service[]>([
    {
      id: 1,
      title: 'Telefonía Corporativa',
      description: 'En IMPERA Brindamos Soluciones Completas En Áreas Clave De La Transformación Digital Empresarial. Acompañamos A Empresas De Todos Los Tamaños Con Servicios Diseñados Para Optimizar Procesos, Integrar Sistemas.',
      isOpen: true
    },
    {
      id: 2,
      title: 'Centros De Contacto',
      description: 'Implementamos soluciones integrales de contact center con tecnología de vanguardia. Gestionamos operaciones multicanal, optimizamos la experiencia del cliente y proporcionamos análisis detallados para mejorar continuamente el servicio.',
      isOpen: false
    },
    {
      id: 3,
      title: 'Comunicaciones Unificadas',
      description: 'Integramos todas las comunicaciones empresariales en una plataforma única. Videoconferencias, mensajería instantánea, correo electrónico y telefonía trabajando en perfecta sincronía para maximizar la productividad de tu equipo.',
      isOpen: false
    },
    {
      id: 4,
      title: 'Infraestructura TI',
      description: 'Diseñamos, implementamos y mantenemos infraestructuras tecnológicas robustas y escalables. Servidores, redes, almacenamiento y seguridad configurados para soportar el crecimiento de tu negocio.',
      isOpen: false
    },
    {
      id: 5,
      title: 'Desarrollo De Software',
      description: 'Creamos soluciones de software a medida que se adaptan perfectamente a tus procesos de negocio. Aplicaciones web, móviles y de escritorio desarrolladas con las últimas tecnologías y mejores prácticas.',
      isOpen: false
    },
    {
      id: 6,
      title: 'Consultoría Técnica',
      description: 'Asesoramos en la transformación digital de tu empresa. Analizamos tus procesos actuales, identificamos oportunidades de mejora y diseñamos estrategias tecnológicas alineadas con tus objetivos de negocio.',
      isOpen: false
    },
    {
      id: 7,
      title: 'Capacitación Especializada',
      description: 'Formamos a tu equipo en las tecnologías implementadas. Programas de capacitación personalizados que garantizan el máximo aprovechamiento de las herramientas y sistemas de tu empresa.',
      isOpen: false
    }
  ])

  const toggleService = (id: number) => {
    setServices(services.map(service => ({
      ...service,
      isOpen: service.id === id ? !service.isOpen : false
    })))
  }

  return (
    <section className="services-detail">
      <div className="services-detail-container">
        <div className="services-detail-header">
          <h4 className="services-label">ÁREA DE SERVICIO</h4>
          <h2 className="services-title">Lo Que Hacemos Por Ti</h2>
          <p className="services-description">
            En IMPERA Brindamos Soluciones Completas En Áreas Clave De La Transformación Digital Empresarial.<br />
            Acompañamos A Empresas De Todos Los Tamaños Con Servicios Diseñados Para Optimizar Procesos,<br />
            Integrar Sistemas, Fortalecer Infraestructuras Y Formar Equipos Altamente Capacitados.
          </p>
        </div>
        
        <div className="services-detail-content">
          <div style={{ flex: 1 }}>
              {services.map((service) => (
                <div key={service.id} style={{ borderBottom: '1px solid #e0e0e0' }}>
                  <div 
                    style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      padding: '1rem 0',
                      cursor: 'pointer' 
                    }}
                    onClick={() => toggleService(service.id)}
                  >
                    <h3 style={{ 
                      margin: 0, 
                      fontWeight: 'normal',
                      fontSize: '1.1rem',
                      color: service.isOpen ? '#000' : '#999' 
                    }}>{service.title}</h3>
                    <span style={{ color: service.isOpen ? '#000' : '#999' }}>{service.isOpen ? '↑' : '↓'}</span>
                  </div>
                  {service.isOpen && (
                    <div style={{ padding: '1rem 0', background: 'white' }}>
                      <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.6', marginBottom: '1rem' }}>{service.description}</p>
                      <Link to="/detalles-de-servicio" className="service-cta">VER SERVICIO →</Link>
                    </div>
                  )}
                </div>
              ))}
            </div>

          <div className="services-detail-image">
            <img src="/Rectangle_2.png" alt="Servicio al cliente" />
            <div className="testimonial-card">
              <div className="testimonial-rating"><img src="/stars.png" alt="5 estrellas" style={{ height: '14px', width: 'auto', display: 'inline-block' }} /></div>
              <p className="testimonial-text">
                "IMPERIA logró en tiempo record la instalación"
              </p>
              <p className="testimonial-info">
                En IMPERA Diseñamos, Desarrollamos Y Gestionamos<br />
                Servicios De Telecomunicaciones, Infraestructura TI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesDetail