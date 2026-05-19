import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import './BentoGrid.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50, filter: 'blur(8px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }
})

const techStack = [
  { name: 'React', icon: '⚛️' }, { name: 'Python', icon: '🐍' },
  { name: 'PyTorch', icon: '🔥' }, { name: 'Node.js', icon: '🟢' },
  { name: 'TypeScript', icon: '🔷' }, { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Docker', icon: '🐳' }, { name: 'AWS', icon: '☁️' },
  { name: 'TensorFlow', icon: '🧠' }, { name: 'MongoDB', icon: '🍃' },
  { name: 'OpenCV', icon: '👁️' }, { name: 'Git', icon: '🌿' },
]

function GlowCard({ children, className, delay = 0 }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty('--glow-x', `${x}px`)
    card.style.setProperty('--glow-y', `${y}px`)
  }

  return (
    <motion.div
      ref={cardRef}
      className={`bento-card ${className || ''}`}
      onMouseMove={handleMouseMove}
      {...fadeUp(delay)}
    >
      <div className="card-glow" />
      {children}
    </motion.div>
  )
}

export default function BentoGrid() {
  return (
    <section className="bento" id="about">
      <div className="bento-container">
        <motion.div className="bento-header" {...fadeUp()}>
          <span className="section-tag">// about me</span>
          <h2 className="bento-title">
            I design in <span className="accent-text">code</span>,<br />
            not just screens.
          </h2>
        </motion.div>

        <div className="bento-grid">
          <GlowCard className="card-intro" delay={0.1}>
            <div className="card-inner">
              <p className="card-quote">
                "Every line of code should either solve a problem or create something beautiful.
                <span className="accent-text"> I aim for both.</span>"
              </p>
              <div className="card-avatar-row">
                <div className="card-avatar">
                  <img src="/assets/images/avatar_hero.png" alt="Yash" />
                </div>
                <div>
                  <p className="card-name">Yash Singhal</p>
                  <p className="card-role">B.Tech CSE · SRM Institute</p>
                </div>
              </div>
            </div>
          </GlowCard>

          <GlowCard className="card-stack" delay={0.2}>
            <div className="card-inner">
              <p className="card-label">Tech I Breathe</p>
              <div className="stack-pills">
                {techStack.map((t) => (
                  <motion.span
                    key={t.name}
                    className="stack-pill magnetic"
                    whileHover={{ scale: 1.08, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                  >
                    <span className="pill-icon">{t.icon}</span>
                    {t.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </GlowCard>

          <GlowCard className="card-stats" delay={0.15}>
            <div className="card-inner">
              <div className="stat-grid">
                {[
                  { n: '9+', l: 'Projects' }, { n: '5+', l: 'Hackathons' },
                  { n: '3+', l: 'Years Exp' }, { n: '15+', l: 'Technologies' },
                ].map((s, i) => (
                  <div key={i} className="stat-block">
                    <span className="stat-number">{s.n}</span>
                    <span className="stat-label">{s.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </GlowCard>

          <GlowCard className="card-quirk" delay={0.25}>
            <div className="card-inner quirk-inner">
              <span className="quirk-emoji">🧩</span>
              <p className="quirk-text">Talked to the model.<br />It hallucinated. <span className="accent-text">Again.</span></p>
            </div>
          </GlowCard>

          <GlowCard className="card-currently" delay={0.3}>
            <div className="card-inner">
              <p className="card-label">Currently Building</p>
              <p className="currently-text">
                <span className="accent-text">Garuda</span> — an AI-powered urban intelligence platform with satellite imagery analysis & YOLO-based change detection.
              </p>
              <div className="currently-tags">
                <span>FastAPI</span><span>React</span><span>YOLO</span><span>GIS</span>
              </div>
            </div>
          </GlowCard>

          <GlowCard className="card-fun" delay={0.2}>
            <div className="card-inner quirk-inner">
              <span className="quirk-emoji">🎨</span>
              <p className="quirk-text">CSS is my <br /><span className="accent-text">therapy.</span></p>
            </div>
          </GlowCard>

          <GlowCard className="card-vibe" delay={0.35}>
            <div className="card-inner">
              <p className="card-label">Philosophy</p>
              <p className="vibe-text">
                <span className="accent-text">Ship fast.</span> Break things. Learn faster. Every hackathon is a masterclass in building under pressure.
              </p>
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  )
}
