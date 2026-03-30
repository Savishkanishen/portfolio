"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Github, Linkedin, Instagram, MessageCircle, 
  ExternalLink, BookOpen, Award, Code2, Cpu, ChevronRight 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8, delay: 0.5 }
};

export default function Home() {
  const [isReady, setIsReady] = useState(false);
  const [skillTab, setSkillTab] = useState("frontend");

  const skillsData = {
    frontend: ["HTML", "CSS", "JS", "React", "React Native", "Tailwind", "Next.js"],
    backend: ["Java", "Spring Boot", "Python", "PHP", "C#", "C", "C++","MySQL", "SQLite", "MongoDB", "Firebase"],
    tools: ["Postman",  "Git", "Docker", "Oracle Cloud"]
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setIsReady(true);
      window.scrollTo({ top: 0, behavior: 'instant' }); 
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-orange-500 selection:text-white">
      <Navbar />

      <div className={isReady ? "opacity-100 transition-opacity duration-1000 block" : "opacity-0 h-0 overflow-hidden"}>
        
        {/* --- HERO SECTION --- */}
<section className="relative pt-44 pb-24 px-6 md:px-20 overflow-hidden">
  <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600/20 blur-[120px] rounded-full animate-pulse" />
  <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-400/10 blur-[120px] rounded-full" />

  <motion.div {...fadeIn} className="relative z-10 max-w-5xl mx-auto text-center md:text-left">
    <h1 className="text-7xl md:text-9xl font-black text-gradient text-5xl md:text-9xl font-black text-gradient leading-tight">
      SAVISHKA <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 italic">
        NISHEN
      </span>
    </h1>
    <p className="text-gray-400 text-xl md:text-2xl max-w-2xl font-light leading-relaxed mb-10">
      Full-stack Developer & IOT engineer. 
      I build microservices and smart hardware for the next generation of tech.
    </p>
    
    <div className="flex flex-wrap justify-center md:justify-start gap-4">
      {/* --- FIRE FLAME BUTTON --- */}
      <motion.a 
        href="#projects"
        whileHover="hover"
        initial="initial"
        className="relative px-8 py-4 border border-white/10 rounded-full font-bold transition-all group overflow-visible"
      >
        {/* Layered Flame Glows */}
        <motion.div
          variants={{
            initial: { scale: 0, opacity: 0 },
            hover: { scale: 1.5, opacity: 1 }
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          {/* Main Orange Heat */}
          <div className="absolute inset-0 bg-orange-600 blur-2xl rounded-full opacity-40 animate-pulse" />
          {/* Outer Red Glow */}
          <div className="absolute inset-0 bg-red-500 blur-3xl rounded-full opacity-20 scale-125" />
          {/* Bright Core */}
          <div className="absolute inset-0 bg-yellow-400 blur-xl rounded-full opacity-30 -translate-y-2" />
        </motion.div>

        {/* Button Content */}
        <span className="relative z-10 group-hover:text-white transition-colors duration-300">
          View Projects
        </span>

        {/* Glowing Border Edge */}
        <div className="absolute inset-0 rounded-full border border-orange-500/0 group-hover:border-orange-500/50 group-hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] transition-all duration-300" />
      </motion.a>
    </div>
  </motion.div>
</section>

        {/* --- ABOUT & SKILLS SECTION --- */}
        <section id="about" className="py-24 px-6 md:px-20 bg-white/[0.01] border-y border-white/5">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            
            {/* Left: About Text */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-orange-500 font-mono text-sm tracking-[0.3em] uppercase mb-6 underline decoration-orange-500/30 underline-offset-8">
                The Developer
              </h2>
              <h3 className="text-4xl font-bold mb-6 text-white">Bridging Hardware & Software.</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                A Software Engineering student (24.1 Badge) at NIBM with a deep focus on Java Spring Boot/python/.net/  and IoT ecosystems. 
                Whether it's designing RESTful microservices or acoustic pattern detection for agriculture, 
                I thrive on technical complexity.
              </p>
            </motion.div>

            {/* Right: Interactive Tabbed Skills */}
            <div id="skills" className="w-full">
              <h2 className="text-orange-500 font-mono text-sm tracking-[0.3em] uppercase mb-6 underline decoration-orange-500/30 underline-offset-8">
                Technical Arsenal
              </h2>
              
              {/* Tab Selector */}
              <div className="flex gap-2 mb-8 bg-white/5 p-1 rounded-2xl border border-white/5 w-full overflow-x-auto md:w-fit no-scrollbar">
                {["frontend", "backend", "tools"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSkillTab(tab)}
                    className={`relative px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all rounded-xl ${
                      skillTab === tab ? "text-black" : "text-gray-500 hover:text-white"
                    }`}
                  >
                    {skillTab === tab && (
                      <motion.div
                        layoutId="activeSkillTab"
                        className="absolute inset-0 bg-orange-500 rounded-xl z-0"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{tab}</span>
                  </button>
                ))}
              </div>

              {/* Skill Grid */}
              <motion.div layout className="grid grid-cols-2 gap-3">
                <AnimatePresence mode="popLayout">
                  {skillsData[skillTab].map((skill) => (
                    <motion.div
                      key={skill}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-orange-500/30 transition-all group"
                    >
                      <span className="text-gray-400 group-hover:text-white text-sm transition-colors uppercase font-mono tracking-tighter">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- EDUCATION SECTION --- */}
        <section id="education" className="py-24 px-6 md:px-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <h2 className="text-orange-500 font-mono text-sm tracking-[0.3em] uppercase mb-6 underline decoration-orange-500/30 underline-offset-8">
              Academic
            </h2>
            <div className="flex items-center gap-4 mb-16">
              <h2 className="text-4xl font-bold">Education</h2>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:col-span-2 p-6 md:p-10">
              <div className="md:col-span-2 p-10 rounded-[2.5rem] bg-gradient-to-br from-orange-600/10 to-transparent border border-white/10 relative overflow-hidden group">
                <BookOpen className="absolute -right-10 -bottom-10 w-48 h-48 text-white/5 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                <span className="bg-orange-500 text-[10px] text-black font-bold uppercase tracking-widest px-3 py-1 rounded-full">NIBM</span>
                <h3 className="text-2xl md:text-3xl font-bold mt-6 mb-2">BSc (Hons) in Computing</h3>
                <p className="text-orange-400 text-sm mb-4">National Institute of Business Management, Colombo</p>
                <p className="text-gray-400 max-w-md leading-relaxed">Focusing on software engineering, web technologies, and systems development. Contributed to IoT projects and advanced data structures.</p>
                <div className="mt-8 text-orange-400 font-mono text-sm">2024 — Present (2nd year undergraduate)</div>
              </div>

              <div className="space-y-6">
                <CertCard title="Oracle AI" issuer="Oracle Cloud" logo="https://www.oracle.com/a/ocom/img/hp/hp11-oracle-logo-red.png" link="#" color="hover:border-red-500/50" />
                <CertCard title="Postman API" issuer="Postman Student Expert" logo="https://identity.getpostman.com/img/postman-logo-white.svg" link="#" color="hover:border-orange-500/50" />
              </div>
            </div>
          </div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects" className="py-24 px-6 md:px-20 bg-white/[0.01]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">Featured Craft</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <ProjectItem title="Coconut Beetle Detector" desc="Smart IoT hardware using ESP32 to prevent agricultural loss through acoustic analysis." tags={["Hardware", "Firebase", "C++"]} />
              <ProjectItem title="Microservices School Managment" desc="Scalable school management system with high-availability Java backend." tags={["Spring Boot","Java", "MySQL"]} />
              <ProjectItem title="Smart study planner" desc="study plan manager for students that make esy to they usin Ai to make the notes and study plan to syudents " tags={["Data structures","Java", "Gemini (Google Api)"]} />
              <ProjectItem title="leaf creast(brand web)" desc="Web site to a brand that to promote tea for they customers " tags={["Next.js","JavaScript", "Whatsapp msg"]} />
              
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}

{/* --- HELPER COMPONENTS --- */}

function CertCard({ title, issuer, logo, link, color }) {
  return (
    <a href={link} className={`block p-6 rounded-[2rem] bg-white/5 border border-white/5 transition-all duration-500 group ${color}`}>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center overflow-hidden p-2">
          <img src={logo} alt={title} className="w-full object-contain" />
        </div>
        <div>
          <h4 className="font-bold text-sm">{title}</h4>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest">{issuer}</p>
        </div>
      </div>
    </a>
  );
}

function ProjectItem({ title, desc, tags }) {
  return (
    <motion.div 
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative p-1 rounded-[3rem] overflow-hidden bg-gradient-to-br from-white/10 to-transparent hover:from-orange-500/40 transition-all duration-500"
    >
      <div className="bg-[#080808] rounded-[2.9rem] p-10 h-full border border-white/5 group-hover:border-orange-500/20 transition-all">
        <div className="flex justify-between items-start mb-6">
          <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-500">
            <Cpu size={24} className="text-orange-400 group-hover:text-white" />
          </div>
          <ChevronRight className="text-gray-600 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-400 mb-8 leading-relaxed text-sm">{desc}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map(t => (
            <span key={t} className="text-[10px] font-mono text-orange-400 border border-orange-500/20 px-3 py-1 rounded-full bg-orange-500/5 group-hover:bg-orange-500/10">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}