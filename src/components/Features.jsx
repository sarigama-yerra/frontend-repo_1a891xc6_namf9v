import { PhoneCall, CalendarClock, BrainCircuit, Sparkles, ShieldCheck, MicVocal } from 'lucide-react'

function Feature({ Icon, title, description }) {
  return (
    <div className="group rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition backdrop-blur">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-400 via-fuchsia-400 to-amber-300 p-[2px]">
          <div className="h-full w-full rounded-[10px] bg-slate-950/80 flex items-center justify-center">
            <Icon className="h-5 w-5 text-white" />
          </div>
        </div>
        <h3 className="text-white font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-white/70 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

function Features() {
  const items = [
    { Icon: PhoneCall, title: 'Natural voice calls', description: 'Human-like conversations with pauses, intonation and emotion. Fine-tuned for sales.' },
    { Icon: CalendarClock, title: 'Scheduling built-in', description: 'Books meetings on your calendar and sends confirmations automatically.' },
    { Icon: BrainCircuit, title: 'Memory + context', description: 'Understands previous chats and adapts to your playbook in real-time.' },
    { Icon: ShieldCheck, title: 'Compliance-ready', description: 'Opt-in, call recording control and PII redaction with audit logs.' },
    { Icon: Sparkles, title: 'Custom personas', description: 'Tune tone, script and goals to match your brand or campaign.' },
    { Icon: MicVocal, title: 'Multi-language', description: '40+ languages with fast switching for global audiences.' },
  ]

  return (
    <section id="features" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Built for speed, tuned for conversion</h2>
          <p className="mt-3 text-white/70">Everything you need to turn interest into booked calls without lifting a finger.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <Feature key={idx} {...it} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
