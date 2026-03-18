"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false); // Starts hidden for the animation
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
   <motion.nav >
    <div className="bg-black/40 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full flex justify-between items-center relative">
      <span className="font-black tracking-tighter text-sm md:text-base whitespace-nowrap">
        <span className="text-white">Savishka</span>
        <span className="text-orange-500 italic"> Nishen</span>
      </span>

      {/* Desktop Links - Hidden on mobile */}
      <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-gray-400">
        <a href="#projects" className="hover:text-orange-400">Projects</a>
        <a href="#about" className="hover:text-orange-400">About</a>
        <a href="#contact" className="bg-orange-500 text-black px-5 py-2 rounded-full hover:bg-white transition-all">
          Contact
        </a>
      </div>

      {/* Mobile Toggle Button - Visible only on small screens */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white p-2"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-4 bg-black/90 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 md:hidden text-center backdrop-blur-lg">
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-orange-500">Contact</a>
        </div>
      )}
    </div>
  </motion.nav>
  );
}