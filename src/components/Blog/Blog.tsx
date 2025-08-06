import './Blog.css'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      date: '15 De Octubre De 2025',
      title: 'Conoce Los Servicios De Tecnología Para El 2025 Que Aumentarán Tus Ingresos'
    },
    {
      id: 2,
      date: '20 De Septiembre De 2025',
      title: 'Conoce Los Servicios De Tecnología Para El 2025 Que Aumentarán Tus Ingresos'
    },
    {
      id: 3,
      date: '14 De Agosto De 2025',
      title: 'Conoce Los Servicios De Tecnología Para El 2025 Que Aumentarán Tus Ingresos'
    }
  ]

  return (
    <section className="blog-section">
      <div className="blog-container">
        <div className="blog-content">
          <div className="blog-image-wrapper">
            <img src="/Group_49.jpg" alt="Equipo trabajando" />
            <div className="blog-testimonial">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-quote">
                "Con IMPERIA Los resultados son fantásticos"
              </p>
              <p className="testimonial-details">
                En IMPERA Diseñamos, Desarrollamos Y Gestionamos<br />
                Servicios De Telecomunicaciones, Infraestructura TI
              </p>
            </div>
          </div>

          <div className="blog-articles">
            <h4 className="blog-label">MÁS RECIENTES</h4>
            <h2 className="blog-title">Nuestro Blog</h2>
            
            <div className="blog-list">
              {blogPosts.map((post) => (
                <article key={post.id} className="blog-item">
                  <p className="blog-date">{post.date}</p>
                  <h3 className="blog-post-title">{post.title}</h3>
                  <a href="#" className="blog-link">
                    LEER ARTÍCULO →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog