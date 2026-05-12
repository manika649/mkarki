/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen relative">
      {/* Background Layer */}
      <div className="fixed inset-0 grid-bg opacity-30 pointer-events-none z-0" />
      <div className="fixed inset-0 bg-radial-gradient from-cyber-cyan/5 via-transparent to-transparent opacity-20 pointer-events-none z-0" />
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>

      {/* Access Status Overlay */}
      <div className="fixed bottom-6 left-6 z-50 hidden lg:flex items-center gap-3 font-mono text-[10px] tracking-widest bg-cyber-black/80 backdrop-blur border border-white/10 px-4 py-2 rounded-full shadow-2xl">
        <div className="w-2 h-2 rounded-full bg-cyber-green animate-pulse shadow-[0_0_8px_var(--color-cyber-green)]" />
        <span className="text-cyber-green">ENCRYPTION: AES-256</span>
        <span className="text-white/20">|</span>
        <span className="text-cyber-text/40">USER: M_KARKI</span>
      </div>
    </div>
  );
}

