import { motion } from 'motion/react';
import { Mail, Linkedin, Github, MessageSquare, Terminal as TerminalIcon } from 'lucide-react';

const CONTACT_LINKS = [
  {
    name: "Email",
    value: "Manikakarki1@gmail.com",
    href: "mailto:Manikakarki1@gmail.com",
    icon: <Mail className="text-cyber-green" />
  },
  {
    name: "LinkedIn",
    value: "karkimanika",
    href: "https://www.linkedin.com/in/karkimanika/",
    icon: <Linkedin className="text-cyber-cyan" />
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-cyber-gray/30 relative">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <span className="text-cyber-green text-xl opacity-50">03.</span>
            ESTABLISH_UPLINK
          </h2>
          <div className="h-px flex-1 bg-gradient-to-right from-cyber-green/50 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-mono text-white">Let's Secure the Future.</h3>
            <p className="text-cyber-text/70 leading-relaxed">
              Currently seeking opportunities in Security Operations (SecOps), Technical Compliance, and AI Governance. If you're looking for a detail-oriented professional with a strong foundation in risk assessment and IAM, reach out.
            </p>
            
            <div className="flex items-center gap-2 text-cyber-green font-mono text-sm animate-pulse">
              <TerminalIcon size={16} /> Ready for communication_
            </div>
          </div>

          <div className="space-y-4">
            {CONTACT_LINKS.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 cyber-border rounded-lg group hover:bg-cyber-green/5 transition-colors"
              >
                <div className="p-3 bg-cyber-black rounded-lg border border-white/5 group-hover:border-cyber-green/30">
                  {link.icon}
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono text-cyber-text/40 tracking-wider">
                    {link.name}
                  </div>
                  <div className="text-cyber-text/90 font-mono">
                    {link.value}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <footer className="mt-24 pt-8 border-t border-white/5 text-center text-[10px] font-mono text-cyber-text/40 tracking-widest uppercase">
          <p>© 2026 MANIKA KARKI // ALL RIGHTS SECURED</p>
          <p className="mt-2 text-cyber-green/30 italic">Built for Security & Performance</p>
        </footer>
      </div>
    </section>
  );
}
