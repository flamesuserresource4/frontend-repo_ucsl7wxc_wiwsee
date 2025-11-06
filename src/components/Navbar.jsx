import { Flame, Truck, Leaf } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/90 border-b border-red-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="p-2 rounded-md bg-gradient-to-br from-red-600 to-red-500 text-white shadow-sm">
            <Flame className="h-5 w-5" />
          </span>
          <span className="font-extrabold tracking-tight text-xl sm:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-500">
            ammaas achaar
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-red-900/80">
          <a href="#products" className="hover:text-red-700 transition-colors">Shop</a>
          <a href="#story" className="hover:text-red-700 transition-colors">Our Story</a>
          <a href="#contact" className="hover:text-red-700 transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden sm:flex items-center text-xs text-red-800/80 gap-1 px-2 py-1 rounded-md bg-red-50 border border-red-100">
            <Truck className="h-3.5 w-3.5" />
            Pan-India delivery
          </span>
          <a
            href="#order"
            className="inline-flex items-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
          >
            Order Now
          </a>
        </div>
      </div>
    </header>
  );
}
