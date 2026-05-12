import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { cn } from '../lib/utils';

const EXPERIENCES = [
  {
    role: "IT Help Desk Specialist",
    company: "Park University",
    location: "Parkville, MO",
    period: "Oct 2025 – Present",
    points: [
      "Serve as a trusted advisor by enforcing security best practices and resolving complex connectivity issues for non-technical stakeholders.",
      "Documented technical solutions and knowledge base articles to streamline support operations and improve system availability."
    ]
  },
  {
    role: "Court Information Security Clerk",
    company: "Platte County Circuit Court",
    location: "Platte City, MO",
    period: "Aug 2025 – Present",
    points: [
      "Manage high-availability digital systems for time-sensitive proceedings, maintaining 100% data integrity.",
      "Ensure operational continuity by strictly adhering to judicial security standards and procedural compliance."
    ]
  },
  {
    role: "Cybersecurity Security Operations Intern",
    company: "SelectQuote Insurance Services",
    location: "Overland Park, KS",
    period: "May 2025 – Aug 2025",
    points: [
      "Managed Tier 1/2 technical support and user lifecycle requests via Active Directory, ensuring secure access control.",
      "Utilized Rapid7 for risk tracking and security ticket management to support corporate compliance and threat mitigation."
    ]
  },
  {
    role: "Associate Client Partner",
    company: "Spotlight Analyst Relations",
    location: "Kansas City, MO",
    period: "Aug 2024 – May 2025",
    points: [
      "Advised technology and fintech clients on risk positioning, regulatory alignment, and market integrity concerns.",
      "Tracked compliance-related KPIs and deliverables, strengthening governance discipline and reporting accuracy."
    ]
  },
  {
    role: "Compliance Analyst",
    company: "UGA Finance",
    location: "Parkville, MO",
    period: "June 2022 – Aug 2024",
    points: [
      "Executed systematic security assessments and compliance testing to identify control gaps, ensuring 100% adherence to federal regulations.",
      "Performed rigorous audits of consumer finance datasets to mitigate regulatory risk and align company policies with evolving legal standards."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-cyber-black">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <span className="text-cyber-green text-xl opacity-50">01.</span>
            PROFESSIONAL_HISTORY
          </h2>
          <div className="h-px flex-1 bg-gradient-to-right from-cyber-green/50 to-transparent" />
        </div>

        <div className="space-y-8">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="cyber-border p-6 rounded-lg glow-hover relative overflow-hidden transition-all">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                  <ShieldCheck size={80} className="text-cyber-green" />
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-cyber-cyan group-hover:text-white transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-cyber-text/60 font-mono text-sm mt-1">
                      <Briefcase size={14} /> 
                      <span className="text-cyber-green">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end text-xs font-mono text-cyber-text/40">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} /> {exp.period}
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin size={12} /> {exp.location}
                    </div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex gap-3 text-cyber-text/80 leading-relaxed text-sm">
                      <span className="text-cyber-green mt-1 text-xs">{">"}</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
