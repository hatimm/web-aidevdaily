import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          Introducing Nexus 2.0
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8"
        >
          Scale without <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
            compromise.
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-10"
        >
          The ultimate platform for high-volume data processing. Built for teams that demand performance, reliability, and beautiful design.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="h-12 px-8 rounded-full bg-white text-black font-medium flex items-center gap-2 hover:bg-zinc-200 transition-colors w-full sm:w-auto justify-center">
            Start Building <ArrowRight className="w-4 h-4" />
          </button>
          <button className="h-12 px-8 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-colors w-full sm:w-auto justify-center">
            Book a Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
}
