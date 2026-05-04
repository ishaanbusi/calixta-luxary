"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: "01",
    quote: "An absolute masterclass in structural styling. The attention to facial geometry and the sheer exclusivity of the experience is unmatched anywhere in Prayagraj.",
    author: "Aanya S.",
    service: "Signature Styling Client"
  },
  {
    id: "02",
    quote: "They handled my bridal couture makeup with incredible precision. The private luxury suite experience made the entire day feel flawless and elite.",
    author: "Meera R.",
    service: "Bridal Couture Client"
  },
  {
    id: "03",
    quote: "The advanced color alchemy completely transformed my aesthetic. The exclusive use of premium global products shows their uncompromising commitment to high-end standards.",
    author: "Priya V.",
    service: "Color Alchemy Client"
  }
];

const AUTOPLAY_DURATION = 8000;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  // Cinematic Auto-advance logic
  useEffect(() => {
    if (isHovered) return;
    
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, AUTOPLAY_DURATION);
    
    return () => clearInterval(timerRef.current);
  }, [isHovered]);

  const handleManualChange = (index) => {
    setCurrent(index);
    clearInterval(timerRef.current);
  };

  const quoteVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } 
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      filter: 'blur(10px)',
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section 
      id="testimonials" 
      className="relative py-24 md:py-40 px-6 bg-[#050505] overflow-hidden border-t border-white/5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* ─── Ambient Atmospheric Lighting ─── */}
      <div className="absolute top-1/2 right-0 w-[60vw] h-[60vw] bg-luxury-gold rounded-full mix-blend-screen filter blur-[250px] opacity-[0.02] pointer-events-none -translate-y-1/2 translate-x-1/3" />

      <div className="max-w-[1440px] mx-auto relative z-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* ─── Left Column: Sticky Editorial Index (5 Columns) ─── */}
          <div className="lg:col-span-5 relative flex flex-col justify-between">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="flex items-center gap-4 mb-6"
              >
                <span className="w-8 h-[1px] bg-luxury-gold" />
                <span className="text-luxury-gold font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase font-medium">
                  Verified Experiences
                </span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="font-heading text-5xl md:text-6xl lg:text-7xl text-white leading-[0.95] tracking-tight font-light mb-12"
              >
                Words of <br />
                <span className="text-luxury-gold italic">Distinction.</span>
              </motion.h2>
            </div>

            {/* Custom Interactive Index Nav */}
            <div className="flex flex-col gap-4 border-l border-white/5 pl-6 mt-8 md:mt-16">
              {testimonials.map((t, index) => {
                const isActive = current === index;
                return (
                  <button
                    key={t.id}
                    onClick={() => handleManualChange(index)}
                    className="group flex items-center gap-6 text-left py-2"
                  >
                    <span className={`font-sans text-[9px] uppercase tracking-[0.3em] font-medium transition-colors duration-500 w-6 ${isActive ? 'text-luxury-gold' : 'text-gray-600 group-hover:text-gray-400'}`}>
                      {t.id}
                    </span>
                    
                    {/* Architectural Progress/Active Line */}
                    <span className="relative w-8 md:w-12 h-[1px] bg-white/10 overflow-hidden">
                      {isActive ? (
                        <motion.span 
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: AUTOPLAY_DURATION / 1000, ease: "linear" }}
                          className="absolute left-0 top-0 h-full bg-luxury-gold"
                        />
                      ) : (
                        <span className="absolute left-0 top-0 h-full w-0 bg-white/30 transition-all duration-300 group-hover:w-full" />
                      )}
                    </span>

                    <span className={`font-heading text-lg md:text-xl transition-colors duration-500 ${isActive ? 'text-white' : 'text-gray-600 group-hover:text-gray-300'}`}>
                      {t.author}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ─── Right Column: Cinematic Quote Display (7 Columns) ─── */}
          <div className="lg:col-span-7 relative min-h-[350px] md:min-h-[400px] flex items-center lg:border-l lg:border-white/5 lg:pl-24">
            
            {/* Elegant Watermark Quote Icon */}
            <div className="absolute top-0 left-0 lg:left-16 text-[150px] md:text-[250px] font-heading text-white/[0.02] pointer-events-none leading-none select-none">
              &ldquo;
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                variants={quoteVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative z-10 w-full"
              >
                <blockquote className="flex flex-col gap-10 md:gap-16">
                  <p className="font-heading text-2xl md:text-4xl lg:text-[2.75rem] text-gray-200 leading-[1.3] font-light tracking-tight">
                    {testimonials[current].quote}
                  </p>
                  
                  <footer className="flex flex-col gap-2 border-t border-white/10 pt-6 max-w-sm">
                    <cite className="font-heading text-2xl md:text-3xl text-white not-italic">
                      {testimonials[current].author}
                    </cite>
                    <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-luxury-gold font-medium">
                      {testimonials[current].service}
                    </span>
                  </footer>
                </blockquote>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}