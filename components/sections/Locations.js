"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Location() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="relative py-24 md:py-40 px-6 bg-[#050505] overflow-hidden border-t border-white/5">
      
      {/* ─── Ambient Atmospheric Lighting ─── */}
      <div className="absolute top-1/2 left-0 w-[50vw] h-[50vw] bg-luxury-gold rounded-full mix-blend-screen filter blur-[200px] opacity-[0.02] pointer-events-none -translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-[1440px] mx-auto relative z-10 lg:px-12">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center"
        >
          
          {/* ─── Left Column: The Editorial Details (5 Columns) ─── */}
          <div className="lg:col-span-5 flex flex-col justify-center relative">
            
            {/* Ambient Location Watermark */}
            <motion.div 
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.03, transition: { duration: 2, delay: 0.5 } } }}
              className="absolute -top-10 -left-12 text-[180px] md:text-[220px] font-heading text-white pointer-events-none select-none leading-none tracking-tighter"
            >
              PRYJ
            </motion.div>

            <motion.div variants={fadeUp} className="relative z-10 flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-luxury-gold" />
              <span className="text-luxury-gold font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase font-medium">
                The Flagship
              </span>
            </motion.div>
            
            <motion.h2 variants={fadeUp} className="relative z-10 font-heading text-5xl md:text-6xl lg:text-7xl text-white leading-[0.95] tracking-tight font-light mb-12 drop-shadow-lg">
              The House of <br />
              <span className="text-luxury-gold italic">Calixta.</span>
            </motion.h2>

            {/* Structured Editorial List (Replaces the City Accordion) */}
            <div className="relative z-10 flex flex-col w-full border-t border-white/10">
              
              {/* Address */}
              <motion.div variants={fadeUp} className="py-8 border-b border-white/5 flex flex-col md:flex-row md:items-start gap-4 md:gap-12 transition-colors hover:bg-white/[0.01] px-4 -mx-4 rounded-sm">
                <h3 className="w-32 text-[9px] uppercase tracking-[0.3em] text-gray-500 font-medium shrink-0 pt-1">
                  Location
                </h3>
                <div>
                  <p className="font-sans text-lg md:text-xl text-gray-200 font-light leading-relaxed mb-4">
                    Premium District, Civil Lines<br />
                    Prayagraj, Uttar Pradesh 211001
                  </p>
                  <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-luxury-gold hover:text-white transition-colors group">
                    Get Directions
                    <span className="relative w-6 h-[1px] bg-luxury-gold group-hover:bg-white transition-colors duration-300">
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-[1px] bg-inherit rotate-45 origin-right" />
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-[1px] bg-inherit -rotate-45 origin-right" />
                    </span>
                  </a>
                </div>
              </motion.div>

              {/* Concierge */}
              <motion.div variants={fadeUp} className="py-8 border-b border-white/5 flex flex-col md:flex-row md:items-start gap-4 md:gap-12 transition-colors hover:bg-white/[0.01] px-4 -mx-4 rounded-sm">
                <h3 className="w-32 text-[9px] uppercase tracking-[0.3em] text-gray-500 font-medium shrink-0 pt-1">
                  Concierge
                </h3>
                <div className="flex flex-col gap-2">
                  <a href="tel:+919876543210" className="font-sans text-lg md:text-xl text-gray-200 font-light hover:text-luxury-gold transition-colors">
                    +91 98765 43210
                  </a>
                  <a href="mailto:concierge@calixta.com" className="font-sans text-base text-gray-400 font-light hover:text-white transition-colors">
                    concierge@calixta.com
                  </a>
                </div>
              </motion.div>

            </div>
          </div>

          {/* ─── Right Column: Cinematic Image with Overlapping Glass Box (7 Columns) ─── */}
          <div className="lg:col-span-7 relative">
            <motion.div 
              variants={fadeUp}
              className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] w-full overflow-hidden border border-white/5 bg-[#0a0a0c] group"
            >
              <Image 
                src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=1200&auto=format&fit=crop" 
                alt="Calixta Salon Interior" 
                fill 
                className="object-cover object-center grayscale-[40%] group-hover:grayscale-0 transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
              
              {/* Luxury Vignettes */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/20 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#050505]/50 z-10 pointer-events-none" />
              
              {/* Overlapping Info Box (Inspired by the CoreSynix Glass Panel) */}
              <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 z-20 flex flex-col md:flex-row justify-between md:items-end gap-6 bg-[#0a0a0c]/80 backdrop-blur-md border border-white/10 p-6 md:p-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
                
                <div>
                  <h4 className="text-[9px] uppercase tracking-[0.3em] text-luxury-gold font-medium mb-3">
                    Operating Hours
                  </h4>
                  <ul className="flex flex-col gap-2 font-sans text-sm text-gray-300 font-light">
                    <li className="flex justify-between gap-8">
                      <span>Tue - Sun</span>
                      <span>10:00 AM — 08:00 PM</span>
                    </li>
                    <li className="flex justify-between gap-8 text-gray-500">
                      <span>Monday</span>
                      <span>Sanctuary Closed</span>
                    </li>
                  </ul>
                </div>

                <div className="shrink-0">
                  <span className="inline-block border border-luxury-gold/30 text-luxury-gold px-4 py-2 text-[8px] uppercase tracking-[0.2em] bg-luxury-gold/5">
                    Strictly By Appointment
                  </span>
                </div>

              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}