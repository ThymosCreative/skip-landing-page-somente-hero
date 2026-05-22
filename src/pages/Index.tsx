import { ParticleCanvas } from '@/components/ParticleCanvas'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play } from 'lucide-react'

const Index = () => {
  return (
    <div
      className="relative flex-1 flex flex-col items-center justify-center overflow-hidden w-full h-full min-h-screen"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 50% 40%, #EEF2FF 0%, #F5F3FF 30%, #FFFFFF 70%)',
        boxShadow: 'inset 0 0 120px 40px rgba(238, 242, 255, 0.6)',
      }}
    >
      {/* Interactive Dash Particle System */}
      <ParticleCanvas />

      {/* Hero Content Container */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center w-full">
        {/* Badge */}
        <div className="animate-fade-in-up fill-mode-both inline-flex items-center gap-1.5 px-[14px] py-[6px] rounded-full bg-[#EEF2FF] border border-[#C7D2FE] text-[#4F46E5] text-[13px] font-medium mb-8 cursor-default transition-transform hover:scale-105">
          ✦ Agora com Gemini 3.1!
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-up fill-mode-both delay-100 text-[40px] sm:text-[56px] lg:text-[68px] font-extrabold tracking-tight leading-[1.1] mb-6">
          <span className="text-[#1E1B4B] block mb-[6px]">O criador de</span>
          <span className="text-[#1E1B4B] block">Sistemas Internos</span>
          <span className="text-[#4F46E5] block">mais intuitivo do mundo</span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-in-up fill-mode-both delay-200 text-[18px] text-[#6B7280] font-normal max-w-[520px] mx-auto mb-10 leading-relaxed">
          Transforme suas ideias em sistemas perfeitos para melhorar a eficiência dos processos da
          sua empresa.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up fill-mode-both delay-300 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4 sm:px-0">
          <Button className="w-full sm:w-auto px-[28px] py-[14px] h-auto bg-[#4F46E5] hover:bg-[#4038CA] text-white rounded-full text-[16px] font-medium shadow-none transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group">
            Começar agora
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            variant="outline"
            className="w-full sm:w-auto px-[28px] py-[14px] h-auto border-[1.5px] border-[#D1D5DB] text-[#374151] hover:bg-gray-50 rounded-full text-[16px] font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group bg-white shadow-none"
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
