"use client";

import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';

export default function Hero() {
  // Graceful, editorial timeline
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  // High-fashion blur reveal (soft, elegant, breathing)
  const cinematicReveal = {
    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] } 
    }
  };

  const fadeUpSoft = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center bg-luxury-black pt-20 overflow-hidden">
      
      {/* 1. Atmospheric Studio Lighting (Soft Gold & Blush Mix) */}
      <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
        {/* Gold undertone */}
        <motion.div 
          animate={{ opacity: [0.05, 0.08, 0.05], scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[80vw] h-[80vw] md:w-[45vw] md:h-[45vw] bg-luxury-gold rounded-full mix-blend-screen filter blur-[150px] md:blur-[200px]"
        />
        {/* Blush overglow for warmth */}
        <motion.div 
          animate={{ opacity: [0.02, 0.05, 0.02], scale: [1.05, 1, 1.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute w-[60vw] h-[60vw] md:w-[35vw] md:h-[35vw] bg-luxury-blush rounded-full mix-blend-screen filter blur-[120px] md:blur-[180px] translate-x-1/4 -translate-y-1/4"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 flex flex-col items-center gap-8 md:gap-12 w-full">
        
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-center w-full">
          
          {/* SEO Optimized H1 with Cinematic Reveal */}
          <div className="mb-6 md:mb-8 flex flex-col items-center space-y-1 md:space-y-2">
            <motion.h1 variants={cinematicReveal} className="font-heading text-5xl sm:text-3xl md:text-4xl lg:text-[7.5rem] text-white tracking-tight leading-none font-light">
              Redefining
            </motion.h1>
            <motion.h1 variants={cinematicReveal} className="font-heading text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] text-luxury-gold italic tracking-tight leading-none pr-4 md:pr-8">
              Luxury
            </motion.h1>
            <motion.h1 variants={cinematicReveal} className="font-heading text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] text-white tracking-tight leading-none font-light">
              Grooming.
            </motion.h1>
          </div>
          
          {/* Context Paragraph */}
          <motion.p 
            variants={fadeUpSoft} 
            className="font-sans text-sm sm:text-base md:text-lg text-gray-300 max-w-[20rem] sm:max-w-xl md:max-w-2xl font-light tracking-wide leading-relaxed"
          >
            Experience bespoke styling and premium aesthetic treatments at Prayagraj’s most exclusive destination.
          </motion.p>

          {/* Interactive CTAs - Elegant & Understated */}
          <motion.div 
            variants={fadeUpSoft} 
            className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-10 md:mt-14 mb-8 w-full sm:w-auto"
          >
            <Button href="/book" variant="primary" className="w-full sm:w-auto py-4 md:py-5 px-12 font-light">
              Reserve
            </Button>
            <Button href="/services" variant="secondary" className="w-full sm:w-auto py-4 md:py-5 px-12 font-light border-white/20 text-white hover:border-luxury-gold hover:text-luxury-gold hover:bg-transparent">
              View Menu
            </Button>
          </motion.div>

        </motion.div>
      </div>

      {/* Elegant, Soft Scroll Indicator */}
      {/* <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2, duration: 1.5 }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-sans text-gray-400 font-light">
          Discover
        </span>
        <motion.div 
          animate={{ height: ["0px", "40px", "0px"], opacity: [0, 1, 0], y: [0, 20, 40] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] bg-luxury-gold"
        />
      </motion.div> */}

    </section>
  );
}