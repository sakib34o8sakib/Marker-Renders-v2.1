export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white p-8 flex items-center justify-center">
      <div className="max-w-md w-full bg-gray-900 p-8 rounded-2xl">
        <h1 className="text-4xl font-bold mb-6 text-center">Let&apos;s Talk</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
            <input type="text" className="w-full bg-black border border-gray-800 rounded-lg p-3 text-white focus:outline-none focus:border-gray-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
            <input type="email" className="w-full bg-black border border-gray-800 rounded-lg p-3 text-white focus:outline-none focus:border-gray-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
            <textarea rows={4} className="w-full bg-black border border-gray-800 rounded-lg p-3 text-white focus:outline-none focus:border-gray-500"></textarea>
          </div>
          <button type="button" className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition">Send Message</button>
        </form>
      </div>
    </div>
  );
}
