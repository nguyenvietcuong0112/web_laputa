import { useState, useEffect } from 'react'
import './App.css'
import Home from './components/Home'
import Hero from './components/Hero'
import Description from './components/Description'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import ContactButton from './components/ContactButton'

function App() {
  const [view, setView] = useState('home'); // 'home' or 'menu'

  // Path-based routing: check if user is on /menu
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/menu') {
      setView('menu');
    }
  }, []);

  const handleShowMenu = () => {
    // Update path to /menu without refreshing (SPA behavior)
    window.history.pushState({}, '', '/menu');
    setView('menu');
    window.scrollTo(0, 0);
  };

  return (
    <div className="app-container">
      {view === 'home' ? (
        <Home onShowMenu={handleShowMenu} />
      ) : (
        <>
          <Hero />
          <Description />
          <Gallery />
          <Footer />
        </>
      )}
      <ContactButton />
    </div>
  )
}

export default App
