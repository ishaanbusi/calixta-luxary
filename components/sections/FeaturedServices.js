"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Refined Luxury Data with Stock Imagery
const services = [
  {
    id: 'signature-styling',
    title: 'Bespoke Styling & Artistry',
    description: 'Masterful cutting and styling tailored to your facial geometry and natural texture. Includes a comprehensive consultation and sensory wash.',
    price: 'From ₹2,500',
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-2',
    image: 'http://googleusercontent.com/image_collection/image_retrieval/10131018029656894854_0',
    highlight: true,
  },
  {
    id: 'advanced-color',
    title: 'Advanced Color Alchemy',
    description: 'Balayage, foilage, and global corrections using elite, bond-protecting European formulations.',
    price: 'From ₹6,000',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    image: 'http://googleusercontent.com/image_collection/image_retrieval/6884872238065201374_0',
    highlight: false,
  },
  {
    id: 'keratin-therapy',
    title: 'Restorative Treatments',
    description: 'Deep reconstructive therapies to restore hair elasticity, hydration, and mirror-like shine.',
    price: 'From ₹8,000',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    image: 'http://googleusercontent.com/image_collection/image_retrieval/15620538332334435939_0',
    highlight: false,
  },
  {
    id: 'bridal-couture',
    title: 'Bridal Couture Makeup',
    description: 'Flawless, high-definition artistry and intricate up-dos for your most exclusive events. On-location concierge services available.',
    price: 'Bespoke Pricing',
    colSpan: 'md:col-span-3',
    rowSpan: 'md:row-span-1',
    image: 'http://googleusercontent.com/image_collection/image_retrieval/582024906231785234_0',
    highlight: false,
  }
];

export default function FeaturedServices() {
  // Graceful scroll-reveal animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } }
  };

  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 max-w-[1440px] mx-auto">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-8"
      >
        <div className="max-w-2xl">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-4 font-light">
            Curated <span className="text-luxury-gold italic pr-2">Aesthetics.</span>
          </h2>
          <p className="font-sans text-gray-400 text-lg leading-relaxed font-light">
            Our master stylists and aestheticians deliver uncompromising quality across a spectrum of premium grooming services.
          </p>
        </div>
        <Link 
          href="/services" 
          className="group flex items-center gap-4 text-xs tracking-[0.2em] uppercase text-luxury-gold hover:text-white transition-colors pb-2 font-medium"
        >
          View Full Menu
          <span className="w-8 h-[1px] bg-luxury-gold group-hover:bg-white transition-colors relative">
             <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-current transform rotate-45"></span>
          </span>
        </Link>
      </motion.div>

      {/* Bento Grid Layout with Imagery */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px] md:auto-rows-[340px]"
      >
        {services.map((service) => (
          <motion.div variants={cardVariants} key={service.id} className={`${service.colSpan} ${service.rowSpan} h-full`}>
            <Link 
              href={`/services#${service.id}`}
              className="group relative flex flex-col justify-between p-8 md:p-10 rounded-sm overflow-hidden h-full block border border-white/[0.03] transition-all duration-700 ease-out hover:-translate-y-1 bg-luxury-black"
            >
              {/* Background Image with Hover Zoom */}
              <Image 
                src={service.image} 
                alt={service.title}
                fill
                className="object-cover opacity-50 grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Essential Gradient Overlay to ensure text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none"></div>

              {/* Top Row: Price Tag */}
              <div className="flex justify-end relative z-10">
                <span className="text-[10px] md:text-xs font-light tracking-[0.2em] text-white uppercase bg-black/40 px-4 py-2 rounded-full backdrop-blur-md border border-white/10 group-hover:border-luxury-gold/60 group-hover:text-luxury-gold transition-colors duration-500">
                  {service.price}
                </span>
              </div>

              {/* Bottom Row: Content */}
              <div className="relative z-10 mt-auto">
                {service.highlight && (
                  <div className="text-[10px] tracking-[0.3em] text-luxury-blush uppercase mb-4 font-medium flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-luxury-blush inline-block"></span>
                    Signature Service
                  </div>
                )}
                <h3 className={`font-heading text-white mb-3 transition-colors duration-500 group-hover:text-luxury-gold font-light leading-tight ${service.highlight ? 'text-3xl md:text-4xl lg:text-5xl' : 'text-2xl md:text-3xl'}`}>
                  {service.title}
                </h3>
                <p className="font-sans text-gray-300 text-sm leading-relaxed max-w-lg font-light transition-colors duration-500 group-hover:text-white">
                  {service.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}