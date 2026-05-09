"use client";

import { motion } from "framer-motion";

const navLinks = [
  { name: "About", href: "#hero" },
  { name: "Impact", href: "#impact" },
  { name: "Production", href: "#websites" },
  { name: "Systems", href: "#marketing" },
  { name: "Labs", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "AI/ML", href: "#data-ml" },
  { name: "Contact", href: "#connect" },
];

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-[100] px-6 py-8 pointer-events-none"
    >
      <nav className="max-w-[1400px] mx-auto flex justify-between items-center">
        
        {/* Logo with "Smart Stroke" */}
        <div className="pointer-events-auto">
          <a href="#hero" className="group">
            <h1 aria-label="Yogita Singla"
              className="text-sm font-bold tracking-[0.2em] px-3 uppercase text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
              style={{ WebkitTextStroke: "0.5px rgba(0,0,0,0.1)" }}
            >
              Yogita <span className="font-serif italic font-light lowercase tracking-normal text-neutral-300 group-hover:text-white transition-colors">Singla</span>
            </h1>
          </a>
        </div>

        {/* Navigation - Glass Pill with Internal Stroke */}
        <div className="hidden lg:flex items-center gap-1 p-1 bg-black/20 backdrop-blur-xl border border-white/30 rounded-full pointer-events-auto shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-[10px] uppercase tracking-widest font-bold text-white drop-shadow-md hover:bg-white/20 rounded-full transition-all duration-300"
              style={{ textShadow: "0px 0px 3px rgba(0,0,0,0.5)" }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Status Indicator */}
        <div className="hidden md:block pointer-events-auto">
           <a href="#connect" className="flex items-center gap-3 px-5 py-2 bg-white border border-black/10 text-black rounded-full shadow-xl hover:scale-105 transition-transform">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] uppercase tracking-widest font-black">Hire</span>
           </a>
        </div>
      </nav>
    </motion.header>
  );
}