export default function DesignerPortfolio() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8"><a href="/portfolio" className="text-gray-400 hover:text-white">← Back to Hub</a></div>
        <h1 className="text-6xl font-black uppercase tracking-tighter mb-12">Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Artist</span></h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-square bg-zinc-900 rounded-xl hover:scale-105 transition duration-300"></div>
          <div className="aspect-square bg-zinc-900 rounded-xl hover:scale-105 transition duration-300"></div>
          <div className="aspect-square bg-zinc-900 rounded-xl hover:scale-105 transition duration-300 col-span-2 aspect-[2/1]"></div>
        </div>
      </div>
    </div>
  );
}
