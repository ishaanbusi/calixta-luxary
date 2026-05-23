"use client";

/**
 * HeroSlider — Calixta Luxury Salon, Prayagraj / Allahabad, Uttar Pradesh
 *
 * LAYOUT FIX  : Three-row flex column (top-spacer | content | nav-bar) eliminates
 *               all overlap between navbar, slide text, and navigation controls.
 *               Safe-area insets + CSS custom property --navbar-height guard every edge.
 * DESIGN      : Cinematic Ken-Burns, animated progress dots, film counter,
 *               dual-gradient vignette, responsive type scale.
 * SEO         : Semantic landmarks, h1 hierarchy, descriptive alt text, LCP-optimised loading.
 * AEO         : JSON-LD SpeakableSpecification + LocalBusiness / BeautySalon schema.
 * GEO         : Brand + dual-city entity signals (Prayagraj / Allahabad) in copy & schema.
 */

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { motion, AnimatePresence } from "framer-motion";

// ─── Constants ────────────────────────────────────────────────────────────────
const SLIDE_DURATION = 7000;
const EASE           = [0.22, 1, 0.36, 1];

// ─── Slide Data ───────────────────────────────────────────────────────────────
const defaultSlides = [
  {
    id:          "s1",
   
    title:       "Redefining Luxury Grooming",
    description:
      "Prayagraj’s premier luxury salon offering precision hair, skin, beauty, and wellness services in an intimate appointment only sanctuary located in the heart of Allahabad.",
    image:       "/image/services/IMG_0106.JPG",
    imageAlt:
      "Interior of Calixta Luxury Salon in Prayagraj featuring editorial styling chairs, warm lighting, and premium grooming stations",
    cta:         "Reserve a Session",
    href:        "/contact",
    speakable:
      "Calixta Luxury Salon in Prayagraj, also known as Allahabad, Uttar Pradesh, is a premier destination for luxury hair, beauty, and wellness services.",
  },
  {
    id:          "s2",
    
    title:       "Vibrant. Restorative. Bespoke Colour",
    description:
      "Premium international colour formulations inspired by London and Milan, delivered by expert colourists specialising in balayage, highlights, gloss toning, and complete hair transformations.",
    image:       "/image/services/DSC01296.jpeg",
    imageAlt:
      "Professional hair colouring session at Calixta Luxury Salon in Prayagraj showcasing precision balayage techniques",
    cta:         "Explore Colour Services",
    href:        "/services#color",
    speakable:
      "Calixta in Prayagraj offers balayage, highlights, toning, and luxury colour transformations using globally inspired techniques and premium formulations.",
  },
  {
    id:          "s3",
    title:       "Flawless Bridal Artistry",
    description:
      "Luxury bridal experiences featuring HD makeup, customised hair styling, and pre wedding skincare rituals thoughtfully curated for modern brides in Prayagraj and Allahabad.",
    image:       "/image/services/DSC01187.jpeg",
    imageAlt:
      "Luxury bridal hair and makeup artistry at Calixta Luxury Salon in Prayagraj inside an exclusive bridal suite",
    cta:         "View Bridal Packages",
    href:        "/services#bridal",
    speakable:
      "Calixta offers luxury bridal makeup, bespoke hairstyling, and premium pre wedding beauty services for brides across Prayagraj and Allahabad.",
  },
];
// ─── JSON-LD Schemas (AEO + GEO) ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context":  "https://schema.org",
  "@type":     ["BeautySalon", "LocalBusiness"],
  name:        "Calixta Luxury Salon",
  alternateName: ["Calixta Salon Prayagraj", "Calixta Allahabad"],
  description:
    "Prayagraj's (Allahabad's) premier luxury salon offering precision hair colouring, bridal makeup, skin treatments, and wellness services in Uttar Pradesh.",
  url:         "https://calixta.in",
  telephone:   "",
  priceRange:  "₹₹₹",
  address: {
    "@type":           "PostalAddress",
    addressLocality:   "Prayagraj",
    alternateName:     "Allahabad",
    addressRegion:     "Uttar Pradesh",
    addressCountry:    "IN",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name:    "Salon Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hair Colouring & Balayage" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bridal Makeup & Hair Styling" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Skin & Facial Treatments" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Precision Hair Cutting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pre-Wedding Skincare Rituals" } },
    ],
  },
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type":    "WebPage",
  speakable: {
    "@type":      "SpeakableSpecification",
    cssSelector:  ["[data-speakable]"],
  },
  about: localBusinessSchema,
};

