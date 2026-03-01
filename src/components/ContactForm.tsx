import { Send } from 'lucide-react';

export function ContactForm() {
  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="rounded-[2.5rem] border border-white/10 bg-zinc-900/50 p-8 md:p-16 relative overflow-hidden">
          {/* Glow effect */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Ready to scale?
              </h2>
              <p className="text-zinc-400 mb-8">
                Join thousands of companies building the future on Nexus. Request access to our platform today.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-zinc-300">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  Instant API access
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-300">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  Dedicated support channel
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-300">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  Custom volume pricing
                </div>
              </div>
            </div>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-1.5">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full h-12 px-4 rounded-xl bg-zinc-950 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-1.5">Work Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full h-12 px-4 rounded-xl bg-zinc-950 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                  placeholder="jane@company.com"
                />
              </div>
              <div>
                <label htmlFor="volume" className="block text-sm font-medium text-zinc-400 mb-1.5">Expected Monthly Volume</label>
                <select 
                  id="volume" 
                  className="w-full h-12 px-4 rounded-xl bg-zinc-950 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all appearance-none"
                >
                  <option>&lt; 1 Million events</option>
                  <option>1M - 10M events</option>
                  <option>10M - 100M events</option>
                  <option>100M+ events</option>
                </select>
              </div>
              <button className="w-full h-12 mt-4 rounded-xl bg-white text-black font-medium flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors">
                Request Access <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
