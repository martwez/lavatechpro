import Header from './components/Header'
import Printer3DPage from './components/Printer3DPage'
import Footer from './components/Footer'

export default function Printer3DApp() {
  return (
    <div className="bg-bg text-text leading-relaxed">
      <Header />
      <Printer3DPage />
      <Footer />
    </div>
  )
}
