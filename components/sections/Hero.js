"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const SLIDE_DURATION = 7000; // Slower, more cinematic duration (7s)

// Cinematic Mock Data (Can be replaced with props later)
const defaultSlides = [
  {
    id: "s1",
    label: "The Manifesto",
    title: "Redefining Luxury Grooming.",
    description: "A sanctuary of precision engineering and aesthetic mastery in the heart of Prayagraj.",
    image: "/image/home/calixta-luxury-saloon-prayagraj.jpeg",
    cta: "Reserve a Session",
    href: "/book"
  },
  {
    id: "s2",
    label: "Color Alchemy",
    title: "Vibrant. Restorative. Bespoke.",
    description: "Global formulations from London and Milan, applied with architectural precision.",
    image: "/image/home/calixta-luxury-saloon-prayagraj-banner.jpeg",
    cta: "Discover Alchemy",
    href: "/services#color"
  },
  {
    id: "s3",
    label: "Bridal Couture",
    title: "Flawless High-Definition Artistry.",
    description: "Exclusive, private suite experiences curated for your most defining moments.",
    image: "/image/home/calixta-luxury-saloon-prayagraj-banner-1.jpeg",
    cta: "View Couture",
    href: "/services#bridal"
  }
];

export default function HeroSlider({ slides = defaultSlides }) {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const goTo = useCallback((index) => {
    setCurrent(index);
    clearTimeout(timerRef.current);
  }, []);

  // Handle auto-advance
  useEffect(() => {
    if (!isPlaying || slides.length === 0) return;
    timerRef.current = setTimeout(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearTimeout(timerRef.current);
  }, [current, isPlaying, slides.length]);

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null || slides.length === 0) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      goTo(diff > 0
        ? (current + 1) % slides.length
        : (current - 1 + slides.length) % slides.length
      );
    }
    touchStartX.current = null;
  };

  if (!slides || slides.length === 0) {
    return <div className="w-full h-screen bg-luxury-black" />;
  }

  const slide = slides[current];

  return (
    <section
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-[100svh] min-h-[600px] bg-luxury-black overflow-hidden flex flex-col"
    >
      {/* ─── Cinematic Backgrounds ─── */}
      {slides.map((s, index) => {
        const isActive = index === current;
        return (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out z-0 ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Subtle "Ken Burns" zoom effect on active slide */}
            <motion.div
              initial={false}
              animate={isActive ? { scale: 1.05 } : { scale: 1 }}
              transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={s.image}
                alt={s.title}
                fill
                priority={index === 0}
                className="object-cover object-center grayscale-[20%]"
                sizes="100vw"
              />
            </motion.div>
            
            {/* High-Fashion Vignette Overlays */}
            {/* Bottom gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-black/40 to-transparent z-10" />
            
            {/* NEW: Top gradient shadow to protect the Logo and Navbar contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-black/40 to-transparent h-48 md:h-64 z-10" />
            
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000_150%)] z-10" />
          </div>
        );
      })}

      {/* ─── Editorial Text Overlay ─── */}
      {/* NEW: Added pt-32 md:pt-48 to force space away from the header */}
      <div className="relative z-20 flex-grow max-w-[1440px] mx-auto w-full px-6 lg:px-12 flex flex-col justify-end pb-32 md:pb-40 pt-22 md:pt-38">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <span className="flex items-center gap-4 text-luxury-gold font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase mb-6 font-medium">
              <span className="w-8 h-[1px] bg-luxury-gold"></span>
              {slide.label}
            </span>
            
            <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight mb-6 font-light drop-shadow-lg">
              {slide.title}
            </h2>
            
            <p className="font-sans text-gray-300 text-sm md:text-lg font-light leading-relaxed mb-10 max-w-lg">
              {slide.description}
            </p>

            <Link
              href={slide.href}
              className="group inline-flex items-center justify-center gap-4 border border-white/20 bg-white/5 backdrop-blur-md text-white px-10 py-4 text-xs md:text-sm tracking-[0.2em] uppercase transition-all duration-500 hover:bg-white hover:text-black"
            >
              {slide.cta}
              <span className="transform transition-transform duration-500 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ─── Minimalist Navigation Controls ─── */}
      {/* <div className="absolute bottom-8 md:bottom-12 left-6 lg:left-12 z-30 flex items-center gap-8">
        
        <button
          onClick={() => setIsPlaying((p) => !p)}
          className="font-sans text-[9px] uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>

        <div className="flex gap-3 items-center">
          {slides.map((_, i) => {
            const isActive = i === current;
            return (
              <button
                key={`nav-${i}`}
                onClick={() => goTo(i)}
                className="relative h-[2px] rounded-full overflow-hidden transition-all duration-500 bg-white/20"
                style={{ width: isActive ? "48px" : "16px" }}
                aria-label={`Go to slide ${i + 1}`}
              >
                {isActive && isPlaying && (
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                    className="absolute top-0 left-0 h-full bg-luxury-gold"
                  />
                )}
                {isActive && !isPlaying && (
                  <div className="absolute top-0 left-0 h-full w-full bg-luxury-gold" />
                )}
              </button>
            );
          })}
        </div>

        <div className="font-heading text-sm text-white/50 italic tracking-widest hidden md:block">
          0{current + 1} <span className="text-white/20 mx-1">/</span> 0{slides.length}
        </div>
      </div> */}
    </section>
  );
}