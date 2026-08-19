export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 p-8 font-mono flex items-center justify-center">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-2 text-blue-400">Support / Feedback</h1>
        <p className="text-slate-400 text-sm mb-6">Need a custom script or found a bug?</p>
        <form className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Email</label>
            <input type="email" className="w-full bg-black border border-slate-700 rounded p-2 text-white focus:outline-none focus:border-blue-500 font-sans" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Issue / Request</label>
            <textarea rows={5} className="w-full bg-black border border-slate-700 rounded p-2 text-white focus:outline-none focus:border-blue-500 font-sans"></textarea>
          </div>
          <button type="button" className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition">Submit</button>
        </form>
      </div>
    </div>
  );
}
