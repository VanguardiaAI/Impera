import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './SobreNosotros.css'

const SobreNosotros = () => {
  
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
    <div className="sobre-nosotros-page">
      <Header />
      
      {/* Hero Section - Text Above Image */}
      <section className="hero-section">
        <div className="hero-text-section">
          <div className="hero-text-container">
            <div className="section-label">CONÓCENOS</div>
            <h1 className="hero-title">Nuestra Historia, Nuestros Valores</h1>
            <p className="hero-description">
              IMPERA Es Una Empresa Mexicana Que Nace Desde La Convicción De Hacer Las Cosas Bien: Con Integridad, Esfuerzo Y Compromiso Real 
              Con El Cliente. Nos Especializamos En Tecnologías De La Información Y Telecomunicaciones, Y Desde Nuestros Inicios Hemos Enfrentado 
              Retos Estructurales Y Económicos Que Solo Fortalecieron Nuestra Visión Y Carácter.
            </p>
            <p className="hero-subdescription">
              Lo Que Comenzó Con Recursos Limitados, Sin Oficina Propia Y En Medio De Contextos Políticos Difíciles, Se Ha Transformado Con El Tiempo 
              En Una Organización Firme, Consolidada Y Plenamente Operativa, Gracias A La Constancia De Su Equipo Y Al Respaldo De Sus Clientes.
            </p>
          </div>
        </div>
        
        {/* Image with Innovation Container Overlay */}
        <div className="image-section">
          <img 
            src="/sobre-nosotros-hero.webp" 
            alt="Equipo IMPERA trabajando juntos" 
            className="hero-image"
          />
          
          {/* Innovation Container Inside Image */}
          <div className="innovation-container-overlay">
            <div className="innovation-content">
              <div className="section-label">INNOVACIÓN</div>
              <h2 className="section-title">¿Qué Nos Diferencia?</h2>
              <p className="section-description">
                La Tecnología No Se Trata Solo De Herramientas, Sino De Personas. IMPERA Acompaña A Sus Clientes 
                Como Un Socio Técnico, Pero También Humano: Alguien Que Entiende Sus Procesos, Que Cuida Su 
                Inversión, Y Que Responde Con Responsabilidad Y Precisión En Cada Etapa Del Proyecto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="values-container">
          <div className="values-content">
            <div className="values-left">
              <div className="section-label">VALORES</div>
              <h2 className="values-title">Nuestros Principios</h2>
              <p className="values-description">
                En IMPERA Nuestros Valores Son Muy Importantes, Contar Con 
                Principios Que Generen Bienestar A Nuestros Clientes Es Esencial.
              </p>
              
              <div className="values-grid">
                <div className="value-item">
                  <div className="value-icon">
                    <img src="/quienes_somos_icons/innovacion.png" alt="Innovación" />
                  </div>
                  <span className="value-text">Innovación</span>
                </div>
                
                <div className="value-item">
                  <div className="value-icon">
                    <img src="/quienes_somos_icons/trabajo.png" alt="Trabajo" />
                  </div>
                  <span className="value-text">Trabajo</span>
                </div>
                
                <div className="value-item">
                  <div className="value-icon">
                    <img src="/quienes_somos_icons/constancia.png" alt="Constancia" />
                  </div>
                  <span className="value-text">Constancia</span>
                </div>
                
                <div className="value-item">
                  <div className="value-icon">
                    <img src="/quienes_somos_icons/honradez.png" alt="Honradez" />
                  </div>
                  <span className="value-text">Honradez</span>
                </div>
                
                <div className="value-item">
                  <div className="value-icon">
                    <img src="/quienes_somos_icons/eficiencia.png" alt="Eficiencia" />
                  </div>
                  <span className="value-text">Eficiencia</span>
                </div>
                
                <div className="value-item">
                  <div className="value-icon">
                    <img src="/quienes_somos_icons/aceptabilidad.png" alt="Adaptabilidad" />
                  </div>
                  <span className="value-text">Adaptabilidad</span>
                </div>
              </div>
            </div>
            
            <div className="values-right">
              <img 
                src="/valores.png" 
                alt="Valores que transmitimos" 
                className="values-image"
              />
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
    </div>
  )
}

export default SobreNosotros