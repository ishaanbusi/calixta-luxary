
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: EASE } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } }
};

// Each service has a rich set of fields for SEO/GEO and visual variety
const services = [
  {
    id: "01",
    title: "Signature Styling",
    subtitle: "Precision Cut & Structure",
    description:
      "Masterful cutting and structural styling tailored to your unique facial geometry — executed by Calixta's lead artists using European training.",
    detail: "60 — 120 min · Prayagraj",
    price: "From ₹2,500",
    image: "/image/home/calixta-luxury-saloon-prayagraj-banner-1.jpeg",
    imageAlt: "Precision hair styling at Calixta Luxury Salon Prayagraj",
    href: "/services#styling",
    // Layout: left-aligned hero card, wide
    layout: "wide",        // spans full width on mobile, 2/3 on desktop
    imagePosition: "left", // image left, text right
  },
  {
    id: "02",
    title: "Colour Alchemy",
    subtitle: "Balayage · Foilage · Toning",
    description:
      "Elite European formulations from London and Milan — balayage, foilage, global corrections and bespoke toning for Prayagraj's most discerning clientele.",
    detail: "90 — 240 min · Prayagraj",
    price: "From ₹6,000",
    image: "/image/home/calixta-luxury-saloon-prayagraj-banner.jpeg",
    imageAlt: "Hair colour alchemy — balayage service at Calixta Salon Prayagraj",
    href: "/services#color",
    layout: "tall",
  },
  {
    id: "03",
    title: "Restorative Therapies",
    subtitle: "Keratin · Hydration · Shine",
    description:
      "Deep reconstructive keratin and hydration therapies for mirror-like shine — exclusive formulations unavailable elsewhere in Prayagraj.",
    detail: "120 — 180 min · Prayagraj",
    price: "From ₹8,000",
    image: "/image/home/calixta-luxury-saloon-prayagraj.jpeg",
    imageAlt: "Hair restoration keratin treatment at Calixta Salon Allahabad",
    href: "/services#restoration",
    layout: "tall",
  },
  {
    id: "04",
    title: "Bridal Couture",
    subtitle: "HD Artistry · Private Suite",
    description:
      "Flawless high-definition artistry and up-dos for your most exclusive events — designed in Calixta's private bridal suite in Prayagraj.",
    detail: "Bespoke · Private Suite",
    price: "Bespoke Pricing",
    image: "/image/home/calixta-bridal-makeup.jpeg",
    imageAlt: "Bridal makeup and hair couture at Calixta Luxury Salon private suite, Prayagraj",
    href: "/services#bridal",
    layout: "wide",
    imagePosition: "right",
  }
];

// Wide card — image + text side by side (Chanel product-reveal style)
function WideCard({ service, index }) {
  const isImageRight = service.imagePosition === "right";
  return (
    <motion.div
      variants={fadeUp}
      className="group relative w-full border border-white/[0.06] bg-[#080808] overflow-hidden flex flex-col md:flex-row hover:border-luxury-gold/15 transition-colors duration-700"
      style={{ minHeight: "clamp(320px, 40vw, 520px)" }}
    >
      {/* Image side */}
      <div className={`relative flex-1 min-h-[240px] md:min-h-0 overflow-hidden ${isImageRight ? "md:order-2" : "md:order-1"}`}>
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width:768px) 100vw, 50vw"
          quality={90}
          className="object-cover object-center grayscale-[50%] opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1.6s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-${isImageRight ? "l" : "r"} from-[#080808] via-transparent to-transparent z-10 pointer-events-none`} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent z-10 pointer-events-none md:hidden" />
        {/* Number badge */}
        <span className="absolute top-6 left-6 font-sans text-[9px] tracking-[0.4em] text-luxury-gold/60 z-20">
          {service.id}
        </span>
      </div>

      {/* Text side */}
      <div className={`relative z-20 flex-1 flex flex-col justify-center p-8 md:p-12 lg:p-16 ${isImageRight ? "md:order-1" : "md:order-2"}`}>
        <span className="font-sans text-[9px] uppercase tracking-[0.4em] text-gray-600 mb-4 block group-hover:text-luxury-gold/60 transition-colors duration-500">
          {service.subtitle}
        </span>
        <h3 className="font-heading text-[clamp(2rem,3.5vw,3.5rem)] text-white font-light leading-[0.95] tracking-tight mb-5 group-hover:text-luxury-gold transition-colors duration-500">
          {service.title}
        </h3>
        <p className="font-sans text-sm md:text-base text-gray-400 font-light leading-relaxed mb-6 max-w-xs opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100">
          {service.description}
        </p>
        <div className="flex items-center justify-between gap-4 pt-6 border-t border-white/5">
          <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-gray-600">{service.detail}</span>
          <span className="font-heading text-lg text-luxury-gold font-light">{service.price}</span>
        </div>
        <Link
          href={service.href}
          aria-label={`View ${service.title} service at Calixta Luxury Salon Prayagraj`}
          className="absolute inset-0 z-30"
        />
      </div>

      {/* Hover gold border */}
      <div className="absolute inset-0 border border-luxury-gold/0 group-hover:border-luxury-gold/15 transition-colors duration-1000 z-30 pointer-events-none" />
    </motion.div>
  );
}

