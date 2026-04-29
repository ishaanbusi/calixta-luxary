// app/page.js

import Hero from '@/components/sections/Hero';
import Ethos from '@/components/sections/Ethos';
import FeaturedServices from '@/components/sections/FeaturedServices';
import Artists from '@/components/sections/Artists';
import Testimonials from '@/components/sections/Testimonials';
import FAQAccordion from '@/components/sections/FAQAccordion';

// GEO/SEO Metadata stays perfectly intact on the server
export const metadata = {
  title: 'Calixta | Premium Luxury Salon in Prayagraj',
  description: 'Experience unparalleled luxury grooming, advanced color alchemy, and bespoke bridal styling at Prayagraj’s premier salon destination.',
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. The Visual Hook (Client-side animated) */}
      <Hero />

      {/* 2. The Philosophy & Authority (Why we are different) */}
      <Ethos />

      {/* 3. The Offerings (What we do) */}
      <FeaturedServices />

      {/* 4. The Experts (Who does it) */}
      <Artists />

      {/* 5. The Social Proof (Trust generation) */}
      <Testimonials />

      {/* 6. The Answer Engine Optimization (Clearing doubts) */}
      <FAQAccordion />
    </div>
  );
}

