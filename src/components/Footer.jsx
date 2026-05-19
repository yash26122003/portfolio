import React from 'react'
import { motion } from 'framer-motion'
import './Footer.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50, filter: 'blur(8px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }
})

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <motion.h2 className="footer-huge" {...fadeUp()}>
          let's <span className="accent-text">build</span><br />
          something<br />
          <span className="outline-text">great.</span>
        </motion.h2>

        <motion.div className="footer-links" {...fadeUp(0.15)}>
          <a href="mailto:yashsinghal2612@gmail.com" className="footer-email magnetic">
            <span className="email-text">yashsinghal2612@gmail.com</span>
            <span className="email-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </span>
          </a>

          <div className="footer-socials">
            {[
              { name: 'GitHub', url: 'https://github.com/YashSinghal26' },
              { name: 'LinkedIn', url: 'https://linkedin.com/in/yashsinghal26' },
              { name: 'Twitter', url: 'https://twitter.com/YashSinghal26' },
            ].map(s => (
              <motion.a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener"
                className="social-pill magnetic"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                {s.name}
                <span className="pill-arrow">↗</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div className="footer-bottom" {...fadeUp(0.25)}>
          <span className="footer-copy">© 2026 Yash Singhal</span>
          <span className="footer-made">
            Designed & built with <span className="accent-text">obsession</span>
          </span>
          <span className="footer-location">📍 India · IST</span>
        </motion.div>
      </div>
    </footer>
  )
}
