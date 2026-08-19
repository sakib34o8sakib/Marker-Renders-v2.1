export default function Coaching() {
  return (
    <div className="min-h-screen bg-blue-50 text-slate-800 p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8"><a href="/portfolio" className="text-slate-500 hover:text-slate-900">← Back to Hub</a></div>
        <div className="bg-white p-12 rounded-3xl shadow-xl text-center">
          <h1 className="text-5xl font-bold mb-6 text-blue-900">Unlock Your Potential</h1>
          <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">1-on-1 coaching to scale your business and mindset.</p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition">Book a Consultation</button>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-bold text-lg mb-2">Strategy</h3>
            <p className="text-sm text-slate-600">Clear roadmaps for growth.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-bold text-lg mb-2">Mindset</h3>
            <p className="text-sm text-slate-600">Overcome mental blocks.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-bold text-lg mb-2">Execution</h3>
            <p className="text-sm text-slate-600">Accountability to get it done.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
