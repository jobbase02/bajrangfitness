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

      <div className="relative z-20 text-center max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-[7rem] font-[1000] uppercase leading-[0.9] italic tracking-tighter mb-4">
            Built to <br /> <span className="text-orange-500 italic"> Push Limits.</span><br />
            <span className='text-zinc-300'>Haldwani's Gym</span>
          </h1>
          <p className="text-gray-300 font-medium text-sm md:text-base max-w-3xl mx-auto mb-10 leading-relaxed">
            Whether you're a man or a woman, a beginner or an athlete our gym is built for you. Expert trainers, great equipment and a community that keeps you going. <br /> — Pilikothi Road, Haldwani.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a href="/inquire?plan=FreeTrialPass" className="w-full md:w-auto bg-orange-600 text-black px-10 py-4 font-black uppercase text-lg shadow-[0_5px_15px_rgba(234,88,12,0.3)] hover:shadow-orange-500/50 hover:bg-white hover:-translate-y-1 transition-all duration-300">Start Free Trial</a>
            <a href="/#plans" className="w-full md:w-auto border border-white/20 px-10 py-4 font-black uppercase text-lg backdrop-blur-sm hover:border-orange-500 hover:text-orange-500 hover:-translate-y-1 transition-all duration-300 bg-black/30">View Membership Plans</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;