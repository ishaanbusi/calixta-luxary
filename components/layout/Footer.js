"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  };

  return (
    <footer className="relative mt-auto bg-[#050505] border-t border-white/5 pt-24 md:pt-32 pb-8 overflow-hidden z-20">
      
      {/* ─── Ambient Grounding Light ─── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vw] bg-luxury-gold rounded-full mix-blend-screen filter blur-[250px] opacity-[0.015] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* ─── Main Editorial Grid ─── */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 lg:gap-16 mb-24 md:mb-32"
        >
          
          {/* 1. Brand & Manifesto (Spans 4 columns) */}
          <motion.div variants={fadeUp} className="md:col-span-4 lg:col-span-5 flex flex-col items-start">
            <Link href="/" className="relative block w-62 h-18 mb-8 group">
              <Image 
                src="/image/logo.png" 
                alt="Calixta Logo" 
                fill 
                className="object-contain object-left opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
            </Link>
            <p className="font-sans text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-xs md:max-w-sm">
              An exclusive sanctuary dedicated to the artistry of grooming. Redefining the aesthetic landscape in the heart of Civil Lines, Prayagraj.
            </p>
          </motion.div>

          {/* 2. Discover Links (Spans 2 columns) */}
          <motion.div variants={fadeUp} className="md:col-span-3 lg:col-span-2">
            <h4 className="font-sans text-[9px] tracking-[0.4em] uppercase text-luxury-gold mb-8 md:mb-10 font-medium">
              Discover
            </h4>
            <ul className="flex flex-col gap-5">
              {['About', 'Services', 'Packages', 'Journal'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase()}`}
                    className="group inline-flex items-center gap-4 font-sans text-[11px] uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors duration-300"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-luxury-gold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 3. Concierge (Spans 2 columns) */}
          <motion.div variants={fadeUp} className="md:col-span-5 lg:col-span-2">
            <h4 className="font-sans text-[9px] tracking-[0.4em] uppercase text-luxury-gold mb-8 md:mb-10 font-medium">
              Concierge
            </h4>
            <address className="not-italic flex flex-col gap-8">
              <div className="space-y-2">
                <span className="block font-sans text-[9px] text-gray-600 uppercase tracking-widest">Location</span>
                <p className="text-gray-300 font-sans text-xs md:text-sm leading-relaxed font-light">
                  Clive Rd, Near Axis Bank, Civil Lines,<br /> Prayagraj, Uttar Pradesh 211001
                </p>
              </div>
              <div className="space-y-2">
                <span className="block font-sans text-[9px] text-gray-600 uppercase tracking-widest">Inquiries</span>
                <a href="tel:+917355465724" className="block text-gray-300 font-sans text-xs md:text-sm hover:text-luxury-gold transition-colors font-light">
                  +91 7355465724
                </a>
              </div>
            </address>
          </motion.div>

          {/* 4. Newsletter (Spans 3 columns) */}
          <motion.div variants={fadeUp} className="md:col-span-12 lg:col-span-3 lg:pl-8 lg:border-l lg:border-white/5 pt-8 lg:pt-0 border-t border-white/5 lg:border-t-0 mt-8 lg:mt-0">
            <h4 className="font-sans text-[9px] tracking-[0.4em] uppercase text-luxury-gold mb-8 md:mb-10 font-medium">
              The List
            </h4>
            <p className="text-gray-400 font-sans text-xs md:text-sm tracking-wide leading-relaxed mb-8 font-light">
              Join our private directory for seasonal aesthetic insights and exclusive residency announcements.
            </p>
            <form className="relative group flex items-end">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-transparent border-b border-white/20 pb-3 text-sm text-white focus:outline-none focus:border-luxury-gold transition-colors font-light placeholder:text-gray-600 rounded-none"
                required
              />
              <button 
                type="submit"
                className="absolute right-0 bottom-3 text-gray-500 group-focus-within:text-luxury-gold hover:text-white transition-colors"
                aria-label="Subscribe"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </motion.div>

        </motion.div>

        {/* ─── Massive Typographic Anchor ─── */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute inset-x-0 top-0 h-full flex justify-center items-center z-0 overflow-hidden"
        >
          <span className="font-heading text-[18vw] leading-[0.75] text-white/[0.02] tracking-tighter">
            CALIXTA
          </span>
        </motion.div>

        {/* ─── Legal & Social Bar ─── */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex gap-8 order-2 md:order-1">
            {['Instagram', 'Facebook', 'LinkedIn'].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="text-[9px] uppercase tracking-[0.3em] text-gray-500 hover:text-luxury-gold transition-colors font-medium"
              >
                {social}
              </a>
            ))}
          </div>
          
          <div className="text-center md:text-right order-1 md:order-2 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div className="flex justify-center gap-6 text-[9px] uppercase tracking-[0.2em] text-gray-600 font-medium">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            </div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-gray-700 font-medium">
              &copy; {currentYear} Calixta. <span className="hidden md:inline">Designed for Distinction.</span>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}