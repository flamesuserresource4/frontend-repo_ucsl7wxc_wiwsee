import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Story from "./components/Story";
import CTA from "./components/CTA";

function Footer() {
  return (
    <footer id="contact" className="border-t border-red-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-red-900/70">© {new Date().getFullYear()} ammaas achaar. All rights reserved.</p>
          <div className="text-sm text-red-900/80 flex items-center gap-4">
            <a href="#" className="hover:text-red-700">Instagram</a>
            <a href="#" className="hover:text-red-700">WhatsApp</a>
            <a href="mailto:hello@ammaasachaar.com" className="hover:text-red-700">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-red-950">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Story />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
