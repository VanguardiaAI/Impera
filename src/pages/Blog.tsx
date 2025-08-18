import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './Blog.css'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Inteligencia Artificial En El Desarrollo De Software: ¿Hacia Dónde Va?',
      image: '/blog/1.jpg',
      category: 'Desarrollo de Software',
      author: 'Jesica Kat',
      date: '03 July 2025',
      readTime: '5 Min. De Lectura',
      description: 'Did you come here for something in particular or just general Rocks-browsing'
    },
    {
      id: 2,
      title: 'Desarrollador Full-Stack De Sistemas Inteligentes',
      image: '/blog/2.jpg',
      category: 'Desarrollo de Software',
      author: 'Jesica Kat',
      date: '03 July 2025',
      readTime: '5 Min. De Lectura',
      description: 'Did you come here for something in particular or just general filter-browsing'
    },
    {
      id: 3,
      title: 'Ingeniería De Plataformas: Cómo Optimizar El Desarrollo De Software',
      image: '/blog/3.jpg',
      category: 'Desarrollo de Software',
      author: 'Jesica Kat',
      date: '02 July 2025',
      readTime: '5 Min. De Lectura',
      description: 'Did you come here for something in particular or just general filter-browsing'
    },
    {
      id: 4,
      title: 'Inteligencia Artificial En El Desarrollo De Software: ¿Hacia Dónde Va?',
      image: '/blog/4.webp',
      category: 'Desarrollo de Software',
      author: 'Jesica Kat',
      date: '03 July 2025',
      readTime: '5 Min. De Lectura',
      description: 'Did you come here for something in particular or just general filter-browsing'
    },
    {
      id: 5,
      title: 'Desarrollador Full-Stack De Sistemas Inteligentes',
      image: '/blog/5.webp',
      category: 'Desarrollo de Software',
      author: 'Jesica Kat',
      date: '02 July 2025',
      readTime: '5 Min. De Lectura',
      description: 'Did you come here for something in particular or just general filter-browsing'
    },
    {
      id: 6,
      title: 'Ingeniería De Plataformas: Cómo Optimizar El Desarrollo De Software',
      image: '/blog/6.jpg',
      category: 'Desarrollo de Software',
      author: 'Jesica Kat',
      date: '03 July 2025',
      readTime: '5 Min. De Lectura',
      description: 'Did you come here for something in particular or just general filter-browsing'
    }
  ]

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Blog</h1>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
        <div className="blog-container">
          <div className="blog-header">
            <h2 className="blog-main-title">Lo Último En Tecnología</h2>
            <p className="blog-description">
              T Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page 
              When Looking At Its Layout. The Point Of Using Lorem Ipsum Is That It Has
            </p>
          </div>
          
          <div className="blog-grid">
            {blogPosts.map(post => (
              <article key={post.id} className="blog-card">
                <div className="blog-card-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-card-content">
                  <div className="blog-card-category">
                    {post.category}
                  </div>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <div className="blog-card-author">
                    <div className="author-avatar">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="12" fill="#FFC107"/>
                        <path d="M12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5C9.79086 5 8 6.79086 8 9C8 11.2091 9.79086 13 12 13Z" fill="white"/>
                        <path d="M12 14C7.58172 14 4 17.5817 4 22H20C20 17.5817 16.4183 14 12 14Z" fill="white"/>
                      </svg>
                    </div>
                    <div className="blog-meta">
                      <span className="author-name">{post.author}</span>
                      <span className="blog-separator">|</span>
                      <span className="blog-date">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="date-icon">
                          <path d="M9 2H8V1C8 0.45 7.55 0 7 0C6.45 0 6 0.45 6 1V2H6V1C6 0.45 5.55 0 5 0C4.45 0 4 0.45 4 1V2H3C1.89 2 1 2.89 1 4V10C1 11.11 1.89 12 3 12H9C10.11 12 11 11.11 11 10V4C11 2.89 10.11 2 9 2ZM9 10H3V5H9V10Z" fill="#666666"/>
                        </svg>
                        {post.date}
                      </span>
                      <span className="blog-separator">|</span>
                      <span className="blog-read-time">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="time-icon">
                          <path d="M6 0C2.69 0 0 2.69 0 6C0 9.31 2.69 12 6 12C9.31 12 12 9.31 12 6C12 2.69 9.31 0 6 0ZM6 10.8C3.35 10.8 1.2 8.65 1.2 6C1.2 3.35 3.35 1.2 6 1.2C8.65 1.2 10.8 3.35 10.8 6C10.8 8.65 8.65 10.8 6 10.8ZM6.3 3H5.4V6.6L8.55 8.475L9 7.725L6.3 6.15V3Z" fill="#666666"/>
                        </svg>
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  <p className="blog-card-description">{post.description}</p>
                </div>
              </article>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="blog-pagination">
            <button className="pagination-btn active">1</button>
            <button className="pagination-btn">2</button>
            <button className="pagination-btn">3</button>
            <button className="pagination-btn">4</button>
            <span className="pagination-dots">...</span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Blog