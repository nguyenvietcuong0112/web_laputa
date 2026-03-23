import './App.css'
import Hero from './components/Hero'
import Description from './components/Description'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import ContactButton from './components/ContactButton'

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Description />
      <Gallery />
      <Footer />
      <ContactButton />
    </div>
  )
}

export default App
