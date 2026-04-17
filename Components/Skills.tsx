"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Core Engineering",
    items: ["Javascript", "React", "Next.js", "Node.js", "PHP", "APIs", "Python", 'Nest.js', "Docker", "Git", "CI/CD"],
  },
  {
    category: "Systems & Data",
    items: ["Large Datasets", "Performance", "PostgreSQL", "MongoDB", "MySQL", "Numpy", "Pandas", "Scikit-Learn", "Matplotlib", "Pytorch", "TensorFlow", "HuggingFace"],
  },
  {
    category: "Marketing & Automation",
    items: ["GTM", "Clearbit", "Email Systems", "CRM Automation", "Klaviyo", "HubSpot", "SendGrid", "Semrush"],
  },
  {
    category: "Infrastructure",
    items: ["AWS S3", "Cloudflare", "DNS Management", "Vercel", "CDN Config", "CV3 Systems", "Domain Strategy"],
  },
];

export default function Skills() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <section
      onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
      className="relative py-32 bg-[#0A0A0A] text-white overflow-hidden"
      id="skills"
    >
      {/* Subtle Interactive Spotlight */}
      <div
        className="pointer-events-none absolute w-[600px] h-[600px] rounded-full opacity-10 blur-[120px] z-0 transition-opacity duration-500"
        style={{
          background: "radial-gradient(circle, #ffffff, transparent 70%)",
          top: mouse.y - 300,
          left: mouse.x - 300,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-24">
          <h2 className="text-5xl md:text-6xl font-light tracking-tighter mb-6">
            Technical <span className="font-serif italic text-neutral-500">Arsenal</span>
          </h2>
          <p className="max-w-xl text-neutral-500 font-light leading-relaxed">
            13+ years of full-stack expertise, ranging from legacy PHP systems 
            to modern AI/ML data pipelines and automated marketing infrastructure.
          </p>
        </div>

        {/* Skills Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {skills.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              {/* Vertical Accent Line */}
              <div className="absolute -left-4 top-0 bottom-0 w-[1px] bg-neutral-800 group-hover:bg-neutral-400 transition-colors" />
              
              <h3 className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-8 font-bold">
                {section.category}
              </h3>

              <ul className="space-y-4">
                {section.items.map((skill, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ x: 5 }}
                    className="text-lg font-light text-neutral-300 hover:text-white transition-colors cursor-default flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-neutral-700" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Footer wide card - Minimalist version */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 pt-12 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
        >
          <div className="max-w-2xl">
            <h4 className="text-xl font-light mb-2">Multi-Stack Architecture</h4>
            <p className="text-sm text-neutral-500 font-light leading-relaxed">
              My core philosophy is tool-agnosticism. Whether it's a deep-legacy e-commerce system 
              or a cutting-edge Next.js deployment, I architect for performance and business ROI above all else.
            </p>
          </div>
          <div className="text-neutral-700 font-mono text-[10px] uppercase tracking-widest">
            Ready for Scalable Execution
          </div>
        </motion.div>
      </div>
    </section>
  );
}