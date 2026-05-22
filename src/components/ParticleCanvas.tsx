import { useEffect, useRef } from 'react'

interface Particle {
  lx: number // logical x (drift)
  ly: number // logical y (drift)
  x: number // actual x
  y: number // actual y
  width: number
  height: number
  angle: number
  color: string
  alpha: number
  dvx: number // drift velocity x
  dvy: number // drift velocity y
}

const PARTICLE_COUNT = 180
const INTERACTION_RADIUS = 120

const getParticleColor = () => {
  const rand = Math.random()
  if (rand < 0.5) {
    return Math.random() < 0.5 ? '#6B63F1' : '#8881F8'
  } else if (rand < 0.8) {
    return '#4F46E5'
  } else {
    return '#AAA5FC'
  }
}

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

      if (particlesRef.current.length === 0) {
        initParticles()
      }
    }

    const initParticles = () => {
      particlesRef.current = []

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const x = Math.random() * window.innerWidth
        const y = Math.random() * window.innerHeight

        const alpha = Math.random() * 0.85 + 0.15 // 0.15 to 1.0

        let dvx, dvy
        if (alpha < 0.3) {
          const speedX = Math.random() * 0.05 + 0.1 // 0.1 to 0.15
          const speedY = Math.random() * 0.05 + 0.1
          dvx = Math.random() < 0.5 ? speedX : -speedX
          dvy = Math.random() < 0.5 ? speedY : -speedY
        } else {
          dvx = (Math.random() - 0.5) * 0.6
          dvy = (Math.random() - 0.5) * 0.6
        }

        particlesRef.current.push({
          lx: x,
          ly: y,
          x: x,
          y: y,
          width: Math.random() * 14 + 4, // 4px to 18px
          height: Math.random() * 1 + 2, // 2px to 3px
          angle: (Math.random() - 0.5) * (Math.PI / 2), // -45deg to 45deg
          color: getParticleColor(),
          alpha: alpha,
          dvx: dvx,
          dvy: dvy,
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
        // 1. Update logical drift position
        p.lx += p.dvx
        p.ly += p.dvy

        // Wrap around screen boundaries for logical position
        if (p.lx < -20) p.lx = window.innerWidth + 20
        if (p.lx > window.innerWidth + 20) p.lx = -20
        if (p.ly < -20) p.ly = window.innerHeight + 20
        if (p.ly > window.innerHeight + 20) p.ly = -20

        // 2. Mouse Repulsion Calculation
        const dx = p.lx - mouse.x
        const dy = p.ly - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        let targetX = p.lx
        let targetY = p.ly

        if (dist < INTERACTION_RADIUS && dist > 0) {
          const force = (INTERACTION_RADIUS - dist) / INTERACTION_RADIUS
          const pushAmount = force * 80 // Max 80px displacement
          targetX = p.lx + (dx / dist) * pushAmount
          targetY = p.ly + (dy / dist) * pushAmount
        }

        // 3. Linear Interpolation to target
        p.x += (targetX - p.x) * 0.05
        p.y += (targetY - p.y) * 0.05

        // 4. Draw Dash
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.angle)
        ctx.globalAlpha = p.alpha
        ctx.fillStyle = p.color
        ctx.beginPath()

        if (ctx.roundRect) {
          ctx.roundRect(-p.width / 2, -p.height / 2, p.width, p.height, 2)
        } else {
          ctx.rect(-p.width / 2, -p.height / 2, p.width, p.height)
        }

        ctx.fill()
        ctx.restore()
      })

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

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  )
}
