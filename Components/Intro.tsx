"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Volume2, VolumeX } from "lucide-react";

export default function OvalVideoFloatingPlayer() {
  const [show, setShow] = useState(false);
  const [muted, setMuted] = useState(true);
  // Ensure 'hasSeen' is derived only after mounting in the browser
  const [hasSeen, setHasSeen] = useState(false); 
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // 1. Ensure we are running on the client (browser)
    if (typeof window !== 'undefined') {
      const seen = sessionStorage.getItem("videoSeen");

      if (seen) {
        setHasSeen(true);
        // Do not auto-show if previously seen
        return; 
      }

      // 2. If not seen, trigger the auto-popup after a delay
      const timer = setTimeout(() => {
        setShow(true);
        // 3. Critically, mark as seen BEFORE closing, as soon as it shows
        sessionStorage.setItem("videoSeen", "true"); 
        setHasSeen(true); // Enable CTA/Rewatch state
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShow(false);
    // Safety mark (already marked, but standard practice)
    if (typeof window !== 'undefined') {
        sessionStorage.setItem("videoSeen", "true");
    }
  };

  const handleOpen = () => {
    setShow(true);
    if (videoRef.current) videoRef.current.play();
  };

  return (
    <>
      {/* 🎬 FLOATING OVAL VIDEO PLAYER */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="fixed bottom-10 right-10 z-[100] flex flex-col items-center"
          >
            {/* The Main Container: Oval Shape */}
            <div className="relative w-44 h-46 rounded-[100px] overflow-hidden shadow-[0_24px_48px_-8px_rgba(0,0,0,0.5)] bg-zinc-950 border-4 border-white/10 group">
              
              {/* Controls Grid (Visible on hover) */}
              <div className="absolute inset-0 z-20 flex justify-between px-6 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={handleClose}
                   aria-label="Close video"
                  className="bg-black/60 backdrop-blur-sm text-white p-2 rounded-full transition-all border border-white/10"
                >
                  <X size={14} />
                </button>
                <button
                  onClick={() => setMuted(!muted)}
                    aria-label={muted ? "Unmute video" : "Mute video"}
                  className="bg-black/60 backdrop-blur-sm text-white p-2 rounded-full transition-all border border-white/10"
                >
                  {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                </button>
              </div>

              {/* LIVE Indicator - Bottom Oval Center */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-red-500/20 border border-red-500/40">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[10px] text-red-100 font-bold uppercase tracking-wider">LIVE INTRO</span>
              </div>

              {/* 🎬 Video */}
              <video
                ref={videoRef}
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                src="/videos/intro.mp4"
                autoPlay
                loop
                muted={muted}
                playsInline
              />
            </div>
            
            {/* Call to action "Listen" if muted */}
            {muted && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                    <span className="text-white text-xs font-medium px-4 py-2 bg-zinc-900/60 rounded-full backdrop-blur-sm shadow-xl">Listen?</span>
                </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ▶️ RE-WATCH CTA (Minimal Loom-style button) */}
      <AnimatePresence>
        {!show && hasSeen && (
          <motion.button
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            onClick={handleOpen}
            className="fixed bottom-10 right-10 z-[90] flex items-center justify-center w-14 h-14 rounded-full bg-white text-black shadow-2xl transition-all"
          >
            <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping opacity-70" />
            <div className="relative z-10 w-4 h-4 rounded-full bg-red-500" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}