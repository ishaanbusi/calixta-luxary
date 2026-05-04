"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// ─── Brand Tokens ──────────────────────────────────────────────────────────
const GOLD = "#D4AF37";
const GOLD_10 = "rgba(212, 175, 55, 0.08)";
const DARK_BG = "rgba(8, 8, 9, 0.95)"; // Deep luxury black with slight transparency

// ─── Luxury Nav Data ───────────────────────────────────────────────────────
const navItems = [
  {
    name: "Services",
    path: "/services",
    type: "mega",
    featured: {
      title: "Bespoke Artistry",
      description: "Discover our curated spectrum of high-end grooming and structural styling services.",
      // Cinematic image for the mega-menu
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop"
    },
    submenu: [
      {
        name: "Signature Styling",
        path: "/services#styling",
        description: "Architectural cutting tailored to your facial geometry.",
        tag: "Core"
      },
      {
        name: "Color Alchemy",
        path: "/services#color",
        description: "Balayage, foilage, and elite European formulations.",
        tag: "Technical"
      },
      {
        name: "Restorative Keratin",
        path: "/services#keratin",
        description: "Deep reconstructive therapies for mirror-like shine.",
        tag: "Therapy"
      },
      {
        name: "Aesthetic Spa",
        path: "/services#spa",
        description: "Sensory treatments for complete rejuvenation.",
        tag: "Sensory"
      },
    ],
  },
  {
    name: "Bridal",
    path: "/bridal",
    type: "simple",
    submenu: [
      { name: "Bridal Couture Makeup", path: "/bridal/makeup" },
      { name: "Pre-Bridal Packages", path: "/bridal/packages" },
      { name: "On-Location Concierge", path: "/bridal/concierge" },
    ],
  },
  {
    name: "The House",
    path: "/house",
    type: "simple",
    submenu: [
      { name: "Master Artists", path: "/house/artists" },
      { name: "Our Manifesto", path: "/about" },
      { name: "The Journal", path: "/journal" },
    ],
  },
  { name: "Concierge", path: "/contact", type: "link" },
];

