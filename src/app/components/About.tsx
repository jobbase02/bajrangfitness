"use client";
import { useState, useEffect, useRef } from 'react';
import { Dumbbell, Award, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const SmartCarouselVideo = ({ src, isActive }: { src: string, isActive: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
          }
        });
      },
      { rootMargin: '200px' } 
    );

    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad || !videoRef.current) return;

    if (isActive) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isActive, shouldLoad]);


  const optimizedSrc = src.includes('upload/v') 
    ? src.replace('upload/v', 'upload/f_auto,q_auto/v') 
    : src;
  const posterSrc = optimizedSrc.replace('.mp4', '.jpg');

  return (
    <video
      ref={videoRef}
      loop
      muted
      playsInline
      preload="none"
      disablePictureInPicture
      controlsList="nodownload nofullscreen noremoteplayback"
      poster={posterSrc}
      className="w-full h-full object-cover bg-[#0a0a0a]"
    >
      {shouldLoad && <source src={optimizedSrc} type="video/mp4" />}
    </video>
  );
};

const About = () => {
  const videos = [
    "https://res.cloudinary.com/dvc0zrs3w/video/upload/v1775491727/new-video-1_gyjiso.mp4",
    "https://res.cloudinary.com/dvc0zrs3w/video/upload/v1775491733/lmje1k8drwfxyw12ekb5.mp4",
    "https://res.cloudinary.com/dvc0zrs3w/video/upload/v1775491718/AQPQGNhl1jn3bAbjylTnwn8w4nn3GWyXqS6IDp14rR0CY1Eo81tY6GQPWlL7DfgJFPwGWQI21V-Y2wmLzasX-nYmNpC5h6qP_kv0quv.mp4",
    "https://res.cloudinary.com/dvc0zrs3w/video/upload/v1775491715/AQMk_sVbxL8R4ZIdDhltp9gloXJEqSVv4omZYL-B500DdN1q7NkJBYVVnnURxyDCFiYDzp1Q0HiL1Pw2ZARk3ghraLhaGoDf_dxvyes.mp4"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isIdentityExpanded, setIsIdentityExpanded] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
      }, 4000); 
      return () => clearInterval(timer);
    }
  }, [isHovered, videos.length]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % videos.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);

  const getPositionStyles = (index: number) => {
    if (index === currentIndex) {
  
      return { x: "0%", scale: 1, rotateZ: 0, zIndex: 30, opacity: 1, filter: "grayscale(0%)" };
    } else if (index === (currentIndex - 1 + videos.length) % videos.length) {
      
      return { x: "-45%", scale: 0.85, rotateZ: -6, zIndex: 10, opacity: 0.5, filter: "grayscale(100%)" };
    } else {
      
      return { x: "45%", scale: 0.85, rotateZ: 6, zIndex: 10, opacity: 0.5, filter: "grayscale(100%)" };
    }
  };

  return (
    <section id="about" className="py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/5 bg-[#050505] overflow-hidden">

      <div className="mb-14">
        <h2 className="text-orange-500 font-black tracking-widest uppercase text-sm mb-2 italic">Our Story — Rooted in Haldwani</h2>
        <h3 className="text-5xl md:text-6xl font-black uppercase text-white tracking-tighter">
          We Are More
          Than Gym <br />
          <span className="text-orange-500 font-semibold italic decoration-4 underline-offset-8"> — We're Family.</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        <div className="lg:col-span-5 flex flex-col gap-5 h-full justify-center">

          <div className="bg-zinc-900/40 p-8 rounded-3xl border border-white/5 relative group overflow-hidden">

            <div className="hidden md:block absolute top-0 right-0 w-40 h-40 bg-orange-600/10 rounded-full blur-[50px] -mr-10 -mt-10 transition-all duration-700 group-hover:bg-orange-600/20" />

            <h2 className="text-white font-black uppercase tracking-widest text-lg mb-3 relative z-10">Our Identity</h2>
            <div className="text-gray-400 font-bold text-xs uppercase tracking-[0.15em] leading-loose relative z-10">
              Born and built in <span className="text-white">Haldwani</span>, we started with a simple mission — to give the people of <span className="text-white">Haldwani</span> a fitness space they truly deserve. Not a flashy chain, not a far-away facility. A <span className="text-orange-500">real neighbourhood gym</span> on <span className="text-white">Pilikothi Road</span>, run by people who live here, just like you.

              <div className="md:hidden">
                <div className='mt-3'>Whether you are a student from the local school, a working professional, a homemaker, or someone who just wants to feel better, Our gym in <span className="text-white">Haldwani</span> has a place for you. We have seen beginners become athletes, and we have watched our members grow into a <span className="text-orange-500">tight knit community</span>.</div>
                <div className="mt-3">
                  <span className='text-orange-500'>Our certified trainers</span> know <span className="text-white">Haldwani's lifestyle</span> the food, the weather, the schedules. That means your fitness plan is <span className="text-white">built for your real life</span>, not someone else's.
                </div>
              </div>

              <Link
                href="/about"
                className="hidden md:inline-flex mt-6 items-center gap-2 px-4 py-2 bg-orange-500/10 text-orange-500 hover:bg-orange-600 hover:text-white rounded-full transition-all group tracking-widest text-[10px] font-black"
              >
                KNOW MORE
                <ArrowRight size={14} className="transform transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            
            <div className="bg-zinc-900 border border-white/5 p-6 rounded-3xl hover:border-orange-500/50 transition-colors duration-300 group">
              <Dumbbell className="text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-500" size={32} strokeWidth={1.5} />
              <h3 className="text-white font-black uppercase text-sm md:text-base mb-1">Top-Notch Gear</h3>
              <p className="text-gray-500 font-bold text-[10px] uppercase tracking-widest">Imported Biomechanics</p>
            </div>
            
            <div className="bg-zinc-900 border border-white/5 p-6 rounded-3xl hover:border-orange-500/50 transition-colors duration-300 group">
              <Award className="text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-500" size={32} strokeWidth={1.5} />
              <h3 className="text-white font-black uppercase text-sm md:text-base mb-1">Expert Coaches</h3>
              <p className="text-gray-500 font-bold text-[10px] uppercase tracking-widest">5+ Years Experience</p>
            </div>
          </div>

          
          <div className="bg-zinc-900 rounded-r-3xl rounded-l-md border border-white/5 border-l-[4px] border-l-orange-500 p-6 lg:p-7 relative group shadow-xl my-2 hover:border-orange-500/50 transition-colors duration-300">
            <p className="text-gray-300 font-serif italic text-lg lg:text-xl leading-relaxed mb-6">
              "We wanted to build a gym where people walk in nervous and leave feeling like they belong. That's what we have created here in Haldwani, <span className='text-orange-500'>a home for fitness.</span>"
            </p>
            <div className="flex items-center gap-4">
              
              <div className="w-14 h-14 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                <span className="text-white font-black text-xl tracking-wide">SS</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-white text-base">
                  <span className="font-black">Shivraj Singh Supyal</span> <span className="text-gray-400">— Owner</span>
                </span>
                <span className="text-orange-500/80 font-bold text-xs uppercase tracking-widest mt-1">
                  Pilikothi Road · Haldwani
                </span>
              </div>
            </div>
          </div>

        </div>

        
        <div
          className="lg:col-span-7 relative h-[500px] md:h-[650px] w-full flex items-center justify-center perspective-[1000px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >

          
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
                    transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                    onClick={() => !isActive && setCurrentIndex(index)}
                    onContextMenu={(e) => e.preventDefault()}
                  >
                   
                    <SmartCarouselVideo src={src} isActive={isActive} />

                    {!isActive && <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] pointer-events-none" />}
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