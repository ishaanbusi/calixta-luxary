"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "01",
    title: "Signature Styling",
    description: "Masterful cutting and structural styling tailored to your unique facial geometry.",
    price: "From ₹2,500",
    image: "/image/home/calixta-luxury-saloon-prayagraj-banner-1.jpeg",
    colSpan: "lg:col-span-2", // Spans 2 columns
  },
  {
    id: "02",
    title: "Color Alchemy",
    description: "Balayage, foilage, and global corrections using elite European formulations.",
    price: "From ₹6,000",
    image: "/image/home/calixta-luxury-saloon-prayagraj-banner.jpeg",
    colSpan: "lg:col-span-1", // Spans 1 column
  },
  {
    id: "03",
    title: "Restorative Therapies",
    description: "Deep reconstructive keratin and hydration therapies for mirror-like shine.",
    price: "From ₹8,000",
    image: "/image/home/calixta-luxury-saloon-prayagraj.jpeg",
    colSpan: "lg:col-span-1", // Spans 1 column
  },
  {
    id: "04",
    title: "Bridal Couture",
    description: "Flawless high-definition artistry and up-dos for your most exclusive events.",
    price: "Bespoke Pricing",
    image: "/image/home/calixta-bridal-makeup.jpeg",
    colSpan: "lg:col-span-2", // Spans 2 columns
  }
];

export default function FeaturedServices() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="relative py-24 md:py-40 px-6 bg-luxury-black overflow-hidden border-t border-white/5">
      
      {/* ─── Ambient Lighting ─── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-luxury-gold rounded-full mix-blend-screen filter blur-[250px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10 lg:px-12">
        
        {/* ─── Section Header ─── */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}
            className="max-w-2xl"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-luxury-gold" />
              <span className="text-luxury-gold font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase font-medium">
                Our Curations
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-heading text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight font-light drop-shadow-lg">
              Bespoke <span className="text-luxury-gold italic">Services.</span>
            </motion.h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }}
          >
            <Link href="/services" className="group inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-gray-400 hover:text-white transition-colors">
              View Complete Menu
              <span className="relative w-8 h-[1px] bg-gray-600 group-hover:bg-white transition-colors duration-500">
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-inherit rotate-45 origin-right transform transition-transform group-hover:translate-x-1" />
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-inherit -rotate-45 origin-right transform transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* ─── Asymmetrical Gallery Grid ─── */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              variants={fadeUp}
              className={`relative overflow-hidden group min-h-[400px] md:min-h-[500px] border border-white/5 bg-[#0a0a0c] ${service.colSpan}`}
            >
              <Link href="/services" className="absolute inset-0 z-40" aria-label={`View ${service.title}`} />
              
              {/* Image & Hover Effects */}
              <div className="absolute inset-0">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover object-center grayscale-[60%] opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                />
              </div>

              {/* Multi-layered Vignette for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/40 to-transparent z-10 transition-opacity duration-1000 group-hover:opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/40 to-transparent z-10" />
              
              {/* Border Glow on Hover */}
              <div className="absolute inset-0 border border-luxury-gold/0 group-hover:border-luxury-gold/20 transition-colors duration-1000 z-20 pointer-events-none" />

              {/* Content Placement */}
              <div className="relative z-30 h-full flex flex-col justify-between p-8 md:p-12">
                
                {/* Top Numbering */}
                <div className="flex justify-between items-start">
                  <span className="font-sans text-[10px] tracking-[0.3em] text-luxury-gold font-medium">
                    {service.id}
                  </span>
                  
                  {/* Hover Pricing Pill */}
                  <span className="opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-700 font-sans text-[9px] uppercase tracking-widest text-white border border-white/20 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-sm">
                    {service.price}
                  </span>
                </div>

                {/* Bottom Text Block */}
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <h3 className="font-heading text-3xl md:text-4xl text-white font-light mb-3">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-gray-400 font-light leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    {service.description}
                  </p>
                </div>
                
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}