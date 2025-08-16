import { useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Partners from '../components/Partners/Partners'
import './DetallesDeServicio.css'

const DetallesDeServicio = () => {
  const [expandedFaqs, setExpandedFaqs] = useState<number[]>([])
  
  const toggleFaqExpanded = (id: number) => {
    setExpandedFaqs(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

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
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="service-details-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="section-label">SOLUCIONES EMPRESARIALES</p>
          <h1 className="hero-title">Centros De Contacto</h1>
          <p className="hero-description">
            Nuestros Servicios Están Estructurados En Siete Áreas Principales. Esta Segmentación Permite Identificar 
            Con Precisión El Tipo De Solución Requerida, Acceder Rápidamente A Servicios Específicos Y Optimizar.
          </p>
        </div>
      </section>

      {/* Partners/Logos Section */}
      <Partners />

      {/* Service Details Section */}
      <section className="service-details-section">
        <div className="service-details-container">
          <div className="service-details-image">
            <img src="/centros_de_contacto/2.jpg" alt="Servicio técnico" />
          </div>
          
          <div className="service-details-content">
            <p className="service-label">SERVICIO</p>
            <h2 className="service-title">¿Cómo Funciona?</h2>
            
            <p className="service-description">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem 
              Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An 
              Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen 
              Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic.
            </p>
            
            <div className="service-benefits">
              <p className="benefits-title">Beneficios Clave:</p>
              <ul className="benefits-list">
                <li>Lorem Ipsum Has Been The Industry's Standard Dummy</li>
                <li>Lorem Ipsum Has Been The Industry's Standard Dummy</li>
                <li>Lorem Ipsum Has Been The Industry's Standard Dummy</li>
                <li>Lorem Ipsum Has Been The Industry's Standard Dummy</li>
                <li>Lorem Ipsum Has Been The Industry's Standard Dummy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose IMPERA Section */}
      <section className="why-choose-section">
        <div className="why-choose-container">
          <p className="why-choose-label">NOS DIFERENCIAMOS</p>
          <h2 className="why-choose-title">¿Por Qué Elegir IMPERA?</h2>
          <p className="why-choose-description">
            It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/icons/garantia.svg" alt="Garantía de Servicio" />
              </div>
              <h3 className="feature-title">Garantía de Servicio Profesional</h3>
              <p className="feature-description">
                Te garantizamos un trabajo de calidad y adaptado a tu empresa. Garantía de 60 días. 100% comprobado.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/icons/planes.svg" alt="Planes Personalizados" />
              </div>
              <h3 className="feature-title">Planes Personalizados</h3>
              <p className="feature-description">
                Adaptamos el diseño y las instalaciones exclusivamente a las necesidades de tu empresa. Deja todo en nuestras manos.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/icons/ingenieros.svg" alt="Ingenieros de Elite" />
              </div>
              <h3 className="feature-title">Ingenieros de Elite</h3>
              <p className="feature-description">
                Personal garantizado, tenemos los mejores ingenieros del mercado para el trabajo. Seleccionados cuidadosamente.
              </p>
            </div>
          </div>
          
          <div className="cta-button-container">
            <button className="cta-button">
              Cotiza el servicio hoy
              <span className="cta-arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Características / Alcance Section */}
      <section className="characteristics-section">
        <div className="characteristics-container">
          <div className="characteristics-content">
            <p className="characteristics-label">SERVICIO</p>
            <h2 className="characteristics-title">Características / Alcance</h2>
            <p className="characteristics-description">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem 
              Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.
            </p>
            
            <div className="characteristics-grid">
              <div className="characteristics-item">
                <span className="check-icon">✓</span>
                <span className="characteristic-text">Lorem Ipsum Has Been The</span>
              </div>
              <div className="characteristics-item">
                <span className="check-icon">✓</span>
                <span className="characteristic-text">Lorem Ipsum Has Been The</span>
              </div>
              <div className="characteristics-item">
                <span className="check-icon">✓</span>
                <span className="characteristic-text">Lorem Ipsum Has Been The</span>
              </div>
              <div className="characteristics-item">
                <span className="check-icon">✓</span>
                <span className="characteristic-text">Lorem Ipsum Has Been The</span>
              </div>
              <div className="characteristics-item">
                <span className="check-icon">✓</span>
                <span className="characteristic-text">Lorem Ipsum Has Been The</span>
              </div>
              <div className="characteristics-item">
                <span className="check-icon">✓</span>
                <span className="characteristic-text">Lorem Ipsum Has Been The</span>
              </div>
            </div>
          </div>
          
          <div className="characteristics-image">
            <img src="/centros_de_contacto/3.jpg" alt="Características del servicio" />
          </div>
        </div>
      </section>

      {/* Casos De Uso Section */}
      <section className="use-cases-section">
        <div className="use-cases-container">
          <p className="use-cases-label">APLICACIÓN PRÁCTICA</p>
          <h2 className="use-cases-title">Casos De Uso</h2>
          <p className="use-cases-description">
            T Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A
          </p>
          
          <div className="use-cases-grid">
            <div className="use-case-card">
              <div className="use-case-image">
                <img src="/centros_de_contacto/2.jpg" alt="Automatización DevOps" />
              </div>
              <div className="use-case-content">
                <h3 className="use-case-title">Automatización De La Infraestructura En DevOps</h3>
                <div className="use-case-icon">
                  <img src="/Vector.png" alt="Icon" />
                </div>
              </div>
              <div className="use-case-overlay">
                <div className="use-case-overlay-content">
                  <h3 className="use-case-overlay-title">Automatización De La Infraestructura En DevOps</h3>
                  <p className="use-case-overlay-description">
                    Se Realiza El Trabajo En Por En Corporaciones Digitales Que Tienen La Necesidad Del Servicio. Este Es Un Párrafo Para Explicar Cómo Se Integra Este Caso De Uso Con El Servicio Y La Empresa.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="use-case-card">
              <div className="use-case-image">
                <img src="/centros_de_contacto/3.jpg" alt="Automatización DevOps" />
              </div>
              <div className="use-case-content">
                <h3 className="use-case-title">Automatización De La Infraestructura En DevOps</h3>
                <div className="use-case-icon">
                  <img src="/Vector.png" alt="Icon" />
                </div>
              </div>
              <div className="use-case-overlay">
                <div className="use-case-overlay-content">
                  <h3 className="use-case-overlay-title">Automatización De La Infraestructura En DevOps</h3>
                  <p className="use-case-overlay-description">
                    Se Realiza El Trabajo En Por En Corporaciones Digitales Que Tienen La Necesidad Del Servicio. Este Es Un Párrafo Para Explicar Cómo Se Integra Este Caso De Uso Con El Servicio Y La Empresa.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="use-case-card">
              <div className="use-case-image">
                <img src="/centros_de_contacto/1.webp" alt="Integración Continua" />
              </div>
              <div className="use-case-content">
                <h3 className="use-case-title">Integración Continua Y Despliegue Continuo (CI/CD)</h3>
                <div className="use-case-icon">
                  <img src="/Vector.png" alt="Icon" />
                </div>
              </div>
              <div className="use-case-overlay">
                <div className="use-case-overlay-content">
                  <h3 className="use-case-overlay-title">Integración Continua Y Despliegue Continuo (CI/CD)</h3>
                  <p className="use-case-overlay-description">
                    Se Realiza El Trabajo En Por En Corporaciones Digitales Que Tienen La Necesidad Del Servicio. Este Es Un Párrafo Para Explicar Cómo Se Integra Este Caso De Uso Con El Servicio Y La Empresa.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="use-case-card">
              <div className="use-case-image">
                <img src="/centros_de_contacto/2.jpg" alt="Medidas Automatizadas" />
              </div>
              <div className="use-case-content">
                <h3 className="use-case-title">Medidas Automatizadas De Seguridad</h3>
                <div className="use-case-icon">
                  <img src="/Vector.png" alt="Icon" />
                </div>
              </div>
              <div className="use-case-overlay">
                <div className="use-case-overlay-content">
                  <h3 className="use-case-overlay-title">Medidas Automatizadas De Seguridad</h3>
                  <p className="use-case-overlay-description">
                    Se Realiza El Trabajo En Por En Corporaciones Digitales Que Tienen La Necesidad Del Servicio. Este Es Un Párrafo Para Explicar Cómo Se Integra Este Caso De Uso Con El Servicio Y La Empresa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          <p className="faq-label">FAQ</p>
          <h2 className="faq-title">Preguntas Frecuentes</h2>
          <p className="faq-description">
            T Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When
          </p>
          
          <div className="faq-list">
            <div className={`faq-item ${expandedFaqs.includes(1) ? 'expanded' : ''}`}>
              <div className="faq-header" onClick={() => toggleFaqExpanded(1)}>
                <h4>¿Este Servicio Le Sirve A Mi Empresa?</h4>
                <span className="faq-icon">{expandedFaqs.includes(1) ? '↑' : '↓'}</span>
              </div>
              {expandedFaqs.includes(1) && (
                <div className="faq-content">
                  <p><strong>Lorem Ipsum Is Simply Dummy Text Of The Printing</strong> And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchanged. It Was Popularised In The 1960s With The Release Of Letraset Sheets Containing Lorem Ipsum Passages, And More Recently With Desktop Publishing Software Like Aldus PageMaker Including Versions Of Lorem Ipsum.</p>
                </div>
              )}
            </div>
            
            <div className={`faq-item ${expandedFaqs.includes(2) ? 'expanded' : ''}`}>
              <div className="faq-header" onClick={() => toggleFaqExpanded(2)}>
                <h4>Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random Text</h4>
                <span className="faq-icon">{expandedFaqs.includes(2) ? '↑' : '↓'}</span>
              </div>
              {expandedFaqs.includes(2) && (
                <div className="faq-content">
                  <p><strong>Lorem Ipsum Is Simply Dummy Text Of The Printing</strong> And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.</p>
                </div>
              )}
            </div>
            
            <div className={`faq-item ${expandedFaqs.includes(3) ? 'expanded' : ''}`}>
              <div className="faq-header" onClick={() => toggleFaqExpanded(3)}>
                <h4>There Are Many Variations Of Passages Variations</h4>
                <span className="faq-icon">{expandedFaqs.includes(3) ? '↑' : '↓'}</span>
              </div>
              {expandedFaqs.includes(3) && (
                <div className="faq-content">
                  <p><strong>Lorem Ipsum Is Simply Dummy Text Of The Printing</strong> And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.</p>
                </div>
              )}
            </div>
            
            <div className={`faq-item ${expandedFaqs.includes(4) ? 'expanded' : ''}`}>
              <div className="faq-header" onClick={() => toggleFaqExpanded(4)}>
                <h4>Any Desktop Publishing Packages And Web Page Editors Now</h4>
                <span className="faq-icon">{expandedFaqs.includes(4) ? '↑' : '↓'}</span>
              </div>
              {expandedFaqs.includes(4) && (
                <div className="faq-content">
                  <p><strong>Lorem Ipsum Is Simply Dummy Text Of The Printing</strong> And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.</p>
                </div>
              )}
            </div>
            
            <div className={`faq-item ${expandedFaqs.includes(5) ? 'expanded' : ''}`}>
              <div className="faq-header" onClick={() => toggleFaqExpanded(5)}>
                <h4>Sometimes By Accident, Sometimes On Purpose</h4>
                <span className="faq-icon">{expandedFaqs.includes(5) ? '↑' : '↓'}</span>
              </div>
              {expandedFaqs.includes(5) && (
                <div className="faq-content">
                  <p><strong>Lorem Ipsum Is Simply Dummy Text Of The Printing</strong> And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.</p>
                </div>
              )}
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

export default DetallesDeServicio