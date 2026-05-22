import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans relative text-[#0F0F1A] bg-white">
      <Navbar />
      <main className="flex-1 flex flex-col w-full min-h-screen relative">
        <Outlet />
      </main>
    </div>
  )
}
