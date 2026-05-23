"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  // ─── 1. Horizontal Scroll Logic for Core Values ───
  const horizontalScrollRef = useRef(null);
  const { scrollYProgress: horizontalProgress } = useScroll({
    target: horizontalScrollRef,
  });
  // Moves the inner container left as you scroll down
  const xTransform = useTransform(horizontalProgress, [0, 1], ["0%", "-66.66%"]);

  // ─── 2. Manifesto Text Reveal Logic ───
  const manifestoRef = useRef(null);
  const { scrollYProgress: manifestoProgress } = useScroll({
    target: manifestoRef,
    offset: ["start 80%", "end 50%"]
  });
  const textOpacity = useTransform(manifestoProgress, [0, 1], [0.1, 1]);
  const textY = useTransform(manifestoProgress, [0, 1], [40, 0]);

  const team = [
    {
      name: "The Director",
      role: "Creative Direction",
      image: "https://images.unsplash.com/photo-1595476108010-b4d1f10a5146?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "The Visionary",
      role: "Bridal Couture",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "The Alchemist",
      role: "Therapeutic Care",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-luxury-gold selection:text-black">
      
      {/* ─── 1. The Masked Parallax Hero ─── */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/services/DSC01226.jpeg"
            alt="Calixta Salon Interior"
            fill
            className="object-cover grayscale-[50%] opacity-40 scale-105 animate-[slowZoom_20s_ease-in-out_infinite_alternate]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10" />
        </div>

        <div className="relative z-20 flex flex-col items-center mt-20 px-6">
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: "80px" }} 
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-[1px] bg-gradient-to-b from-transparent to-luxury-gold mb-8"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}
            className="font-sans text-[10px] uppercase tracking-[0.5em] text-luxury-gold mb-6"
          >
            The Heritage
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-[12vw] md:text-[8vw] text-white leading-[0.85] tracking-tighter text-center"
          >
            Artistry <span className="italic text-luxury-gold pr-4">Defined.</span>
          </motion.h1>
        </div>
      </section>

      {/* ─── 2. Scroll-Illuminated Manifesto ─── */}
      <section className="relative py-40 md:py-64 px-6 md:px-12 max-w-[1440px] mx-auto flex items-center justify-center">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-luxury-gold rounded-full mix-blend-screen filter blur-[250px] opacity-[0.02] pointer-events-none" />
        
        <div ref={manifestoRef} className="max-w-5xl mx-auto text-center">
          <motion.p 
            style={{ opacity: textOpacity, y: textY }}
            className="font-heading text-3xl md:text-5xl lg:text-7xl text-white font-light leading-[1.2] tracking-tight"
          >
            We do not simply follow aesthetics. We <span className="italic text-luxury-gold">engineer</span> them. Calixta is an exclusive sanctuary in Civil Lines, Prayagraj, where absolute discretion meets global mastery.
          </motion.p>
        </div>
      </section>

      {/* ─── 3. Pinned Horizontal Scroll (The Pillars) ─── */}
      {/* Container height dictates how long the user scrolls to get through the horizontal section (300vh = 3 screens worth of scrolling) */}
      <section ref={horizontalScrollRef} className="relative h-[300vh] bg-[#0a0a0c] border-y border-white/5">
        
        {/* Sticky container locks to the screen while scrolling happens */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
          
          <div className="absolute top-12 left-6 md:left-12 lg:left-24 z-20">
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-medium">
              The Blueprint
            </span>
          </div>

          <motion.div 
            style={{ x: xTransform }}
            className="flex w-[300vw] h-full items-center px-[10vw]"
          >
            {/* Slide 1 */}
            <div className="w-[100vw] flex flex-col md:flex-row items-center gap-12 md:gap-24 px-6 md:px-12">
              <div className="relative w-full md:w-1/2 aspect-[4/5] overflow-hidden border border-white/10">
                <Image src="/image/services/DSC01246.jpeg" alt="Aesthetic Mastery" fill className="object-cover grayscale-[30%]" />
              </div>
              <div className="w-full md:w-1/2 md:pr-24">
                <span className="font-sans text-[12px] text-gray-600 mb-4 block">01 / 03</span>
                <h2 className="font-heading text-5xl md:text-7xl text-white font-light mb-6">Aesthetic <br/><span className="text-luxury-gold italic">Mastery.</span></h2>
                <p className="font-sans text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-md">Precision engineering meets artistic vision. Every cut and color transformation is an exhibition of contemporary beauty.</p>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="w-[100vw] flex flex-col md:flex-row items-center gap-12 md:gap-24 px-6 md:px-12">
              <div className="relative w-full md:w-1/2 aspect-[4/5] overflow-hidden border border-white/10">
                <Image src="/image/services/DSC01187.jpeg" alt="Global Standards" fill className="object-cover grayscale-[30%]" />
              </div>
              <div className="w-full md:w-1/2 md:pr-24">
                <span className="font-sans text-[12px] text-gray-600 mb-4 block">02 / 03</span>
                <h2 className="font-heading text-5xl md:text-7xl text-white font-light mb-6">Global <br/><span className="text-luxury-gold italic">Standards.</span></h2>
                <p className="font-sans text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-md">Channeling elite expertise from London and Milan. We bring international high-fashion methodologies directly to our clientele.</p>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="w-[100vw] flex flex-col md:flex-row items-center gap-12 md:gap-24 px-6 md:px-12">
              <div className="relative w-full md:w-1/2 aspect-[4/5] overflow-hidden border border-white/10">
                <Image src="/image/services/DSC01297.jpeg" alt="Transformative Care" fill className="object-cover grayscale-[30%]" />
              </div>
              <div className="w-full md:w-1/2 md:pr-24">
                <span className="font-sans text-[12px] text-gray-600 mb-4 block">03 / 03</span>
                <h2 className="font-heading text-5xl md:text-7xl text-white font-light mb-6">Transformative <br/><span className="text-luxury-gold italic">Care.</span></h2>
                <p className="font-sans text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-md">Beyond surface aesthetics. We nurture confidence, executing every service to redefine how you present yourself to the world.</p>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ─── 4. The Artisans (Asymmetrical Overlap Grid) ─── */}
      <section className="relative py-32 md:py-48 px-6 bg-[#050505]">
        <div className="max-w-[1440px] mx-auto relative z-10 lg:px-12">
          
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="text-luxury-gold font-sans text-[10px] tracking-[0.4em] uppercase mb-6 block font-medium">The Vanguard</span>
              <h2 className="font-heading text-5xl md:text-7xl text-white font-light tracking-tight">Master <span className="text-luxury-gold italic">Artisans.</span></h2>
            </div>
            <p className="font-sans text-gray-500 text-sm md:text-base font-light max-w-sm md:text-right">
              Rigorously trained in global methodologies, bringing unparalleled expertise to Prayagraj.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-24">
            {team.map((member, idx) => (
              <div 
                key={idx} 
                // Asymmetrical column spanning and margins
                className={`flex flex-col group ${
                  idx === 0 ? 'md:col-span-5 md:col-start-1' : 
                  idx === 1 ? 'md:col-span-6 md:col-start-7 md:mt-40' : 
                  'md:col-span-5 md:col-start-4 md:mt-20'
                }`}
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-luxury-charcoal mb-8 border border-white/5">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale-[40%] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                </div>
                
                <div className="flex items-end justify-between border-t border-white/10 pt-6">
                  <div>
                    <h3 className="font-heading text-3xl md:text-4xl text-white font-light mb-2">{member.name}</h3>
                    <p className="font-sans text-xs uppercase tracking-[0.3em] text-luxury-gold">{member.role}</p>
                  </div>
                  <span className="font-sans text-[10px] text-gray-600 tracking-widest uppercase">0{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── 5. Infinite Brutalist Marquee ─── */}
      <section className="py-12 border-y border-white/5 overflow-hidden bg-[#0a0a0c] flex items-center">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex whitespace-nowrap"
        >
          {/* Repeating the text to create a seamless loop */}
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="font-heading text-4xl md:text-6xl text-white/10 mx-8 tracking-tighter uppercase">
                Prayagraj
              </span>
              <span className="w-3 h-3 rounded-full bg-luxury-gold/30 mx-4" />
              <span className="font-heading text-4xl md:text-6xl text-white/10 mx-8 tracking-tighter uppercase">
                Civil Lines
              </span>
              <span className="w-3 h-3 rounded-full bg-luxury-gold/30 mx-4" />
              <span className="font-heading text-4xl md:text-6xl text-white/10 mx-8 tracking-tighter uppercase">
                Luxury Salon
              </span>
              <span className="w-3 h-3 rounded-full bg-luxury-gold/30 mx-4" />
            </div>
          ))}
        </motion.div>
      </section>

      {/* ─── Editorial CTA ─── */}
      <section className="relative py-32 md:py-48 px-6 bg-[#050505]">
        <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center">
          <span className="text-luxury-gold font-sans text-[10px] tracking-[0.4em] uppercase mb-8 block font-medium">The Experience</span>
          <h2 className="font-heading text-5xl md:text-7xl text-white font-light mb-12">
            Join the <span className="text-luxury-gold italic">Sanctuary.</span>
          </h2>
          <Link href="/contact" className="group inline-flex items-center gap-4 bg-white text-black px-12 py-6 text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium hover:bg-luxury-gold hover:text-white transition-colors duration-500">
            Contact Concierge
            <span className="text-lg leading-none mt-[-2px] transform transition-transform duration-500 group-hover:translate-x-2">&rarr;</span>
          </Link>
        </div>
      </section>
      
    </div>
  );
}