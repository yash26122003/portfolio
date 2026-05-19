import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
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
    desc: 'Reinforcement learning agent navigating roads autonomously using sensor fusion and CNN-based perception.',
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
    desc: 'Computer vision pipeline detecting manipulated facial imagery with 94% precision via deep learning.',
    tags: ['OpenCV', 'TensorFlow', 'Python', 'CNN'],
    image: '/assets/images/project_vision.png',
    color: '#fb7185',
    github: 'https://github.com/YashSinghal26',
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 60, filter: 'blur(8px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }
})

function ProjectRow({ project, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], [20, -20])

  return (
    <motion.a
      ref={ref}
      href={project.github}
      target="_blank"
      rel="noopener"
      className={`project-row ${project.featured ? 'featured' : ''}`}
      {...fadeUp(index * 0.08)}
    >
      <div className="project-row-left">
        <div className="project-index" style={{ color: project.color }}>
          {String(index + 1).padStart(2, '0')}
        </div>
        <div className="project-info">
          <span className="project-type">{project.type}</span>
          <h3 className="project-name">{project.title}</h3>
          <p className="project-desc">{project.desc}</p>
          <div className="project-tags">
            {project.tags.map(t => (
              <span key={t} style={{
                borderColor: `${project.color}33`,
                color: project.color,
                background: `${project.color}0d`
              }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="project-row-right">
        <motion.div className="project-thumb" style={{ y: imgY }}>
          <img src={project.image} alt={project.title} />
          <div className="thumb-overlay" style={{ background: `linear-gradient(135deg, ${project.color}22, transparent)` }} />
        </motion.div>
        <div className="project-arrow magnetic">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
        </div>
      </div>
    </motion.a>
  )
}

export default function Projects() {
  return (
    <section className="projects" id="work">
      <div className="projects-container">
        <motion.div className="projects-header" {...fadeUp()}>
          <span className="section-tag">// selected work</span>
          <h2 className="projects-title">
            Creating experiences<br />worth <span className="accent-text">remembering</span>
          </h2>
          <p className="projects-sub">
            A curated selection spanning AI, full-stack, and everything in between.
          </p>
        </motion.div>

        <div className="projects-list">
          {projects.map((p, i) => (
            <ProjectRow key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
