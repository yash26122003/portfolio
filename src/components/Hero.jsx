import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './Hero.css'

const roles = ['Full-Stack Developer', 'ML Engineer', 'Data Scientist', 'Hackathon Winner']

function SplitText({ text, className, delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setVisible(true)
    }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <span ref={ref} className={`split-text ${className || ''} ${visible ? 'visible' : ''}`}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="split-char"
          style={{ transitionDelay: `${delay + i * 0.03}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  )
}

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  })
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -250])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  useEffect(() => {
    const id = setInterval(() => setRoleIdx(i => (i + 1) % roles.length), 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="hero" id="home" ref={sectionRef}>
      {/* Animated gradient orbs with parallax */}
      <motion.div className="hero-blob blob-1" style={{ y: y1 }} />
      <motion.div className="hero-blob blob-2" style={{ y: y2 }} />
      <motion.div className="hero-blob blob-3" style={{ y: y1 }} />

      {/* Grid lines overlay */}
      <div className="hero-grid-lines">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="grid-line" />
        ))}
      </div>

      <motion.div className="hero-container" style={{ opacity, scale }}>
        <motion.div
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow-dot" />
          <span>Available for work — 2026</span>
        </motion.div>

        <div className="hero-title-block">
          <motion.div
            className="hero-line"
            initial={{ opacity: 0, y: 80, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="hero-title">
              Hey! I'm <span className="hero-name">Yash</span>
            </h1>
          </motion.div>

          <motion.div
            className="hero-line"
            initial={{ opacity: 0, y: 80, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.9, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero-role-wrapper">
              <div className="hero-role" key={roleIdx}>
                {roles[roleIdx]}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          building intelligent systems & beautiful interfaces for <span className="hero-hl">3+ years</span>
        </motion.p>

        <motion.div
          className="hero-ctas"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <a href="#work" className="hero-btn primary magnetic">
            <span className="btn-text">See My Work</span>
            <span className="btn-arrow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </span>
          </a>
          <a href="https://github.com/YashSinghal26" target="_blank" rel="noopener" className="hero-btn secondary magnetic">
            <span className="btn-text">GitHub</span>
            <span className="btn-arrow">↗</span>
          </a>
        </motion.div>

        <motion.div
          className="hero-scroll-cue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
        >
          <div className="scroll-track">
            <div className="scroll-thumb" />
          </div>
          <span className="scroll-label">scroll to explore</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
