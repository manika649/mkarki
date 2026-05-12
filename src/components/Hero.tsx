import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, Shield, Cpu, Lock } from 'lucide-react';

const MESSAGES = [
  "INITIALIZING SYSTEM...",
  "ACCESSING BIOMETRIC DATA...",
  "IDENTITY VERIFIED: MANIKA KARKI",
  "RETRIEVING SECURITY PROFILE...",
  "SYSTEM STATUS: SECURE"
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    if (messageIndex < MESSAGES.length) {
      const currentMessage = MESSAGES[messageIndex];
      let i = 0;
      const interval = setInterval(() => {
        setDisplayText(currentMessage.substring(0, i));
        i++;
        if (i > currentMessage.length) {
          clearInterval(interval);
          setTimeout(() => {
            if (messageIndex === MESSAGES.length - 1) {
              setComplete(true);
            } else {
              setMessageIndex(prev => prev + 1);
            }
          }, 1000);
        }
      }, 50);
      return () => clearInterval(interval);
    }
  }, [messageIndex]);

  return (
    <section className="relative min-height-[90vh] flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl w-full"
      >
        <div className="cyber-border rounded-lg p-1 mb-8 shadow-2xl">
          <div className="bg-cyber-black rounded-md overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 bg-cyber-gray/50 border-b border-cyber-green/20">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-cyber-green/50" />
              <div className="ml-2 text-[10px] uppercase tracking-widest text-cyber-green/60 font-mono">
                System Interface v1.0.4 - Security_Core
              </div>
            </div>
            <div className="p-6 font-mono min-h-[160px]">
              <div className="text-cyber-green">
                <span className="opacity-50 mr-2">$</span>
                {displayText}
                <span className="terminal-cursor" />
              </div>
              
              {complete && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 space-y-4"
                >
                  <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
                    MANIKA <span className="text-cyber-cyan">KARKI</span>
                  </h1>
                  <p className="text-lg md:text-xl text-cyber-text/80 max-w-2xl leading-relaxed">
                    Information Systems Professional | Master's Candidate | SecOps & IAM Specialist
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="flex items-center gap-2 px-3 py-1 bg-cyber-green/10 border border-cyber-green/30 rounded text-xs text-cyber-green">
                      <Shield size={14} /> SECURITY OPERATIONS
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded text-xs text-cyber-cyan">
                      <Cpu size={14} /> TECHNICAL COMPLIANCE
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded text-xs text-purple-400">
                      <Lock size={14} /> IAM EXPERT
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {complete && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center text-cyber-text/60 italic text-sm mt-8 max-w-xl mx-auto"
          >
            "Proven track record of managing user lifecycles, performing systematic risk assessments, and enforcing security best practices in fast-paced environments."
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