// Tall card — full-bleed image with content at bottom (Dior grid style)
function TallCard({ service }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative overflow-hidden border border-white/[0.06] bg-[#080808] hover:border-luxury-gold/15 transition-colors duration-700"
      style={{ minHeight: "clamp(380px, 55vw, 620px)" }}
    >
      <Link href={service.href} className="absolute inset-0 z-40" aria-label={`View ${service.title} at Calixta Luxury Salon`} />

      {/* Full-bleed image */}
      <Image
        src={service.image}
        alt={service.imageAlt}
        fill
        sizes="(max-width:768px) 100vw, 40vw"
        quality={88}
        className="object-cover object-center grayscale-[55%] opacity-65 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1.8s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-108"
      />

      {/* Layered vignettes */}
      <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/40 to-transparent z-10 transition-opacity duration-[1.2s] group-hover:opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/50 to-transparent z-10" />
      <div className="absolute inset-0 border border-luxury-gold/0 group-hover:border-luxury-gold/15 transition-colors duration-1000 z-20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-30 h-full flex flex-col justify-between p-7 md:p-10">
        {/* Top */}
        <div className="flex justify-between items-start">
          <span className="font-sans text-[9px] tracking-[0.4em] text-luxury-gold font-medium">{service.id}</span>
          <span className="opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-700 font-sans text-[8px] uppercase tracking-widest text-white border border-white/20 bg-white/5 backdrop-blur-sm px-3 py-1.5">
            {service.price}
          </span>
        </div>

        {/* Bottom */}
        <div className="translate-y-5 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <span className="font-sans text-[8px] uppercase tracking-[0.35em] text-gray-500 mb-3 block group-hover:text-luxury-gold/70 transition-colors duration-500">
            {service.subtitle}
          </span>
          <h3 className="font-heading text-[clamp(1.6rem,2.8vw,2.6rem)] text-white font-light mb-3 leading-tight">
            {service.title}
          </h3>
          <p className="font-sans text-sm text-gray-400 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 max-w-xs">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedServices() {
  const wide = services.filter((s) => s.layout === "wide");
  const tall = services.filter((s) => s.layout === "tall");

  return (
    <section
      className="relative py-20 md:py-36 bg-luxury-black overflow-hidden border-t border-white/5"
      aria-label="Calixta Featured Services — Prayagraj"
      itemScope
      itemType="https://schema.org/OfferCatalog"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-luxury-gold rounded-full mix-blend-screen filter blur-[300px] opacity-[0.025] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">

        {/* ── Section header ─────────────────────────────────────────────────── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 md:mb-20 gap-6"
        >
          <div>
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-5">
              <span className="w-8 h-px bg-luxury-gold" />
              <span className="text-luxury-gold font-sans text-[10px] md:text-[11px] tracking-[0.45em] uppercase font-medium">
                Our Curations
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-[clamp(3rem,6vw,7rem)] text-white leading-[0.92] tracking-tight font-light"
              itemProp="name"
            >
              Bespoke{" "}
              <em className="text-luxury-gold not-italic">Services.</em>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="shrink-0"
          >
            <Link
              href="/services"
              aria-label="View the complete Calixta service menu"
              className="group inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-gray-400 hover:text-white transition-colors duration-300"
            >
              View Complete Menu
              <span className="relative w-8 h-px bg-gray-600 group-hover:bg-white transition-colors duration-500 shrink-0">
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-px bg-inherit rotate-45 origin-right" />
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-px bg-inherit -rotate-45 origin-right" />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* ── Service grid ─────────────────────────────────────────────────────
            Layout strategy (Dior/Chanel editorial grid):
            Mobile:  single column, all cards stacked
            Desktop: Row 1: wide card (full width)
                     Row 2: two tall cards side by side
                     Row 3: wide card (full width, mirrored)
        ──────────────────────────────────────────────────────────────────── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col gap-4 md:gap-5"
        >
          {/* Wide card 1 */}
          <WideCard service={wide[0]} index={0} />

          {/* Two tall cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {tall.map((s) => <TallCard key={s.id} service={s} />)}
          </div>

          {/* Wide card 2 */}
          <WideCard service={wide[1]} index={1} />
        </motion.div>

        {/* ── Bottom strip: trust signals ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mt-14 md:mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <p className="font-sans text-[9px] uppercase tracking-[0.4em] text-gray-600 text-center sm:text-left">
            All services available exclusively at Calixta, Prayagraj · Strictly by appointment
          </p>
          <Link
            href="/contact"
            aria-label="Book a session at Calixta Luxury Salon Prayagraj"
            className="group inline-flex items-center gap-4 border border-white/15 bg-transparent text-white px-8 py-3.5 text-[10px] tracking-[0.25em] uppercase hover:bg-luxury-gold hover:border-luxury-gold hover:text-black transition-all duration-500"
          >
            Reserve a Session →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
