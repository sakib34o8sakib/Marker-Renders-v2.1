export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-12">My Work</h1>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-gray-800 pb-2">Commercials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">Project 1</div>
            <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">Project 2</div>
            <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">Project 3</div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 border-b border-gray-800 pb-2">Reels & Shorts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="aspect-[9/16] bg-gray-900 rounded-lg flex items-center justify-center">Reel 1</div>
            <div className="aspect-[9/16] bg-gray-900 rounded-lg flex items-center justify-center">Reel 2</div>
            <div className="aspect-[9/16] bg-gray-900 rounded-lg flex items-center justify-center">Reel 3</div>
            <div className="aspect-[9/16] bg-gray-900 rounded-lg flex items-center justify-center">Reel 4</div>
          </div>
        </section>
      </div>
    </div>
  );
}
