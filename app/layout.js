"use client";

import { useState } from "react";
import { Playfair_Display, Poppins } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SplashScreen from "../components/ui/SplashScreen";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-luxury-black text-white">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <SplashScreen key="loader" finishLoading={() => setIsLoading(false)} />
          ) : (
            <div key="content" className="flex flex-col min-h-screen">
              <Navbar />
              {/* pt-24 offsets the content for the sticky navbar */}
              <main className="flex-grow pt-24">
                {children}
              </main>
              <Footer />
            </div>
          )}
        </AnimatePresence>
      </body>
    </html>
  );
}