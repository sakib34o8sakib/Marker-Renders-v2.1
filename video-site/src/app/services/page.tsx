export default function Services() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">Services</h1>
        <div className="space-y-8">
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-2">Video Editing</h2>
            <p className="text-gray-400">Full-scale post-production for YouTube videos, documentaries, and interviews.</p>
          </div>
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-2">Color Grading</h2>
            <p className="text-gray-400">Professional color correction and grading in DaVinci Resolve.</p>
          </div>
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-2">Motion Graphics</h2>
            <p className="text-gray-400">Custom titles, lower thirds, and visual effects to enhance your story.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
