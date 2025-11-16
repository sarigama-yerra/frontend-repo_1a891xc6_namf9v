function Showcase() {
  return (
    <section id="showcase" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.15),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.15),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">See it in action</h2>
            <p className="mt-4 text-white/80">A bold, clean landing focused on clarity and momentum. New color system, modern typography, and a hero animation that draws attention without distracting.</p>
            <ul className="mt-6 space-y-3 text-white/80 list-disc pl-5">
              <li>High-contrast dark theme with neon accents</li>
              <li>Fluid 3D aura animation in the hero</li>
              <li>Conversion-focused CTA blocks</li>
            </ul>
          </div>
          <div className="relative rounded-2xl bg-white/5 border border-white/10 p-3 backdrop-blur">
            <img src="https://storage.googleapis.com/msgsndr/SPBXXv3CeYypMFhMAXYc/media/690dbff7435700a4f89753bb.png" alt="Product mockup" className="rounded-xl w-full h-auto" />
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-tr from-indigo-500/30 via-fuchsia-500/30 to-amber-400/30 blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Showcase
