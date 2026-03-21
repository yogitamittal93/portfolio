"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const websites = [
  {
    name: "Measured Inc.",
    image: "/websites/measured.png",
    url: "https://www.measured.com/",
    highlight: true,
    desc: "Marketing Engineering Owner", // Truthful but sounds senior
    details: [
      "Sole Technical Owner for the global marketing ecosystem, managing WordPress, HubSpot, and CRM integrations.",
      "Engineered high-performance landing pages and custom GTM/Clearbit data-enrichment flows for lead generation.",
      "Architected a custom SEO and pagination system that improved site health from 78% to 98%.",
      "Strategic decision-maker for the marketing stack, including tool procurement, plugin security, and API scaling."
    ]
  },
  {
    name: "Lakshmi Iron Company",
    image: "/websites/lakshmiiron.png",
    url: "https://www.lakshmiironcompany.in/",
    highlight: true,
    desc: "Full-Stack Next.js & Supabase Architect",
    details: [
      "Sole developer for an end-to-end industrial platform built on Next.js and Supabase.",
      "Designed a dynamic relational database schema to power brand-specific product filtering and sorting.",
      "Optimized site for high-speed indexing via SSR and managed Google Search Console deployment.",
      "Built a custom, scalable frontend UI focused on lead conversion for the B2B industrial sector."
    ]
  },
  {
    name: "Virtual Gardener App",
    image: "/websites/virtualgardener.png", 
    url: "https://virtualgardeners.org/",
    highlight: true,
    desc: "React Native UI Contributor",
    details: [
      "Developed interactive mobile UI components using React Native and TypeScript.",
      "Collaborated with cross-functional teams to translate gardening logic into intuitive mobile experiences.",
      "Focused on high-performance component rendering and cross-platform UI consistency."
    ]
  }
];

