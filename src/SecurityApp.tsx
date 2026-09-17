import { useEffect } from 'react'
import Header from './components/Header'
import SecurityPage from './components/SecurityPage'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function SecurityApp() {
  useEffect(() => {
    if (!window.location.hash) return
    document.getElementById(window.location.hash.slice(1))?.scrollIntoView()
  }, [])

  return (
    <div className="bg-bg text-text leading-relaxed">
      <Header />
      <SecurityPage />
      <Contact />
      <Footer />
    </div>
  )
}
