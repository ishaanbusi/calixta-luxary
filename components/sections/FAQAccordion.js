"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    answer: "We are situated within the premium district of Civil Lines, Prayagraj. Private parking and precise entrance details are shared exclusively upon booking confirmation."
  },
  {
    question: "What is your bespoke cancellation policy?",
    answer: "We value the time of our master artists. We require a 24-hour notice for standard styling and 48-hour notice for bridal or extensive color alchemy sessions."
  }
];

export default function FAQAccordion() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <section id="faq" className="py-24 md:py-40 px-6 bg-luxury-black border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-luxury-gold font-sans text-[10px] tracking-[0.4em] uppercase mb-6 block"
          >
            Assistance
          </motion.span>
          <h2 className="font-heading text-4xl md:text-6xl text-white font-light tracking-tight">
            Client <span className="text-luxury-gold italic">Inquiries</span>
          </h2>
        </div>

        {/* Minimalist Accordion List */}
        <div className="space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = activeItem === index;
            
            return (
              <motion.div 
                key={index}
                initial={false}
                className={`border-b border-white/5 transition-colors duration-500 ${isOpen ? 'border-luxury-gold/30' : ''}`}
              >
                <button
                  onClick={() => setActiveItem(isOpen ? null : index)}
                  className="w-full flex items-center justify-between py-8 text-left group"
                >
                  <span className={`font-heading text-xl md:text-2xl transition-colors duration-500 ${isOpen ? 'text-luxury-gold' : 'text-gray-200 group-hover:text-white'}`}>
                    {faq.question}
                  </span>
                  
                  {/* Custom Minimalist Icon */}
                  <div className="relative w-6 h-6 flex items-center justify-center">
                    <div className={`absolute w-full h-[1px] bg-luxury-gold transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
                    <div className={`absolute w-full h-[1px] bg-luxury-gold transition-transform duration-500 ${isOpen ? 'rotate-180' : 'rotate-90'}`} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <div className="pb-8 pr-12 text-gray-400 font-sans font-light leading-relaxed md:text-lg">
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
    </section>
  );
}