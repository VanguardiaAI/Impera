import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Partners from './components/Partners/Partners'
import About from './components/About/About'
import ServicesDetail from './components/Services/ServicesDetail'
import Blog from './components/Blog/Blog'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Partners />
      <About />
      <ServicesDetail />
      <Blog />
      <Footer />
    </div>
  )
}

export default App