"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const faqs = [
  {
    question: "What premium services does Calixta offer?",
    answer: "Calixta specializes in bespoke styling, advanced color alchemy (balayage, foilage), and luxury restorative treatments. We curate each session using elite global formulations from London and Milan."
  },
  {
    question: "Do I need to book an appointment in advance?",
    answer: "Yes. To ensure absolute privacy and an uninterrupted luxury experience for our elite clientele, we operate strictly by appointment. Reservations can be made via our digital concierge."
  },
  {
    question: "Where is the sanctuary located in Prayagraj?",
    answer: "We are situated within the premium district of Civil Lines. Private parking and precise entrance details are shared exclusively upon booking confirmation to maintain client discretion."
  },
  {
    question: "What is your bespoke cancellation policy?",
    answer: "We value the time of our master artists and our clients. We require a 24-hour notice for standard styling and a 48-hour notice for bridal or extensive color alchemy sessions."
  },
  {
    question: "Do you offer private bridal consultations?",
    answer: "Yes. Our bridal couture experiences begin with an exclusive, private consultation in our bridal suite, allowing our artists to design a flawless aesthetic for your defining moments."
  }
];

export default function FAQAccordion() {
  const [activeItem, setActiveItem] = useState(null);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="faq" className="relative py-24 md:py-40 px-6 bg-[#050505] overflow-hidden border-t border-white/5">
      
      {/* ─── Ambient Lighting ─── */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-luxury-gold rounded-full mix-blend-screen filter blur-[200px] opacity-[0.02] pointer-events-none translate-x-1/3 -translate-y-1/3" />

      <div className="max-w-[1440px] mx-auto relative z-10 lg:px-12">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24"
        >
          
          {/* ─── Left Column: Sticky Editorial Header (5 Columns) ─── */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-40">
              <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
                <span className="w-8 h-[1px] bg-luxury-gold" />
                <span className="text-luxury-gold font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase font-medium">
                  Assistance
                </span>
              </motion.div>
              
              <motion.h2 variants={fadeUp} className="font-heading text-5xl md:text-6xl lg:text-7xl text-white leading-[0.95] tracking-tight font-light mb-8 drop-shadow-lg">
                Client <br />
                <span className="text-luxury-gold italic">Inquiries.</span>
              </motion.h2>

              <motion.p variants={fadeUp} className="font-sans text-base md:text-lg text-gray-400 font-light leading-relaxed mb-10 max-w-sm">
                Clarity on our bespoke services, sanctuary etiquette, and the premium experiences curated for our clientele.
              </motion.p>

              <motion.div variants={fadeUp}>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-600 mb-4 font-medium">
                  Require further discretion?
                </p>
                <Link 
                  href="/contact" 
                  className="group inline-flex items-center gap-4 text-[11px] md:text-xs tracking-[0.3em] uppercase text-white font-medium hover:text-luxury-gold transition-colors"
                >
                  Contact Concierge
                  <span className="relative w-8 h-[1px] bg-white group-hover:bg-luxury-gold transition-colors duration-500">
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-inherit rotate-45 origin-right transform transition-transform group-hover:translate-x-1" />
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-inherit -rotate-45 origin-right transform transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* ─── Right Column: The Accordion List (7 Columns) ─── */}
          <div className="lg:col-span-7">
            <div className="border-t border-white/5">
              {faqs.map((faq, index) => {
                const isOpen = activeItem === index;
                
                return (
                  <motion.div 
                    key={index}
                    variants={fadeUp}
                    className={`border-b transition-colors duration-700 ease-in-out ${isOpen ? 'border-luxury-gold/30 bg-white/[0.01]' : 'border-white/5 hover:bg-white/[0.015]'}`}
                  >
                    <button
                      onClick={() => setActiveItem(isOpen ? null : index)}
                      className="w-full flex items-start md:items-center justify-between py-8 md:py-10 px-4 md:px-6 text-left group gap-6"
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 lg:gap-12 w-full">
                        {/* Luxury Numbering */}
                        <span className={`font-sans text-[10px] tracking-[0.3em] font-medium transition-colors duration-500 shrink-0 ${isOpen ? 'text-luxury-gold' : 'text-gray-600 group-hover:text-luxury-gold/70'}`}>
                          0{index + 1}
                        </span>
                        
                        {/* Question */}
                        <span className={`font-heading text-xl md:text-2xl lg:text-3xl leading-snug font-light transition-all duration-500 ${isOpen ? 'text-white translate-x-2' : 'text-gray-300 group-hover:text-white group-hover:translate-x-2'}`}>
                          {faq.question}
                        </span>
                      </div>
                      
                      {/* Bespoke Cross Icon */}
                      <div className="relative w-4 h-4 md:w-5 md:h-5 flex items-center justify-center shrink-0 mt-2 md:mt-0">
                        <div className={`absolute w-full h-[1px] bg-luxury-gold transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'rotate-180' : ''}`} />
                        <div className={`absolute w-full h-[1px] bg-luxury-gold transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'rotate-180 opacity-0' : 'rotate-90 opacity-100'}`} />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="pb-10 px-4 md:px-6 md:pl-[5.5rem] lg:pl-[6.5rem] text-gray-400 font-sans font-light leading-relaxed text-sm md:text-base max-w-2xl">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}