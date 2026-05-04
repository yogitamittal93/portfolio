"use client";

import { motion } from "framer-motion";

const engineeringProjects = [
  {
    name: "Ideaboard Collaboration",
    type: "Full-Stack Platform",
    stack: "React • Node.js • Express • APIs",
    deployment: "Vercel / Render",
    desc: "A real-time collaborative workspace. Engineered the backend on Render with a decoupled React frontend on Vercel.",
    status: "Live"
  },
  {
    name: "Automated Ranking Intelligence",
    type: "Data Engineering",
    stack: "Python • Web Scraping • Data Processing",
    deployment: "Capstone / Coursera",
    desc: "Architected a custom Python scraper to track and rank web data, automating competitive analysis workflows.",
    status: "Completed"
  },
  {
    name: "Post-Partum Health-Band",
    type: "AI / ML Research",
    stack: "Python • Data Science • Predictive Modeling",
    deployment: "In Development",
    desc: "Engineering a predictive ML model focused on post-partum health metrics and wearable data analysis.",
    status: "Research"
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-32 bg-white selection:bg-black selection:text-silver" id="projects">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-4 block">
            Engineering Labs
          </span>
          <h2 className="text-5xl md:text-6xl font-light tracking-tighter text-neutral-900 mb-6">
            Technical <span className="font-serif italic text-neutral-500">Innovation</span>
          </h2>
        </div>

        {/* Project List: Minimalist List Style */}
        <div className="space-y-px bg-neutral-200 border-y border-neutral-200">
          {engineeringProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="bg-white group py-12 flex flex-col md:flex-row gap-8 items-start justify-between transition-colors hover:bg-neutral-50"
            >
              <div className="max-w-md">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 border ${
                    project.status === 'Research' ? 'border-orange-200 text-orange-600' : 'border-neutral-200 text-neutral-400'
                  }`}>
                    {project.status}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">{project.type}</span>
                </div>
                <h3 className="text-3xl font-light text-neutral-900 mb-4 group-hover:translate-x-2 transition-transform duration-500">
                  {project.name}
                </h3>
              </div>

              <div className="max-w-xl flex-1">
                <p className="text-neutral-500 font-light leading-relaxed mb-6">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  <div className="text-[11px] uppercase tracking-widest text-neutral-900 font-semibold">
                    Stack: <span className="text-neutral-400 font-normal">{project.stack}</span>
                  </div>
                  <div className="text-[11px] uppercase tracking-widest text-neutral-900 font-semibold">
                    Host: <span className="text-neutral-400 font-normal">{project.deployment}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}