import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './Marquee.css'

export default function Marquee({ text, reverse }) {
  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress, [0, 1], [0, reverse ? 200 : -200])

  const content = text.repeat(6)
  return (
    <div className="marquee-section">
      <motion.div className={`marquee-track ${reverse ? 'reverse' : ''}`} style={{ x }}>
        <span className="marquee-text">{content}</span>
        <span className="marquee-text">{content}</span>
      </motion.div>
    </div>
  )
}
