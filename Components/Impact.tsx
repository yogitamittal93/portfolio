"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Updated with 5 Impact Stories to reflect your true seniority
const impactStories = [
  { 
    title: "Systemic Vigilance & Crisis Lead", 
    subtitle: "Cross-Continental Response Coordination", 
    tag: "Integrity", 
    description: "During a routine weekend promotion check, I identified a critical checkout failure. Though not 'on-clock' for all brands, I took the initiative to audit the entire 22-brand ecosystem and confirmed a global outage.", 
    details: "I bypassed silos to alert US IT Heads, India-based engineering teams, and Brand Merchandisers. My proactive intervention prevented two full days of lost revenue across the entire enterprise.", 
    metric: "22 Brands Saved" 
  },
  { 
    title: "The 95% Efficiency Breakthrough", 
    subtitle: "Automated Data Architecture", 
    tag: "Innovation", 
    description: "I identified a bottleneck where catalog pricing required massive manual configuration. I engineered a pattern-replacement system using advanced text transformation and MS-word (No big tech, just simple solutions).", 
    details: "I independently architected and tested this system before rollout. It eliminated human error across tens of thousands of SKUs and reduced manual data entry time by 95%.", 
    metric: "95% Efficiency" 
  },
{ 
    title: "Legacy-to-Modern Evolution", 
    subtitle: "Kalio to CommerceV3 Migration", 
    tag: "Modernization", 
    description: "I bridged the gap between decade-old legacy systems and modern performance standards. I pioneered the transition of monolithic PHP structures into modular, reusable PHP components.", 
    details: "By decoupling legacy code, I ensured 100% data parity during the Kalio to CommerceV3 migration. This shift to a component-based architecture drastically improved developer velocity and site maintainability across 22 brands.", 
    metric: "Modular Pivot" 
  },
  { 
    title: "Enterprise Core Web Vitals", 
    subtitle: "Lighthouse Optimization: 48%", 
    tag: "Performance", 
    description: "I diagnosed performance lag caused by heavy third-party widget dependencies. I replaced bloated implementations with lean, custom-engineered solutions.", 
    details: "By optimizing the frontend loading strategy and implementing structured metadata, I improved SEO health and user retention under strict production deadlines.", 
    metric: "98 Score" 
  },
  { 
    title: "Retention Engineering", 
    subtitle: "From Print to Digital Revenue", 
    tag: "Revenue", 
    description: "I spearheaded a strategic pivot for brands over-reliant on physical catalogs. By designing precision-targeted email workflows and UTM-driven landing pages, we re-engaged inactive users.", 
    details: "The ROI was so significant that several brands shifted their primary marketing spend from print to my digital email strategies, converting 'dead' leads into active revenue.", 
    metric: "High ROI" 
  }
];

