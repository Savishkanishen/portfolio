"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false); // Starts hidden for the animation
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  // 1. Handle the Initial Page Load (Naruto Animation)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2200); // Matches the end of your shutter animation
    return () => clearTimeout(timer);
  }, []);

  // 2. Handle the Scroll Detection
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    
    // If scrolling down and passed the hero section (200px)
    if (latest > previous && latest > 200) {
      setIsScrollingDown(true);
    } 
    // If scrolling up
    else {
      setIsScrollingDown(false);
    }
  });

  return (
    <motion.nav
      // Control position: 
      // - If not visible yet: stay at -100
      // - If scrolling down: stay at -100
      // - Otherwise: show at 0
      animate={{ 
        y: (!isVisible || isScrollingDown) ? -100 : 0,
        opacity: (!isVisible || isScrollingDown) ? 0 : 1 
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[60] w-[90%] max-w-4xl pointer-events-auto"
    >
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full flex justify-between items-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        
        {/* Logo - Matching your Orange Theme */}
        <span className="font-black tracking-tighter text-sm md:text-base">
          <span className="text-white">Savishka</span>
          <span className="text-orange-500 italic"> Nishen</span>
        </span>

        {/* Links */}
        <div className="flex items-center gap-4 md:gap-8 text-[11px] font-bold uppercase tracking-widest text-gray-400">
          <a href="#projects" className="hover:text-orange-400 transition-colors">Projects</a>
          <a href="#about" className="hover:text-orange-400 transition-colors">About</a>
          <a href="#contact" className="bg-orange-500 text-black px-5 py-2 rounded-full hover:bg-white transition-all duration-300">
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}