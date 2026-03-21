"use client";

import { motion } from "framer-motion";

const machineLearningExpertise = [
  {
    title: "The ML Stack",
    subtitle: "End-to-End Model Development",
    desc: "Mastery of the full Scikit-Learn ecosystem. From initial Exploratory Data Analysis (EDA) to Model Deployment.",
    points: [
      "Supervised, Unsupervised & Semi-Supervised workflows",
      "Advanced Preprocessing: Scaling, Encoding, & Imputation (Median/Mode)",
      "Algorithm Mastery: XGBoost, Random Forest, SVM, & Regression",
      "Model Evaluation: Cross-Validation & Grid Search CV for peak accuracy scores"
    ],
    tag: "Modern AI"
  },
  {
    title: "Enterprise Data Management",
    subtitle: "High-Volume Catalog & Marketing Architecture",
    desc: "A career-long history of managing complex datasets (15k to 80k+ records) across multiple global brands.",
    points: [
      "Architected promotional Key-Code string systems for lakhs of catalogs",
      "Expert-level Excel Engineering: VLOOKUP, Index/Match, & custom formulas",
      "Managed large-scale Pagination & Data pipelines for e-commerce",
      "Designed data-driven segmentation for multi-brand marketing flows"
    ],
    tag: "Core Experience"
  }
];

export default function DataEvolution() {
  return (
    <section className="py-32 bg-[#F5F5F7] border-y border-neutral-200" id="data-ml">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header - Minimal & impactful */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.4em] text-neutral-400 mb-6 block font-bold">The Data Narrative</span>
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-neutral-900 mb-6">
              Data Strategy <span className="font-serif italic text-neutral-500">&</span> <br /> Machine <span className="font-serif italic text-neutral-500">Learning</span>
            </h2>
            <p className="text-lg text-neutral-600 font-light leading-relaxed">
              Bridging 13 years of enterprise data management with modern predictive intelligence. 
              From orchestrating <span className="text-black font-medium">lakhs of catalog records</span> to 
              engineering <span className="text-black font-medium">high-accuracy ML models</span>.
            </p>
          </div>
          <div className="text-neutral-400 font-mono text-[10px] uppercase tracking-widest pb-2">
            Precision / Scale / Prediction
          </div>
        </div>

        {/* The Comparison / Evolution Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-neutral-200 border border-neutral-200">
          {machineLearningExpertise.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ backgroundColor: "#ffffff" }}
              className="bg-white/80 backdrop-blur-sm p-12 transition-colors duration-500"
            >
              <div className="flex justify-between items-start mb-10">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2 block">
                    {item.tag}
                  </span>
                  <h3 className="text-3xl font-light text-neutral-900">{item.title}</h3>
                  <p className="text-neutral-500 font-serif italic mt-1">{item.subtitle}</p>
                </div>
              </div>

              <p className="text-sm text-neutral-600 leading-relaxed mb-10 min-h-[60px]">
                {item.desc}
              </p>

              <ul className="space-y-4 mb-8">
                {item.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 mt-2 group-hover:bg-black transition-colors" />
                    <span className="text-sm text-neutral-500 group-hover:text-neutral-900 transition-colors">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
              
              {/* Subtle tech footer for the card */}
              <div className="pt-8 border-t border-neutral-100 text-[10px] font-mono text-neutral-300 uppercase tracking-widest">
                {i === 0 ? "EDA • Scikit-Learn • XGBoost" : "Excel Macros • SQL • Data Pipelines"}
              </div>
            </motion.div>
          ))}
        </div>

        {/* The "Experience" Impact Quote */}
        <div className="mt-24 max-w-4xl mx-auto text-center">
            <h4 className="text-xs uppercase tracking-[0.4em] text-neutral-400 mb-8 font-bold">The Competitive Edge</h4>
            <p className="text-2xl md:text-3xl font-light text-neutral-800 leading-relaxed">
              "Unlike a traditional ML candidate, I bring <span className="font-serif italic text-neutral-500">thirteen years</span> of high-stakes data integrity. 
              I don't just build models; I understand the <span className="font-serif italic text-neutral-500">infrastructure of data</span> at an enterprise scale."
            </p>
        </div>
      </div>
    </section>
  );
}