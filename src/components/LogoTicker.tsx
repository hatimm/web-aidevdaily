import { motion } from 'motion/react';

const LOGOS = [
  "Acme Corp", "GlobalTech", "Nexus", "Quantum", "Starlight", "Vanguard", "Zenith",
  "Acme Corp", "GlobalTech", "Nexus", "Quantum", "Starlight", "Vanguard", "Zenith"
];

export function LogoTicker() {
  return (
    <section className="py-10 border-y border-white/5 bg-zinc-950/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <p className="text-center text-sm font-medium text-zinc-500 uppercase tracking-widest">
          Trusted by innovative teams worldwide
        </p>
      </div>
      <div className="relative flex overflow-hidden group">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10" />
        
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          className="flex whitespace-nowrap gap-16 items-center px-8"
        >
          {LOGOS.map((logo, i) => (
            <div key={i} className="text-2xl font-display font-bold text-zinc-700 flex-shrink-0">
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
