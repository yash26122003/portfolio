import React, { useEffect, useRef } from 'react'

export default function SmoothScroll({ children }) {
  const scrollRef = useRef(null)
  const current = useRef(0)
  const target = useRef(0)
  const ease = 0.08
  const rafId = useRef(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const setBodyHeight = () => {
      document.body.style.height = `${el.scrollHeight}px`
    }
    setBodyHeight()

    const resizeObserver = new ResizeObserver(setBodyHeight)
    resizeObserver.observe(el)

    const onScroll = () => {
      target.current = window.scrollY
    }

    const animate = () => {
      current.current += (target.current - current.current) * ease
      if (Math.abs(target.current - current.current) < 0.5) {
        current.current = target.current
      }
      el.style.transform = `translate3d(0, ${-current.current}px, 0)`
      rafId.current = requestAnimationFrame(animate)
    }

    window.addEventListener('scroll', onScroll)
    rafId.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId.current)
      resizeObserver.disconnect()
      document.body.style.height = ''
    }
  }, [])

  return (
    <div
      ref={scrollRef}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', willChange: 'transform' }}
    >
      {children}
    </div>
  )
}
