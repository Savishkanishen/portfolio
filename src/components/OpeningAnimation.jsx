"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
// Using Lucide icons to represent different Jutsu signs
import { Zap, Flame, Snowflake, Wind, Activity } from "lucide-react";

export default function OpeningAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSign, setCurrentSign] = useState(0);

  const handSigns = [
    <Zap key="1" size={48} />,
    <Flame key="2" size={48} />,
    <Activity key="3" size={48} />,
    <Snowflake key="4" size={48} />,
    <Wind key="5" size={48} />
  ];

  useEffect(() => {
    const signInterval = setInterval(() => {
      setCurrentSign((prev) => (prev + 1) % handSigns.length);
    }, 150);

    const timer = setTimeout(() => {
      clearInterval(signInterval);
      setIsVisible(false);
    }, 2200);

    return () => {
      clearInterval(signInterval);
      clearTimeout(timer);
    };
  }, [handSigns.length]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex pointer-events-none overflow-hidden">
      {/* Top Shutter (Changed bg-indigo-600 to bg-black) */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.9, ease: [0.8, 0, 0.1, 1], delay: 1.4 }}
        className="absolute top-0 left-0 w-full h-1/2 bg-black z-[101] border-b border-white/5 flex items-end justify-center pb-4"
      >
        <span className="text-white font-black text-6xl md:text-9xl opacity-5 tracking-widest uppercase">SAVI</span>
      </motion.div>

      {/* Bottom Shutter (Changed bg-indigo-600 to bg-black) */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "100%" }}
        transition={{ duration: 0.9, ease: [0.8, 0, 0.1, 1], delay: 1.4 }}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-black z-[101] border-t border-white/5 flex items-start justify-center pt-4"
      >
        <span className="text-white font-black text-6xl md:text-9xl opacity-5 tracking-widest uppercase">SHKA</span>
      </motion.div>

      {/* Hand Signs Sequence */}
      <div className="absolute inset-0 flex items-center justify-center z-[102]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSign}
            initial={{ scale: 0.5, opacity: 0, rotate: -20 }}
            animate={{ scale: 1.2, opacity: 1, rotate: 0 }}
            exit={{ scale: 1.5, opacity: 0, rotate: 20 }}
            transition={{ duration: 0.12 }}
            className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]"
          >
            {handSigns[currentSign]}
          </motion.div>
        </AnimatePresence>
        
        {/* Flash effect when signs finish */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0] }} // Slightly lower opacity flash for black theme
          transition={{ delay: 1.3, duration: 0.3 }}
          className="absolute inset-0 bg-white z-[103]"
        />
      </div>
    </div>
  );
}