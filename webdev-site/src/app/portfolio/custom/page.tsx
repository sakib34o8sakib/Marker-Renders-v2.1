export default function CustomCorporate() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8"><a href="/portfolio" className="text-slate-400 hover:text-white">← Back to Hub</a></div>
        <nav className="flex justify-between items-center mb-16 pb-6 border-b border-slate-800">
          <div className="text-2xl font-bold tracking-widest">NEXUS<span className="text-blue-500">CORP</span></div>
          <div className="space-x-6 text-sm text-slate-400">
            <span>Solutions</span>
            <span>About</span>
            <span>Investors</span>
          </div>
        </nav>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">Enterprise Infrastructure for the Modern Web.</h1>
            <p className="text-slate-400 mb-8 text-lg">Scalable, secure, and resilient architectures tailored for global operations.</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-sm font-semibold hover:bg-blue-700">Contact Sales</button>
          </div>
          <div className="aspect-square bg-slate-800 rounded-full flex items-center justify-center border-8 border-slate-700">
            <div className="w-1/2 h-1/2 bg-blue-500 rounded-full blur-2xl opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
