"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Flame, ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';

const Cta = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#050505] border-t border-white/5 relative overflow-hidden">

      {/* Background large text effect (Untouched & Intact) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-5 flex flex-col leading-none z-0">
        <span className="text-[15vw] font-[1000] uppercase italic text-transparent stroke-text" style={{ WebkitTextStroke: '2px white' }}>BAJRANG</span>
        <span className="text-[15vw] font-[1000] uppercase italic text-white">FITNESS</span>
      </div>

      {/* Reduced max-w from 5xl to 3xl to make the box smaller */}
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          // Reduced padding (p-8 md:p-12 instead of p-20)
          className="bg-zinc-900/40 border-2 border-dashed border-white/20 p-8 md:p-12 text-center hover:border-orange-500/50 transition-colors duration-500 group rounded-3xl backdrop-blur-sm"
        >
          {/* Subtle Glow inside the box */}
          <div className="absolute inset-0 bg-orange-600/5 group-hover:bg-orange-600/10 transition-colors duration-500 rounded-3xl pointer-events-none" />

          <div className="relative z-20">
            <div className="flex justify-center mb-6">
              {/* Reduced Icon Size */}
              <div className="bg-black p-3 rounded-full border border-orange-500/30 text-orange-500 group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                <Flame size={32} />
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 text-orange-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4">
              <Zap size={14} fill="currentColor" />
              We are waiting
              <Zap size={14} fill="currentColor" />
            </div>

            {/* Reduced Heading Size */}
            <h2 className="text-4xl md:text-5xl font-[1000] uppercase italic text-white leading-tight tracking-tighter mb-6">
              JOIN <span className="text-orange-500 underline decoration-4 underline-offset-8">THE Family?</span>
            </h2>

            {/* Reduced Paragraph Size */}
            <p className="text-gray-400 font-bold text-[10px] md:text-xs uppercase tracking-widest max-w-md mx-auto leading-relaxed mb-8">
              Stop making excuses. Secure your spot in Haldwani's most elite iron syndicate and start your transformation today.
            </p>

            {/* Reduced Button Size */}
            <Link
              href="/inquire"
              className="inline-flex items-center gap-3 bg-orange-600 text-black px-8 py-4 font-black uppercase text-sm md:text-base tracking-widest hover:bg-white transition-all shadow-[6px_6px_0px_rgba(255,255,255,0.15)] hover:shadow-none transform hover:translate-y-1 hover:translate-x-1 group/btn rounded-xl"
            >
              Start Your Journey Today
              <div className="bg-black/10 group-hover/btn:bg-black/5 p-2 rounded-full transition-colors">
                <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Cta;