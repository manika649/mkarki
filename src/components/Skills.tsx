import { motion } from 'motion/react';
import { Terminal, Database, Shield, Globe, Users, Code, Server, Settings } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    title: "Security & Compliance",
    icon: <Shield className="text-cyber-green" />,
    skills: ["Rapid7 (Vulnerability Management)", "Onspring (GRC)", "NIST Frameworks", "AML/OFAC", "USA PATRIOT Act"]
  },
  {
    title: "Identity & Access",
    icon: <Users className="text-cyber-cyan" />,
    skills: ["Active Directory (IAM)", "User Lifecycle Management", "Role-Based Access Control"]
  },
  {
    title: "Network Infrastructure",
    icon: <Globe className="text-purple-400" />,
    skills: ["DHCP", "DNS", "VPN", "Network Troubleshooting", "Switch Deployment"]
  },
  {
    title: "Systems & Cloud",
    icon: <Server className="text-orange-400" />,
    skills: ["Cloud IT Support", "Hardware Imaging", "Google Suite", "Microsoft Office"]
  },
  {
    title: "Analytics & Coding",
    icon: <Code className="text-pink-400" />,
    skills: ["Data Analytics", "Python Programming", "Systems Analysis"]
  },
  {
    title: "Governance",
    icon: <Settings className="text-blue-400" />,
    skills: ["Risk Tracking", "Control Gap Analysis", "Security Audits", "AI Governance"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-10 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl font-bold flex items-center gap-3 mb-4">
            <span className="text-cyber-green opacity-50">02.</span>
            TECHNICAL_CAPABILITIES
          </h2>
          <p className="text-cyber-text/60 font-mono text-sm uppercase tracking-widest">
            Scan complete: Core competencies detected
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="cyber-border rounded-xl p-6 glow-hover group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-cyber-white/5 border border-white/10 group-hover:border-cyber-cyan/50 transition-colors">
                  {category.icon}
                </div>
                <h3 className="font-mono font-bold tracking-tight text-white uppercase text-sm">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-2">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i}
                    className="flex items-center justify-between group/item"
                  >
                    <span className="text-sm text-cyber-text/70 group-hover/item:text-white transition-colors">
                      {skill}
                    </span>
                    <div className="h-1 w-1 rounded-full bg-cyber-green opacity-20 group-hover/item:opacity-100 transition-opacity shadow-[0_0_8px_var(--color-cyber-green)]" />
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-cyber-text/30">
                <span>SLOT_{index + 1}</span>
                <span>STATUS: STABLE</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
