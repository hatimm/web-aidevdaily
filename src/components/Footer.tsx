import { Hexagon } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Hexagon className="w-5 h-5 text-indigo-400" />
          <span className="font-display font-bold text-lg tracking-tight">NEXUS</span>
        </div>
        
        <div className="flex gap-8 text-sm text-zinc-500">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
        </div>
        
        <div className="text-sm text-zinc-600">
          © 2026 Nexus Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
