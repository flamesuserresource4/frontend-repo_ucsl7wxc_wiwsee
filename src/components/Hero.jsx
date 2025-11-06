import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-red-50 to-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-red-200/60 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-red-300/40 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-red-700 text-xs font-medium ring-1 ring-inset ring-red-200">
            <Star className="h-3.5 w-3.5 fill-red-500 text-red-500" />
            Handcrafted, sun-kissed, preservative-free
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-red-900">
            The taste of home in every jar
          </h1>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-red-900/80">
            ammaas achaar brings back the love of grandma’s kitchen—fresh ingredients, bold spices, and that slow, patient craft.
            Authentic pickles made with traditional recipes, small batches, and lots of care.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#order" className="inline-flex items-center rounded-md bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2">
              Shop Signature Jars
            </a>
            <a href="#story" className="inline-flex items-center rounded-md px-5 py-3 text-sm font-semibold text-red-700 ring-1 ring-inset ring-red-200 bg-white hover:bg-red-50 focus:outline-none">
              Our Story
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6">
            {["100% Natural", "Small Batch", "Family Recipes"].map((item) => (
              <div key={item} className="rounded-lg bg-white/70 backdrop-blur p-4 ring-1 ring-red-100 text-center">
                <dt className="text-xs font-medium text-red-700">{item}</dt>
                <dd className="mt-1 text-lg font-semibold text-red-900">Trusted</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] w-full rounded-2xl bg-gradient-to-br from-red-200 to-red-100 p-2 ring-1 ring-red-200 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1604909052743-512f86c5824f?q=80&w=1600&auto=format&fit=crop"
              alt="Assorted Indian pickles in glass jars"
              className="h-full w-full object-cover rounded-xl"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
