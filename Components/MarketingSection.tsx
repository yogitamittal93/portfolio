"use client";

import { motion } from "framer-motion";

const marketingSystems = [
  {
    title: "Email Automation",
    description: "Architecting high-conversion email ecosystems.",
    points: [
      "Responsive design & cross-client testing",
      "UTM-parameter driven landing experiences",
      "Automated campaign lifecycle scheduling",
      "Advanced user segmentation logic",
    ],
    tag: "Retention",
  },
  {
    title: "Data Enrichment",
    description: "Leveraging data to personalize UX.",
    points: [
      "Clearbit integration for form enrichment",
      "Cookie-based intelligent popups",
      "GTM (Google Tag Manager) architecture",
      "Behavioral event tracking & triggers",
    ],
    tag: "Data",
  },
  {
    title: "Performance Systems",
    description: "Optimizing the bottom of the funnel.",
    points: [
      "A/B testing & multivariate experimentation",
      "SEO-optimized landing architectures",
      "CRM & lead-gen pipeline integration",
      "Conversion Rate Optimization (CRO)",
    ],
    tag: "Revenue",
  },
];

export default function MarketingSection() {
  return (
    <section className="py-32 bg-white selection:bg-black selection:text-white" id="marketing">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-6xl font-light tracking-tight text-neutral-900 mb-6">
              Marketing <span className="font-serif italic text-neutral-500">Systems</span>
            </h2>
            <p className="text-lg text-neutral-500 leading-relaxed font-light">
              Engineering the bridge between technical architecture and revenue growth through data-driven marketing stacks.
            </p>
          </div>
          <div className="text-neutral-400 text-xs tracking-[0.3em] uppercase font-mono">
            Stack / GTM • Clearbit • CRM
          </div>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200 overflow-hidden">
          {marketingSystems.map((system, i) => (
            <motion.div
              key={i}
              whileHover={{ backgroundColor: "#fafafa" }}
              className="bg-white p-12 transition-colors duration-500 flex flex-col justify-between group"
            >
              <div>
                <span className="inline-block px-3 py-1 bg-neutral-100 text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-8">
                  {system.tag}
                </span>
                
                <h3 className="text-2xl font-light text-neutral-900 mb-4">{system.title}</h3>
                <p className="text-sm text-neutral-400 font-serif italic mb-10 leading-relaxed">
                  {system.description}
                </p>

                <ul className="space-y-4">
                  {system.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="block w-1 h-1 rounded-full bg-neutral-300 mt-2 group-hover:bg-black transition-colors" />
                      <span className="text-sm text-neutral-600 font-light">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative line that grows on hover */}
              <div className="mt-16 w-full h-[1px] bg-neutral-100 relative overflow-hidden">
                <motion.div 
                   initial={{ x: "-100%" }}
                   whileHover={{ x: "0%" }}
                   transition={{ duration: 0.6 }}
                   className="absolute inset-0 bg-neutral-900"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}