export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans">
      <header className="max-w-6xl mx-auto py-24 px-8 text-center">
        <h1 className="text-6xl font-extrabold tracking-tight mb-6 text-zinc-900">Digital Presence, <span className="text-indigo-600">Perfected.</span></h1>
        <p className="text-xl text-zinc-600 mb-10 max-w-3xl mx-auto">I build high-performance, multi-page websites designed to convert. Whether you&apos;re a creator, an e-commerce brand, or a local business, I craft the perfect digital solution.</p>
        <div className="flex gap-4 justify-center">
          <a href="/portfolio" className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-700 transition shadow-lg">View Portfolio</a>
        </div>
      </header>
      <main className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Specialized Web Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-indigo-600">Creators & Editors</h3>
              <p className="text-zinc-600">Cinematic portfolios designed to showcase visual work without compromise.</p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-indigo-600">E-Commerce</h3>
              <p className="text-zinc-600">Fast, secure storefronts optimized for maximum conversion.</p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-indigo-600">FB Shop Leads</h3>
              <p className="text-zinc-600">Quick-order landing pages to bypass DMs and close sales instantly.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
