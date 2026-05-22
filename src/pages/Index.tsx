import { ParticleCanvas } from '@/components/ParticleCanvas'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play } from 'lucide-react'

const Index = () => {
  return (
    <div className="relative flex-1 flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Background radial gradient to draw focus to the center */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,theme(colors.primary.50)_0%,transparent_60%)] opacity-60" />

      {/* Interactive Particle Canvas */}
      <ParticleCanvas />

      {/* Hero Content Container */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center max-w-[900px] mt-12 sm:mt-0">
        {/* Badge Reveal */}
        <div className="animate-fade-in-up fill-mode-both inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-300 text-primary-600 text-sm font-medium mb-8 sm:mb-10 shadow-sm transition-transform hover:scale-105 cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-600"></span>
          </span>
          Agora com Gemini 3.1!
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-up fill-mode-both delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-display font-extrabold tracking-tight leading-[1.1] mb-6">
          <span className="text-dark-950 block">O criador de Sistemas Internos</span>
          <span className="text-primary-600 block mt-1 sm:mt-2">mais intuitivo do mundo</span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-in-up fill-mode-both delay-200 text-base sm:text-lg lg:text-xl text-gray-600 max-w-[650px] mx-auto mb-10 leading-relaxed font-normal">
          Transforme suas ideias em sistemas perfeitos para melhorar a eficiência dos processos da
          sua empresa. Sem código complexo, apenas arraste, solte e crie.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up fill-mode-both delay-300 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4 sm:px-0">
          <Button
            size="lg"
            className="w-full sm:w-auto h-12 sm:h-14 px-8 bg-primary-600 hover:bg-primary-700 text-white rounded-full text-base font-semibold shadow-elevation hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
          >
            Começar agora
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto h-12 sm:h-14 px-8 border-2 border-primary-200 text-primary-600 hover:bg-primary-50 hover:border-primary-300 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group bg-white/50 backdrop-blur-sm"
          >
            <Play className="mr-2 h-4 w-4 fill-primary-600/20 group-hover:fill-primary-600 transition-colors" />
            Ver como funciona
          </Button>
        </div>

        {/* Subtle trust indicator or extra info could go here, animated with delay-400 */}
        <div className="animate-fade-in-up fill-mode-both delay-400 mt-16 sm:mt-24 text-sm font-medium text-gray-500 flex items-center gap-2 justify-center">
          <span className="w-8 h-[1px] bg-gray-300 rounded-full"></span>
          Confiado por empresas inovadoras
          <span className="w-8 h-[1px] bg-gray-300 rounded-full"></span>
        </div>
      </div>
    </div>
  )
}

export default Index
