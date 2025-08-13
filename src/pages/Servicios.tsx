import { useState, useEffect } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './Servicios.css'

const Servicios = () => {
  const [activeTab, setActiveTab] = useState('telefonia')
  const [expandedItems, setExpandedItems] = useState<number[]>([])
  const [isTabsSticky, setIsTabsSticky] = useState(false)
  
  const testimonials = [
    {
      id: 1,
      name: 'Roberto Duque',
      role: 'JEFE DE OPERACIONES',
      title: '"Imperia siempre es mi mejor opción"',
      content: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has',
      company: 'EMPRESA: MercadoLibre',
      rating: 4
    },
    {
      id: 2,
      name: 'María González',
      role: 'DIRECTORA DE TI',
      title: '"Excelente servicio y atención"',
      content: 'El equipo de IMPERA ha demostrado un profesionalismo excepcional en cada proyecto. Su capacidad para entender nuestras necesidades y traducirlas en soluciones tecnológicas efectivas ha sido fundamental para nuestro crecimiento.',
      company: 'EMPRESA: TechCorp',
      rating: 5
    },
    {
      id: 3,
      name: 'Carlos Mendoza',
      role: 'GERENTE DE PROYECTOS',
      title: '"Resultados que superan expectativas"',
      content: 'Trabajar con IMPERA ha sido una experiencia transformadora. Su enfoque integral y su compromiso con la calidad nos han ayudado a optimizar nuestros procesos y mejorar significativamente nuestra eficiencia operativa.',
      company: 'EMPRESA: Innovatech',
      rating: 5
    },
    {
      id: 4,
      name: 'Ana Rodríguez',
      role: 'CEO',
      title: '"Un socio tecnológico confiable"',
      content: 'IMPERA no es solo un proveedor, es un verdadero socio estratégico. Su equipo siempre está dispuesto a ir más allá para asegurar el éxito de nuestros proyectos. La calidad de su trabajo y su atención al detalle son incomparables.',
      company: 'EMPRESA: Digital Solutions',
      rating: 5
    }
  ]

  // Duplicar testimonios para crear efecto infinito
  const duplicatedTestimonials = [...testimonials, ...testimonials]
  
  // Manejar el comportamiento sticky de los tabs
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const heroElement = document.querySelector('.services-hero') as HTMLElement
      const heroHeight = heroElement?.offsetHeight || 0
      
      // Si el scroll pasa el hero, hacer los tabs completamente sticky
      setIsTabsSticky(scrollPosition > heroHeight - 80)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const serviceTabs = [
    { id: 'telefonia', label: 'Telefonía' },
    { id: 'infraestructura', label: 'Infraestructura' },
    { id: 'desarrollo', label: 'Desarrollo De Software' },
    { id: 'consultoria', label: 'Consultoría' },
    { id: 'capacitacion', label: 'Capacitación' }
  ]

  const serviceContent = {
    telefonia: {
      title: 'Telefonía Corporativa',
      subtitle: 'SUB SERVICIO',
      mainTitle: 'Corporativa',
      image: '/servicios/1.jpg',
      expandableItems: [
        { 
          title: 'Diseño E Instalación De Redes Para Telefonía', 
          description: 'En IMPERA Brindamos Soluciones Completas En Áreas Clave De La Transformación Digital Empresarial. Acompañamos A Empresas De Todos Los Tamaños Con Servicios Diseñados Para Optimizar Procesos, Integrar Sistemas.',
          hasButton: true
        },
        { 
          title: 'Configuración Y Mantenimiento De Hardware', 
          description: 'Instalación y configuración de equipos de telefonía, centrales telefónicas y dispositivos de comunicación.',
          hasButton: true
        },
        { 
          title: 'Configuración De Plataformas Específicas', 
          description: 'Implementación de plataformas de comunicación empresarial adaptadas a las necesidades de cada organización.',
          hasButton: true
        },
        { 
          title: 'Monitoreo De Sistemas', 
          description: 'Supervisión continua del rendimiento y disponibilidad de los sistemas de telefonía corporativa.',
          hasButton: true
        }
      ]
    }
  }

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? [] // Close all if clicking the already open item
        : [index] // Only keep the clicked item open
    )
  }

  return (
    <>
      <Header />
      <section className="services-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="section-label">SOLUCIONES EMPRESARIALES</p>
          <h1 className="hero-title">Soluciones Integrales En Tecnología Y Telecomunicaciones</h1>
          <p className="hero-description">
            Nuestros Servicios Están Estructurados En Siete Áreas Principales. Esta Segmentación Permite Identificar
            Con Precisión El Tipo De Solución Requerida, Acceder Rápidamente A Servicios Específicos Y Optimizar.
          </p>
        </div>
      </section>
      <div className={`services-tabs-container ${isTabsSticky ? 'scrolled' : ''}`}>
        <div className="services-tabs">
          {serviceTabs.map((tab) => (
            <button
              key={tab.id}
              className={`service-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <section className="service-content">
        <div className="service-header">
          <p className="service-header-label">SERVICIO</p>
          <h2 className="service-header-title">Telefonía Corporativa</h2>
        </div>
        <div className="service-content-container">
          <div className="service-info">
            <p className="service-subtitle">{serviceContent.telefonia.subtitle}</p>
            <h2 className="service-main-title">{serviceContent.telefonia.mainTitle}</h2>

            <div className="expandable-list">
              {serviceContent.telefonia.expandableItems.map((item, index) => (
                <div key={index} className={`expandable-item ${expandedItems.includes(index) ? 'expanded' : ''}`}>
                  <div 
                    className="expandable-header"
                    onClick={() => toggleExpanded(index)}
                  >
                    <h4>{item.title}</h4>
                    <span className="expand-icon">{expandedItems.includes(index) ? '↑' : '↓'}</span>
                  </div>
                  {expandedItems.includes(index) && (
                    <div className="expandable-content">
                      <p>{item.description}</p>
                      {item.hasButton && (
                        <button className="view-service-btn">
                          VER SERVICIO <span>→</span>
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="service-image-container">
            <img src={serviceContent.telefonia.image} alt={serviceContent.telefonia.title} />
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <img src="/stars.png" alt="5 estrellas" style={{ height: '14px', width: 'auto' }} />
              </div>
              <h4 className="testimonial-title">"Hicieron el diseño e instalación perfectas"</h4>
              <p className="testimonial-text">
                Tal Cual Como Lo Requería Mi Empresa Realizaron El Diseño<br />
                E Instalación Estamos Muy Contentos Con Los Resultados.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Centros de Contacto Section - Mirrored Layout */}
      <section className="service-content mirrored">
        <div className="service-content-container">
          <div className="service-image-container">
            <img src="/servicios/2.jpg" alt="Centros de Contacto" />
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <img src="/stars.png" alt="5 estrellas" style={{ height: '14px', width: 'auto' }} />
              </div>
              <h4 className="testimonial-title">"Testimonio de una empresa de este servicio"</h4>
              <p className="testimonial-text">
                Tel Cual Como Lo Requería Mi Empresa Realizaron El Diseño<br />
                E Instalación Externa Muy Contenta Con Los Resultados.
              </p>
            </div>
          </div>
          
          <div className="service-info">
            <p className="service-subtitle">SUB SERVICIO</p>
            <h2 className="service-main-title">Centros De Contacto</h2>
            <div className="expandable-list">
              <div className={`expandable-item ${expandedItems.includes(10) ? 'expanded' : ''}`}>
                <div 
                  className="expandable-header"
                  onClick={() => toggleExpanded(10)}
                >
                  <h4>Configuración Y Mantenimiento De Hardware</h4>
                  <span className="expand-icon">{expandedItems.includes(10) ? '↑' : '↓'}</span>
                </div>
                {expandedItems.includes(10) && (
                  <div className="expandable-content">
                    <p>Implementación completa de hardware especializado para centros de contacto, incluyendo instalación de servidores dedicados, configuración de sistemas de respaldo y mantenimiento preventivo para garantizar la operación continua 24/7.</p>
                    <button className="view-service-btn">
                      VER SERVICIO <span>→</span>
                    </button>
                  </div>
                )}
              </div>
              
              <div className={`expandable-item ${expandedItems.includes(11) ? 'expanded' : ''}`}>
                <div 
                  className="expandable-header"
                  onClick={() => toggleExpanded(11)}
                >
                  <h4>Configuración De Plataformas</h4>
                  <span className="expand-icon">{expandedItems.includes(11) ? '↑' : '↓'}</span>
                </div>
                {expandedItems.includes(11) && (
                  <div className="expandable-content">
                    <p>Personalización e integración de plataformas de contact center líderes en el mercado. Configuramos sistemas de enrutamiento inteligente, IVR, grabación de llamadas y herramientas de gestión de calidad adaptadas a sus necesidades específicas.</p>
                    <button className="view-service-btn">
                      VER SERVICIO <span>→</span>
                    </button>
                  </div>
                )}
              </div>
              
              <div className={`expandable-item ${expandedItems.includes(12) ? 'expanded' : ''}`}>
                <div 
                  className="expandable-header"
                  onClick={() => toggleExpanded(12)}
                >
                  <h4>Monitoreo De Sistemas</h4>
                  <span className="expand-icon">{expandedItems.includes(12) ? '↑' : '↓'}</span>
                </div>
                {expandedItems.includes(12) && (
                  <div className="expandable-content">
                    <p>Supervisión proactiva en tiempo real de todos los componentes del centro de contacto. Monitoreamos métricas clave de rendimiento, disponibilidad de servicios y calidad de llamadas para asegurar el cumplimiento de SLAs.</p>
                    <button className="view-service-btn">
                      VER SERVICIO <span>→</span>
                    </button>
                  </div>
                )}
              </div>
              
              <div className={`expandable-item ${expandedItems.includes(13) ? 'expanded' : ''}`}>
                <div 
                  className="expandable-header"
                  onClick={() => toggleExpanded(13)}
                >
                  <h4>Grabación De Llamadas Y Análisis</h4>
                  <span className="expand-icon">{expandedItems.includes(13) ? '↑' : '↓'}</span>
                </div>
                {expandedItems.includes(13) && (
                  <div className="expandable-content">
                    <p>Sistema avanzado de grabación multicanal con capacidades de análisis de voz y texto. Proporcionamos herramientas de búsqueda inteligente, transcripción automática y análisis de sentimiento para mejorar la calidad del servicio.</p>
                    <button className="view-service-btn">
                      VER SERVICIO <span>→</span>
                    </button>
                  </div>
                )}
              </div>
              
              <div className={`expandable-item ${expandedItems.includes(14) ? 'expanded' : ''}`}>
                <div 
                  className="expandable-header"
                  onClick={() => toggleExpanded(14)}
                >
                  <h4>Integración Con CRMs</h4>
                  <span className="expand-icon">{expandedItems.includes(14) ? '↑' : '↓'}</span>
                </div>
                {expandedItems.includes(14) && (
                  <div className="expandable-content">
                    <p>Conectamos su centro de contacto con los principales CRMs del mercado. Sincronización bidireccional de datos, pop-ups automáticos con información del cliente y registro automático de interacciones para una vista 360° del cliente.</p>
                    <button className="view-service-btn">
                      VER SERVICIO <span>→</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Comunicaciones Unificadas Section - Same layout as Corporativa */}
      <section className="service-content">
        <div className="service-content-container">
          <div className="service-info">
            <p className="service-subtitle">SUB SERVICIO</p>
            <h2 className="service-main-title">Comunicaciones Unificadas</h2>
            <div className="expandable-list">
              <div className={`expandable-item ${expandedItems.includes(20) ? 'expanded' : ''}`}>
                <div 
                  className="expandable-header"
                  onClick={() => toggleExpanded(20)}
                >
                  <h4>Soluciones De Telefonía Móvil Empresarial</h4>
                  <span className="expand-icon">{expandedItems.includes(20) ? '↑' : '↓'}</span>
                </div>
                {expandedItems.includes(20) && (
                  <div className="expandable-content">
                    <p>Implementación de soluciones móviles corporativas que integran voz, datos y aplicaciones empresariales. Gestión centralizada de dispositivos, planes optimizados y políticas de seguridad móvil para mantener a su equipo conectado y productivo.</p>
                    <button className="view-service-btn">
                      VER SERVICIO <span>→</span>
                    </button>
                  </div>
                )}
              </div>
              
              <div className={`expandable-item ${expandedItems.includes(21) ? 'expanded' : ''}`}>
                <div 
                  className="expandable-header"
                  onClick={() => toggleExpanded(21)}
                >
                  <h4>Aplicaciones De Softphone</h4>
                  <span className="expand-icon">{expandedItems.includes(21) ? '↑' : '↓'}</span>
                </div>
                {expandedItems.includes(21) && (
                  <div className="expandable-content">
                    <p>Despliegue de aplicaciones de softphone para escritorio y móviles que permiten realizar y recibir llamadas desde cualquier dispositivo. Integración completa con su sistema telefónico existente y funcionalidades avanzadas de colaboración.</p>
                    <button className="view-service-btn">
                      VER SERVICIO <span>→</span>
                    </button>
                  </div>
                )}
              </div>
              
              <div className={`expandable-item ${expandedItems.includes(22) ? 'expanded' : ''}`}>
                <div 
                  className="expandable-header"
                  onClick={() => toggleExpanded(22)}
                >
                  <h4>Diseño E Instalación De Redes</h4>
                  <span className="expand-icon">{expandedItems.includes(22) ? '↑' : '↓'}</span>
                </div>
                {expandedItems.includes(22) && (
                  <div className="expandable-content">
                    <p>Diseño e implementación de infraestructura de red optimizada para comunicaciones unificadas. Incluye cableado estructurado, configuración de switches y routers, y optimización de QoS para garantizar la calidad de voz y video.</p>
                    <button className="view-service-btn">
                      VER SERVICIO <span>→</span>
                    </button>
                  </div>
                )}
              </div>
              
              <div className={`expandable-item ${expandedItems.includes(23) ? 'expanded' : ''}`}>
                <div 
                  className="expandable-header"
                  onClick={() => toggleExpanded(23)}
                >
                  <h4>Mantenimiento De Hardware</h4>
                  <span className="expand-icon">{expandedItems.includes(23) ? '↑' : '↓'}</span>
                </div>
                {expandedItems.includes(23) && (
                  <div className="expandable-content">
                    <p>Servicio integral de mantenimiento preventivo y correctivo para todos los componentes de su infraestructura de comunicaciones. Incluye actualizaciones de firmware, reemplazo de partes y soporte técnico especializado 24/7.</p>
                    <button className="view-service-btn">
                      VER SERVICIO <span>→</span>
                    </button>
                  </div>
                )}
              </div>
              
              <div className={`expandable-item ${expandedItems.includes(24) ? 'expanded' : ''}`}>
                <div 
                  className="expandable-header"
                  onClick={() => toggleExpanded(24)}
                >
                  <h4>Monitoreo De Sistemas</h4>
                  <span className="expand-icon">{expandedItems.includes(24) ? '↑' : '↓'}</span>
                </div>
                {expandedItems.includes(24) && (
                  <div className="expandable-content">
                    <p>Monitoreo proactivo 24/7 de toda su infraestructura de comunicaciones unificadas. Dashboard en tiempo real con métricas de rendimiento, alertas automatizadas y reportes detallados para mantener la disponibilidad óptima del servicio.</p>
                    <button className="view-service-btn">
                      VER SERVICIO <span>→</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="service-image-container">
            <img src="/servicios/3.jpg" alt="Comunicaciones Unificadas" />
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <img src="/stars.png" alt="5 estrellas" style={{ height: '14px', width: 'auto' }} />
              </div>
              <h4 className="testimonial-title">"Hicieron el diseño e instalación perfectas"</h4>
              <p className="testimonial-text">
                Tel Cual Como Lo Requería Mi Empresa Realizaron El Diseño<br />
                E Instalación Estamos Muy Contentos Con Los Resultados.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="sobre-nosotros-testimonials">
        <div className="sobre-nosotros-testimonials-header">
          <div className="section-label">TESTIMONIOS</div>
          <h2 className="sobre-nosotros-testimonials-title">Nuestros Clientes Confían</h2>
          <p className="sobre-nosotros-testimonials-description">
            En IMPERA Brindamos Soluciones Completas En Áreas Clave De La Transformación Digital Empresarial.
          </p>
        </div>
        
        <div className="sobre-nosotros-slider-container">
          <div className="sobre-nosotros-testimonials-track sobre-nosotros-testimonials-track-animate">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div key={`${testimonial.id}-${index}`} className="sobre-nosotros-testimonial-card">
                <div className="sobre-nosotros-testimonial-inner">
                  <div className="sobre-nosotros-testimonial-header">
                    <div className="sobre-nosotros-testimonial-avatar">
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                        <circle cx="30" cy="30" r="30" fill="#FFC107"/>
                        <path d="M30 32C34.4183 32 38 28.4183 38 24C38 19.5817 34.4183 16 30 16C25.5817 16 22 19.5817 22 24C22 28.4183 25.5817 32 30 32Z" fill="white"/>
                        <path d="M30 35C21.7157 35 15 41.7157 15 50H45C45 41.7157 38.2843 35 30 35Z" fill="white"/>
                      </svg>
                    </div>
                    <div className="sobre-nosotros-testimonial-info">
                      <div className="sobre-nosotros-testimonial-rating">
                        <img src="/stars.png" alt="5 estrellas" style={{ height: '14px', width: 'auto' }} />
                      </div>
                      <h3 className="sobre-nosotros-testimonial-name">{testimonial.name}</h3>
                      <p className="sobre-nosotros-testimonial-role">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <h4 className="sobre-nosotros-testimonial-title">{testimonial.title}</h4>
                  <p className="sobre-nosotros-testimonial-content">{testimonial.content}</p>
                  <p className="sobre-nosotros-testimonial-company">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="sobre-nosotros-testimonials-navigation">
          <div className="sobre-nosotros-slider-progress">
            <div className="sobre-nosotros-slider-progress-bar" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Servicios