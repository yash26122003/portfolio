import React from 'react'
import { motion } from 'framer-motion'
import './Experience.css'

const experiences = [
  {
    period: '2024 — Present',
    role: 'Freelance Developer',
    company: 'Self-Employed',
    desc: 'Building custom chatbots, web apps, and data pipelines. Specializing in AI-integrated solutions and modern React frontends.',
    tags: ['React', 'FastAPI', 'GPT', 'Freelance'],
  },
  {
    period: '2022 — 2026',
    role: 'B.Tech Computer Science',
    company: 'SRM Institute of Science & Technology',
    desc: 'Focused on ML, Data Structures, and Software Engineering. Active in hackathons and competitive coding.',
    tags: ['ML', 'DSA', 'Python', 'Research'],
  },
  {
    period: '2023 — 2024',
    role: 'Hackathon Competitor',
    company: 'Multiple National Events',
    desc: 'Built award-winning projects: JusticeGPT, Phishing Detection, Deep Fake detectors across major hackathon circuits.',
    tags: ['Winner', 'AI/ML', 'Full-Stack', 'Innovation'],
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50, filter: 'blur(8px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }
})

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="exp-container">
        <motion.div className="exp-header" {...fadeUp()}>
          <span className="section-tag">// experience</span>
          <h2 className="exp-title">
            My <span className="accent-text">journey</span><br />so far
          </h2>
        </motion.div>

        <div className="exp-list">
          {experiences.map((exp, i) => (
            <motion.div key={i} className="exp-item" {...fadeUp(i * 0.1)}>
              <div className="exp-period">{exp.period}</div>
              <div className="exp-content">
                <h3 className="exp-role">{exp.role}</h3>
                <p className="exp-company">{exp.company}</p>
                <p className="exp-desc">{exp.desc}</p>
                <div className="exp-tags">
                  {exp.tags.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
              <div className="exp-line-accent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
