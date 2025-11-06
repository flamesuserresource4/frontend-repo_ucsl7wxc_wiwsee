const products = [
  {
    name: "Classic Mango",
    desc: "Sun-ripened mangoes with a punchy blend of spices.",
    price: "₹299",
    img: "https://images.unsplash.com/photo-1625940651050-16430e57f4c0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Lemon & Red Chili",
    desc: "Tangy lemons balanced with fiery heat.",
    price: "₹279",
    img: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Mixed Veg",
    desc: "Crunchy medley of seasonal vegetables.",
    price: "₹259",
    img: "https://images.unsplash.com/photo-1633436371306-030b68b4fda7?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="sm:flex sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-red-900">Signature Jars</h2>
            <p className="mt-2 text-red-900/80 max-w-prose">
              Small-batch pickles made with cold-pressed oils, heirloom spices, and age-old techniques.
            </p>
          </div>
          <a href="#order" className="mt-4 sm:mt-0 inline-flex items-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700">View All</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article key={p.name} className="group rounded-2xl ring-1 ring-red-100 bg-gradient-to-br from-red-50 to-white p-3 hover:shadow-md transition-shadow">
              <div className="aspect-square w-full overflow-hidden rounded-xl bg-red-100">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-red-900">{p.name}</h3>
                  <span className="text-sm font-semibold text-red-700">{p.price}</span>
                </div>
                <p className="mt-1 text-sm text-red-900/80">{p.desc}</p>
                <button className="mt-3 w-full inline-flex items-center justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700">
                  Add to cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
