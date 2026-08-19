export default function FbShopLead() {
  return (
    <div className="min-h-screen bg-rose-50 p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="bg-rose-500 p-4 text-center text-white relative">
          <div className="absolute left-4 top-4"><a href="/portfolio" className="text-white/80 hover:text-white text-sm">← Back</a></div>
          <h1 className="font-bold text-xl mt-6">Instant Order Page</h1>
          <p className="text-rose-100 text-sm">Stop waiting in DMs. Order now.</p>
        </div>
        <div className="p-6">
          <div className="aspect-square bg-rose-100 rounded-xl mb-6 flex items-center justify-center text-rose-300 font-bold">Product Image</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Trending Product Name</h2>
          <div className="text-3xl font-black text-rose-500 mb-6">৳ 1,499 <span className="text-sm text-gray-400 line-through font-normal">৳ 2,000</span></div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-rose-500" placeholder="e.g. John Doe" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
              <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-rose-500" placeholder="01XXX-XXXXXX" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Full Delivery Address</label>
              <textarea rows={3} className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-rose-500" placeholder="House, Road, Area, City"></textarea>
            </div>
            <button type="button" className="w-full bg-rose-500 text-white font-black text-lg py-4 rounded-xl hover:bg-rose-600 transition shadow-lg shadow-rose-200 mt-4">CONFIRM ORDER NOW</button>
          </form>
        </div>
      </div>
    </div>
  );
}
