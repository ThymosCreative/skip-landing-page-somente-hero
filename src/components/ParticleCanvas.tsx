import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  size: number
  color: string
  baseVx: number
  baseVy: number
  vx: number
  vy: number
  alpha: number
}

const COLORS = ['#4F46E5', '#6B63F1', '#AAA5FC', '#4038CA']

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let isMounted = true

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      initParticles()
    }

    const initParticles = () => {
      const particleCount = window.innerWidth < 768 ? 60 : 150
      particlesRef.current = []

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 2.5 + 0.5,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          baseVx: (Math.random() - 0.5) * 0.5,
          baseVy: (Math.random() - 0.5) * 0.5,
          vx: 0,
          vy: 0,
          alpha: Math.random() * 0.6 + 0.2,
        })
      }
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const onMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    const draw = () => {
      if (!isMounted) return

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      const mouse = mouseRef.current

      particlesRef.current.forEach((p) => {
        // Calculate distance from mouse
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Interaction radius
        const interactionRadius = 180

        if (distance < interactionRadius) {
          const forceDirectionX = dx / distance
          const forceDirectionY = dy / distance
          const force = (interactionRadius - distance) / interactionRadius

          // Repulse
          p.vx -= forceDirectionX * force * 0.4
          p.vy -= forceDirectionY * force * 0.4
        }

        // Apply friction and return to base velocity
        p.vx += (p.baseVx - p.vx) * 0.05
        p.vy += (p.baseVy - p.vy) * 0.05

        // Update position
        p.x += p.vx
        p.y += p.vy

        // Wrap around screen
        if (p.x < 0) p.x = window.innerWidth
        if (p.x > window.innerWidth) p.x = 0
        if (p.y < 0) p.y = window.innerHeight
        if (p.y > window.innerHeight) p.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.alpha
        ctx.fill()
      })

      ctx.globalAlpha = 1
      animationFrameId = requestAnimationFrame(draw)
    }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)

    resize()
    draw()

    return () => {
      isMounted = false
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 bg-transparent" />
}
