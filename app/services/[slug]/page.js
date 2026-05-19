"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getServiceBySlug, getEnabledServices } from "@/lib/services";
import { useState, use } from "react";

export default function ServiceDetailPage({ params }) {
  const { slug } = use(params);
  const service = getServiceBySlug(slug);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!service || !service.enabled) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl text-white mb-4">Service Not Found</h1>
          <Link href="/services" className="text-luxury-gold hover:text-white transition-colors">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const relatedServices = getEnabledServices()
    .filter(s => s.slug !== slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-luxury-black">
      {/* ─── Breadcrumb ─── */}
      <div className="relative pt-24 px-6 pb-12 border-b border-white/5">
        <div className="max-w-[1440px] mx-auto lg:px-12">
          <Link 
            href="/services"
            className="text-gray-400 hover:text-luxury-gold transition-colors text-sm tracking-widest uppercase"
          >
            ← Back to Services
          </Link>
        </div>
      </div>

      {/* ─── Hero Section with Image Gallery ─── */}
      <section className="relative py-12 px-6 md:py-24">
        
        {/* Ambient Lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-luxury-gold rounded-full mix-blend-screen filter blur-[250px] opacity-[0.02] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto relative z-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            
            {/* ─── Image Gallery ─── */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }}
              variants={fadeIn}
              className="order-2 lg:order-1"
            >
              {/* Main Image */}
              <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-lg bg-luxury-charcoal">
                <Image
                  src={service.images[selectedImageIndex]}
                  alt={`${service.title} - Image ${selectedImageIndex + 1}`}
                  fill
                  className="object-cover transition-all duration-700"
                  priority
                />
              </div>

              {/* Thumbnail Gallery */}
              {service.images.length > 1 && (
                <div className="flex gap-4">
                  {service.images.map((image, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative w-24 h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        idx === selectedImageIndex
                          ? "border-luxury-gold"
                          : "border-white/10 hover:border-luxury-gold/50"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* ─── Content ─── */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }}
              variants={{hidden: {}, visible: {transition: {staggerChildren: 0.1}}}}
              className="order-1 lg:order-2"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
                <span className="w-8 h-[1px] bg-luxury-gold" />
                <span className="text-luxury-gold font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase font-medium">
                  Premium Service
                </span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-6">
                {service.title}
              </motion.h1>

              <motion.p variants={fadeUp} className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
                {service.description}
              </motion.p>

              {/* ─── Features (Optional) ─── */}
              <motion.div variants={fadeUp} className="mb-10 space-y-4">
                <div className="flex gap-4 items-start">
                  <span className="w-6 h-6 rounded-full border border-luxury-gold flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 rounded-full bg-luxury-gold" />
                  </span>
                  <div>
                    <p className="text-white font-medium">Expert Artistry</p>
                    <p className="text-gray-400 text-sm">Crafted by our master stylists with years of experience</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="w-6 h-6 rounded-full border border-luxury-gold flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 rounded-full bg-luxury-gold" />
                  </span>
                  <div>
                    <p className="text-white font-medium">Premium Products</p>
                    <p className="text-gray-400 text-sm">Only the finest luxury brands and treatments</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="w-6 h-6 rounded-full border border-luxury-gold flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 rounded-full bg-luxury-gold" />
                  </span>
                  <div>
                    <p className="text-white font-medium">Personalized Approach</p>
                    <p className="text-gray-400 text-sm">Tailored to your unique needs and preferences</p>
                  </div>
                </div>
              </motion.div>

              {/* ─── CTA Buttons ─── */}
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-luxury-gold text-black hover:bg-white text-sm tracking-widest uppercase font-medium transition-all duration-500 rounded-none hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                >
                  Book Now
                </Link>
                <Link 
                  href="/services"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black text-sm tracking-widest uppercase font-medium transition-all duration-500"
                >
                  View Other Services
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Related Services ─── */}
      {relatedServices.length > 0 && (
        <section className="relative py-20 md:py-32 px-6 border-t border-white/5">
          
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
                  Explore More
                </span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl text-white font-light">
                Other Services You Might Love
              </h2>
            </motion.div>

            <motion.div 
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              viewport={{once: true}}
              transition={{staggerChildren: 0.1, delayChildren: 0.2}}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {relatedServices.map((relatedService, idx) => (
                <motion.div
                  key={relatedService.slug}
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{duration: 0.6}}
                >
                  <Link href={`/services/${relatedService.slug}`}>
                    <div className="group cursor-pointer h-full">
                      <div className="relative overflow-hidden bg-luxury-charcoal rounded-lg h-64 md:h-72">
                        <Image
                          src={relatedService.images[0]}
                          alt={relatedService.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <p className="text-gray-300 text-sm mb-3">{relatedService.description}</p>
                        </div>
                        <div className="absolute top-0 left-0 right-0 p-6">
                          <h3 className="font-heading text-lg text-white font-light group-hover:opacity-0 transition-opacity duration-500">
                            {relatedService.title}
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
      )}

      {/* ─── Final CTA ─── */}
      <section className="relative py-20 md:py-24 px-6 border-t border-white/5">
        <div className="max-w-[1440px] mx-auto relative z-10 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl text-white font-light mb-6">
              Experience the Difference
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Join our community of satisfied clients who have discovered the art of luxury grooming.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-luxury-gold text-black hover:bg-white text-sm tracking-widest uppercase font-medium transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
            >
              Schedule Your Appointment
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
