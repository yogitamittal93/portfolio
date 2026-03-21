"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// AvatarPath.tsx
export default function AvatarPath() {
  const avatar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!avatar.current) return;
    gsap.to(avatar.current, {
      x: window.innerWidth - 120,
      ease: "none",
      rotation: 5,
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    // Added 'global-avatar' ID here
    <div id="global-avatar" className="fixed bottom-10 left-0 z-50 pointer-events-none transition-opacity duration-500">
      <div ref={avatar} className="relative w-20 h-40">
        <Image
          src="/avatar.webp"
          alt="Yogita Avatar"
          fill
          className="rounded-full object-cover shadow-lg"
        />
      </div>
    </div>
  );
}