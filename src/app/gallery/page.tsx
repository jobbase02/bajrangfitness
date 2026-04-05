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
      <section className="relative pt-30 md:pt-48 md:pb-20 px-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-7xl font-[1000] uppercase italic tracking-tighter text-white leading-none">
              Some Glimpse of <br /> <span className="text-orange-500 underline decoration-4 underline-offset-8">BAJRANG FITNESS</span>
            </h1>
            <p className="text-gray-400 font-bold tracking-[0.4em] uppercase text-xs md:text-sm mt-8 flex items-center justify-center gap-4">
              <Dumbbell size={16} className="text-orange-500" />
              Witness The Vibe
              <Dumbbell size={16} className="text-orange-500" />
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- FLAWLESS DYNAMIC MASONRY GRID --- */}
      <section className="pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Using CSS Columns for true Masonry Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

          {/* THE BRAND TEXT BLOCK (Neo-Brutalist Pop) */}
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="break-inside-avoid relative mb-6 bg-gradient-to-br from-orange-500 to-orange-600 border border-orange-400/30 rounded-3xl overflow-hidden flex flex-col items-center justify-center p-8 text-center shadow-[inset_0_0_40px_rgba(0,0,0,0.4)] min-h-[320px] group"
          >
            <Flame className="text-black mb-4 group-hover:scale-125 transition-transform" size={48} strokeWidth={2} />
            <h3 className="text-2xl lg:text-3xl font-[1000] uppercase italic text-black leading-none drop-shadow-sm">No Excuses</h3>
            <p className="text-white text-[10px] lg:text-xs font-black tracking-[0.3em] uppercase mt-3 drop-shadow-md">Only Results</p>
            <div className="absolute bottom-4 right-4 opacity-20 text-black"><Dumbbell size={64} /></div>
          </motion.div>

          {/* DYNAMIC MEDIA LOOP */}
          {[
            { type: "video", src: "new-video-1.mp4" },
            { type: "video", src: "new-video-2.mp4" },
            { type: "video", src: "AQMKWIbEFi-SXrqgYAtJs-sd-bCJRmKNxVz1uhThNDwm1iyQYXpYI3SWHjvw3c7fJx22QIq3tUEjCwloGA3V8tZ0sOWDs2Zy.mp4" },
            { type: "video", src: "WhatsApp Video 2026-04-04 at 2.02.58 PM.mp4" },
            { type: "image", src: "953612c6-0ce5-43bf-9238-31eab79a165a.jpeg" },
            { type: "video", src: "AQMk_sVbxL8R4ZIdDhltp9gloXJEqSVv4omZYL-B500DdN1q7NkJBYVVnnURxyDCFiYDzp1Q0HiL1Pw2ZARk3ghraLhaGoDf.mp4" },
            { type: "video", src: "WhatsApp Video 2026-04-04 at 2.02.57 PM.mp4" },
            { type: "video", src: "AQN-xPfvJzb5bUsU7k0ea_kvoBB2ZSf6pTcUVJ3gc-w-beUG0srgYYgx72GB9XF2xji_S1lalHcBRlveyMWQ9EknalUqQl2l.mp4" },
            { type: "video", src: "WhatsApp Video 2026-04-04 at 2.02.57 PM (1).mp4" },
            { type: "video", src: "AQN01ru9pFTcdo8cmNyKm_OmSU5d3GyVLEDrOe0ZKt1Fn8_aobgfUyHt0vHQ74YOQgNNvyCf5Y066OBwA9vE4IeU..mp4" },
            { type: "video", src: "Video-788.mp4" },
            { type: "video", src: "AQO8E8rLkW2-4oJ9lVI7hcUj3s6C8C9qGPmS6y5AEdYa4TvRISIFQgdS2sN0MSu1j0awZslO85tLXm1yjk9s9bmmfBajCIfI.mp4" },
            { type: "video", src: "AQO9lXXsr4Jt5TykYO1h1B1ZSTm838dkd7FxL6l7cwI99ezFoA0ssKn5S57e2TG8vkQmOOQnwb4HvWKPOe37-jfZ..mp4" },
            { type: "video", src: "AQOkW-pt4iBHS68d6G__Tg-mVruGPLPMfQw8qDIeU9TK6wBBDyAcUv6bYJGbsNaEl5xGe6knLC8iwbC63T-mjAEpLqCmxQfc.mp4" },
            { type: "video", src: "AQP7pONuymhICQN3iLyx5ftnZAz8_bHbZ67fS4B7sb5rPEXJZvYd5GDctVhHgW8hVs61dA_KLf0EIAD1vo_07acasgIvdgFl.mp4" },
            { type: "video", src: "AQPQGNhl1jn3bAbjylTnwn8w4nn3GWyXqS6IDp14rR0CY1Eo81tY6GQPWlL7DfgJFPwGWQI21V-Y2wmLzasX-nYmNpC5h6qP.mp4" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.1 }}
              className="break-inside-avoid relative bg-zinc-900 border border-white/5 rounded-3xl overflow-hidden group mb-6"
            >
              <div className="absolute inset-0 z-20 shadow-[inset_0_0_60px_rgba(0,0,0,0.9)] pointer-events-none rounded-3xl" />
              {item.type === "video" ? (
                <video
                  autoPlay loop muted playsInline
                  className="w-full h-auto object-cover group-hover:scale-105 transition-all duration-700"
                >
                  <source src={`/gallery/${item.src}`} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={`/gallery/${item.src}`}
                  alt={`Gallery Image ${i}`} width={800} height={800} unoptimized
                  className="w-full h-auto object-cover group-hover:scale-105 transition-all duration-700"
                />
              )}
            </motion.div>
          ))}

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