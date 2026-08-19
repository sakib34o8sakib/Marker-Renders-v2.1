export default function Ecommerce() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <a href="/portfolio" className="text-stone-500 hover:text-stone-900">← Back to Hub</a>
          <div className="font-bold">Cart (0)</div>
        </div>
        <h1 className="text-4xl font-serif mb-12 text-center">Modern Essentials</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-stone-200 mb-4 group-hover:opacity-90 transition"></div>
              <h3 className="font-bold">Premium Product {i}</h3>
              <p className="text-stone-500">$99.00</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
