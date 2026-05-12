import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Menu, X, Terminal } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "EXPERIENCE", href: "#experience" },
    { name: "SKILLS", href: "#skills" },
    { name: "CONTACT", href: "#contact" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-cyber-black/80 backdrop-blur-lg border-b border-cyber-green/20 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 group cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="p-1.5 rounded bg-cyber-green text-cyber-black shadow-[0_0_15px_rgba(0,255,65,0.4)] transition-transform group-hover:scale-110">
            <Shield size={20} fill="currentColor" />
          </div>
          <span className="font-mono font-bold tracking-tighter text-white">MK<span className="text-cyber-green">.SEC</span></span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[11px] font-mono tracking-widest text-cyber-text/60 hover:text-cyber-green transition-colors flex items-center gap-1 group"
            >
              <span className="text-cyber-green opacity-0 group-hover:opacity-100 transition-opacity">¬</span>
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="mailto:Manikakarki1@gmail.com"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-5 py-2 border border-cyber-green/50 text-cyber-green text-[11px] font-mono tracking-widest rounded hover:bg-cyber-green/10 transition-colors shadow-[0_0_10px_rgba(0,255,65,0.1)]"
          >
            INITIATE_UPLINK
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-cyber-green"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="fixed inset-0 top-[60px] bg-cyber-black z-40 md:hidden flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-mono tracking-widest text-cyber-text hover:text-cyber-green"
              >
                {link.name}
              </a>
            ))}
            <a
              href="mailto:Manikakarki1@gmail.com"
              className="px-8 py-3 border border-cyber-green text-cyber-green font-mono uppercase tracking-widest rounded"
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
