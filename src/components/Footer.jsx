import { Github, Linkedin, Instagram, MessageCircle, Send, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const socials = [
    { 
      name: "LinkedIn", 
      icon: <Linkedin size={16} />, // Size reduced to 16
      url: "https://linkedin.com/in/your-profile", 
      glow: "group-hover:text-blue-500" 
    },
    { 
      name: "WhatsApp", 
      icon: <MessageCircle size={16} />, // Size reduced to 16
      
      url: "https://wa.me/94705914888", 
      glow: "group-hover:text-green-500" 
    },
    { 
      name: "Instagram", 
      icon: <Instagram size={16} />, // Size reduced to 16
      url: "https://instagram.com/your-profile", 
      glow: "group-hover:text-pink-500" 
    },
    { 
      name: "GitHub", 
      icon: <Github size={16} />, // Size reduced to 16
      url: "https://github.com/Savishkanishen", 
      glow: "group-hover:text-white" 
    },
  ];

  return (
    <footer id="contact" className="pt-24 pb-12 px-6 border-t border-white/5 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Contact Heading */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 italic text-gradient">Let's connect.</h2>
          <p className="text-gray-500 text-base max-w-sm mx-auto">
            Currently looking for new opportunities in Software Engineering and IoT development.
          </p>
          <a href="savishkanishen9@gmail.com" className="inline-flex items-center gap-2 mt-6 text-indigo-400 hover:underline text-sm font-medium">
            Get in touch <Send size={14}/>
          </a>
        </div>
        
        {/* Centered Small Icons */}
        <div className="flex justify-center gap-3 mb-16">
          {socials.map((s) => (
            <a 
              key={s.name} 
              href={s.url} 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-10 h-10 glass-card hover:bg-white/10"
              title={s.name}
            >
              <div className={`transition-all duration-300 ${s.glow}`}>
                {s.icon}
              </div>
            </a>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 font-mono uppercase tracking-[0.2em] pt-8 border-t border-white/5">
          <p>© 2026 Savishka Nishen</p>
          <p>Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}