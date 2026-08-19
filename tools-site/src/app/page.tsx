export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 p-8 font-mono">
      <header className="max-w-4xl mx-auto py-16">
        <h1 className="text-5xl font-bold mb-4 text-blue-400">Resolve<span className="text-white">Scripts</span></h1>
        <p className="text-xl text-slate-400 mb-8 max-w-2xl">Automation tools and scripts built for DaVinci Resolve editors to save hours of manual work.</p>
        <div className="flex gap-4">
          <a href="/scripts" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">Browse Scripts</a>
          <a href="/docs" className="border border-slate-700 text-slate-300 px-6 py-3 rounded hover:bg-slate-800 transition">Documentation</a>
        </div>
      </header>
      <main className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg">
          <div className="text-blue-400 mb-2">⚡</div>
          <h3 className="font-bold mb-2">Fast Execution</h3>
          <p className="text-sm text-slate-400">Optimized Python scripts that run instantly within Resolve.</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg">
          <div className="text-blue-400 mb-2">🔄</div>
          <h3 className="font-bold mb-2">Batch Processing</h3>
          <p className="text-sm text-slate-400">Automate repetitive tasks across multiple timelines at once.</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg">
          <div className="text-blue-400 mb-2">🛠️</div>
          <h3 className="font-bold mb-2">Easy Setup</h3>
          <p className="text-sm text-slate-400">Simple installation process with clear documentation.</p>
        </div>
      </main>
    </div>
  );
}
