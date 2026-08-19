export default function Docs() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 p-8 font-mono">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Documentation</h1>
        <div className="prose prose-invert prose-slate">
          <h2>Getting Started</h2>
          <p className="text-slate-400 mb-6">Learn how to install and configure scripts for DaVinci Resolve.</p>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-bold mb-4 text-blue-400">1. Enable Scripting</h3>
            <p className="text-sm text-slate-300 mb-4">First, ensure scripting is enabled in Resolve preferences. You&apos;ll need Resolve Studio for full Python API access.</p>
            <code className="block bg-black p-4 rounded text-sm text-green-400">Preferences {'>'} System {'>'} General {'>'} External scripting using: Local</code>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-4 text-blue-400">2. Installation Path</h3>
            <p className="text-sm text-slate-300 mb-4">Place the downloaded .py files in your Resolve scripts folder:</p>
            <div className="space-y-2 text-sm text-slate-400 bg-black p-4 rounded">
              <p><span className="text-yellow-400">Mac:</span> /Library/Application Support/Blackmagic Design/DaVinci Resolve/Fusion/Scripts/Comp/</p>
              <p><span className="text-yellow-400">Windows:</span> C:\ProgramData\Blackmagic Design\DaVinci Resolve\Fusion\Scripts\Comp\</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