export default function EngineeringImpact() {
  const targetRef = useRef<HTMLDivElement>(null);
  const sectionAvatarRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({ target: targetRef });

  const xContent = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]); // Adjusted for 5 cards
  const xAvatar = useTransform(scrollYProgress, [0, 1], ["5%", "85%"]);
  const rotateAvatar = useTransform(scrollYProgress, [0, 0.5, 1], [5, -5, 5]);

  const scrollToStep = (step: number) => {
    if (!targetRef.current) return;
    const sectionTop = targetRef.current.offsetTop;
    const sectionHeight = targetRef.current.offsetHeight;
    const windowHeight = window.innerHeight;
    const totalSteps = impactStories.length + 1; 
    const progressPerStep = 1 / totalSteps;
    const safeStep = Math.max(0, Math.min(step, totalSteps));
    const scrollAmount = sectionTop + (safeStep * progressPerStep) * (sectionHeight - windowHeight);

    window.scrollTo({
      top: scrollAmount + 2,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const globalAvatar = document.getElementById("global-avatar");
    const trigger = ScrollTrigger.create({
      trigger: targetRef.current,
      start: "top 10%",
      end: "bottom 90%",
      onUpdate: (self) => {
        const totalSteps = impactStories.length + 1;
        const currentStep = Math.round(self.progress * totalSteps);
        setActiveStep(currentStep);
      },
      onToggle: (self) => {
        if (self.isActive) {
          gsap.to(globalAvatar, { opacity: 0, pointerEvents: "none", duration: 0.3 });
          gsap.to(sectionAvatarRef.current, { opacity: 1, y: 0, duration: 0.5 });
        } else {
          gsap.to(globalAvatar, { opacity: 1, pointerEvents: "auto", duration: 0.3 });
          gsap.to(sectionAvatarRef.current, { opacity: 0, y: 20, duration: 0.5 });
        }
      }
    });
    return () => trigger.kill();
  }, []);

  return (
    <section ref={targetRef} className="relative h-[600vh] bg-[#0A0A0A] z-10" id="impact">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-6">
        
        <div className="absolute top-20 left-10 overflow-hidden pointer-events-none">
          <motion.h2 
            style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
            className="text-[12vw] font-serif italic text-white/5 whitespace-nowrap select-none"
          >
            Engineering Impact
          </motion.h2>
        </div>

        <div className="absolute bottom-10 left-10 z-[50] flex items-center gap-6 pointer-events-auto">
          <div className="flex gap-3">
            <button 
              onClick={() => scrollToStep(activeStep - 1)}
              disabled={activeStep === 0}
              className="p-4 rounded-full border border-white/20 text-white bg-black/40 backdrop-blur-sm hover:bg-white hover:text-black disabled:opacity-5 transition-all cursor-pointer z-[60]"
            >
              <FiArrowLeft size={18} />
            </button>
            <button 
              onClick={() => scrollToStep(activeStep + 1)}
              disabled={activeStep >= 5}
              className="p-4 rounded-full border border-white/20 text-white bg-black/40 backdrop-blur-sm hover:bg-white hover:text-black disabled:opacity-5 transition-all cursor-pointer z-[60]"
            >
              <FiArrowRight size={18} />
            </button>
          </div>
          <div className="text-white/40 font-mono text-[10px] uppercase tracking-[0.3em]">
            Step 0{activeStep + 1} / 06
          </div>
        </div>

        <motion.div 
          ref={sectionAvatarRef}
          style={{ 
            left: xAvatar, 
            rotate: rotateAvatar,
            opacity: useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0])
          }}
          className="absolute bottom-10 z-20 hidden lg:block pointer-events-none"
        >
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-40 h-56 grayscale brightness-110 opacity-70"
            >
              <img src="/yogitarc.png" alt="The Architect" className="object-contain w-full h-full" />
              <div className="absolute -top-4 -right-4 bg-white text-black text-[9px] px-2 py-1 font-bold uppercase tracking-widest shadow-2xl">
                Technical Owner
              </div>
            </motion.div>
        </motion.div>

        <motion.div style={{ x: xContent }} className="flex gap-24 items-center pl-10">
          <div className="flex-shrink-0 w-[600px]">
            <span className="text-neutral-500 font-mono text-sm tracking-widest uppercase mb-4 block">01 — Case Studies</span>
            <h3 className="text-6xl font-light text-white leading-tight">
              Driving <span className="italic font-serif text-neutral-400">Value</span> Through <br /> Absolute Ownership.
            </h3>
            <p className="text-neutral-400 mt-8 max-w-sm leading-relaxed text-lg font-light">
              Scroll to explore how I transitioned legacy ecosystems into automated revenue engines and maintained 24/7 operational integrity.
            </p>
          </div>

          {impactStories.map((story, i) => (
            <div key={i} className="group flex-shrink-0 w-[750px] bg-neutral-900/40 border border-white/10 p-12 rounded-sm relative transition-all hover:border-white/30">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-[0.3em] mb-2 block font-bold">{story.tag}</span>
                  <h4 className="text-4xl font-light text-white leading-tight tracking-tighter">{story.title}</h4>
                  <p className="text-neutral-400 font-serif italic mt-1 text-lg">{story.subtitle}</p>
                </div>
                <div className="text-right">
                  <span className="text-6xl font-light text-neutral-100 tracking-tighter">{story.metric.split(' ')[0]}</span>
                  <p className="text-[10px] text-neutral-400 uppercase tracking-widest">{story.metric.split(' ').slice(1).join(' ')}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-16">
                <p className="text-base text-neutral-300 leading-relaxed font-light">{story.description}</p>
                <div className="border-l border-white/10 pl-10">
                    <p className="text-sm text-neutral-500 leading-relaxed italic">{story.details}</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-700" />
            </div>
          ))}

          <div className="flex-shrink-0 w-[500px] grid grid-cols-1 gap-6 pr-40">
             <div className="p-10 border border-white/10 bg-[#111] hover:border-white/30 transition-all">
                <p className="text-[10px] text-neutral-500 uppercase mb-2 tracking-[0.2em] font-bold">Total Brands Managed</p>
                <p className="text-4xl text-white font-light">22+</p>
             </div>
             <div className="p-10 border border-white/10 bg-[#111] hover:border-white/30 transition-all">
                <p className="text-[10px] text-neutral-500 uppercase mb-2 tracking-[0.2em] font-bold">Technical Experience</p>
                <p className="text-4xl text-white font-light">13 Years</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}