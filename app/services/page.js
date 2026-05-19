"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getEnabledServices } from "@/lib/services";

export default function ServicesPage() {
  const services = getEnabledServices();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

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
                Our Collections
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight font-light mb-6">
              Complete Service <span className="text-luxury-gold italic">Menu.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              Discover our comprehensive range of luxury salon services, crafted with precision and delivered with elegance. From cutting-edge color techniques to bespoke bridal artistry.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── Services Grid ─── */}
      <section className="relative py-24 md:py-40 px-6 overflow-hidden">
        
        {/* Ambient Lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[80vw] bg-luxury-gold rounded-full mix-blend-screen filter blur-[250px] opacity-[0.02] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto relative z-10 lg:px-12">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                variants={cardVariants}
              >
                <Link href={`/services/${service.slug}`}>
                  <div className="group cursor-pointer h-full">
                    {/* ─── Card Container ─── */}
                    <div className="relative overflow-hidden bg-luxury-charcoal rounded-lg h-96 md:h-80 lg:h-96">
                      {/* ─── Image Gallery ─── */}
                      <div className="relative w-full h-full">
                        <Image
                          src={service.images[0]}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          priority={index < 3}
                        />
                      </div>

                      {/* ─── Overlay Gradient ─── */}
                      <div className="absolute inset-0 bg-gradient-to-t from-luxury-black from-0% via-luxury-black/40 via-40% to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* ─── Content Overlay ─── */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <h3 className="font-heading text-2xl md:text-3xl text-white font-light tracking-tight mb-3">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 text-sm line-clamp-3">
                          {service.description}
                        </p>
                        <div className="mt-4 flex items-center gap-3 text-luxury-gold text-xs uppercase tracking-widest font-medium">
                          View Details
                          <span className="w-4 h-[1px] bg-luxury-gold" />
                        </div>
                      </div>

                      {/* ─── Title Badge (Always Visible) ─── */}
                      <div className="absolute top-0 left-0 right-0 p-6 md:p-8 flex justify-between items-start">
                        <h3 className="font-heading text-xl md:text-2xl text-white font-light tracking-tight group-hover:opacity-0 transition-opacity duration-500">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="relative py-20 px-6 border-t border-white/5">
        
        <div className="max-w-[1440px] mx-auto relative z-10 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="font-heading text-4xl md:text-5xl text-white font-light mb-6">
              Ready to Transform?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Book your appointment today and experience luxury salon services at their finest.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-luxury-gold text-black hover:bg-white text-sm tracking-widest uppercase font-medium transition-all duration-500 rounded-none hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
            >
              Book an Appointment
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
