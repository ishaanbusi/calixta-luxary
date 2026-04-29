"use client";

import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "An absolute masterclass in structural styling. The attention to facial geometry and the sheer exclusivity of the experience is unmatched anywhere in Prayagraj.",
    author: "Aanya S.",
    service: "Signature Styling Client",
    accent: "text-luxury-gold"
  },
  {
    id: 2,
    quote: "They handled my bridal couture makeup with incredible precision. The private luxury suite experience made the entire day feel flawless and elite.",
    author: "Meera R.",
    service: "Bridal Couture Client",
    accent: "text-luxury-blush"
  },
  {
    id: 3,
    quote: "The advanced color alchemy completely transformed my aesthetic. The exclusive use of premium global products shows their uncompromising commitment to high-end standards.",
    author: "Priya V.",
    service: "Color Alchemy Client",
    accent: "text-white"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-40 px-6 bg-luxury-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-32">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.4em" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-luxury-gold font-sans text-[10px] md:text-xs uppercase mb-6 font-medium"
          >
            Verified Experiences
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-heading text-5xl md:text-7xl text-white tracking-tight leading-none"
          >
            Words of <span className="text-luxury-gold italic">Distinction.</span>
          </motion.h2>
        </div>

        {/* Staggered Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: [0.25, 0.1, 0.25, 1] 
              }}
              className={`
                relative p-8 md:p-12 bg-luxury-charcoal/20 border border-white/5 rounded-sm
                group transition-all duration-700 hover:bg-luxury-charcoal/40
                ${index === 1 ? 'md:translate-y-12' : ''} 
                ${index === 2 ? 'md:translate-y-6' : ''}
              `}
            >
              {/* Animated Border Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/40 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/40 to-transparent"></div>
              </div>

              {/* Elegant Watermark */}
              <div className="absolute top-8 left-8 text-7xl font-heading text-white/[0.03] pointer-events-none leading-none group-hover:text-luxury-gold/5 transition-colors duration-700">
                &ldquo;
              </div>

              <blockquote className="relative z-10 h-full flex flex-col justify-between">
                <p className="font-sans text-gray-300 text-lg md:text-xl leading-relaxed mb-10 font-light italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                
                <footer className="mt-auto pt-8 border-t border-white/10">
                  <div className={`font-heading text-2xl mb-1 transition-colors duration-500 ${testimonial.accent} group-hover:text-white`}>
                    {testimonial.author}
                  </div>
                  <cite className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-500 not-italic font-medium">
                    {testimonial.service}
                  </cite>
                </footer>
              </blockquote>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}