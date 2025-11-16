import { Menu, Sparkles } from 'lucide-react'

function Navbar() {
  return (
    <header className="relative z-20 w-full">
      <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-400 via-fuchsia-400 to-amber-300 p-[2px]">
            <div className="h-full w-full rounded-[10px] bg-slate-950/80 flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-white/90" />
            </div>
          </div>
          <span className="text-white text-lg font-semibold tracking-tight">
            Auralead
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-white/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#how" className="hover:text-white transition">How it works</a>
          <a href="#showcase" className="hover:text-white transition">Showcase</a>
        </div>

        <button className="inline-flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur px-4 py-2 text-white/90 hover:text-white hover:bg-white/15 transition border border-white/10">
          <Sparkles className="h-4 w-4" />
          Try the Agent
        </button>

        <button className="md:hidden p-2 rounded-lg bg-white/10 text-white/90 border border-white/10">
          <Menu className="h-5 w-5" />
        </button>
      </nav>
    </header>
  )
}

export default Navbar
