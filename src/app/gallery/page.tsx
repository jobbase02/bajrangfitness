"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Play, Instagram, Dumbbell, Flame, Zap } from 'lucide-react';
import Image from 'next/image';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const GalleryPage = () => {
  return (
    <main className="bg-[#050505] min-h-screen selection:bg-orange-600">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-48 pb-20 px-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-[1000] uppercase italic tracking-tighter text-white leading-none">
              ARENA IN <span className="text-orange-500 underline decoration-4 underline-offset-8">MOTION</span>
            </h1>
            <p className="text-gray-400 font-bold tracking-[0.4em] uppercase text-xs md:text-sm mt-8 flex items-center justify-center gap-4">
              <Dumbbell size={16} className="text-orange-500" />
              Witness The Iron Vibe
              <Dumbbell size={16} className="text-orange-500" />
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- FLAWLESS MASONRY GRID --- */}
      <section className="pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Explicit 3x3 Grid for Desktop to guarantee NO gaps. Stacks normally on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[280px] lg:auto-rows-[320px]">
          
          {/* 1. VIDEO 1 (Tall: Col 1, Row 1 & 2) */}
          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} 
            className="md:col-start-1 md:row-start-1 md:row-span-2 relative bg-zinc-900 border border-white/5 rounded-3xl overflow-hidden group aspect-[9/16] md:aspect-auto"
          >
            {/* Faded Blur Effect Overlay */}
            <div className="absolute inset-0 z-20 shadow-[inset_0_0_60px_rgba(0,0,0,0.9)] pointer-events-none rounded-3xl" />
            <video autoPlay loop muted playsInline className="w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-700">
              <source src="/video1.mp4" type="video/mp4" />
            </video>
          </motion.div>

          {/* 2. TEXT/INFO BLOCK (Theme Orange) */}
          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} 
            className="md:col-start-2 md:row-start-1 md:row-span-1 relative bg-gradient-to-br from-orange-500 to-orange-600 border border-orange-400/30 rounded-3xl overflow-hidden flex flex-col items-center justify-center p-8 text-center shadow-[inset_0_0_40px_rgba(0,0,0,0.4)] aspect-square md:aspect-auto group"
          >
            <Flame className="text-black mb-4 group-hover:scale-125 transition-transform" size={48} strokeWidth={2} />
            <h3 className="text-2xl lg:text-3xl font-[1000] uppercase italic text-black leading-none drop-shadow-sm">No Excuses</h3>
            <p className="text-white text-[10px] lg:text-xs font-black tracking-[0.3em] uppercase mt-3 drop-shadow-md">Only Results</p>
            <div className="absolute bottom-4 right-4 opacity-20 text-black"><Dumbbell size={64} /></div>
          </motion.div>

          {/* 3. VIDEO 3 (Tall: Col 3, Row 1 & 2) */}
          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} 
            className="md:col-start-3 md:row-start-1 md:row-span-2 relative bg-zinc-900 border border-white/5 rounded-3xl overflow-hidden group aspect-[9/16] md:aspect-auto"
          >
            <div className="absolute inset-0 z-20 shadow-[inset_0_0_60px_rgba(0,0,0,0.9)] pointer-events-none rounded-3xl" />
            <video autoPlay loop muted playsInline className="w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-700">
              <source src="/video3.mp4" type="video/mp4" />
            </video>
          </motion.div>

          {/* 4. VIDEO 2 (Tall: Col 2, Row 2 & 3) */}
          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} 
            className="md:col-start-2 md:row-start-2 md:row-span-2 relative bg-zinc-900 border border-white/5 rounded-3xl overflow-hidden group aspect-[9/16] md:aspect-auto"
          >
            <div className="absolute inset-0 z-20 shadow-[inset_0_0_60px_rgba(0,0,0,0.9)] pointer-events-none rounded-3xl" />
            <video autoPlay loop muted playsInline className="w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-700">
              <source src="/video2.mp4" type="video/mp4" />
            </video>
          </motion.div>

          {/* 5. IMAGE 1 (Square: Col 1, Row 3) */}
          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} 
            className="md:col-start-1 md:row-start-3 md:row-span-1 relative bg-zinc-900 border border-white/5 rounded-3xl overflow-hidden group aspect-square md:aspect-auto"
          >
            <div className="absolute inset-0 z-20 shadow-[inset_0_0_60px_rgba(0,0,0,0.9)] pointer-events-none rounded-3xl" />
            <Image 
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80" 
              alt="Gym View" fill unoptimized
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
            />
          </motion.div>

          {/* 6. IMAGE 2 (Square: Col 3, Row 3) */}
          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} 
            className="md:col-start-3 md:row-start-3 md:row-span-1 relative bg-zinc-900 border border-white/5 rounded-3xl overflow-hidden group aspect-square md:aspect-auto"
          >
            <div className="absolute inset-0 z-20 shadow-[inset_0_0_60px_rgba(0,0,0,0.9)] pointer-events-none rounded-3xl" />
            <Image 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070" 
              alt="Gym Equipment" fill unoptimized
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
            />
          </motion.div>

        </div>
      </section>

      {/* --- BOTTOM CTA (Blended Seamlessly) --- */}
      {/* Removed border-t, removed bg-zinc-950, adjusted padding so it flows naturally from the grid to the footer */}
      <section className="pb-24 pt-12 px-4 text-center bg-[#050505]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-10 text-white">Join the <span className="text-orange-500">Movement</span></h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a href="https://instagram.com/bajrangfitness2026" target="_blank" className="w-full md:w-auto flex items-center justify-center gap-3 bg-orange-600 text-black px-12 py-5 font-black uppercase hover:bg-white transition-all shadow-[0_10px_20px_rgba(249,115,22,0.3)] rounded-xl">
              INSTAGRAM <Instagram size={20} />
            </a>
            <a href="/inquire" className="w-full md:w-auto border border-white/20 text-white px-12 py-5 font-black uppercase hover:border-orange-600 hover:text-orange-500 transition-all bg-black rounded-xl">
              JOIN THE TRIBE
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default GalleryPage;