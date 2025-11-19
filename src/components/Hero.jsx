import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="home" className="relative h-[80vh] sm:h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/40 to-slate-950 pointer-events-none" />

      <div className="relative z-10 h-full max-w-6xl mx-auto px-4 sm:px-6 flex items-center">
        <div className="max-w-2xl">
          <p className="text-emerald-300/90 uppercase tracking-[0.25em] text-xs sm:text-sm mb-3">Egypt • Germany</p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.05] drop-shadow-[0_0_25px_rgba(16,185,129,0.2)]">
            Your Car. Your Canvas.
          </h1>
          <p className="mt-5 text-slate-200/90 text-base sm:text-lg max-w-xl">
            Ankra crafts premium tees and hoodies that put your ride front and center. Built with heavy-weight cotton, engineered prints, and reinforced seams for daily wear durability.
          </p>
          
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#products" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-emerald-400 text-slate-900 font-semibold shadow-lg shadow-emerald-400/25 hover:shadow-emerald-400/40 transition-all">
              Shop Collection
            </a>
            <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-white/15 text-white/90 hover:text-white">
              Why Ankra
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