// ─── ProgressBar ──────────────────────────────────────────────────────────────
function ProgressBar({ active, playing, duration }) {
  return (
    <div
      role="progressbar"
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden"
    >
      {active && playing && (
        <motion.div
          key="progress-playing"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: duration / 1000, ease: "linear" }}
          style={{ transformOrigin: "left" }}
          className="h-full w-full bg-luxury-gold"
        />
      )}
      {active && !playing && (
        <div className="h-full w-full bg-luxury-gold" />
      )}
    </div>
  );
}

// ─── FilmCounter ──────────────────────────────────────────────────────────────
function FilmCounter({ current, total }) {
  return (
    <div
      aria-label={`Slide ${current + 1} of ${total}`}
      className="font-heading text-[10px] md:text-[13px] text-white/40 italic tracking-[0.3em] tabular-nums select-none leading-none"
    >
      <span className="text-white/70">{String(current + 1).padStart(2, "0")}</span>
      <span className="mx-2 text-white/20">/</span>
      <span>{String(total).padStart(2, "0")}</span>
    </div>
  );
}

// ─── HeroSlider ───────────────────────────────────────────────────────────────
export default function HeroSlider({ slides = defaultSlides }) {
  const [current,   setCurrent]   = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef    = useRef(null);
  const touchStartX = useRef(null);

  // Navigation
  const goTo = useCallback((index) => {
    setCurrent(index);
    clearTimeout(timerRef.current);
  }, []);

  const goPrev = useCallback(
    () => goTo((current - 1 + slides.length) % slides.length),
    [current, goTo, slides.length]
  );
  const goNext = useCallback(
    () => goTo((current + 1) % slides.length),
    [current, goTo, slides.length]
  );

  // Auto-advance
  useEffect(() => {
    if (!isPlaying || slides.length === 0) return;
    timerRef.current = setTimeout(
      () => setCurrent((c) => (c + 1) % slides.length),
      SLIDE_DURATION
    );
    return () => clearTimeout(timerRef.current);
  }, [current, isPlaying, slides.length]);

  // Keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft")  goPrev();
      if (e.key === "ArrowRight") goNext();
      if (e.key === " ")          { e.preventDefault(); setIsPlaying((p) => !p); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext]);

  // Pause when tab hidden
  useEffect(() => {
    const onChange = () => setIsPlaying(!document.hidden);
    document.addEventListener("visibilitychange", onChange);
    return () => document.removeEventListener("visibilitychange", onChange);
  }, []);

  // Touch
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? goNext() : goPrev();
    touchStartX.current = null;
  };

  if (!slides?.length) return <div className="w-full h-screen bg-luxury-black" aria-hidden />;

  const slide = slides[current];

  return (
    <>
      {/* ── JSON-LD ─────────────────────────────────────────────────────────── */}
      <Script
        id="schema-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="schema-speakable"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      {/*
        ══════════════════════════════════════════════════════════════════════
        LAYOUT ARCHITECTURE  (fixes all overlapping issues)
        ══════════════════════════════════════════════════════════════════════

        The section is a flex column with THREE explicit rows:

          Row 1 — [top-spacer]
                  Height = navbar height + safe-area-inset-top.
                  Pushes content below the navbar; nothing ever clips under it.

          Row 2 — [content area]   flex-grow → takes all remaining space
                  Vertically centred with justify-center so text sits in
                  the visual middle of the image, not jammed at bottom.
                  Has its own bottom padding to stay clear of Row 3.

          Row 3 — [navigation bar]   flex-shrink-0, fixed height
                  Always at bottom, never overlaps content.
                  Own padding above it (pt-4) keeps arrows from touching text.

        This is purely in-flow layout — no absolute positioning for content —
        so nothing can overlap regardless of viewport height or font scaling.

        CSS custom property approach for navbar height:
          Set  --navbar-height  in your root layout or globals.css.
          Default here is 80px (change to match your actual header).
      ══════════════════════════════════════════════════════════════════════
      */}
      <section
        role="region"
        aria-label="Calixta Luxury Salon — Hero Showcase"
        aria-roledescription="carousel"
        aria-live="polite"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        style={{ "--navbar-h": "var(--navbar-height, 80px)" }}
        className="
          relative w-full bg-luxury-black overflow-hidden
          flex flex-col
          h-[100svh] min-h-[560px]
        "
      >
        {/* ── Slide Backgrounds (absolutely positioned, behind everything) ──── */}
        {slides.map((s, index) => {
          const isActive = index === current;
          return (
            <div
              key={s.id}
              aria-hidden={!isActive}
              className={`
                absolute inset-0 z-0
                transition-opacity duration-1000 ease-in-out
                ${isActive ? "opacity-100" : "opacity-0"}
              `}
            >
              {/* Ken Burns */}
              <motion.div
                initial={false}
                animate={isActive ? { scale: 1.06 } : { scale: 1.0 }}
                transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                className="absolute inset-0"
              >
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "low"}
                  className="object-cover object-center"
                  sizes="100vw"
                  quality={90}
                />
              </motion.div>

              {/* Bottom gradient — text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 pointer-events-none" />
              {/* Top gradient — navbar legibility */}
              <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black/75 to-transparent z-10 pointer-events-none" />
              {/* Radial edge vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_35%,_rgba(0,0,0,0.55)_100%)] z-10 pointer-events-none" />
              {/* Brand warm tint */}
              <div className="absolute inset-0 bg-[#8B6914]/[0.04] z-10 pointer-events-none" />
            </div>
          );
        })}

        {/* ════════════════════════════════════════════════════════════════════
            ROW 1 — Navbar spacer
            Reserves exactly as much space as the navbar occupies so no
            content ever renders behind/under it.
            Update --navbar-height in globals.css to match your header.
        ════════════════════════════════════════════════════════════════════ */}
        <div
          aria-hidden
          className="relative z-20 shrink-0 w-full"
          style={{ height: "calc(var(--navbar-h) + env(safe-area-inset-top, 0px))" }}
        />

        {/* ════════════════════════════════════════════════════════════════════
            ROW 2 — Slide content
            flex-grow fills remaining space; content is bottom-aligned inside
            so it sits in the lower-third of the frame (cinematic convention).
            pb-6 / pb-8 keeps it safely above Row 3.
        ════════════════════════════════════════════════════════════════════ */}
        <div className="relative z-20 grow flex flex-col justify-end px-6 md:px-10 lg:px-16 pb-6 md:pb-8 max-w-[1440px] mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.article
              key={current}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.8, ease: EASE }}
              aria-label={`Slide: ${slide.title}`}
              className="w-full max-w-xl lg:max-w-2xl"
            >
              {/* Eyebrow */}
              <p className="flex items-center gap-3 text-luxury-gold font-sans text-[9px] md:text-[11px] tracking-[0.4em] uppercase mb-4 md:mb-5 font-medium select-none leading-none">
                <span aria-hidden="true" className="w-8 h-px bg-luxury-gold shrink-0" />
                <span>{slide.eyebrow ?? slide.label}</span>
              </p>

              {/* H1 — responsive scale that never overflows */}
              <h1 className="
                font-heading font-light text-white leading-[0.93] tracking-tight
                mb-4 md:mb-5
                text-[clamp(2.4rem,6vw,5.5rem)]
                drop-shadow-lg
              ">
                {slide.title}
              </h1>

              {/* Description — AEO speakable */}
              <p
                data-speakable
                className="
                  font-sans font-light text-gray-300/85 leading-relaxed
                  mb-7 md:mb-9 max-w-md
                  text-[clamp(0.8rem,1.8vw,1.05rem)]
                "
              >
                {slide.description}
              </p>

              {/* CTA */}
              <Link
                href={slide.href}
                aria-label={`${slide.cta} — Calixta Luxury Salon, Prayagraj`}
                className="
                  group inline-flex items-center gap-4
                  border border-white/25 bg-white/5 backdrop-blur-sm
                  text-white
                  px-8 py-3.5 md:px-10 md:py-4
                  text-[10px] md:text-[12px] tracking-[0.22em] uppercase
                  transition-all duration-500
                  hover:bg-luxury-gold hover:border-luxury-gold hover:text-black
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-luxury-gold
                "
              >
                {slide.cta}
                <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1.5">
                  →
                </span>
              </Link>
            </motion.article>
          </AnimatePresence>
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            ROW 3 — Navigation controls
            Fixed height, shrink-0, sits below content row.
            Padding above (pt-4) and at bottom accounts for safe-area.
            Never overlaps Row 2 because it's in normal flow after it.
        ════════════════════════════════════════════════════════════════════ */}
        <div
          role="group"
          aria-label="Slideshow controls"
          className="
            relative z-20 shrink-0 w-full
            max-w-[1440px] mx-auto
            px-6 md:px-10 lg:px-16
            pt-4 pb-6 md:pb-8
            flex items-center justify-between gap-4
          "
          style={{ paddingBottom: "calc(1.5rem + env(safe-area-inset-bottom, 0px))" }}
        >
          {/* Left — Play/Pause + Dots */}
          <div className="flex items-center gap-4 md:gap-6 min-w-0">
            {/* Play / Pause */}
            <button
              onClick={() => setIsPlaying((p) => !p)}
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
              className="
                font-sans text-[8px] md:text-[9px] uppercase tracking-[0.35em]
                text-white/35 hover:text-white transition-colors duration-300 shrink-0
                focus-visible:outline focus-visible:outline-1 focus-visible:outline-white/40
              "
            >
              {isPlaying ? "Pause" : "Play"}
            </button>

            {/* Progress Dots */}
            <nav aria-label="Slide navigation" className="flex items-center gap-2.5">
              {slides.map((s, i) => {
                const isActive = i === current;
                return (
                  <button
                    key={`dot-${s.id}`}
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}: ${s.title}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`
                      relative h-[2px] overflow-hidden transition-all duration-500
                      focus-visible:outline focus-visible:outline-2 focus-visible:outline-luxury-gold
                      ${isActive ? "w-10 md:w-12" : "w-3.5 md:w-4 bg-white/20 hover:bg-white/40"}
                    `}
                  >
                    <ProgressBar active={isActive} playing={isPlaying} duration={SLIDE_DURATION} />
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Right — Counter + Arrows */}
          <div className="flex items-center gap-3 md:gap-5 shrink-0">
            <FilmCounter current={current} total={slides.length} />

            {/* Arrows — md and above only */}
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={goPrev}
                aria-label="Previous slide"
                className="
                  w-8 h-8 md:w-9 md:h-9
                  border border-white/20 flex items-center justify-center
                  text-white/45 hover:text-white hover:border-white/50
                  transition-all duration-300 text-xs
                  focus-visible:outline focus-visible:outline-1 focus-visible:outline-white/40
                "
              >
                ←
              </button>
              <button
                onClick={goNext}
                aria-label="Next slide"
                className="
                  w-8 h-8 md:w-9 md:h-9
                  border border-white/20 flex items-center justify-center
                  text-white/45 hover:text-white hover:border-white/50
                  transition-all duration-300 text-xs
                  focus-visible:outline focus-visible:outline-1 focus-visible:outline-white/40
                "
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* ── Visually-hidden SEO / GEO block ─────────────────────────────── */}
        <div className="sr-only">
          <h2>About Calixta Luxury Salon, Prayagraj (Allahabad), Uttar Pradesh</h2>
          <p>
            Calixta is the premier luxury hair and beauty salon in Prayagraj, also known as Allahabad,
            Uttar Pradesh, India. Calixta offers expert hair colouring, balayage, precision cuts,
            bridal makeup artistry, skin treatments, and exclusive wellness rituals in a private,
            appointment-only environment.
          </p>
          <ul>
            {slides.map((s) => (
              <li key={`sr-${s.id}`}>
                <strong>{s.title}</strong>: {s.speakable ?? s.description}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}