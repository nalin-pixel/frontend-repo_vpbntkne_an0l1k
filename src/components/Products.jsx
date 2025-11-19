function Products() {
  const products = [
    { name: 'Custom Car Tee', price: '$45', tag: 'Heavyweight 240 GSM' },
    { name: 'Track Day Hoodie', price: '$75', tag: 'Ultra-soft Fleece' },
    { name: 'Number Plate Tee', price: '$49', tag: 'Personalized' },
  ]

  return (
    <section id="products" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Collection</h2>
            <p className="mt-3 text-slate-300">Core pieces designed for everyday speed.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-lg border border-white/15 text-white/90 hover:text-white">Request Custom</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.name} className="rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50">
              <div className="aspect-[4/3] bg-[radial-gradient(400px_200px_at_50%_20%,rgba(16,185,129,0.25),transparent)] grid place-items-center">
                <div className="w-24 h-24 rounded-xl bg-slate-800 border border-white/10" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">{p.name}</h3>
                  <span className="text-emerald-300 font-semibold">{p.price}</span>
                </div>
                <p className="mt-1 text-xs text-slate-400">{p.tag}</p>
                <button className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 rounded-lg bg-emerald-400 text-slate-900 font-semibold">Add to bag</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
