"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", inquiry: "" });
  const [status, setStatus] = useState("idle");

  // Parallax interaction for the background
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-24 overflow-hidden relative">
      
      {/* ─── Grand Background Watermark (Brutalist Luxury) ─── */}
      <motion.div 
        style={{ y }}
        className="absolute top-10 right-0 text-[25vw] leading-none font-heading text-white/[0.03] pointer-events-none select-none z-0"
      >
        CONTACT
      </motion.div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">
          
          {/* ─── Left Side: Editorial Manifesto ─── */}
          <div className="flex flex-col justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-luxury-gold font-sans text-[10px] tracking-[0.4em] uppercase font-medium mb-8 block">The Concierge</span>
              <h1 className="font-heading text-6xl md:text-8xl font-light mb-12 tracking-tight">
                Let’s begin the <br/><span className="text-luxury-gold italic">artistry.</span>
              </h1>
              <p className="font-sans text-xl text-gray-400 font-light max-w-md leading-relaxed">
                Whether you seek a transformation or a private consultation for your defining moments, our concierge is prepared to curate your experience.
              </p>
            </motion.div>

            {/* GEO Location Anchor - Anchored to the bottom left */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}
              className="mt-24 border-t border-white/10 pt-12"
            >
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-6">Flagship Sanctuary</h4>
              <p className="text-lg font-light text-white">Clive Rd, Near Axis Bank, Civil Lines, Prayagraj, Uttar Pradesh, Pincode: 211001</p>
              <Link href="tel:+919876543210" className="text-luxury-gold hover:text-white transition-colors duration-300">
                +91 7355465724
              </Link>
            </motion.div>
          </div>

          {/* ─── Right Side: The "RSVP" Form ─── */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <form onSubmit={(e) => { e.preventDefault(); setStatus("submitting"); }} className="space-y-12">
              
              {/* Name Field */}
              <div className="relative group border-b border-white/20 pb-4">
                <input 
                  required type="text" placeholder="Your Name" 
                  className="w-full bg-transparent border-none text-2xl font-light focus:outline-none placeholder:text-gray-700 transition-colors"
                />
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-700 group-focus-within:w-full" />
              </div>

              {/* Email Field */}
              <div className="relative group border-b border-white/20 pb-4">
                <input 
                  required type="email" placeholder="Email Address" 
                  className="w-full bg-transparent border-none text-2xl font-light focus:outline-none placeholder:text-gray-700 transition-colors"
                />
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-700 group-focus-within:w-full" />
              </div>

              {/* Service Selection (Selects) */}
              <div className="relative group border-b border-white/20 pb-4">
                <select className="w-full bg-transparent border-none text-2xl font-light focus:outline-none text-gray-400 appearance-none cursor-pointer">
                  <option>Select a service</option>
                  <option>Bridal Couture</option>
                  <option>Color Alchemy</option>
                  <option>Signature Styling</option>
                </select>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-700 group-focus-within:w-full" />
              </div>

              {/* Message */}
              <div className="relative group border-b border-white/20 pb-4">
                <textarea 
                  rows={2} placeholder="Share your vision" 
                  className="w-full bg-transparent border-none text-2xl font-light focus:outline-none placeholder:text-gray-700 transition-colors resize-none"
                />
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-700 group-focus-within:w-full" />
              </div>

              <button 
                type="submit"
                className="group relative overflow-hidden bg-white text-black px-12 py-6 text-[10px] uppercase tracking-[0.3em] font-medium"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                  {status === "submitting" ? "Requesting..." : "Send Request"}
                </span>
                <div className="absolute inset-0 bg-luxury-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out z-0" />
              </button>

            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}