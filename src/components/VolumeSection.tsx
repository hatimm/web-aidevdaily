import { motion } from 'motion/react';
import { Activity, Zap, Database, Shield } from 'lucide-react';

const FEATURES = [
  {
    icon: <Activity className="w-6 h-6 text-indigo-400" />,
    title: "High-Volume Processing",
    description: "Handle millions of events per second with our distributed architecture designed for massive scale."
  },
  {
    icon: <Zap className="w-6 h-6 text-violet-400" />,
    title: "Sub-millisecond Latency",
    description: "Optimized routing and edge computing ensures your data arrives instantly, every single time."
  },
  {
    icon: <Database className="w-6 h-6 text-emerald-400" />,
    title: "Infinite Storage",
    description: "Never worry about capacity again. Our elastic storage scales automatically as your volume grows."
  },
  {
    icon: <Shield className="w-6 h-6 text-rose-400" />,
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance built-in, protecting your data at any volume."
  }
];

export function VolumeSection() {
  return (
    <section id="volume" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Built for unprecedented volume.
          </h2>
          <p className="text-lg text-zinc-400">
            Whether you're processing thousands or billions of requests, our infrastructure adapts in real-time to meet your demands without breaking a sweat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Big Feature Card */}
          <div className="md:col-span-2 rounded-3xl border border-white/10 bg-zinc-900/50 p-8 md:p-12 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-medium text-indigo-300 mb-6">
                  Volume Engine
                </div>
                <h3 className="font-display text-3xl font-bold mb-4">10B+ Requests Daily</h3>
                <p className="text-zinc-400 mb-8">
                  Our proprietary volume engine ingests, processes, and routes data at a scale previously thought impossible. Watch your metrics soar while latency stays flat.
                </p>
                <div className="flex items-center gap-8">
                  <div>
                    <div className="text-3xl font-display font-bold text-white mb-1">99.999%</div>
                    <div className="text-sm text-zinc-500">Uptime SLA</div>
                  </div>
                  <div>
                    <div className="text-3xl font-display font-bold text-white mb-1">&lt;1ms</div>
                    <div className="text-sm text-zinc-500">Avg Latency</div>
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full h-64 bg-zinc-950 rounded-2xl border border-white/5 relative overflow-hidden flex items-end p-4 gap-2">
                {/* Simulated Chart */}
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: "10%" }}
                    animate={{ height: `${Math.random() * 80 + 20}%` }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: i * 0.1 }}
                    className="flex-1 bg-indigo-500/50 rounded-t-sm"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Smaller Feature Cards */}
          {FEATURES.map((feature, i) => (
            <div key={i} className="rounded-3xl border border-white/10 bg-zinc-900/30 p-8 hover:bg-zinc-900/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 border border-white/5">
                {feature.icon}
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
