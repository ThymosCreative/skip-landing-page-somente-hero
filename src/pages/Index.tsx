import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play } from 'lucide-react'
import skipLogo from '@/assets/image-dd6eb.png'

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    let mouseX = -9999
    let mouseY = -9999
    let smoothX = 50
    let smoothY = 50
    let velX = 0
    let velY = 0
    let autoAngle = 0
    let autoRadius = 180
    let animationFrameId: number

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect()
      mouseX = ((e.clientX - rect.left) / rect.width) * 100
      mouseY = ((e.clientY - rect.top) / rect.height) * 100
    }

    const updateLoop = () => {
      autoAngle += 0.003

      const autoX = 50 + Math.cos(autoAngle) * autoRadius
      const autoY = 50 + Math.sin(autoAngle * 0.7) * autoRadius * 0.6

      let targetX, targetY

      if (mouseX < 0) {
        targetX = autoX
        targetY = autoY
      } else {
        targetX = mouseX * 0.6 + autoX * 0.4
        targetY = mouseY * 0.6 + autoY * 0.4
      }

      velX += (targetX - smoothX) * 0.012
      velY += (targetY - smoothY) * 0.012
      velX *= 0.88
      velY *= 0.88
      smoothX += velX
      smoothY += velY

      hero.style.setProperty('--ring-x', `${smoothX}`)
      hero.style.setProperty('--ring-y', `${smoothY}`)

      animationFrameId = requestAnimationFrame(updateLoop)
    }

    hero.addEventListener('mousemove', handleMouseMove)
    animationFrameId = requestAnimationFrame(updateLoop)

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div
      ref={heroRef}
      className="hero relative flex-1 flex flex-col items-center overflow-hidden w-full min-h-screen"
    >
      {/* Hero Content Cluster (Centered Vertically ~34vh-38vh) */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-[1100px]"
        style={{ marginTop: '38vh' }}
      >
        {/* Logo Lockup */}
        <div className="animate-fade-in-up fill-mode-both flex items-center justify-center mb-4">
          <img
            src={skipLogo}
            alt="Skip Logo"
            className="h-[32px] sm:h-[40px] w-auto object-contain"
          />
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-in-up fill-mode-both delay-100 text-[#0F0F1A] font-normal text-[48px] md:text-[72px] lg:text-[104px] leading-[1.15] lg:leading-[104px] mb-[32px] w-full max-w-[1000px] tracking-tight"
          style={{
            fontFamily: '"SF Pro", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
          }}
        >
          O criador de Sistemas Internos mais intuitivo do mundo
        </h1>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up fill-mode-both delay-200 flex flex-col sm:flex-row items-center gap-[12px] w-full sm:w-auto">
          <Button className="w-full sm:w-auto h-[48px] px-[28px] bg-[#4F46E5] hover:bg-[#4038CA] text-white rounded-full text-[16px] font-medium shadow-none transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group">
            Começar agora
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            variant="outline"
            className="w-full sm:w-auto h-[48px] px-[28px] border-[1.5px] border-[#E5E7EB] text-[#374151] hover:bg-gray-50 rounded-full text-[16px] font-medium bg-white shadow-none transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
          >
            <Play className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
            Ver como funciona
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Index
