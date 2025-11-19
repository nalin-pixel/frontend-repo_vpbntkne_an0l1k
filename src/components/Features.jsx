function Features() {
  const items = [
    {
      title: 'Automotive-Grade Prints',
      desc: 'High-fidelity DTG prints tuned for crisp lines and rich blacks—your car looks exactly like your car.',
    },
    {
      title: 'Built To Last',
      desc: 'Heavyweight 100% cotton, double-stitched seams, pre-shrunk and enzyme-washed for serious durability.',
    },
    {
      title: 'Egypt × Germany DNA',
      desc: 'Designed between Cairo and Berlin—bold street energy meets precision craft.',
    },
  ]

  return (
    <section id="features" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_-10%,rgba(16,185,129,0.12),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Why Ankra</h2>
          <p className="mt-3 text-slate-300">Performance apparel for people who live for machines.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group rounded-2xl border border-white/10 bg-slate-900/40 p-6 hover:border-emerald-300/30 transition-colors">
              <h3 className="text-white font-semibold text-lg mb-2">{it.title}</h3>
              <p className="text-slate-300/90 text-sm leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
