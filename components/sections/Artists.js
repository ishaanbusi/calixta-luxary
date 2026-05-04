"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// ─── Luxury Editorial Data ────────────────────────────────────────────────
const journalItems = [
  {
    id: "j1",
    featured: true,
    category: "Aesthetic Shift",
    date: "14 May MMXXVI",
    title: "Balayage or Foilage: A Manifesto on Light.",
    excerpt: "Discover the architectural differences between global balayage and foilage, and how our master artists curating luminosity.",
    image: "/image/home/calixta-luxury-saloon-prayagraj.jpeg",
    href: "/journal/light-manifesto"
  },
  {
    id: "j2",
    category: "Artistry Breakdown",
    date: "08 May MMXXVI",
    title: "The Physics of the Structual Cut.",
    href: "/journal/structural-cut-physics"
  },
  {
    id: "j3",
    category: "Global Trend",
    date: "01 May MMXXVI",
    title: "Milan Report: The Return of Mirror-Shine.",
    href: "/journal/milan-shine-report"
  },
  {
    id: "j4",
    category: "Behind the Chair",
    date: "24 April MMXXVI",
    title: "Inside the Private Bridal Couture Suite.",
    href: "/journal/inside-bridal-suite"
  }
];

export default function TheJournal() {
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

  const featuredInsight = journalItems.find(item => item.featured);
  const listInsights = journalItems.filter(item => !item.featured);

  return (
    <section className="relative py-24 md:py-40 px-6 bg-luxury-black overflow-hidden border-t border-white/5">
      
      {/* ─── Ambient Atmospheric Lighting ─── */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-luxury-blush rounded-full mix-blend-screen filter blur-[180px] opacity-[0.02] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-luxury-gold rounded-full mix-blend-screen filter blur-[150px] opacity-[0.015] pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-[1440px] mx-auto relative z-10 lg:px-12">
        
        {/* ─── Section Header ─── */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}
            className="max-w-xl"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-luxury-gold" />
              <span className="text-luxury-gold font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase font-medium">
                The Journal
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-heading text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight font-light drop-shadow-lg">
              Insights & <span className="text-luxury-gold italic">Artistry.</span>
            </motion.h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }}
          >
            <Link href="/journal" className="group inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-gray-400 hover:text-white transition-colors">
              Explore the House Journal
              <span className="relative w-12 h-[1px] bg-gray-600 group-hover:bg-white transition-colors duration-500">
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-inherit rotate-45 origin-right transform transition-transform group-hover:translate-x-1" />
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-inherit -rotate-45 origin-right transform transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* ─── Editorial Insights Grid ─── */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24"
        >
          
          {/* Left Side: Featured Cinematic Editorial (7 Columns) */}
          {featuredInsight && (
            <div className="lg:col-span-7">
              <Link href={featuredInsight.href} className="featured-article group block text-decoration-none">
                
                {/* Grayscale-to-Color Cinematic Image Reveal */}
                <motion.div variants={fadeUp} className="relative aspect-[16/10] overflow-hidden border border-white/5 bg-[#0a0a0c] mb-10 group">
                  <Image 
                    src={featuredInsight.image} 
                    alt={featuredInsight.title} 
                    fill 
                    className="object-cover object-center grayscale-[60%] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1.8s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    sizes="(max-w-1024px) 100vw, 60vw"
                  />
                  {/* Luxury Vignette and Glow Border */}
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/30 to-transparent z-10 transition-opacity duration-[1.2s] group-hover:opacity-60" />
                  <div className="absolute inset-0 border-[1px] border-luxury-gold/0 group-hover:border-luxury-gold/20 transition-colors duration-1000 z-20 pointer-events-none" />
                </motion.div>

                {/* Meta Details */}
                <motion.div variants={fadeUp} className="flex justify-between items-center gap-4 mb-5 max-w-sm">
                  <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-gray-500 font-medium transition-colors duration-500 group-hover:text-luxury-gold/80">
                    {featuredInsight.category}
                  </span>
                  <span className="w-6 h-[1px] bg-white/10" />
                  <span className="font-sans text-xs tracking-wide text-gray-600">
                    {featuredInsight.date}
                  </span>
                </motion.div>
                
                {/* Featured Title & Excerpt */}
                <motion.h3 variants={fadeUp} className="font-heading text-4xl md:text-5xl text-white font-light mb-6 transition-colors duration-700 group-hover:text-luxury-gold leading-snug">
                  {featuredInsight.title}
                </motion.h3>
                <motion.p variants={fadeUp} className="font-sans text-base md:text-lg text-gray-400 font-light leading-relaxed max-w-2xl mb-8 group-hover:text-gray-300 transition-colors duration-500">
                  {featuredInsight.excerpt}
                </motion.p>
                
                {/* Custom CTA with "Extension" Arrow */}
                <motion.div variants={fadeUp} className="inline-flex items-center gap-4 text-[11px] md:text-xs uppercase tracking-[0.3em] text-white font-medium hover:text-luxury-gold transition-all duration-300 group-hover:gap-6">
                  Read article
                  <span className="relative w-8 h-[1px] bg-white transition-colors duration-500 group-hover:bg-luxury-gold">
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-inherit rotate-45 origin-right" />
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-inherit -rotate-45 origin-right" />
                  </span>
                </motion.div>
              </Link>
            </div>
          )}

          {/* Right Side: The Slate Editorial List (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col pt-2 border-t lg:border-none border-white/5">
            {listInsights.map((insight, index) => (
              <motion.div key={insight.id} variants={fadeUp} custom={index}>
                <Link href={insight.href} className="list-article group block py-8 md:py-10 border-b border-white/5 relative overflow-hidden transition-all duration-500 hover:pl-4">
                  {/* Subtle hover background highlight */}
                  <div className="absolute inset-0 bg-white/[0.015] translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                  
                  <div className="relative z-10 flex flex-col">
                    {/* Meta Details */}
                    <div className="flex justify-between items-center gap-4 mb-4">
                      <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-gray-500 font-medium transition-colors duration-500 group-hover:text-luxury-gold/80">
                        {insight.category}
                      </span>
                      <span className="font-sans text-[11px] tracking-wide text-gray-700">
                        {insight.date}
                      </span>
                    </div>

                    {/* Slate Title */}
                    <h3 className="font-heading text-2xl md:text-[1.75rem] text-white font-light mb-5 group-hover:text-white transition-colors duration-500 leading-tight">
                      {insight.title}
                    </h3>

                    {/* Custom "Extension" Arrow */}
                    <div className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-gray-600 transition-all duration-300 group-hover:text-luxury-gold group-hover:gap-5">
                      Read article
                      <span className="relative w-6 h-[1px] bg-gray-700 group-hover:bg-luxury-gold transition-colors duration-500">
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-[1px] bg-inherit rotate-45 origin-right" />
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-[1px] bg-inherit -rotate-45 origin-right" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}