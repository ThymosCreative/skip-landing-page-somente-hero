import { Outlet, Link } from 'react-router-dom'
import { Hexagon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Layout() {
  return (
    <div className="relative flex flex-col min-h-screen font-sans text-gray-700 selection:bg-indigo-100 selection:text-indigo-700">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E5E7EB] transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative flex items-center justify-center text-[#4F46E5] transition-transform duration-300 group-hover:scale-110">
                <Hexagon size={28} className="fill-[#EEF2FF] stroke-[1.5]" />
                <div className="absolute w-2 h-2 bg-[#4F46E5] rounded-full" />
              </div>
              <span className="text-xl font-bold text-[#1E1B4B] tracking-tight">Skip</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="#"
                className="text-[15px] font-medium text-gray-700 hover:text-[#4F46E5] transition-colors"
              >
                Como funciona
              </Link>
              <Link
                to="#"
                className="text-[15px] font-medium text-gray-700 hover:text-[#4F46E5] transition-colors"
              >
                Preços
              </Link>
              <Link
                to="#"
                className="text-[15px] font-medium text-gray-700 hover:text-[#4F46E5] transition-colors"
              >
                Templates
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3 sm:gap-4">
              <Button
                variant="ghost"
                className="hidden sm:inline-flex text-[15px] font-medium hover:text-[#4F46E5] hover:bg-[#EEF2FF] transition-colors rounded-full px-5"
              >
                Login
              </Button>
              <Button className="bg-[#4F46E5] hover:bg-[#4038CA] text-white rounded-full px-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                Começar grátis
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col relative z-10 pt-16 sm:pt-20">
        <Outlet />
      </main>
    </div>
  )
}
