import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "Nexus completely transformed how we handle our data pipeline. We're processing 10x the volume with half the infrastructure costs.",
    author: "Sarah Jenkins",
    role: "CTO at Vanguard",
    avatar: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    quote: "The sleekest interface I've ever used for enterprise software. It feels like a consumer app but packs serious industrial power.",
    author: "David Chen",
    role: "Lead Engineer at Quantum",
    avatar: "https://picsum.photos/seed/david/100/100"
  },
  {
    quote: "When we hit our viral growth phase, Nexus didn't even blink. The volume scaling is truly magical.",
    author: "Elena Rodriguez",
    role: "Founder at Starlight",
    avatar: "https://picsum.photos/seed/elena/100/100"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Loved by engineering teams.
          </h2>
          <p className="text-zinc-400">Don't just take our word for it.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl border border-white/10 bg-zinc-900/30 p-8 relative group"
            >
              <Quote className="w-10 h-10 text-white/5 absolute top-6 right-6" />
              <p className="text-lg text-zinc-300 mb-8 relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full border border-white/10"
                />
                <div>
                  <div className="font-medium text-white">{testimonial.author}</div>
                  <div className="text-sm text-zinc-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
