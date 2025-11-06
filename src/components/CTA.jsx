export default function CTA() {
  return (
    <section id="order" className="relative">
      <div className="absolute inset-0 -z-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-tr from-red-600 via-red-500 to-rose-400 opacity-10" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl bg-gradient-to-tr from-red-600 via-red-500 to-rose-500 p-1 shadow-lg ring-1 ring-red-300/40">
          <div className="rounded-3xl bg-white p-8 sm:p-12 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-red-900">Bring home amma’s love</h3>
              <p className="mt-3 text-red-900/80">
                Order freshly packed jars today. Ships within 24-48 hours across India.
              </p>
            </div>
            <form className="grid sm:grid-cols-3 gap-3">
              <input
                type="email"
                required
                placeholder="Your email"
                className="sm:col-span-2 w-full rounded-md border-red-200 focus:border-red-400 focus:ring-red-400 text-red-900 placeholder:text-red-400"
              />
              <button type="submit" className="inline-flex items-center justify-center rounded-md bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700">
                Get Early Access
              </button>
              <p className="sm:col-span-3 text-xs text-red-900/70">
                By signing up, you agree to receive updates from ammaas achaar.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
