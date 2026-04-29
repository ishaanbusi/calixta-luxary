"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'About', href: '/about' },
  { 
    name: 'Services', 
    href: '/services',
    dropdown: [
      { name: 'Signature Styling', href: '/services#signature-styling' },
      { name: 'Color Alchemy', href: '/services#advanced-color' },
      { name: 'Luxury Keratin', href: '/services#keratin-therapy' },
      { name: 'Bridal Couture', href: '/services#bridal-couture' },
    ]
  },
  { name: 'Packages', href: '/packages' },
  { name: 'Journal', href: '/journal' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Simple, highly performant scroll listener for the slim transition
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll on mobile open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] ${
          isScrolled 
            ? 'bg-luxury-black/90 backdrop-blur-md border-b border-white/5 shadow-2xl shadow-black/50' 
            : 'bg-gradient-to-b from-luxury-black/80 to-transparent border-transparent'
        }`}
      >
        {/* We use h-20 initially, shrinking to a highly slim h-14 on scroll */}
        <div 
          className={`max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between transition-all duration-500 ${
            isScrolled ? 'h-14' : 'h-20 md:h-24'
          }`}
        >
          
          {/* Brand Identity - Scales down on scroll */}
          <Link href="/" className="relative z-50 flex items-center" onClick={() => setIsMobileOpen(false)}>
            <span 
              className={`font-heading tracking-[0.15em] text-white hover:text-luxury-gold transition-all duration-500 ${
                isScrolled ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'
              }`}
            >
              CALIXTA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2 h-full">
            {navigation.map((item) => (
              <div 
                key={item.name} 
                className="relative h-full flex items-center"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  href={item.href}
                  className="group relative text-[11px] font-medium tracking-[0.2em] uppercase text-gray-300 hover:text-white transition-colors duration-300 py-4"
                >
                  {item.name}
                  {/* Slim Gold Underline Indicator */}
                  <span className="absolute bottom-2 left-1/2 w-0 h-[1px] bg-luxury-gold transition-all duration-300 ease-out group-hover:w-full group-hover:left-0 opacity-0 group-hover:opacity-100"></span>
                </Link>

                {/* Physics-Based Dropdown (Tighter for Slim UI) */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: 5, filter: 'blur(4px)' }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="absolute top-[calc(100%-0.5rem)] left-1/2 -translate-x-1/2 w-56 bg-[#0a0a0b]/95 backdrop-blur-xl border border-white/10 rounded-sm shadow-2xl"
                      >
                        <div className="p-5 flex flex-col gap-3">
                          {item.dropdown.map((subItem) => (
                            <Link 
                              key={subItem.name} 
                              href={subItem.href}
                              className="font-sans text-[13px] text-gray-400 hover:text-luxury-gold hover:translate-x-1 transition-all duration-300"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA - Slimmer padding on scroll */}
          <div className="hidden md:block relative z-50">
            <Button 
              href="/book" 
              variant="primary" 
              className={`transition-all duration-500 text-[10px] tracking-[0.2em] ${
                isScrolled ? 'px-6 py-2' : 'px-8 py-3'
              }`}
            >
              Reserve
            </Button>
          </div>

          {/* Mobile Menu Toggle (Slim Hamburger) */}
          <button 
            className="md:hidden relative z-50 w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle Menu"
          >
            <motion.span animate={isMobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="block w-6 h-[1px] bg-white origin-center transition-all" />
            <motion.span animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-6 h-[1px] bg-white transition-all" />
            <motion.span animate={isMobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="block w-6 h-[1px] bg-white origin-center transition-all" />
          </button>

        </div>
      </header>

      {/* Full-Screen Mobile Overlay (Kept exactly as before for that immersive concierge feel) */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-luxury-black/95 backdrop-blur-2xl z-40 flex flex-col justify-center px-8 pt-24 pb-12"
          >
            {/* ... (Mobile menu content remains unchanged from the previous premium iteration) ... */}
            <nav className="flex flex-col gap-8">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div className="flex flex-col">
                      <button 
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="font-heading text-4xl text-left text-white flex justify-between items-center w-full focus:outline-none"
                      >
                        {item.name}
                        <motion.span 
                          animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                          className="text-luxury-gold text-2xl font-sans font-light"
                        >
                          +
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="flex flex-col gap-4 overflow-hidden pl-4 border-l border-white/10 mt-6"
                          >
                            {item.dropdown.map((subItem) => (
                              <Link 
                                key={subItem.name} 
                                href={subItem.href}
                                onClick={() => setIsMobileOpen(false)}
                                className="font-sans text-gray-400 hover:text-white text-lg transition-colors py-2"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link 
                      href={item.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="font-heading text-4xl text-white inline-block hover:text-luxury-gold transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-auto pt-12 border-t border-white/10">
              <Button href="/book" variant="primary" className="w-full mb-8">
                Book Appointment
              </Button>
              <div className="flex justify-between items-end">
                <address className="not-italic font-sans text-xs text-gray-500 leading-relaxed uppercase tracking-widest">
                  Civil Lines<br /> Prayagraj, UP
                </address>
                <a href="tel:+919876543210" className="font-sans text-luxury-gold text-sm tracking-widest">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}