const otherProjects = [
 { 
    name: "Red Rock Tax", 
    image: "/websites/redrock.png", 
    details: [
      "Engineered performance optimizations for a multi-state tax platform, improving site speed by 48%.",
      "Resolved critical infrastructure issues including CPU throttling and link integrity on shared hosting.",
      "Managed DNS migrations, host name updates, and 301 redirects for acquired domains to preserve SEO equity.",
      "Conducted a comprehensive plugin audit and replaced bloated widgets with high-performance API-driven static panels."
    ] 
  },
  { 
    name: "Weeks Roses", 
   // image: "/websites/weeks.jpg", 
    details: [
      "Acted as the sole developer responsible for all ongoing site enhancements and feature updates.",
      "Collaborated with cross-functional teams to implement visual and technical SEO improvements.",
      "Managed the high-precision data layer for botanical product mapping and search visibility."
    ] 
  },
  { 
    name: "Spring Hill Nursery", 
   // image: "/websites/springhill.jpg", 
    details: [
      "Engineered high-converting promotional pop-ups integrated directly with marketing funnels.",
      "Developed and maintained complex product detail pages, bridging backend logic with UI.",
      "Managed automated event-driven tracking for seasonal sales and customer behavior analytics."
    ] 
  },
  { 
    name: "Gurney's", 
    //image: "/websites/gurneys.jpg", 
    details: [
      "Developed dynamic, seasonal landing pages and specialized 'Chef-Focused' content modules.",
      "Resolved complex legacy JavaScript bugs and layout inconsistencies across major browsers.",
      "Integrated BriteVerify API for real-time email validation to ensure lead data accuracy."
    ] 
  },
  { 
    name: "DutchBulbs", 
    //image: "/websites/dutchbulbs.jpg", 
    details: [
      "Architected and launched an automated 'Abandoned Cart' email flow to recover lost revenue.",
      "Ensured event-driven tracking compatibility for advanced remarketing strategies.",
      "Optimized legacy PHP checkout flows to ensure stability during high-traffic email blasts."
    ] 
  },
  { 
    name: "Bits & Pieces Canada", 
    //image: "/websites/bits-canada.jpg", 
    details: [
      "Fixed mission-critical cart calculation and checkout errors to maintain transaction integrity.",
      "Engineered multiple seasonal and promotional landing pages for the Canadian market.",
      "Customized CommerceV3 backend data to support regional targeting and tax rules."
    ] 
  },
  { 
    name: "Breck's (US/Global)", 
    //image: "/websites/brecks.jpg", 
    details: [
      "Engineered sophisticated keycode-based logic for dynamic discounts and promotions.",
      "Handled complex backend data manipulation for precise regional customer targeting.",
      "Maintained core legacy codebases while ensuring zero-downtime for global shoppers."
    ] 
  },
  { 
    name: "Spilsbury", 
    //image: "/websites/spilsbury.jpg", 
    details: [
      "Delivered high-performance, targeted landing pages and custom UX features.",
      "Resolved persistent cart errors affecting mobile and desktop checkout sessions.",
      "Implemented WCAG-compliant interface elements to improve site accessibility."
    ] 
  },
  { 
    name: "Breck's Bulbs Canada", 
   // image: "/websites/brecks-canada.jpg", 
    details: [
      "Built and maintained high-converting promotional landing pages for international audiences.",
      "Implemented mobile-first performance improvements to boost Core Web Vitals.",
      "Managed cross-brand data synchronization for unified catalog management."
    ] 
  },
  { 
    name: "Weeks Roses", 
   // image: "/websites/weeks.jpg", 
    details: [
      "Developed high-precision maps using advanced PHP/SQL for massive databases.",
      "Implemented interactive mapping and geographic data visualization for wholesale distribution.",
      "Customized 'Quick View' category overlays and dynamic data-layer event tracking."
    ] 
  },
  { 
    name: "Gardens Alive! Ecosystem", 
   // image: "/websites/ga.jpg", 
    details: [
      "Core developer for 'Commerce V3' engine using Vanilla PHP, Smarty, and jQuery.",
      "Architected UTM-based landing page personalization and automated abandoned cart recovery.",
      "Built accessible video-popups with intelligent autoplay/mute logic for marketing campaigns."
    ] 
  },
  { 
    name: "Paragon & Added Touch", 
   // image: "/websites/paragon.jpg", 
    details: [
      "Engineered high-end apparel catalogs with complex 'Tethered Model' image logic.",
      "Developed multi-address shipping systems with dynamic discount/tax calculations.",
      "Optimized front-end performance for heavy image/video assets across 20+ brands."
    ] 
  },
  
  { 
    name: "Ideaboard App", 
    //image: "/websites/ideaboard.jpg", 
    details: [
      "Built a full-stack microservices architecture with an API Gateway for scalability.",
      "Developed a real-time 'Sticky Note' interface using Next.js, Node.js, and PostgreSQL.",
      "Fully Dockerized the environment for seamless local development and cloud deployment."
    ] 
  },
  { 
    name: "Spider Ranking Engine", 
   // image: "/websites/python.jpg", 
    details: [
      "Developed a web spider and search ranking system using Python.",
      "Implemented link-analysis algorithms to rank pages, mimicking search engine logic.",
      "Automated large-scale data storage and retrieval using SQLite."
    ] 
  }
];
export default function ProductionWork() {
  const featured = websites.filter((w) => w.highlight);
  const row1 = otherProjects.slice(0, Math.ceil(otherProjects.length / 2));
  const row2 = otherProjects.slice(Math.ceil(otherProjects.length / 2));

  return (
    <section className="py-32 bg-[#FAF9F6] overflow-hidden" id="websites">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-6xl font-light tracking-tight text-neutral-900 mb-6">
              Production <span className="font-serif italic text-neutral-500">Work</span>
            </h2>
            <p className="text-lg text-neutral-500 leading-relaxed">
              13+ years of architecting high-performance digital experiences for industry leaders.
            </p>
          </div>
          <div className="text-neutral-400 text-sm tracking-widest uppercase font-mono">
            EST. 2012 — 2026
          </div>
        </div>

        {/* FEATURED TOP 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
          {featured.map((site, i) => (
            <FeaturedCard key={i} site={site} />
          ))}
        </div>
      </div>

      {/* MARQUEE SECTION */}
      <div className="space-y-12">
        <MarqueeRow items={row1} direction="-50%" speed={55} />
        <MarqueeRow items={row2} direction="0%" from="-50%" speed={65} />
      </div>
    </section>
  );
}
function FeaturedCard({ site }: { site: any }) {
  return (
    <motion.a
      href={site.url}
      target="_blank"
      whileHover={{ y: -10 }}
      className="group relative h-[650px] rounded-sm overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl flex flex-col"
    >
      <Image
        src={site.image}
        alt={site.name}
        fill
        className="object-cover transition-all duration-1000 group-hover:scale-105 opacity-50 group-hover:opacity-30 grayscale group-hover:grayscale-0"
      />
      
      {/* High-contrast gradient to ensure text pops */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-95" />

      <div className="relative p-10 h-full flex flex-col">
        
        {/* TOP SECTION: Title and Badge (Pushing content from top) */}
        <div className="flex-grow flex flex-col justify-end mb-6">
          {/* Fixed-area for Title to keep badges aligned */}
          <div className="min-h-[90px] flex items-end">
            <h3 className="text-4xl font-light tracking-tighter drop-shadow-[0_2px_10px_rgba(0,0,0,1)] text-white">
              {site.name}
            </h3>
          </div>
          
          <p className="text-[10px] text-amber-400 mt-4 uppercase tracking-[0.4em] font-black bg-black/60 w-fit px-3 py-1 backdrop-blur-md border border-white/10">
            {site.desc}
          </p>
        </div>

        {/* BOTTOM SECTION: Bullet points (Reveals on hover) */}
        <div className="transition-all duration-700">
          <ul className="space-y-3 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
            {site.details.map((point: string, idx: number) => (
              <li key={idx} className="text-[14px] leading-snug text-neutral-200 flex gap-3 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
                <span className="text-amber-500 font-serif italic text-lg leading-none">#</span>
                <span className="font-light">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.a>
  );
}
function MarqueeRow({ items, direction, from = "0%", speed }: any) {
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="flex overflow-hidden py-10">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [from, direction] }}
        transition={{ ease: "linear", duration: speed, repeat: Infinity }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {duplicatedItems.map((site, i) => {
          // Logic to check if we should show a placeholder
          const hasImage = site.image && !site.image.includes("placeholder");

          return (
            <div key={i} className="w-[550px] aspect-video mx-12 relative group/item overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950 shadow-2xl">
              
              {hasImage ? (
                <Image
                  src={site.image}
                  alt={site.name}
                  fill
                  className="object-cover transition-all duration-700 opacity-40 group-hover/item:scale-110 group-hover/item:opacity-10 grayscale group-hover/item:grayscale-0"
                />
              ) : (
                // --- STYLIZED PLACEHOLDER ---
                <div className="absolute inset-0 flex items-center justify-center bg-[#0d0d0d] transition-all duration-700 group-hover/item:opacity-10">
                  <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                  <span className="text-8xl font-serif italic text-neutral-800 select-none">
                    {site.name.charAt(0)}
                  </span>
                </div>
              )}

              {/* The "Expertise" Overlay (Remains the same, your copy is the hero here) */}
              <div className="absolute inset-0 p-12 flex flex-col justify-center bg-black/95 opacity-0 group-hover/item:opacity-100 transition-all duration-500 backdrop-blur-xl border-l-4 border-amber-500">
                <div className="flex justify-between items-start mb-6">
                  <h4 className="text-2xl font-light text-white tracking-wide uppercase italic">
                    {site.name}
                  </h4>
                  <span className="text-[10px] text-amber-500 border border-amber-500/30 px-2 py-1 uppercase tracking-tighter">
                    Full-Stack Architecture
                  </span>
                </div>
                
                <ul className="space-y-4 whitespace-normal">
                  {site.details.map((point: string, idx: number) => (
                    <li key={idx} className="text-[14px] leading-relaxed text-neutral-300 font-light flex gap-3">
                      <span className="text-amber-500 mt-1">/</span> {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-4 border-t border-white/5 flex gap-4 text-[10px] text-neutral-500 uppercase font-mono tracking-widest">
                  <span>PHP</span> <span>Smarty</span> <span>jQuery</span> <span>Vanilla JS</span>
                </div>
              </div>

              {/* Default Label */}
              <div className="absolute inset-0 flex items-center justify-center group-hover/item:opacity-0 transition-opacity">
                 <span className="text-white text-4xl font-black tracking-tighter uppercase italic opacity-20 drop-shadow-[0_2px_10px_rgba(0,0,0,1)]">
                  {site.name}
                 </span>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}