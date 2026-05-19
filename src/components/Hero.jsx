import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

const roles = ['Full-Stack Developer', 'ML Engineer', 'Data Scientist', 'Hackathon Winner']

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setRoleIdx(i => (i + 1) % roles.length), 2500)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="hero" id="home">
      {/* Ambient gradient blobs */}
      <div className="hero-blob blob-1" />
      <div className="hero-blob blob-2" />
      <div className="hero-blob blob-3" />

      <div className="hero-container">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="badge-dot" />
          Available for work — 2026
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Hey! I'm <span className="hero-name">Yash</span>
        </motion.h1>

        <motion.div
          className="hero-role-wrapper"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="hero-role-line">
            <span className="hero-role-label" key={roleIdx}>
              {roles[roleIdx]}
            </span>
          </div>
        </motion.div>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          building intelligent systems & beautiful interfaces for <span className="hero-highlight">3+ years</span>
        </motion.p>

        <motion.div
          className="hero-ctas"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <a href="#work" className="hero-btn primary">
            See My Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
          </a>
          <a href="https://github.com/YashSinghal26" target="_blank" rel="noopener" className="hero-btn secondary">
            GitHub ↗
          </a>
        </motion.div>

        <motion.div
          className="hero-scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="scroll-line" />
          <span>scroll</span>
        </motion.div>
      </div>
    </section>
  )
}
