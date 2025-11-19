import { Menu } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-emerald-400 to-cyan-400 shadow-inner" />
          <span className="text-white font-semibold tracking-wide text-lg">Ankra</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200/80">
          <a href="#story" className="hover:text-white transition-colors">Story</a>
          <a href="#features" className="hover:text-white transition-colors">Why Ankra</a>
          <a href="#products" className="hover:text-white transition-colors">Collection</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 text-slate-200/80">
          <Menu size={18} />
        </button>
      </div>
    </header>
  )
}

export default Navbar
