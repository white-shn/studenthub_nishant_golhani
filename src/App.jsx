import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Announcements from './pages/Announcements'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import About from './pages/About'

function App() {
  const [darkMode, setDarkMode]= useState(true) // start in dark mode

  useEffect(() => {
    // whenever darkMode changes we'll add/remove the class on body
    document.body.classList.toggle('dark-mode', darkMode)
  }, [darkMode]) // runs every time darkMode changes

  function toggleDark() {
    setDarkMode(!darkMode)
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar darkMode={darkMode} toggleDark={toggleDark} />
        <main style={{ paddingTop: '80px' }}>
          <Routes>
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App