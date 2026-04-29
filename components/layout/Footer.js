"use client";

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080809] border-t border-white/5 pt-24 pb-12 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 lg:gap-16 mb-20">
          
          {/* Brand & Manifesto (Spans 4 columns) */}
          <div className="md:col-span-4 lg:col-span-5">
            <Link href="/" className="inline-block mb-8 group">
              <span className="font-heading text-4xl tracking-[0.2em] text-white group-hover:text-luxury-gold transition-colors duration-500 uppercase">
                Calixta
              </span>
            </Link>
            <p className="font-sans text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-sm">
              An exclusive sanctuary dedicated to the artistry of grooming. Redefining the aesthetic landscape in the heart of Civil Lines, Prayagraj.
            </p>
          </div>

          {/* Discover Links (Spans 2 columns) */}
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="font-heading text-xs tracking-[0.3em] uppercase text-luxury-gold mb-10">Discover</h4>
            <ul className="flex flex-col gap-5">
              {['About', 'Services', 'Packages', 'Journal'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase()}`}
                    className="font-sans text-[13px] uppercase tracking-widest text-gray-500 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-luxury-gold mr-0 group-hover:mr-3 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Concierge & Local SEO (Spans 3 columns) */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="font-heading text-xs tracking-[0.3em] uppercase text-luxury-gold mb-10">Concierge</h4>
            <address className="not-italic flex flex-col gap-6">
              <div className="space-y-1">
                <span className="block text-[10px] text-gray-600 uppercase tracking-widest font-medium">Location</span>
                <p className="text-gray-400 font-sans text-sm leading-relaxed">
                  Premium District, Civil Lines<br />Prayagraj, UP 211001
                </p>
              </div>
              <div className="space-y-1">
                <span className="block text-[10px] text-gray-600 uppercase tracking-widest font-medium">Inquiries</span>
                <a href="tel:+919876543210" className="block text-gray-400 font-sans text-sm hover:text-white transition-colors tracking-wide">
                  +91 98765 43210
                </a>
              </div>
            </address>
          </div>

          {/* Newsletter (Spans 3 columns) */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="font-heading text-xs tracking-[0.3em] uppercase text-luxury-gold mb-10">The Journal</h4>
            <p className="text-gray-500 font-sans text-xs tracking-wide leading-relaxed mb-8">
              Join our curated list for seasonal aesthetic insights and exclusive residency announcements.
            </p>
            <form className="relative group">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white focus:outline-none focus:border-luxury-gold transition-colors font-light placeholder:text-gray-700"
              />
              <button 
                type="submit"
                className="absolute right-0 bottom-3 text-luxury-gold hover:text-white transition-colors"
                aria-label="Subscribe"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </div>

        </div>

        {/* Legal & Social Bar */}
        <div className="pt-12 border-t border-white/[0.03] flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-8 order-2 md:order-1">
            {['Instagram', 'Facebook', 'LinkedIn'].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="text-[10px] uppercase tracking-[0.3em] text-gray-600 hover:text-luxury-gold transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
          
          <div className="text-center md:text-right order-1 md:order-2">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-700 mb-2">
              &copy; {currentYear} Calixta. Designed for Distinction.
            </p>
            <div className="flex gap-4 justify-center md:justify-end text-[9px] uppercase tracking-widest text-gray-800">
              <Link href="/privacy" className="hover:text-gray-500 transition-colors">Privacy</Link>
              <span className="text-gray-900">•</span>
              <Link href="/terms" className="hover:text-gray-500 transition-colors">Terms</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}