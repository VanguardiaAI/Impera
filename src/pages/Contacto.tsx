import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './Contacto.css'

const Contacto = () => {
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
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">¿Quieres Hablar Con Nosotros?</h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-form-container">
          <div className="contact-form-content">
            <h2 className="contact-form-title">Contáctanos</h2>
            <p className="contact-form-description">
              T Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When 
              Looking At Its Layout. The Point Of Using Lorem Ipsum Is That It Has
            </p>
            
            <form className="contact-form">
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Nombre Completo" 
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Correo Electrónico" 
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">¿Cual servicio te interesa?</label>
                <select className="form-select" required>
                  <option value="">Seleccionar servicio</option>
                  <option value="telefonia">Telefonía</option>
                  <option value="infraestructura">Infraestructura</option>
                  <option value="desarrollo">Desarrollo de Software</option>
                </select>
              </div>
              
              <div className="form-group">
                <textarea 
                  placeholder="Mensaje / Consulta" 
                  className="form-textarea"
                  rows={4}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="form-submit-btn">
                Enviar Consulta
              </button>
            </form>
          </div>
          
          <div className="contact-form-image">
            <img src="/hero_contacto.png" alt="Contacto" />
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

export default Contacto