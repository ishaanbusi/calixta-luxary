"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      label: "Location",
      icon: "📍",
      content: "Premium District, Civil Lines\nPrayagraj, Uttar Pradesh 211001",
      action: { text: "Get Directions", href: "https://maps.google.com" }
    },
    {
      label: "Concierge",
      icon: "☎️",
      content: "+91 98765 43210",
      action: { text: "Call Us", href: "tel:+919876543210" }
    },
    {
      label: "Inquiries",
      icon: "✉️",
      content: "concierge@calixta.com",
      action: { text: "Email Us", href: "mailto:concierge@calixta.com" }
    },
    {
      label: "Hours",
      icon: "🕐",
      content: "Tue - Sun: 10 AM - 8 PM\nMonday: Closed",
      action: { text: "", href: "#" }
    }
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
                Get in Touch
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight font-light mb-6">
              Connect with <span className="text-luxury-gold italic">Calixta.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              Have questions or ready to book your appointment? Our concierge team is here to assist you with personalized care.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── Contact Info Cards ─── */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden border-b border-white/5">
        
        <div className="max-w-[1440px] mx-auto relative z-10 lg:px-12">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="group p-8 md:p-10 border border-white/5 bg-luxury-charcoal/20 hover:bg-luxury-charcoal/40 hover:border-luxury-gold/30 transition-all duration-700 rounded-lg"
              >
                <div className="text-3xl mb-4">{info.icon}</div>
                <h3 className="font-sans text-[9px] uppercase tracking-[0.3em] text-gray-500 mb-4 font-medium group-hover:text-luxury-gold/70 transition-colors">
                  {info.label}
                </h3>
                <p className="text-white font-light text-sm md:text-base leading-relaxed mb-6 whitespace-pre-line">
                  {info.content}
                </p>
                {info.action.text && (
                  <a 
                    href={info.action.href}
                    target={info.action.href.startsWith('http') && !info.action.href.startsWith('tel:') ? "_blank" : "_self"}
                    rel={info.action.href.startsWith('http') ? "noreferrer" : ""}
                    className="inline-flex items-center gap-2 text-luxury-gold hover:text-white text-xs uppercase tracking-widest font-medium transition-colors"
                  >
                    {info.action.text}
                    <span className="w-4 h-[1px] bg-luxury-gold inline-block" />
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Contact Form & Location ─── */}
      <section className="relative py-24 md:py-40 px-6 overflow-hidden">
        
        {/* Ambient Lighting */}
        <div className="absolute top-0 right-0 w-[70vw] h-[70vw] bg-luxury-blush rounded-full mix-blend-screen filter blur-[180px] opacity-[0.02] pointer-events-none translate-x-1/3 -translate-y-1/3" />

        <div className="max-w-[1440px] mx-auto relative z-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-stretch">
            
            {/* ─── Contact Column (form removed) ─── */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="w-8 h-[1px] bg-luxury-gold" />
                <span className="text-luxury-gold font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase font-medium">
                  Concierge
                </span>
              </div>

              <h2 className="font-heading text-4xl md:text-5xl text-white font-light mb-6">
                Speak with our <span className="text-luxury-gold italic">Concierge.</span>
              </h2>

              <p className="text-gray-400 mb-8 max-w-xl leading-relaxed">
                For bookings and enquiries, please call or email our concierge team. We respond to all requests promptly and will assist with personalized scheduling.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+919876543210" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-luxury-gold text-black hover:bg-white text-sm tracking-widest uppercase font-medium transition-all duration-500">
                  Call Concierge
                </a>
                <a href="mailto:concierge@calixta.com" className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black text-sm tracking-widest uppercase font-medium transition-all duration-500">
                  Email Us
                </a>
              </div>
            </motion.div>

            {/* ─── Location Image & Info ─── */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-8 h-[1px] bg-luxury-gold" />
                  <span className="text-luxury-gold font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase font-medium">
                    Visit Us
                  </span>
                </div>

                <h2 className="font-heading text-4xl md:text-5xl text-white font-light mb-8">
                  The Flagship <span className="text-luxury-gold italic">Location.</span>
                </h2>

                <div className="space-y-8 mb-12">
                  <div>
                    <h3 className="font-sans text-[9px] uppercase tracking-[0.3em] text-gray-500 mb-3 font-medium">
                      Address
                    </h3>
                    <p className="text-white text-lg font-light leading-relaxed">
                      Premium District, Civil Lines<br />
                      Prayagraj, Uttar Pradesh 211001<br />
                      India
                    </p>
                  </div>

                  <div>
                    <h3 className="font-sans text-[9px] uppercase tracking-[0.3em] text-gray-500 mb-3 font-medium">
                      Opening Hours
                    </h3>
                    <p className="text-white text-lg font-light leading-relaxed">
                      Tuesday - Sunday: 10:00 AM - 8:00 PM<br />
                      Monday: Closed<br />
                      <span className="text-gray-400 text-sm">By appointment only</span>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-sans text-[9px] uppercase tracking-[0.3em] text-gray-500 mb-3 font-medium">
                      Contact
                    </h3>
                    <p className="text-white text-lg font-light leading-relaxed">
                      <a href="tel:+919876543210" className="hover:text-luxury-gold transition-colors">
                        +91 98765 43210
                      </a><br />
                      <a href="mailto:concierge@calixta.com" className="hover:text-luxury-gold transition-colors">
                        concierge@calixta.com
                      </a>
                    </p>
                  </div>
                </div>

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-luxury-gold hover:text-white transition-colors group font-medium"
                >
                  View on Maps
                  <span className="relative w-8 h-[1px] bg-luxury-gold group-hover:bg-white transition-colors duration-500">
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-inherit rotate-45 origin-right transform transition-transform group-hover:translate-x-1" />
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-inherit -rotate-45 origin-right transform transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </div>

              {/* Location Image */}
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mt-12 lg:mt-0 border border-white/10 group">
                <Image
                  src="/image/home/calixta-luxury-saloon-prayagraj.jpeg"
                  alt="Calixta Location"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Why Calixta Section ─── */}
      <section className="relative py-24 md:py-40 px-6 border-t border-white/5 overflow-hidden">
        
        {/* Ambient Lighting */}
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-luxury-gold rounded-full mix-blend-screen filter blur-[150px] opacity-[0.02] pointer-events-none -translate-x-1/3 translate-y-1/3" />

        <div className="max-w-[1440px] mx-auto relative z-10 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-luxury-gold" />
              <span className="text-luxury-gold font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase font-medium">
                Why Choose Us
              </span>
              <span className="w-8 h-[1px] bg-luxury-gold" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-white font-light">
              Your Questions Answered
            </h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto"
          >
            {[
              {
                q: "How do I book an appointment?",
                a: "Fill out our contact form above or call our concierge team. We'll confirm your appointment within 24 hours."
              },
              {
                q: "What services do you offer?",
                a: "We offer a comprehensive range from haircuts and color to bridal makeup and luxury spa treatments."
              },
              {
                q: "Are walkins accepted?",
                a: "By appointment only to ensure personalized attention and minimal wait times for all clients."
              },
              {
                q: "What are your payment options?",
                a: "We accept all major credit cards, digital wallets, and bank transfers for your convenience."
              }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} className="p-6 md:p-8 border border-white/5 rounded-lg hover:border-luxury-gold/30 transition-colors duration-500">
                <h3 className="font-heading text-xl text-luxury-gold font-light mb-4">
                  {item.q}
                </h3>
                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
                  {item.a}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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
              Ready to Begin?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Experience the pinnacle of luxury grooming. Your first appointment awaits.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
              <Link 
                href="/services"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black text-sm tracking-widest uppercase font-medium transition-all duration-500"
              >
                Explore Services
              </Link>
              <a 
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-luxury-gold text-black hover:bg-white text-sm tracking-widest uppercase font-medium transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
