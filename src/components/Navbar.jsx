import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [time, setTime] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' }))
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <a href="#home" className="nav-logo magnetic">
        YS<span className="accent-dot">.</span>
      </a>

      <div className="nav-center">
        <span className="nav-pill">
          <span className="pill-dot" /> India
        </span>
        <span className="nav-pill">{time} IST</span>
      </div>

      <div className="nav-right">
        <a href="#work" className="nav-link magnetic">Work</a>
        <a href="#about" className="nav-link magnetic">About</a>
        <a href="#experience" className="nav-link magnetic">Career</a>
        <a href="mailto:yashsinghal2612@gmail.com" className="nav-cta magnetic">
          <span className="cta-pulse" />
          Let's Talk
        </a>
      </div>
    </motion.nav>
  )
}
