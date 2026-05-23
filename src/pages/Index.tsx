import { useEffect, useRef } from 'react'
import { Play } from 'lucide-react'
import skipLogo from '@/assets/image-dd6eb.png'

const SkipIcon = () => (
  <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.0261 23.5879C13.4069 24.2071 13.059 25.0471 13.059 25.9228V30.8395L3.31812 25.2174C2.92862 24.9926 2.5961 24.6951 2.33374 24.3476L12.8487 17.2637C13.2576 16.9881 13.7398 16.8408 14.2328 16.8408H20.7732L14.0261 23.5879Z" fill="white"/>
    <path d="M22.7602 17.1891L22.8188 17.1273C22.7999 17.1482 22.7803 17.169 22.7602 17.1891Z" fill="white"/>
    <path d="M13.059 6.1201C13.059 6.99584 13.4069 7.83581 14.0261 8.45507L20.7608 15.1898H14.2328C13.411 15.1898 12.6077 15.435 11.9262 15.8942L1.69474 22.7874C1.67621 22.6461 1.66675 22.5025 1.66675 22.3577V9.66047C1.6668 8.48065 2.29629 7.39024 3.31812 6.80044L13.059 1.17837V6.1201Z" fill="white"/>
    <path d="M22.9718 16.93L22.9246 16.9977C22.9472 16.9669 22.9681 16.9349 22.9884 16.903C22.9828 16.9118 22.9775 16.9212 22.9718 16.93Z" fill="white"/>
    <path d="M14.71 0.249423C15.6495 -0.138207 16.7255 -0.0740628 17.6198 0.442131L28.6198 6.79142C29.6417 7.38123 30.2712 8.47157 30.2712 9.65144V22.3487C30.2711 23.5285 29.6417 24.6186 28.6198 25.2084L17.6198 31.5577C16.7255 32.0739 15.6495 32.1381 14.71 31.7504V25.9226C14.71 25.4847 14.8841 25.0646 15.1937 24.755L22.7598 17.1892C23.4045 16.5445 23.4044 15.499 22.7598 14.8542L15.1937 7.28816C14.8841 6.97853 14.71 6.55841 14.71 6.12052V0.249423Z" fill="white"/>
  </svg>
)

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
    let autoRadius = 40
    let animationFrameId: number

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect()
      mouseX = ((e.clientX - rect.left) / rect.width) * 100
      mouseY = ((e.clientY - rect.top) / rect.height) * 100
    }

    const handleMouseLeave = () => {
      mouseX = 50
      mouseY = 50
    }

    const updateLoop = () => {
      autoAngle += 0.0008

      const autoX = 50 + Math.cos(autoAngle) * autoRadius
      const autoY = 50 + Math.sin(autoAngle * 0.7) * autoRadius * 0.6

      let targetX, targetY

      if (mouseX < 0) {
        targetX = autoX
        targetY = autoY
      } else {
        targetX = mouseX * 0.85 + autoX * 0.15
        targetY = mouseY * 0.85 + autoY * 0.15
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
    hero.addEventListener('mouseleave', handleMouseLeave)
    animationFrameId = requestAnimationFrame(updateLoop)

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove)
      hero.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div
      ref={heroRef}
      className="hero relative flex-1 flex flex-col items-center w-full min-h-screen"
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

          {/* Botão primário — gradiente */}
          <button
            className="w-full sm:w-auto h-[48px] px-[28px] text-white text-[16px] font-medium shadow-none transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-[10px] cursor-pointer"
            style={{
              borderRadius: '9999px',
              background: 'linear-gradient(180deg, var(--Skip-Blue-Violet-600-Main, #4F46E5) 0%, var(--Skip-Blue-Violet-400, #8881F8) 100%)',
              border: 'none',
            }}
          >
            <SkipIcon />
            Quero fazer parte
          </button>

          {/* Botão secundário — glass */}
          <button
            className="w-full sm:w-auto h-[48px] px-[28px] text-[16px] font-medium shadow-none transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-[8px] cursor-pointer"
            style={{
              borderRadius: '9999px',
              background: 'rgba(227, 228, 229, 0.60)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: 'none',
              color: '#374151',
            }}
          >
            <Play className="h-4 w-4" />
            Explorar casos de uso
          </button>

        </div>
      </div>
    </div>
  )
}

export default Index
