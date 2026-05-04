"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';

export default function SplashScreen({ finishLoading }) {
  useEffect(() => {
    // Timed for a cinematic reveal and pause
    const timer = setTimeout(() => {
      finishLoading();
    }, 2800);

    return () => clearTimeout(timer);
  }, [finishLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        clipPath: "inset(0 0 100% 0)",
        transition: { duration: 1.4, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-luxury-black"
    >
      <div className="relative flex flex-col items-center">
        
        {/* Maximum Impact Logo Reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, filter: "blur(30px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ 
            duration: 2.2, 
            ease: [0.22, 1, 0.36, 1] 
          }}
          // Size increased significantly for dominant brand presence
          className="relative w-80 h-80 md:w-[30rem] md:h-[30rem] lg:w-[35rem] lg:h-[35rem]"
        >
          <Image 
            src="/image/logo.png" 
            alt="Calixta Logo"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Minimalist Location Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.3, y: 0 }}
          transition={{ delay: 1.4, duration: 1.2 }}
          className="mt-4"
        >
          <span className="font-sans text-[11px] tracking-[0.8em] text-white uppercase font-light">
            Prayagraj
          </span>
        </motion.div>
      </div>

      {/* Atmospheric Background Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            opacity: [0.03, 0.07, 0.03],
            scale: [1, 1.1, 1] 
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-luxury-gold/10 rounded-full blur-[150px]" 
        />
      </div>
    </motion.div>
  );
}