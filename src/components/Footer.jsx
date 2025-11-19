function Footer() {
  return (
    <footer id="contact" className="relative py-12 border-t border-white/10 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-semibold text-lg">Ankra</h3>
            <p className="text-slate-400 text-sm mt-1">Based in Egypt and Germany. Built for the road.</p>
          </div>
          <div className="text-slate-400 text-sm">
            <p>Custom orders: hello@ankra.co</p>
            <p className="mt-1">© {new Date().getFullYear()} Ankra. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