// ─── Desktop Mega-Menu (Cinematic Layout) ──────────────────────────────────
function MegaMenu({ item, closeMenu }) {
  return (
    <div className="dropdown-bridge">
      <div className="dropdown-panel" style={{ width: "min(800px, 90vw)" }}>
        <div style={{ display: "flex", height: "100%" }}>
          
          {/* Featured Image Panel */}
          <div className="featured-panel relative overflow-hidden group">
            <Image 
              src={item.featured.image} 
              alt={item.featured.title} 
              fill 
              className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
            <div className="relative z-20 flex flex-col h-full justify-end p-8">
              <div className="w-4 h-[1px] bg-luxury-gold mb-4" />
              <h3 className="font-heading text-2xl text-white mb-2 font-light">
                {item.featured.title}
              </h3>
              <p className="font-sans text-xs text-gray-300 leading-relaxed mb-6 font-light">
                {item.featured.description}
              </p>
              <Link href={item.path} onClick={closeMenu} className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold hover:text-white transition-colors flex items-center gap-2 w-fit">
                Explore <span className="text-lg leading-none transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* Service Links Grid */}
          <div className="submenu-grid grid grid-cols-2 gap-4 p-8 bg-[#0a0a0c]">
            {item.submenu.map((sub) => (
              <Link key={sub.name} href={sub.path} onClick={closeMenu} className="sub-card group">
                <div className="flex justify-between items-start mb-2">
                  <div className="font-heading text-lg text-white group-hover:text-luxury-gold transition-colors duration-300">
                    {sub.name}
                  </div>
                  <span className="text-[8px] uppercase tracking-widest text-gray-500 border border-white/10 px-2 py-1 rounded-sm group-hover:border-luxury-gold/30 group-hover:text-luxury-gold transition-colors">
                    {sub.tag}
                  </span>
                </div>
                <p className="text-xs text-gray-500 font-sans font-light leading-relaxed group-hover:text-gray-300 transition-colors">
                  {sub.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Desktop Simple Dropdown ───────────────────────────────────────────────
function SimpleDropdown({ item, closeMenu }) {
  return (
    <div className="dropdown-bridge simple-bridge">
      <div className="dropdown-panel simple-panel bg-[#0a0a0c]">
        {item.submenu.map((sub) => (
          <Link key={sub.name} href={sub.path} onClick={closeMenu} className="simple-item group flex items-center gap-3">
            <span className="w-0 h-[1px] bg-luxury-gold group-hover:w-3 transition-all duration-300"></span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">{sub.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ─── Mobile Accordion Item ─────────────────────────────────────────────────
function MobileNavItem({ item, onClose }) {
  const [open, setOpen] = useState(false);
  const hasSub = !!item.submenu;

  return (
    <div className="border-b border-white/5">
      <div className="flex items-center justify-between">
        <Link 
          href={item.path} 
          onClick={hasSub ? (e) => { e.preventDefault(); setOpen(!open); } : onClose} 
          className="flex-1 py-5 text-sm uppercase tracking-[0.2em] text-white font-light"
        >
          {item.name}
        </Link>
        {hasSub && (
          <button onClick={() => setOpen(!open)} className="p-4 text-gray-500 hover:text-luxury-gold transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.4s ease" }}>
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        )}
      </div>

      {hasSub && (
        <div className={`mobile-sub-wrapper ${open ? "open" : ""}`}>
          <div className="mobile-sub-inner pl-4 border-l border-luxury-gold/20 mb-4 flex flex-col gap-1">
            {item.submenu.map((sub) => (
              <Link key={sub.name} href={sub.path} onClick={onClose} className="py-3 text-xs tracking-widest text-gray-400 hover:text-white transition-colors uppercase">
                {sub.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main Navbar ───────────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const leaveTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [mobileOpen]);

  const openMenu = (i) => { clearTimeout(leaveTimer.current); setActiveMenu(i); };
  const closeMenu = () => { leaveTimer.current = setTimeout(() => setActiveMenu(null), 150); };

  return (
    <>
      {/* Dynamic CSS injected for complex hover/dropdown logic */}
      <style>{`
        /* Desktop Bridge/Panel Mechanics */
        .dropdown-bridge {
          position: absolute; top: 100%; left: 50%; transform: translateX(-50%);
          padding-top: 24px; opacity: 0; visibility: hidden; pointer-events: none;
          transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;
        }
        .nav-item-wrap.active .dropdown-bridge {
          opacity: 1; visibility: visible; pointer-events: auto;
        }
        
        .dropdown-panel {
          background: ${DARK_BG}; backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.05);
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
          overflow: hidden; transform: translateY(10px);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-item-wrap.active .dropdown-panel { transform: translateY(0); }

        .featured-panel { width: 320px; flex-shrink: 0; }
        .submenu-grid { flex: 1; align-content: start; }
        
        .sub-card {
          display: block; padding: 20px; border: 1px solid transparent;
          transition: all 0.3s ease; background: transparent;
        }
        .sub-card:hover { background: rgba(255,255,255,0.02); border-color: rgba(212,175,55,0.2); }
        
        .simple-panel { width: 240px; padding: 12px; }
        .simple-item {
          display: flex; padding: 12px 16px; font-family: sans-serif; text-transform: uppercase;
          font-size: 0.65rem; letter-spacing: 0.2em; color: #a1a1aa; transition: color 0.3s ease;
        }
        .simple-item:hover { color: #fff; background: rgba(255,255,255,0.03); }

        /* Mobile Accordion Mechanics */
        .mobile-sub-wrapper { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .mobile-sub-wrapper.open { grid-template-rows: 1fr; }
        .mobile-sub-inner { overflow: hidden; }

        /* Hamburger Animation */
        .hb-line { display: block; width: 24px; height: 1px; background: #fff; transition: transform 0.4s ease, opacity 0.4s ease; }
        .hb-open .hb-top { transform: translateY(5px) rotate(45deg); }
        .hb-open .hb-mid { opacity: 0; transform: scaleX(0); }
        .hb-open .hb-bot { transform: translateY(-5px) rotate(-45deg); }
      `}</style>

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-[#050505]/90 backdrop-blur-md border-b border-white/5 py-2" 
            : "bg-transparent border-b border-transparent py-6"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* ── Dynamic Image Logo ── */}
          <Link href="/" className="relative z-50 flex items-center">
            <div 
              className="relative transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                height: scrolled ? "40px" : "80px",
                width: scrolled ? "120px" : "200px" 
              }}
            >
              <Image 
                src="/image/logo.png" 
                alt="Calixta" 
                fill 
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* ── Desktop Links ── */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, i) => (
              <div
                key={item.name}
                className={`nav-item-wrap h-full flex items-center ${activeMenu === i ? "active" : ""}`}
                onMouseEnter={() => item.submenu && openMenu(i)}
                onMouseLeave={() => item.submenu && closeMenu()}
              >
                <Link
                  href={item.path}
                  onClick={closeMenu}
                  className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-medium text-gray-300 hover:text-luxury-gold transition-colors py-4"
                >
                  {item.name}
                  {item.submenu && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={`transition-transform duration-300 ${activeMenu === i ? "rotate-180 text-luxury-gold" : "text-gray-500"}`}>
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  )}
                </Link>
                {item.submenu && (
                  item.type === "mega" ? <MegaMenu item={item} closeMenu={closeMenu} /> : <SimpleDropdown item={item} closeMenu={closeMenu} />
                )}
              </div>
            ))}
          </div>

          {/* ── Right Action (Desktop) & Hamburger (Mobile) ── */}
          <div className="flex items-center gap-6 z-50">
            <Link 
              href="/book" 
              className="hidden lg:inline-flex px-8 py-3 text-[10px] uppercase tracking-[0.2em] border border-white/20 text-white hover:border-luxury-gold hover:text-luxury-gold hover:bg-luxury-gold/5 transition-all duration-500"
            >
              Reserve
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden flex flex-col gap-1 p-2 ${mobileOpen ? "hb-open" : ""}`}
              aria-label="Toggle menu"
            >
              <span className="hb-line hb-top" />
              <span className="hb-line hb-mid" />
              <span className="hb-line hb-bot" />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Full-Screen Takeover ── */}
      <div 
        className={`fixed inset-0 bg-luxury-black z-40 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${
          mobileOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex-1 overflow-y-auto px-6 pt-32 pb-12">
          <div className="flex flex-col">
            {navItems.map((item) => (
              <MobileNavItem key={item.name} item={item} onClose={() => setMobileOpen(false)} />
            ))}
          </div>
        </div>
        
        {/* Mobile Sticky CTA */}
        <div className="p-6 border-t border-white/5 bg-[#050505]">
          <Link
            href="/book"
            onClick={() => setMobileOpen(false)}
            className="flex justify-center w-full py-4 text-xs tracking-[0.3em] uppercase bg-white text-black font-medium hover:bg-luxury-gold transition-colors"
          >
            Reserve a Session
          </Link>
        </div>
      </div>
    </>
  );
}