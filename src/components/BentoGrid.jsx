import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './BentoGrid.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }
})

const techStack = [
  { name: 'React', icon: '⚛️' },
  { name: 'Python', icon: '🐍' },
  { name: 'PyTorch', icon: '🔥' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Docker', icon: '🐳' },
  { name: 'AWS', icon: '☁️' },
  { name: 'TensorFlow', icon: '🧠' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'OpenCV', icon: '👁️' },
  { name: 'Git', icon: '🌿' },
]

export default function BentoGrid() {
  return (
    <section className="bento" id="about">
      <div className="bento-container">
        <motion.div className="bento-header" {...fadeUp()}>
          <span className="section-tag">About me</span>
          <h2 className="bento-title">
            I design in <span className="accent-text">code</span>,<br />
            not just screens.
          </h2>
        </motion.div>

        <div className="bento-grid">
          {/* Card 1: Big intro */}
          <motion.div className="bento-card card-intro" {...fadeUp(0.1)}>
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
          </motion.div>

          {/* Card 2: Tech stack orbit */}
          <motion.div className="bento-card card-stack" {...fadeUp(0.2)}>
            <div className="card-inner">
              <p className="card-label">Tech I Breathe</p>
              <div className="stack-pills">
                {techStack.map((t, i) => (
                  <motion.span
                    key={t.name}
                    className="stack-pill"
                    whileHover={{ scale: 1.1, y: -4 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <span className="pill-icon">{t.icon}</span>
                    {t.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 3: Stats */}
          <motion.div className="bento-card card-stats" {...fadeUp(0.15)}>
            <div className="card-inner">
              <div className="stat-grid">
                <div className="stat-block">
                  <span className="stat-number">9+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat-block">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Hackathons</span>
                </div>
                <div className="stat-block">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Years Exp</span>
                </div>
                <div className="stat-block">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Technologies</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Personality quirk */}
          <motion.div className="bento-card card-quirk" {...fadeUp(0.25)}>
            <div className="card-inner quirk-inner">
              <span className="quirk-emoji">🧩</span>
              <p className="quirk-text">Talked to the model.<br />It hallucinated. <span className="accent-text">Again.</span></p>
            </div>
          </motion.div>

          {/* Card 5: Currently */}
          <motion.div className="bento-card card-currently" {...fadeUp(0.3)}>
            <div className="card-inner">
              <p className="card-label">Currently</p>
              <p className="currently-text">
                Building <span className="accent-text">Garuda</span> — an AI-powered urban intelligence platform with satellite imagery analysis & YOLO detection.
              </p>
              <div className="currently-tags">
                <span>FastAPI</span>
                <span>React</span>
                <span>YOLO</span>
                <span>GIS</span>
              </div>
            </div>
          </motion.div>

          {/* Card 6: Fun one */}
          <motion.div className="bento-card card-fun" {...fadeUp(0.2)}>
            <div className="card-inner quirk-inner">
              <span className="quirk-emoji">🎨</span>
              <p className="quirk-text">CSS is my <br /><span className="accent-text">therapy.</span></p>
            </div>
          </motion.div>

          {/* Card 7: Vibe */}
          <motion.div className="bento-card card-vibe" {...fadeUp(0.35)}>
            <div className="card-inner">
              <p className="card-label">My Approach</p>
              <p className="vibe-text">
                <span className="accent-text">Ship fast.</span> Break things. Learn faster. Every hackathon is a masterclass in building under pressure.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
