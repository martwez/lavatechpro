import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import ServiceArea from './components/ServiceArea'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    if (!window.location.hash) return
    document.getElementById(window.location.hash.slice(1))?.scrollIntoView()
  }, [])

  return (
    <div className="bg-bg text-text leading-relaxed">
      <Header />
      <Hero />
      <Services />
      <ServiceArea />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
