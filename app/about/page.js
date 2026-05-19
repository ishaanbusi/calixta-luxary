"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
  };

  const values = [
    {
      title: "Aesthetic Mastery",
      description: "Precision engineering meets artistic vision. Every cut, color, and treatment is a masterclass in contemporary beauty.",
    },
    {
      title: "Global Standards",
      description: "We channel expertise from London, Milan, and Paris. International techniques, locally perfected.",
    },
    {
      title: "Exclusive Sanctuary",
      description: "A private retreat for the discerning clientele. Discretion, luxury, and personalized attention define our space.",
    },
    {
      title: "Transformative Care",
      description: "Beyond aesthetics. We nurture your confidence and redefine how you see yourself.",
    },
  ];

  const team = [
    {
      name: "Creative Direction",
      role: "Master Artisan",
      expertise: "Global Color Alchemy & Structural Styling",
      image: "/image/home/calixta-luxury-saloon-prayagraj.jpeg",
    },
    {
      name: "Bridal Couture",
      role: "Chief Artist",
      expertise: "High-Definition Makeup & Styling",
      image: "/image/home/calixta-luxury-saloon-prayagraj-banner.jpeg",
    },
    {
      name: "Therapeutic Treatments",
      role: "Wellness Specialist",
      expertise: "Restorative Keratin & Luxury Spa",
      image: "/image/home/calixta-bridal-makeup.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-luxury-black">
      {/* ─── Hero Section ─── */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden border-b border-white/5">
        
        {/* Ambient Lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-luxury-gold rounded-full mix-blend-screen filter blur-[250px] opacity-[0.03] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto relative z-10 lg:px-12">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={containerVariants}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-luxury-gold" />
              <span className="text-luxury-gold font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase font-medium">
                Our Story
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight font-light mb-6">
              The House of <span className="text-luxury-gold italic">Calixta.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              An exclusive sanctuary dedicated to the artistry of grooming, redefining luxury aesthetics in the heart of Civil Lines, Prayagraj.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── Manifesto Section ─── */}
      <section className="relative py-24 md:py-40 px-6 overflow-hidden">
        
        {/* Ambient Lighting */}
        <div className="absolute top-0 right-0 w-[70vw] h-[70vw] bg-luxury-blush rounded-full mix-blend-screen filter blur-[180px] opacity-[0.02] pointer-events-none translate-x-1/3 -translate-y-1/3" />

        <div className="max-w-[1440px] mx-auto relative z-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            
            {/* Content */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
                <span className="w-8 h-[1px] bg-luxury-gold" />
                <span className="text-luxury-gold font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase font-medium">
                  The Philosophy
                </span>
              </motion.div>

              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-light leading-tight mb-6">
                Bespoke <span className="text-luxury-gold italic">Aesthetic</span> Mastery
              </motion.h2>

              <motion.p variants={fadeUp} className="text-gray-400 text-lg leading-relaxed mb-6">
                At Calixta, we don't simply follow trends—we define them. Our approach melds global luxury standards with profound aesthetic intuition to craft styles that are flawlessly executed and deeply personal.
              </motion.p>

              <motion.p variants={fadeUp} className="text-gray-400 text-lg leading-relaxed mb-10">
                Every client is a canvas. Every service is a performance. We believe that true luxury lies not in opulence, but in the meticulous attention to every detail—from the precision of a cut to the alchemy of color.
              </motion.p>

              <motion.div variants={fadeUp} className="space-y-4">
                <div className="flex gap-4 items-start">
                  <span className="w-6 h-6 rounded-full border border-luxury-gold flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 rounded-full bg-luxury-gold" />
                  </span>
                  <div>
                    <p className="text-white font-medium">Founded on Precision</p>
                    <p className="text-gray-400 text-sm">Architectural styling meets artistic vision</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="w-6 h-6 rounded-full border border-luxury-gold flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 rounded-full bg-luxury-gold" />
                  </span>
                  <div>
                    <p className="text-white font-medium">Global Excellence</p>
                    <p className="text-gray-400 text-sm">Techniques from London, Milan, and Paris</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="w-6 h-6 rounded-full border border-luxury-gold flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 rounded-full bg-luxury-gold" />
                  </span>
                  <div>
                    <p className="text-white font-medium">Transformative Experience</p>
                    <p className="text-gray-400 text-sm">Beyond grooming, we build confidence</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-96 md:h-full min-h-[500px] rounded-lg overflow-hidden group border border-white/10"
            >
              <Image
                src="/image/home/calixta-luxury-saloon-prayagraj-banner-1.jpeg"
                alt="Calixta Salon Interior"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Core Values Grid ─── */}
      <section className="relative py-24 md:py-40 px-6 border-t border-white/5 overflow-hidden">
        
        {/* Ambient Lighting */}
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-luxury-gold rounded-full mix-blend-screen filter blur-[150px] opacity-[0.02] pointer-events-none -translate-x-1/3 translate-y-1/3" />

        <div className="max-w-[1440px] mx-auto relative z-10 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-luxury-gold" />
              <span className="text-luxury-gold font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase font-medium">
                Core Values
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-white font-light">
              What Defines Us
            </h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="group p-8 md:p-10 border border-white/5 bg-luxury-charcoal/20 hover:bg-luxury-charcoal/40 hover:border-luxury-gold/30 transition-all duration-700 rounded-lg"
              >
                <div className="w-10 h-10 rounded-full border border-luxury-gold flex items-center justify-center mb-6 text-luxury-gold group-hover:bg-luxury-gold group-hover:text-black transition-all duration-500">
                  <span className="text-sm font-bold">{idx + 1}</span>
                </div>
                <h3 className="font-heading text-2xl text-white font-light mb-4 group-hover:text-luxury-gold transition-colors duration-500">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Team Section ─── */}
      <section className="relative py-24 md:py-40 px-6 border-t border-white/5 overflow-hidden">
        
        <div className="max-w-[1440px] mx-auto relative z-10 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-luxury-gold" />
              <span className="text-luxury-gold font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase font-medium">
                Master Artisans
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-white font-light">
              Meet Our Specialists
            </h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {team.map((member, idx) => (
              <motion.div key={idx} variants={fadeUp} className="group">
                <div className="relative h-96 overflow-hidden rounded-lg mb-6 border border-white/5 group-hover:border-luxury-gold/30 transition-all duration-500">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    >
                      <p className="text-gray-300 text-sm font-light">{member.expertise}</p>
                    </motion.div>
                  </div>
                </div>
                <h3 className="font-heading text-2xl text-white font-light mb-2 group-hover:text-luxury-gold transition-colors duration-500">
                  {member.name}
                </h3>
                <p className="text-luxury-gold text-sm tracking-widest uppercase font-medium">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="relative py-20 md:py-24 px-6 border-t border-white/5">
        <div className="max-w-[1440px] mx-auto relative z-10 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl text-white font-light mb-6">
              Experience Calixta
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Discover the artistry of luxury grooming. Book your appointment and join our community of discerning clients.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-luxury-gold text-black hover:bg-white text-sm tracking-widest uppercase font-medium transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
