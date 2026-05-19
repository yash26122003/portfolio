import React from 'react'
import './Marquee.css'

export default function Marquee({ text, reverse }) {
  const content = text.repeat(4)
  return (
    <div className="marquee-section">
      <div className={`marquee-track ${reverse ? 'reverse' : ''}`}>
        <span className="marquee-text">{content}</span>
        <span className="marquee-text">{content}</span>
      </div>
    </div>
  )
}
