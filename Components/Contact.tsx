"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaLinkedin, FaGithub, FaArrowRight } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";

export default function Connect() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <section
      id="connect"
      onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
      className="relative min-h-screen py-32 px-6 bg-[#FAF9F6] overflow-hidden selection:bg-black selection:text-white"
    >
      {/* Soft Interactive Spotlight */}
      <div
        className="pointer-events-none absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-10 transition-opacity duration-500 z-0"
        style={{
          background: "radial-gradient(circle, #000, transparent 70%)",
          top: mouse.y - 250,
          left: mouse.x - 250,
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* HEADER */}
        <div className="mb-24">
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-6 block font-bold">
            Availability: 2026
          </span>
          <h2 className="text-6xl md:text-8xl font-light tracking-tighter text-neutral-900 mb-8 leading-[0.9]">
            Let’s build <br />
            <span className="font-serif italic text-neutral-500">meaningful</span> systems.
          </h2>
          <p className="text-xl text-neutral-500 max-w-2xl font-light leading-relaxed">
            Whether you're looking for an experienced Full-Stack Architect or a Data-driven ML Engineer—let’s discuss how I can bring 13+ years of expertise to your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* 🔥 LEFT: WORK & PROOF (Span 7) */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-neutral-400 mb-8 font-bold">Work & Proof</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href="https://github.com/Yogita-Mittal"
                  target="_blank"
                  className="group flex justify-between items-center p-6 bg-white border border-neutral-200 rounded-sm hover:border-black transition-all duration-500"
                >
                  <div className="flex items-center gap-4">
                    <FaGithub size={24} className="text-neutral-900" />
                    <div>
                      <p className="text-sm font-medium">GitHub</p>
                      <p className="text-[10px] text-neutral-400 uppercase tracking-tighter">Code Repositories</p>
                    </div>
                  </div>
                  <FaArrowRight size={12} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                </a>

                <a
                  href="https://www.hackerrank.com/yogita_mittal"
                  target="_blank"
                  className="group flex justify-between items-center p-6 bg-white border border-neutral-200 rounded-sm hover:border-black transition-all duration-500"
                >
                  <div className="flex items-center gap-4">
                    <SiHackerrank size={24} className="text-[#2EC866]" />
                    <div>
                      <p className="text-sm font-medium">HackerRank</p>
                      <div className="flex gap-0.5 text-[#2EC866]">
                        {"★".repeat(5)}
                      </div>
                    </div>
                  </div>
                  <FaArrowRight size={12} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                </a>
              </div>
            </div>

            {/* Certifications - Clean List Style */}
            <div className="pt-12 border-t border-neutral-200">
              <h4 className="text-[10px] uppercase tracking-widest text-neutral-400 mb-6 font-bold">Verified Certifications</h4>
              <div className="flex flex-wrap gap-x-12 gap-y-6">
                <div className="max-w-[200px]">
                  <p className="text-sm font-medium text-neutral-900">Python Specialization</p>
                  <p className="text-xs text-neutral-400 mt-1">University of Michigan / Coursera</p>
                </div>
                <div className="max-w-[200px]">
                  <p className="text-sm font-medium text-neutral-900">DSA (JavaScript)</p>
                  <p className="text-xs text-neutral-400 mt-1">freeCodeCamp Verified</p>
                </div>
                <div className="max-w-[200px]">
                  <p className="text-sm font-medium text-neutral-900">Advanced React</p>
                  <p className="text-xs text-neutral-400 mt-1">+13 years industry application</p>
                </div>
              </div>
            </div>
          </div>

          {/* 🔥 RIGHT: CONTACT (Span 5) */}
          <div className="lg:col-span-5">
            <motion.div 
              whileHover={{ y: -5 }}
              className="h-full bg-neutral-900 p-12 rounded-sm text-white flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-12 font-bold">Direct Contact</h3>
                <div className="space-y-8">
                  <a 
                    href="mailto:yogita.mittal@email.com" 
                    className="block group"
                  >
                    <p className="text-xs text-neutral-500 uppercase mb-2">Email</p>
                    <p className="text-2xl font-light group-hover:underline underline-offset-8 decoration-1 transition-all">
                      yogita.mittal@email.com
                    </p>
                  </a>
                  <a 
                    href="https://linkedin.com/in/yogita-mittal" 
                    target="_blank"
                    className="block group"
                  >
                    <p className="text-xs text-neutral-500 uppercase mb-2">LinkedIn</p>
                    <p className="text-2xl font-light group-hover:underline underline-offset-8 decoration-1 transition-all">
                      in/yogita-mittal
                    </p>
                  </a>
                </div>
              </div>

              <div className="mt-20 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                    Currently open to remote opportunities
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Footer Credits */}
        <footer className="mt-32 pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-neutral-400 uppercase tracking-widest">
            &copy; 2026 Yogita Mittal — Engineering & Data
          </p>
          <p className="text-[10px] text-neutral-400 uppercase tracking-widest">
            Built with Next.js & Framer Motion
          </p>
        </footer>
      </div>
    </section>
  );
}