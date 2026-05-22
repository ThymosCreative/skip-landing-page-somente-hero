import { ParticleCanvas } from '@/components/ParticleCanvas'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play } from 'lucide-react'
import skipLogo from '@/assets/image-dd6eb.png'

const Index = () => {
  return (
    <div className="relative flex-1 flex flex-col items-center overflow-hidden w-full min-h-screen">
      {/* Interactive Particle System */}
      <ParticleCanvas />

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
