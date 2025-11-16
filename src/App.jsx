import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Gradient background layers */}
      <div className="fixed inset-0 -z-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />

      <Navbar />
      <Hero />
      <Features />
      <Showcase />

      <footer className="relative border-t border-white/10"> 
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between text-white/60">
          <p>© {new Date().getFullYear()} Auralead. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <a className="hover:text-white" href="#features">Features</a>
            <a className="hover:text-white" href="#how">How it works</a>
            <a className="hover:text-white" href="#showcase">Showcase</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
