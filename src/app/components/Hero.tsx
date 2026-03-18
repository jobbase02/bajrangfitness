"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] md:h-screen flex items-center justify-center pt-20 px-4">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-black/60 z-10" />
        <Image src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070" alt="Gym" fill className="object-cover opacity-40 grayscale" />
      </div>

      <div className="relative z-20 text-center max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-[9rem] font-[1000] uppercase leading-[0.9] italic tracking-tighter mb-4">
            SORE <span className="text-orange-500 italic">TODAY</span><br />
            STRONG <span className="text-white">TOMORROW</span>
          </h1>
          <p className="text-gray-400 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-8">Bajrang Fitness • Haldwani</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
             <a href="/inquire" className="w-full md:w-auto bg-orange-600 text-black px-10 py-4 font-black uppercase text-lg shadow-lg">Join the tribe</a>
             <a href="/about" className="w-full md:w-auto border border-white/20 px-10 py-4 font-black uppercase text-lg backdrop-blur-sm">Learn More</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;