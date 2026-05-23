"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getEnabledServices } from "@/lib/services";

export default function ServicesPage() {
  const services = getEnabledServices();
  const [activeSection, setActiveSection] = useState(services[0]?.slug);
  
  // Refs for our scrollable navigation containers
  const sidebarRef = useRef(null);
  const mobileNavRef = useRef(null);

  // ─── 1. Scroll Spy Logic (Tracks page scroll) ───
  useEffect(() => {
    const observerOptions = {
      root: null,
      // Triggers when the top of the service hits the middle of the screen
      rootMargin: "-20% 0px -50% 0px", 
    };

    const observers = [];

    services.forEach((service) => {
      const element = document.getElementById(service.slug);
      if (element) {
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(service.slug);
          }
        }, observerOptions);
        
        observer.observe(element);
        observers.push({ observer, element });
      }
    });

    return () => {
      observers.forEach(({ observer, element }) => observer.unobserve(element));
    };
  }, [services]);

  // ─── 2. Auto-Scroll Sidebar Logic (Connected Scrolling) ───
  useEffect(() => {
    if (!activeSection) return;

    // Desktop Sidebar Auto-Scroll
    if (sidebarRef.current) {
      const activeElement = document.getElementById(`sidebar-link-${activeSection}`);
      if (activeElement) {
        const container = sidebarRef.current;
        const offsetTop = activeElement.offsetTop;
        const containerHeight = container.clientHeight;
        const elementHeight = activeElement.clientHeight;
        
        // Calculate position to perfectly center the active item in the sidebar
        const scrollPos = offsetTop - (containerHeight / 2) + (elementHeight / 2);

        container.scrollTo({
          top: scrollPos,
          behavior: "smooth"
        });
      }
    }

    // Mobile Horizontal Tab Auto-Scroll
    if (mobileNavRef.current) {
      const activeElement = document.getElementById(`mobile-link-${activeSection}`);
      if (activeElement) {
        const container = mobileNavRef.current;
        const offsetLeft = activeElement.offsetLeft;
        const containerWidth = container.clientWidth;
        const elementWidth = activeElement.clientWidth;
        
        // Calculate position to perfectly center the active item horizontally
        const scrollPos = offsetLeft - (containerWidth / 2) + (elementWidth / 2);

        container.scrollTo({
          left: scrollPos,
          behavior: "smooth"
        });
      }
    }
  }, [activeSection]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-luxury-gold selection:text-black">
      
      {/* ─── Cinematic Hero Section ─── */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-32 px-6 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-luxury-gold rounded-full mix-blend-screen filter blur-[250px] opacity-[0.02] pointer-events-none translate-x-1/3 -translate-y-1/3" />

        <div className="max-w-[1440px] mx-auto relative z-10 lg:px-12">
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 0.02 }} transition={{ duration: 2 }}
            className="absolute -top-20 -left-10 text-[120px] md:text-[200px] font-heading text-white pointer-events-none select-none leading-none tracking-tighter"
          >
            PRAYAGRAJ
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-4xl relative z-10">
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6 md:mb-8">
              <span className="w-12 h-[1px] bg-luxury-gold" />
              <span className="text-luxury-gold font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase font-medium">
                The Curated Menu
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-7xl lg:text-[6rem] text-white leading-[0.9] tracking-tight font-light mb-8 drop-shadow-lg">
              Bespoke Services <br />
              <span className="text-luxury-gold italic">& Aesthetics.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-gray-400 font-sans text-base md:text-xl max-w-2xl leading-relaxed font-light">
              Elevating the standard of luxury grooming in Civil Lines, Allahabad. Discover our comprehensive portfolio curated exclusively for our elite clientele.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── Asymmetrical Editorial Layout ─── */}
      <section className="relative py-12 md:py-32 px-6">
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-0 w-[50vw] h-[50vw] bg-luxury-gold rounded-full mix-blend-screen filter blur-[200px] opacity-[0.01] -translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="max-w-[1440px] mx-auto relative z-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative items-start">
            
            {/* ─── Mobile Sticky Tab Bar ─── */}
            <div className="lg:hidden sticky top-[72px] z-50 bg-[#050505]/95 backdrop-blur-xl border-b border-white/5 py-4 -mx-6 px-6 mb-8">
              <div 
                ref={mobileNavRef}
                className="flex overflow-x-auto gap-8 pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
              >
                {services.map((service) => (
                  <Link 
                    key={`mobile-nav-${service.slug}`}
                    id={`mobile-link-${service.slug}`}
                    href={`#${service.slug}`}
                    className={`whitespace-nowrap font-sans text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 relative ${activeSection === service.slug ? 'text-luxury-gold font-medium' : 'text-gray-500'}`}
                  >
                    {service.title}
                    {activeSection === service.slug && (
                      <motion.div layoutId="mobileActive" className="absolute -bottom-2 left-0 right-0 h-[1px] bg-luxury-gold" />
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* ─── Desktop Left Column: Sticky Index ─── */}
            <div 
              ref={sidebarRef}
              className="hidden lg:block lg:col-span-3 sticky top-32 pt-4 h-[calc(100vh-10rem)] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
            >
              <h3 className="sticky top-0 bg-[#050505] z-10 font-sans text-[10px] uppercase tracking-[0.3em] text-gray-500 font-medium pt-2 mb-6 border-b border-white/5 pb-4">
                Service Directory
              </h3>
              
              <ul className="flex flex-col gap-5 pb-24 relative">
                {services.map((service, index) => {
                  const isActive = activeSection === service.slug;
                  return (
                    <li key={`index-${service.slug}`} id={`sidebar-link-${service.slug}`}>
                      <Link 
                        href={`#${service.slug}`}
                        className="group flex items-center gap-4 transition-all duration-500"
                      >
                        <span className={`font-sans text-[9px] tracking-widest transition-colors duration-300 ${isActive ? 'text-luxury-gold' : 'text-gray-600 group-hover:text-luxury-gold/50'}`}>
                          0{index + 1}
                        </span>
                        <span className={`font-heading text-xl transition-colors duration-300 ${isActive ? 'text-white translate-x-2' : 'text-gray-500 group-hover:text-white group-hover:translate-x-2'}`}>
                          {service.title}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* ─── Right Column: Magazine Spread Editorials ─── */}
            <div className="lg:col-span-8 lg:col-start-5 flex flex-col gap-24 md:gap-40">
              {services.map((service, index) => (
                <motion.div
                  key={service.slug}
                  id={service.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex flex-col scroll-mt-32 md:scroll-mt-40"
                >
                  <div className="border-t border-white/10 pt-8 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                      <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-luxury-gold font-medium block mb-4">
                        0{index + 1} — Signature Service
                      </span>
                      <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-tight group-hover:text-luxury-gold transition-colors duration-500">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <div className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-[#0a0a0c] overflow-hidden mb-8">
                    <Image
                      src={service.images[0]}
                      alt={`${service.title} at Calixta Prayagraj`}
                      fill
                      className="object-cover grayscale-[40%] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent z-10 pointer-events-none" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-20">
                    <div className="md:col-span-10">
                      <p className="font-sans text-gray-400 text-base md:text-lg leading-relaxed font-light">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>
      
      {/* ─── Editorial CTA Section ─── */}
      <section className="relative py-32 px-6 border-t border-white/5 bg-[#0a0a0c]">
        {/* CTA Content Remains the same */}
        <div className="max-w-[1440px] mx-auto relative z-10 lg:px-12 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-luxury-gold font-sans text-[10px] tracking-[0.4em] uppercase mb-6 block font-medium">
              The Invitation
            </span>
            <h2 className="font-heading text-4xl md:text-6xl text-white font-light mb-8 drop-shadow-lg">
              Secure Your <span className="text-luxury-gold italic">Session.</span>
            </h2>
            <p className="text-gray-400 font-sans text-sm md:text-lg mb-12 max-w-xl mx-auto font-light leading-relaxed">
              Experience the pinnacle of aesthetic mastery. Our concierge is available to curate your personalized appointment in Prayagraj.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-4 bg-white text-black px-10 py-5 text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium hover:bg-luxury-gold hover:text-white transition-colors duration-500"
            >
              Contact Concierge
              <span className="text-lg leading-none mt-[-2px]">&rarr;</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}