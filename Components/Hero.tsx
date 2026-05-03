"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAF9F6] px-6"
    >
      {/* Background Decorative Element - Subtle texture or large letter */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-serif italic text-neutral-100/50 select-none pointer-events-none">
        Singla
      </div>

      <div className="relative z-10 max-w-7xl w-full grid md:grid-cols-12 gap-12 items-center">
        
        {/* 🔥 TEXT CONTENT (Left - Span 7) */}
        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-neutral-400 mb-6">
              Full-Stack Engineer & Architect
            </span>
            
            <h1 className="text-6xl md:text-8xl font-light tracking-tighter leading-[0.9] text-neutral-900 mb-8">
              Hi, I’m <span className="font-serif italic text-neutral-500">Yogita</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-500 max-w-lg leading-relaxed mb-10 font-light">
              Designing scalable e-commerce architectures and automation pipelines. 
              With <span className="text-neutral-900 font-medium">13+ years</span> of expertise in building 
              high-performance digital solutions.
            </p>

            <div className="flex items-center gap-8">
              <motion.a
                href="#websites"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-neutral-900 text-white text-xs uppercase tracking-widest rounded-sm hover:bg-black transition-colors"
              >
                View Selected Work
              </motion.a>
              
              <a
                href="#contact"
                className="group flex items-center gap-2 text-neutral-500 uppercase tracking-widest font-semibold"
              >
                Contact
                <span className="block w-6 h-[1px] bg-neutral-300 group-hover:w-10 group-hover:bg-black transition-all duration-300"></span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* 🔥 IMAGE CONTENT (Right - Span 5) */}
        <div className="md:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* The Border Frame Effect */}
            <div className="absolute -inset-4 border border-neutral-200 rounded-sm translate-x-4 translate-y-4 -z-10"></div>
            
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-neutral-100 grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl shadow-neutral-200">
              <Image
                src="/yogita3.png"
                alt="Yogita Singla"
                fill
                priority
                className="object-cover transition-transform duration-[2s] hover:scale-110"
              />
            </div>

            {/* Float Badge (Optional) */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl rounded-sm hidden lg:block"
            >
              <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-1">Based in</p>
              <p className="text-neutral-500 font-medium">India / Remote</p>
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-neutral-400 to-transparent"></div>
      </div>
    </section>
  );
}