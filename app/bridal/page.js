"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const blueprintSteps = [
  {
    phase: "Phase 01",
    timeframe: "3-6 Months Prior",
    title: "The Private Consultation",
    description: "Your journey begins in our exclusive suite in Civil Lines. We analyze your skin topography, facial geometry, and wardrobe aesthetics to design a bespoke bridal vision."
  },
  {
    phase: "Phase 02",
    timeframe: "1-2 Months Prior",
    title: "Structural & Color Alchemy",
    description: "Execution of any required structural haircuts, keratin therapies, or global color transformations to ensure your hair is in peak condition."
  },
  {
    phase: "Phase 03",
    timeframe: "The Defining Day",
    title: "High-Definition Artistry",
    description: "Flawless, long-wear cosmetic execution and architectural hair styling using elite global formulations. Designed to look breathtaking in person and on cinematic lenses."
  }
];

const packages = [
  {
    name: "The Signature Bride",
    features: ["HD/Airbrush Makeup Artistry", "Architectural Hair Styling", "Premium Draping", "Pre-Bridal Skin Consultation"],
    image: "/image/services/bridal-1.jpeg"
  },
  {
    name: "The Destination Bride",
    features: ["On-Location VIP Concierge", "Multiple Event Styling (Sangeet, Reception)", "Touch-up Artist on Standby", "Complete Bridal Party Prep"],
    image: "/image/services/bridal-2.jpg"
  }
];

export default function BridalCouturePage() {
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
      
      {/* ─── Cinematic Hero Section (GEO Optimized) ─── */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-40 px-6 border-b border-white/5 overflow-hidden">
        {/* Soft Bridal Blush Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[80vw] bg-luxury-gold/50 rounded-full mix-blend-screen filter blur-[300px] opacity-[0.03] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto relative z-10 lg:px-12 flex flex-col items-center text-center">
          
          <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-4xl relative z-10 flex flex-col items-center">
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6 md:mb-8">
              <span className="w-12 h-[1px] bg-luxury-gold" />
              <span className="text-luxury-gold font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase font-medium">
                Exclusive Artistry
              </span>
              <span className="w-12 h-[1px] bg-luxury-gold" />
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-7xl lg:text-[7rem] text-white leading-[0.9] tracking-tight font-light mb-8 drop-shadow-lg">
              Bridal <span className="text-luxury-gold italic">Couture.</span>
            </motion.h1>
            
            {/* SEO & GEO Rich Description */}
            <motion.p variants={fadeUp} className="text-gray-400 font-sans text-base md:text-xl max-w-2xl leading-relaxed font-light mb-12">
              The premier destination for elite bridal aesthetics in Prayagraj. We curate flawless, high-definition artistry for your most defining moments, ensuring absolute perfection under every lens.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Link 
                href="/contact" 
                className="group inline-flex items-center gap-4 border border-white/20 bg-white/5 backdrop-blur-md text-white px-10 py-5 text-[10px] md:text-xs tracking-[0.3em] uppercase transition-all duration-500 hover:bg-white hover:text-black font-medium"
              >
                Request a Private Consultation
                <span className="transform transition-transform duration-500 group-hover:translate-x-1 text-lg leading-none">&rarr;</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Massive Editorial Image Divider ─── */}
      <section className="relative w-full h-[60vh] md:h-[80vh] bg-[#0a0a0c] border-b border-white/5 overflow-hidden">
        <Image
          src="/image/services/bridal.jpeg"
          alt="Luxury Bridal Makeup in Allahabad"
          fill
          className="object-cover object-center grayscale-[20%] opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
      </section>

      {/* ─── The Bridal Blueprint (AEO Optimized Timeline) ─── */}
      <section className="relative py-24 md:py-40 px-6 border-b border-white/5">
        <div className="max-w-[1440px] mx-auto relative z-10 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            <div className="lg:col-span-5 lg:sticky lg:top-40">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-6xl text-white font-light tracking-tight leading-[1.1] mb-6">
                  The <span className="text-luxury-gold italic">Calixta</span> Blueprint.
                </motion.h2>
                <motion.p variants={fadeUp} className="text-gray-400 font-sans text-sm md:text-base leading-relaxed font-light">
                  True luxury lies in preparation. Our master artists work with you months in advance, employing a structured timeline to guarantee your aesthetic is flawless, resilient, and uniquely yours on the day of the ceremony.
                </motion.p>
              </motion.div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-12 md:gap-16">
              {blueprintSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex flex-col md:flex-row gap-6 md:gap-12 pb-12 border-b border-white/10 last:border-0 last:pb-0"
                >
                  <div className="md:w-1/3 shrink-0">
                    <span className="text-luxury-gold font-sans text-[10px] tracking-[0.3em] uppercase block font-medium mb-2">
                      {step.phase}
                    </span>
                    <span className="text-gray-500 font-sans text-xs tracking-widest uppercase block">
                      {step.timeframe}
                    </span>
                  </div>
                  
                  <div className="md:w-2/3">
                    <h3 className="font-heading text-2xl md:text-3xl text-white font-light mb-4 group-hover:text-luxury-gold transition-colors duration-500">
                      {step.title}
                    </h3>
                    <p className="font-sans text-gray-400 text-sm leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ─── Bridal Packages (Asymmetrical Gallery) ─── */}
      <section className="relative py-24 md:py-40 px-6 bg-[#0a0a0c]">
        <div className="max-w-[1440px] mx-auto relative z-10 lg:px-12">
          
          <div className="text-center mb-20 md:mb-32">
            <span className="text-luxury-gold font-sans text-[10px] tracking-[0.4em] uppercase mb-6 block font-medium">
              Curated Offerings
            </span>
            <h2 className="font-heading text-4xl md:text-6xl text-white font-light tracking-tight">
              Bespoke <span className="text-luxury-gold italic">Couture</span> Packages
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 lg:gap-24">
            {packages.map((pkg, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className={`group flex flex-col ${index === 1 ? 'md:mt-32' : ''}`}
              >
                <div className="relative w-full aspect-[4/5] bg-[#050505] overflow-hidden border border-white/5 mb-8">
                  <Image
                    src={pkg.image}
                    alt={`${pkg.name} Makeup in Prayagraj`}
                    fill
                    className="object-cover grayscale-[30%] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent z-10 pointer-events-none" />
                </div>

                <div>
                  <h3 className="font-heading text-3xl md:text-4xl text-white font-light mb-6 group-hover:text-luxury-gold transition-colors duration-500">
                    {pkg.name}
                  </h3>
                  <ul className="flex flex-col gap-4 border-l border-white/10 pl-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="font-sans text-gray-400 text-sm tracking-wide font-light flex items-center gap-3">
                        <span className="w-1 h-1 rounded-full bg-luxury-gold/50" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── Editorial CTA Section ─── */}
      <section className="relative py-32 px-6 border-t border-white/5 bg-[#050505]">
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
              Reserve Your <span className="text-luxury-gold italic">Date.</span>
            </h2>
            <p className="text-gray-400 font-sans text-sm md:text-lg mb-12 max-w-xl mx-auto font-light leading-relaxed">
              Our master artists accept a strictly limited number of bridal commissions per season to ensure absolute dedication to your vision.
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