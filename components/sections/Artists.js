"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const artists = [
  {
    name: "Vikram S.",
    role: "Director of Color Alchemy",
    specialty: "Advanced Balayage & Corrections",
    // Moody editorial male portrait
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Elena K.",
    role: "Principal Stylist",
    specialty: "Architectural Cutting & Texture",
    // Moody editorial female portrait
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function Artists() {
  return (
    <section className="py-24 md:py-40 px-6 max-w-7xl mx-auto overflow-hidden">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-24 md:mb-32">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-luxury-gold font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase mb-6 font-medium"
        >
          The Visionaries
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-heading text-5xl md:text-7xl text-white tracking-tight leading-none"
        >
          Master <span className="text-luxury-gold italic">Artists</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 lg:gap-32 max-w-5xl mx-auto">
        {artists.map((artist, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: idx * 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="group cursor-default relative"
          >
            {/* Image Container with Editorial Frame */}
            <div className="relative aspect-[3/4] bg-luxury-charcoal mb-10 overflow-hidden rounded-sm border border-white/5">
              
              {/* Background Initials (Monogram Effect on Hover) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-[0.05] transition-opacity duration-700 pointer-events-none">
                 <span className="text-[20vw] font-heading text-white">{artist.name.charAt(0)}</span>
              </div>

              {/* The Portrait */}
              <Image 
                src={artist.image} 
                alt={artist.name} 
                fill 
                className="object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-1000 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Luxury Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent opacity-60 z-10"></div>
              
              {/* Subtle Gold Frame reveal on hover */}
              <div className="absolute inset-4 border border-luxury-gold/0 group-hover:border-luxury-gold/20 transition-all duration-700 z-20 pointer-events-none"></div>
            </div>
            
            {/* Artist Details */}
            <div className="space-y-4 text-center md:text-left">
              <div className="relative inline-block">
                <h3 className="font-heading text-4xl md:text-5xl text-white transition-colors duration-500 group-hover:text-luxury-gold inline-block">
                  {artist.name}
                </h3>
                {/* Horizontal line reveal on hover */}
                <motion.div className="h-[1px] w-0 bg-luxury-gold absolute -bottom-2 left-0 group-hover:w-full transition-all duration-500" />
              </div>
              
              <div className="flex flex-col gap-1 pt-2">
                <p className="text-luxury-blush font-sans text-xs uppercase tracking-[0.2em] font-semibold">
                  {artist.role}
                </p>
                <p className="text-gray-500 text-sm md:text-base font-light italic tracking-wide">
                  Specializing in {artist.specialty}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}