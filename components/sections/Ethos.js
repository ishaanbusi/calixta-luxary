"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Ethos() {
  // Graceful, editorial animation timelines
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const bentoCardHover =
    "group hover:bg-luxury-charcoal/40 hover:border-luxury-gold/30 transition-all duration-700";

  return (
    <section className="relative py-24 md:py-40 px-6 bg-luxury-black overflow-hidden border-t border-white/5">
      
      {/* Atmospheric Lighting */}
      <div className="absolute top-0 right-0 w-[70vw] h-[70vw] bg-luxury-blush rounded-full mix-blend-screen filter blur-[180px] opacity-[0.02] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-luxury-gold rounded-full mix-blend-screen filter blur-[150px] opacity-[0.02] pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-[1440px] mx-auto relative z-10 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center"
        >

          {/* Left Column */}
          <div className="lg:col-span-5 relative">

            {/* Ambient Watermark */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 0.03,
                  transition: { duration: 2, delay: 0.5 }
                }
              }}
              className="absolute -top-20 -left-12 text-[200px] md:text-[280px] font-heading text-white pointer-events-none select-none leading-none"
            >
              C
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="relative z-10 flex items-center gap-4 mb-8"
            >
              <span className="w-8 h-[1px] bg-luxury-gold" />
              <span className="text-luxury-gold font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase font-medium">
                The Calixta Experience
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="relative z-10 font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight font-light mb-8 drop-shadow-lg"
            >
              Luxury <br />
              <span className="text-luxury-gold italic">Beauty</span> <br />
              Perfected.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="relative z-10 font-sans text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-10 max-w-md"
            >
              At Calixta Luxury Salon, every service is designed as a refined beauty experience. From transformative hair artistry to flawless bridal makeup and advanced skincare rituals, our experts craft looks that feel timeless, elegant, and deeply personal.
            </motion.p>

            <motion.div variants={fadeUp} className="relative z-10">
              <Link
                href="/about"
                className="group inline-flex items-center gap-6 text-[10px] md:text-xs tracking-[0.3em] uppercase text-white font-medium hover:text-luxury-gold transition-colors"
              >
                Discover Our World
                <span className="w-12 h-[1px] bg-white group-hover:bg-luxury-gold transition-colors duration-500 relative">
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-inherit rotate-45 origin-right transform transition-transform group-hover:translate-x-1" />
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-inherit -rotate-45 origin-right transform transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">

            {/* Card 1 */}
            <motion.div
              variants={fadeUp}
              className={`col-span-1 p-8 md:p-10 border border-white/5 bg-[#0a0a0c] relative overflow-hidden flex flex-col justify-center min-h-[240px] md:min-h-[280px] ${bentoCardHover}`}
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="text-[9px] uppercase tracking-widest text-gray-600 font-sans mb-4 group-hover:text-luxury-gold/70 transition-colors">
                Signature Artistry
              </div>

              <h3 className="font-heading text-2xl md:text-3xl text-white font-light mb-4 group-hover:text-luxury-gold transition-colors duration-500">
                Precision Styling
              </h3>

              <p className="font-sans text-sm text-gray-500 leading-relaxed font-light">
                Expert haircuts, luxury colour transformations, hair spa therapies, and trend focused styling created with international techniques and premium products.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={fadeUp}
              className={`col-span-1 p-8 md:p-10 border border-white/5 bg-[#0a0a0c] relative overflow-hidden flex flex-col justify-center min-h-[240px] md:min-h-[280px] ${bentoCardHover}`}
            >
              <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-luxury-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="text-[9px] uppercase tracking-widest text-gray-600 font-sans mb-4 group-hover:text-luxury-gold/70 transition-colors">
                Bridal Excellence
              </div>

              <h3 className="font-heading text-2xl md:text-3xl text-white font-light mb-4 group-hover:text-luxury-gold transition-colors duration-500">
                Bridal Couture
              </h3>

              <p className="font-sans text-sm text-gray-500 leading-relaxed font-light">
                Bespoke bridal makeup, elegant hairstyling, and pre wedding beauty rituals tailored to create a flawless and radiant bridal presence for your special day.
              </p>
            </motion.div>

            {/* Image Card */}
            <motion.div
              variants={fadeUp}
              className="col-span-1 sm:col-span-2 sm:col-start-2 sm:row-start-1 sm:row-span-2 relative min-h-[300px] sm:min-h-full border border-white/5 overflow-hidden group"
            >
              <Image
                src="/image/services/DSC02159.jpeg"
                alt="Luxury beauty and bridal services at Calixta Salon Prayagraj"
                fill
                className="object-cover object-center grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-luxury-black/20 to-transparent z-10" />

              <div className="absolute inset-0 border-[1px] border-luxury-gold/0 group-hover:border-luxury-gold/20 transition-colors duration-700 z-20" />

              <div className="absolute bottom-8 left-8 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-y-4 group-hover:translate-y-0">
                <span className="font-heading text-2xl text-white font-light italic">
                  Elegance in Every Detail
                </span>
              </div>
            </motion.div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}