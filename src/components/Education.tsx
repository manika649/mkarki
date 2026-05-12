import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-24 px-4 bg-cyber-black relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <span className="text-cyber-green text-xl opacity-50">04.</span>
            ACADEMIC_CREDENTIALS
          </h2>
          <div className="h-px flex-1 bg-gradient-to-right from-cyber-green/50 to-transparent" />
        </div>

        <div className="cyber-border rounded-2xl p-8 md:p-12 relative overflow-hidden glow-hover">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <GraduationCap size={160} className="text-cyber-green" />
          </div>

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Park University</h3>
                <p className="text-cyber-cyan font-mono text-lg">Master's in Information Systems and Business Analytics</p>
              </div>
              <div className="text-right">
                <div className="inline-block px-3 py-1 rounded bg-cyber-green/10 border border-cyber-green/30 text-cyber-green font-mono text-xs mb-2">
                  EXPECTED MAY 2027
                </div>
                <p className="text-cyber-text/40 font-mono text-sm">Parkville, MO</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-mono text-cyber-green text-sm uppercase tracking-wider">
                  <BookOpen size={16} /> CORE_CURRICULUM
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Data Analytics", "Python Programming", "Cybersecurity", "Systems Analysis"].map((course, i) => (
                    <span key={i} className="px-3 py-1 bg-cyber-gray rounded text-sm text-cyber-text/80 border border-white/5">
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 font-mono text-cyber-cyan text-sm uppercase tracking-wider">
                  <Award size={16} /> RELEVANT_CERTIFICATIONS
                </div>
                <ul className="space-y-2 text-sm text-cyber-text/70 italic">
                  <li className="flex gap-2">
                    <span className="text-cyber-cyan font-bold">•</span>
                    NIST Cybersecurity Framework Specialist (Applied)
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyber-cyan font-bold">•</span>
                    Vulnerability Management via Rapid7
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyber-cyan font-bold">•</span>
                    GRC Operations (Onspring)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
