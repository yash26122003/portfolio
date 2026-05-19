import React from 'react'
import Hero from './components/Hero'
import BentoGrid from './components/BentoGrid'
import Marquee from './components/Marquee'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './App.css'

export default function App() {
  return (
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
  )
}
