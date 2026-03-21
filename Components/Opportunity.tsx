"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IconType } from "react-icons";

import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiWordpress,
  SiLaravel,
  SiPhp,
  SiTypescript,
  SiJquery,
  SiSemrush,
  SiHubspot,
} from "react-icons/si";

/* ✅ Proper typing */
type SkillItem =
  | { type: "icon"; icon: IconType }
  | { type: "image"; src: string };

const skills: SkillItem[] = [
  { type: "icon", icon: SiReact },
  { type: "icon", icon: SiNextdotjs },
  { type: "icon", icon: SiTypescript },
  { type: "icon", icon: SiNodedotjs },
  { type: "icon", icon: SiPhp },
  { type: "icon", icon: SiLaravel },
  { type: "icon", icon: SiWordpress },
  { type: "icon", icon: SiMongodb },
  { type: "icon", icon: SiPostgresql },
  { type: "icon", icon: SiDocker },
  { type: "icon", icon: SiJquery },
  { type: "icon", icon: SiSemrush },
  { type: "icon", icon: SiHubspot },

  // custom logos
  { type: "image", src: "/logos/klaviyo.svg" },
  { type: "image", src: "/logos/kaliocommerce.svg" },
];

const radius = 180;

export default function Opportunity() {
  return (
    <section className="py-32 bg-[#FAF9F6] flex flex-col items-center">

      {/* TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-semibold mb-3">
          Systems I Work With
        </h2>
        <p className="text-gray-600">
          Connecting tools, data and workflows into scalable systems
        </p>
      </div>

      {/* CONTAINER */}
      <div className="relative w-[500px] h-[500px] flex items-center justify-center">

        {/* CENTER */}
        <div className="absolute z-10 flex items-center justify-center">
          <div className="absolute w-40 h-40 bg-indigo-300 blur-3xl opacity-30 rounded-full"></div>

          <div className="w-24 h-24 rounded-full bg-indigo-500 text-white flex items-center justify-center font-semibold text-lg shadow-lg">
            Y
          </div>
        </div>

        {/* SVG LINES */}
        <svg className="absolute w-full h-full">
          {skills.map((_, i) => {
            const angle = (i / skills.length) * 2 * Math.PI;

            const x = 250 + radius * Math.cos(angle);
            const y = 250 + radius * Math.sin(angle);

            return (
              <line
                key={i}
                x1="250"
                y1="250"
                x2={x}
                y2={y}
                stroke="rgba(0,0,0,0.15)"
                strokeWidth="1"
              />
            );
          })}
        </svg>

        {/* SKILL NODES */}
        {skills.map((item, i) => {
          const angle = (i / skills.length) * 2 * Math.PI;

          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <motion.div
              key={i}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3 + i * 0.2,
                repeat: Infinity,
              }}
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
              className="absolute w-12 h-12 flex items-center justify-center 
              bg-white border border-black/10 rounded-xl shadow-sm"
            >
              {/* ✅ FIXED RENDER */}
              {item.type === "icon" ? (
                <item.icon size={22} />
              ) : (
                <Image
                  src={item.src}
                  alt="logo"
                  width={22}
                  height={22}
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}