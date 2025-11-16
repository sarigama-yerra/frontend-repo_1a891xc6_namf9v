import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(99,102,241,0.25),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(244,114,182,0.2),transparent_40%),radial-gradient(circle_at_20%_80%,rgba(251,146,60,0.2),transparent_40%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-20">
        <div className="max-w-2xl text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm border border-white/10 mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Live, on-call AI Lead Agent
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
            Turn every visitor into a conversation and every conversation into a qualified lead.
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-xl">
            A futuristic voice-first agent that greets, qualifies and books appointments for you 24/7. Built with multi-turn memory, tone control and CRM sync.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#demo" className="inline-flex justify-center items-center gap-2 rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold shadow-lg shadow-white/10">
              Launch Interactive Demo
            </a>
            <a href="#features" className="inline-flex justify-center items-center gap-2 rounded-xl bg-white/10 text-white px-5 py-3 font-semibold border border-white/10 hover:bg-white/15">
              Explore Features
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-white/80">
            <div className="flex -space-x-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <img key={i} src={`https://i.pravatar.cc/48?img=${i+1}`} alt="avatar" className="h-9 w-9 rounded-full ring-2 ring-white/20" />
              ))}
            </div>
            <p className="text-sm">Trusted by teams automating >10k calls monthly</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
