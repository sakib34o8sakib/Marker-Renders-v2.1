export default function Scripts() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 p-8 font-mono">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Available Scripts</h1>
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-xl font-bold text-blue-400 mb-2">Auto-Sync Multicam</h2>
              <p className="text-slate-400 text-sm">Automatically syncs multiple camera angles based on audio waveforms across bins.</p>
            </div>
            <button className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded text-sm transition">Download .py</button>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-xl font-bold text-blue-400 mb-2">Smart Export Render</h2>
              <p className="text-slate-400 text-sm">Batch queue all timelines matching a specific naming convention with custom presets.</p>
            </div>
            <button className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded text-sm transition">Download .py</button>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-xl font-bold text-blue-400 mb-2">Marker to Subtitles</h2>
              <p className="text-slate-400 text-sm">Converts timeline markers directly into a subtitle track with standard formatting.</p>
            </div>
            <button className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded text-sm transition">Download .py</button>
          </div>
        </div>
      </div>
    </div>
  );
}
