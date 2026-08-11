import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import ServiceArea from './components/ServiceArea'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-bg text-text leading-relaxed">
      <Header />
      <Hero />
      <Services />
      <ServiceArea />
      <Contact />
      <Footer />
    </div>
  )
}
