import React from 'react'
import { motion } from 'framer-motion'
import './Projects.css'

const projects = [
  {
    title: 'Phishing Website Detection',
    type: 'Hackathon · AI/ML',
    desc: 'AI system detecting phishing URLs in real-time using ML classifiers trained on 10K+ malicious patterns. 97% accuracy.',
    tags: ['Python', 'Scikit-Learn', 'Flask', 'NLP'],
    image: '/assets/images/project_security.png',
    color: '#ff4444',
    github: 'https://github.com/YashSinghal26',
    featured: true,
  },
  {
    title: 'JusticeGPT',
    type: 'Hackathon · LegalTech',
    desc: 'AI legal assistant using fine-tuned LLMs and Indian Penal Code datasets to navigate complex legal queries.',
    tags: ['GPT', 'LangChain', 'React', 'FastAPI'],
    image: '/assets/images/project_justice.png',
    color: '#fbbf24',
    github: 'https://github.com/YashSinghal26',
  },
  {
    title: 'Self-Driven Car Simulator',
    type: 'Deep Learning · RL',
    desc: 'Reinforcement learning agent navigating complex roads autonomously using sensor fusion and CNN perception.',
    tags: ['Python', 'PyTorch', 'OpenCV', 'RL'],
    image: '/assets/images/project_ml.png',
    color: '#a78bfa',
    github: 'https://github.com/YashSinghal26',
  },
  {
    title: 'Campus Connect',
    type: 'Full-Stack · Social',
    desc: 'University social platform for posts, project collaboration, and campus event discovery.',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    image: '/assets/images/project_campus.png',
    color: '#22d3ee',
    github: 'https://github.com/YashSinghal26',
  },
  {
    title: 'Deep Fake Detection',
    type: 'Hackathon · Vision',
    desc: 'Computer vision pipeline detecting manipulated facial imagery with 94% precision using deep learning.',
    tags: ['OpenCV', 'TensorFlow', 'Python', 'CNN'],
    image: '/assets/images/project_vision.png',
    color: '#fb7185',
    github: 'https://github.com/YashSinghal26',
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }
})

export default function Projects() {
  return (
    <section className="projects" id="work">
      <div className="projects-container">
        <motion.div className="projects-header" {...fadeUp()}>
          <span className="section-tag">Selected Work</span>
          <h2 className="projects-title">
            Creating experiences<br />worth <span className="accent-text">remembering</span>
          </h2>
          <p className="projects-sub">
            A curated selection spanning AI, full-stack, and everything in between.
          </p>
        </motion.div>

        <div className="projects-list">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.github}
              target="_blank"
              rel="noopener"
              className={`project-row ${p.featured ? 'featured' : ''}`}
              {...fadeUp(i * 0.1)}
              whileHover={{ x: 12 }}
            >
              <div className="project-row-left">
                <div className="project-index" style={{ color: p.color }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="project-info">
                  <span className="project-type">{p.type}</span>
                  <h3 className="project-name">{p.title}</h3>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-tags">
                    {p.tags.map(t => <span key={t} style={{ borderColor: `${p.color}33`, color: p.color, background: `${p.color}11` }}>{t}</span>)}
                  </div>
                </div>
              </div>
              <div className="project-row-right">
                <div className="project-thumb" style={{ '--accent-color': p.color }}>
                  <img src={p.image} alt={p.title} />
                </div>
                <div className="project-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
