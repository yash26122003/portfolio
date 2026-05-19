import React from 'react'
import { motion } from 'framer-motion'
import './Footer.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }
})

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <motion.div className="footer-cta" {...fadeUp()}>
          <h2 className="footer-title">
            stay <span className="accent-text">curious</span>
          </h2>
          <p className="footer-sub">Got a project, idea, or just want to say hi? Let's make it happen.</p>
        </motion.div>

        <motion.div className="footer-links" {...fadeUp(0.1)}>
          <a href="mailto:yashsinghal2612@gmail.com" className="footer-link-big">
            yashsinghal2612@gmail.com
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
          </a>

          <div className="footer-socials">
            <a href="https://github.com/YashSinghal26" target="_blank" rel="noopener" className="social-link">
              GitHub <span className="arrow">↗</span>
            </a>
            <a href="https://linkedin.com/in/yashsinghal26" target="_blank" rel="noopener" className="social-link">
              LinkedIn <span className="arrow">↗</span>
            </a>
            <a href="https://twitter.com/YashSinghal26" target="_blank" rel="noopener" className="social-link">
              Twitter <span className="arrow">↗</span>
            </a>
          </div>
        </motion.div>

        <div className="footer-bottom">
          <span className="footer-copy">© 2026 Yash Singhal</span>
          <span className="footer-made">Designed & built with obsession</span>
        </div>
      </div>
    </footer>
  )
}
