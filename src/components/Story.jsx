export default function Story() {
  return (
    <section id="story" className="bg-gradient-to-b from-white to-red-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-red-900">From amma’s kitchen to yours</h2>
          <p className="mt-4 text-red-900/80 leading-relaxed">
            Our journey began with a simple promise: keep it real. We handpick seasonal produce, roast spices to perfection, and let the sun do its magic.
            Every jar is slow-crafted in small batches—just the way amma made it.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-4">
            {[
              "Cold-pressed oils",
              "Stone-ground spices",
              "No artificial preservatives",
              "Packed fresh, shipped fast",
            ].map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-red-900/90">
                <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 lg:order-2">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-red-200 bg-red-100">
            <img
              src="https://images.unsplash.com/photo-1615486363781-65fae03c8b2e?q=80&w=1600&auto=format&fit=crop"
              alt="Sun drying spices and ingredients"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
