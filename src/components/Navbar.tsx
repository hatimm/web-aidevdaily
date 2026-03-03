import { motion } from 'motion/react';
import { Hexagon } from 'lucide-react';

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-zinc-950/50 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Hexagon className="w-6 h-6 text-indigo-400" />
          <span className="font-display font-bold text-xl tracking-tight">NEXUS</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#volume" className="hover:text-white transition-colors">Scale</a>
          <a href="#testimonials" className="hover:text-white transition-colors">Customers</a>
        </div>
        <button className="px-4 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-zinc-200 transition-colors">
          Get Started
        </button>
      </div>
    </motion.nav>
  );
}
