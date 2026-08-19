export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <header className="max-w-4xl mx-auto py-12 text-center">
        <h1 className="text-6xl font-bold mb-4 tracking-tighter">Cinematic Edits</h1>
        <p className="text-xl text-gray-400 mb-8">Elevating your brand with compelling visuals.</p>
        <div className="flex gap-4 justify-center">
          <a href="/portfolio" className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">View Work</a>
          <a href="/contact" className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">Contact Me</a>
        </div>
      </header>
      <main className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
        <div className="bg-gray-900 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">Reels</h2>
          <p className="text-gray-400">Engaging short-form content tailored for TikTok, Instagram, and YouTube Shorts.</p>
        </div>
        <div className="bg-gray-900 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">Commercials</h2>
          <p className="text-gray-400">High-end promotional videos designed to convert and tell your brand&apos;s story.</p>
        </div>
      </main>
    </div>
  );
}
