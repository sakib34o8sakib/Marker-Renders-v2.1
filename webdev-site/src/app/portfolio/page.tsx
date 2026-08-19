export default function PortfolioIndex() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 py-16 px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-4">Portfolio Hub</h1>
        <p className="text-xl text-zinc-600 mb-12">Explore functional examples of the different web solutions I build.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="/portfolio/designer" className="block p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition border border-zinc-100">
            <h2 className="text-2xl font-bold text-indigo-600 mb-2">1. Designer / Editor Portfolio</h2>
            <p className="text-zinc-600">A dark, visual-heavy layout perfect for showcasing video or design work.</p>
          </a>
          <a href="/portfolio/ecommerce" className="block p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition border border-zinc-100">
            <h2 className="text-2xl font-bold text-indigo-600 mb-2">2. E-Commerce Storefront</h2>
            <p className="text-zinc-600">A clean shopping experience with product grids and cart concepts.</p>
          </a>
          <a href="/portfolio/coaching" className="block p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition border border-zinc-100">
            <h2 className="text-2xl font-bold text-indigo-600 mb-2">3. Coaching & Hospitality</h2>
            <p className="text-zinc-600">Service-based design with booking and scheduling focused layouts.</p>
          </a>
          <a href="/portfolio/custom" className="block p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition border border-zinc-100">
            <h2 className="text-2xl font-bold text-indigo-600 mb-2">4. Corporate / Custom Business</h2>
            <p className="text-zinc-600">Professional, trust-building layouts for B2B or specialized agencies.</p>
          </a>
          <a href="/portfolio/fb-shop" className="block p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition border border-zinc-100 md:col-span-2">
            <h2 className="text-2xl font-bold text-indigo-600 mb-2">5. FB Shop Quick-Order</h2>
            <p className="text-zinc-600">Streamlined landing pages designed to convert social media traffic into instant leads without waiting hours for price checks.</p>
          </a>
        </div>
      </div>
    </div>
  );
}
