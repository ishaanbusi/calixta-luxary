"use client";

import { motion } from 'framer-motion';

export default function Ethos() {
  // Motion variants for smooth scroll-triggered reveals
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } }
  };

  // Elegant line drawing animation for the desktop divider
  const lineDraw = {
    hidden: { height: 0 },
    visible: { height: "100%", transition: { duration: 1.5, ease: "easeInOut", delay: 0.5 } }
  };

  return (
    <section className="relative py-24 md:py-40 px-6 bg-luxury-black overflow-hidden border-t border-white/5">
      
      {/* Soft atmospheric blush glow for warmth */}
      <div className="absolute top-0 right-0 w-[70vw] h-[70vw] bg-luxury-blush rounded-full mix-blend-screen filter blur-[150px] opacity-[0.03] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          
          {/* Large Editorial Headline (Takes up 5 columns on desktop) */}
          <div className="lg:col-span-5 relative">
            <motion.span variants={fadeUp} className="text-luxury-gold font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase mb-6 md:mb-8 block font-light">
              The Philosophy
            </motion.span>
            
            <motion.h2 variants={fadeUp} className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.05] tracking-tight font-light">
              Bespoke <br />
              <span className="text-luxury-gold italic pr-4">Aesthetic</span> <br />
              Mastery.
            </motion.h2>
            
            {/* Elegant large watermark letter (softer than the rigid 'CX') */}
            <motion.div 
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.03, transition: { duration: 2, delay: 0.5 } } }}
              className="absolute -top-12 -left-6 md:-left-12 text-[150px] md:text-[220px] font-heading text-white pointer-events-none select-none leading-none"
            >
              C
            </motion.div>
          </div>

          {/* Decorative Divider (Vertical on desktop, horizontal on mobile) */}
          <div className="hidden lg:flex lg:col-span-2 justify-center h-full min-h-[350px]">
             <motion.div variants={lineDraw} className="w-[1px] bg-gradient-to-b from-transparent via-luxury-gold/40 to-transparent"></motion.div>
          </div>
          <motion.div variants={fadeUp} className="h-[1px] w-full bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent lg:hidden my-4"></motion.div>

          {/* Descriptive Content (Takes up 5 columns on desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-8 md:gap-12">
            <motion.p variants={fadeUp} className="font-sans text-lg sm:text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
              At Calixta, we view grooming as an intimate art form. Our approach marries global luxury standards with deep aesthetic intuition to curate styles that are flawlessly executed and visually effortless.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 mt-2">
              <motion.div variants={fadeUp} className="space-y-3">
                <h3 className="text-luxury-gold font-heading text-xl md:text-2xl tracking-wide font-light">Global Artistry</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                  Utilizing exclusive techniques from London and Milan to ensure your look meets international high-fashion benchmarks.
                </p>
              </motion.div>
              
              <motion.div variants={fadeUp} className="space-y-3">
                <h3 className="text-luxury-gold font-heading text-xl md:text-2xl tracking-wide font-light">Exclusive Sanctuary</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                  The premier destination for elite clientele in Civil Lines, Prayagraj, offering unparalleled privacy and personalized service.
                </p>
              </motion.div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}