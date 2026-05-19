import React, { useEffect, useRef } from 'react'
import Hero from './components/Hero'
import BentoGrid from './components/BentoGrid'
import Marquee from './components/Marquee'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import SmoothScroll from './components/SmoothScroll'
import './App.css'

function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX - 4}px`
        dotRef.current.style.top = `${e.clientY - 4}px`
      }
    }
    const animate = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.15
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.15
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x - 20}px`
        ringRef.current.style.top = `${ringPos.current.y - 20}px`
      }
      requestAnimationFrame(animate)
    }

    const addHover = () => ringRef.current?.classList.add('hovering')
    const removeHover = () => ringRef.current?.classList.remove('hovering')

    window.addEventListener('mousemove', move)
    requestAnimationFrame(animate)

    document.querySelectorAll('a, button, .magnetic').forEach(el => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      document.querySelectorAll('a, button, .magnetic').forEach(el => {
        el.removeEventListener('mouseenter', addHover)
        el.removeEventListener('mouseleave', removeHover)
      })
    }
  }, [])

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}

export default function App() {
  return (
    <>
      <CustomCursor />
      <div className="grain" />
      <SmoothScroll>
        <div className="app">
          <Navbar />
          <Hero />
          <Marquee text="FULL-STACK · ML ENGINEER · DATA SCIENTIST · REACT · PYTHON · PYTORCH · HACKATHON WINNER · " />
          <BentoGrid />
          <Projects />
          <Marquee text="PHISHING DETECTION · JUSTICEGPT · SELF-DRIVING SIM · CAMPUS CONNECT · DEEP FAKE · CHATBOT · " reverse />
          <Experience />
          <Footer />
        </div>
      </SmoothScroll>
    </>
  )
}
