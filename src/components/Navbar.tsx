import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Hexagon } from 'lucide-react'

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#F3F4F6]">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-[#1E1B4B] font-bold text-[18px]">
          <Hexagon className="w-5 h-5 fill-current" />
          Skip
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-[#374151] font-medium text-[14px]">
          <Link to="#" className="hover:text-[#1E1B4B] transition-colors">
            Como funciona
          </Link>
          <Link to="#" className="hover:text-[#1E1B4B] transition-colors">
            Preços
          </Link>
          <Link to="#" className="hover:text-[#1E1B4B] transition-colors">
            Templates
          </Link>
        </nav>
        <div className="flex items-center gap-[12px]">
          <Button
            variant="outline"
            className="hidden sm:flex border-[1.5px] border-[#E5E7EB] text-[#374151] rounded-full px-[20px] h-[40px] font-medium hover:bg-gray-50 shadow-none transition-all"
          >
            Login
          </Button>
          <Button className="bg-[#4F46E5] hover:bg-[#4038CA] text-white rounded-full px-[20px] h-[40px] font-medium shadow-none transition-all">
            Começar grátis
          </Button>
        </div>
      </div>
    </header>
  )
}
