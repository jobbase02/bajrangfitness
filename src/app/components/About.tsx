"use client";
import React, { useState, useEffect } from 'react';
import { Dumbbell, Award, ArrowRight, ChevronLeft, ChevronRight, Target } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
  const videos = [
    "/video1.mp4", 
    "/video2.mp4", 
    "/video3.mp4"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play logic with hover pause
  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
      }, 4000); // Rotates every 4 seconds
      return () => clearInterval(timer);
    }
  }, [isHovered, videos.length]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % videos.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);

  // Calculate position styles for 3D Carousel
  const getPositionStyles = (index: number) => {
    if (index === currentIndex) {
      // CENTER (Active)
      return { x: "0%", scale: 1, rotateZ: 0, zIndex: 30, opacity: 1, filter: "grayscale(0%)" };
    } else if (index === (currentIndex - 1 + videos.length) % videos.length) {
      // LEFT (Slanted Left)
      return { x: "-45%", scale: 0.85, rotateZ: -6, zIndex: 10, opacity: 0.5, filter: "grayscale(100%)" };
    } else {
      // RIGHT (Slanted Right)
      return { x: "45%", scale: 0.85, rotateZ: 6, zIndex: 10, opacity: 0.5, filter: "grayscale(100%)" };
    }
  };

  return (
    <section id="about" className="py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/5 bg-[#050505] overflow-hidden">
      
      {/* SECTION HEADER */}
      <div className="mb-14">
        <h2 className="text-orange-500 font-black tracking-widest uppercase text-sm mb-2 italic">The Arena</h2>
        <h3 className="text-5xl md:text-6xl font-black uppercase italic text-white tracking-tighter">
          WHO WE <span className="text-orange-500 underline decoration-4 underline-offset-8">ARE</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* --- LEFT SIDE: UPGRADED IDENTITY UI (5 Columns) --- */}
        <div className="lg:col-span-5 flex flex-col gap-5 h-full justify-center">
          
          {/* Main Identity Box */}
          <div className="bg-zinc-900/40 p-8 rounded-3xl border border-white/5 relative group overflow-hidden">
            {/* Subtle Glow Effect inside the box */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-orange-600/10 rounded-full blur-[50px] -mr-10 -mt-10 transition-all duration-700 group-hover:bg-orange-600/20" />
            
            <h4 className="text-orange-500 font-black uppercase tracking-widest text-[10px] mb-3">Our Identity</h4>
            <h2 className="text-3xl md:text-4xl font-black uppercase italic text-white leading-[1.1] mb-5">
              Haldwani's Premium<br/>Iron Syndicate
            </h2>
            <p className="text-gray-400 font-bold text-xs uppercase tracking-[0.15em] leading-loose">
              We aren't just a commercial gym. Bajrang Fitness is a sanctuary built for those who demand more. No shortcuts, no gimmicks—just pure dedication and heavy lifting.
            </p>
          </div>

          {/* Two Feature Cards */}
          <div className="grid grid-cols-2 gap-5">
            {/* Gear Card */}
            <div className="bg-zinc-900 border border-white/5 p-6 rounded-3xl hover:border-orange-500/50 transition-colors duration-300 group">
              <Dumbbell className="text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-500" size={32} strokeWidth={1.5} />
              <h3 className="text-white font-black uppercase text-sm md:text-base mb-1">Top-Notch Gear</h3>
              <p className="text-gray-500 font-bold text-[10px] uppercase tracking-widest">Imported Biomechanics</p>
            </div>
            {/* Trainer Card */}
            <div className="bg-zinc-900 border border-white/5 p-6 rounded-3xl hover:border-orange-500/50 transition-colors duration-300 group">
              <Award className="text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-500" size={32} strokeWidth={1.5} />
              <h3 className="text-white font-black uppercase text-sm md:text-base mb-1">Expert Coaches</h3>
              <p className="text-gray-500 font-bold text-[10px] uppercase tracking-widest">5+ Years Experience</p>
            </div>
          </div>

          {/* Dedicated CTA Button */}
          <Link 
            href="/about" 
            className="w-full flex items-center justify-between bg-orange-600 p-6 rounded-3xl hover:bg-white text-black transition-all duration-300 group shadow-[0_5px_20px_rgba(249,115,22,0.15)] hover:shadow-[0_5px_20px_rgba(255,255,255,0.3)] mt-2"
          >
            <span className="font-black uppercase tracking-widest text-sm">Explore Our Full Story</span>
            <div className="bg-black/10 group-hover:bg-black/5 p-2 rounded-full">
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

        </div>

        {/* --- RIGHT SIDE: 3D SLANTED CAROUSEL (7 Columns) --- */}
        <div 
          className="lg:col-span-7 relative h-[500px] md:h-[650px] w-full flex items-center justify-center perspective-[1000px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev} 
            className="absolute left-0 md:-left-2 z-40 bg-black/60 hover:bg-orange-600 text-white p-3 md:p-4 rounded-full border border-white/10 backdrop-blur-md transition-all transform hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={handleNext} 
            className="absolute right-0 md:-right-2 z-40 bg-black/60 hover:bg-orange-600 text-white p-3 md:p-4 rounded-full border border-white/10 backdrop-blur-md transition-all transform hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>

          {/* Videos Container */}
          <div className="relative w-[260px] md:w-[320px] h-[460px] md:h-[560px] flex items-center justify-center">
            <AnimatePresence initial={false}>
              {videos.map((src, index) => {
                const styles = getPositionStyles(index);
                const isActive = index === currentIndex;

                return (
                  <motion.div
                    key={index}
                    className={`absolute top-0 w-full h-full rounded-3xl overflow-hidden border border-white/10 ${isActive ? 'shadow-[0_0_50px_rgba(249,115,22,0.3)] border-orange-500/50' : 'cursor-pointer'}`}
                    animate={{
                      x: styles.x,
                      scale: styles.scale,
                      rotateZ: styles.rotateZ,
                      zIndex: styles.zIndex,
                      opacity: styles.opacity,
                      filter: styles.filter,
                    }}
                    transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }} // Smooth Apple-like spring ease
                    onClick={() => !isActive && setCurrentIndex(index)} 
                  >
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="w-full h-full object-cover"
                    >
                      <source src={src} type="video/mp4" />
                    </video>

                    {/* Dark overlay for inactive videos */}
                    {!isActive && <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;