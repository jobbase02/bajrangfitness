"use client";
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Dumbbell, Flame, Zap } from 'lucide-react';
import Image from 'next/image';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const SmartVideo = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true); 
            videoRef.current?.play().catch(() => {});
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { rootMargin: '200px' }
    );

    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

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
      className="block w-full h-auto object-cover group-hover:scale-105 transition-all duration-700 pointer-events-none select-none bg-[#0a0a0a]"
    >
      {shouldLoad && <source src={optimizedSrc} type="video/mp4" />}
    </video>
  );
};

const GalleryPage = () => {
  return (
    <main className="bg-[#050505] min-h-screen selection:bg-orange-600">
      <Navbar />

      <section className="relative pt-30 md:pt-48 md:pb-20 px-4 border-b border-white/5 overflow-hidden">
        
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image 
            src="/gallery/953612c6-0ce5-43bf-9238-31eab79a165a.jpeg" 
            alt="Hero Background Texture" 
            fill 
            className="object-cover opacity-[1] grayscale blur-md"
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/80 to-[#050505]" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
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

      <section className="pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="break-inside-avoid relative mb-6 bg-gradient-to-br from-orange-500 to-orange-600 border border-orange-400/30 rounded-3xl overflow-hidden flex flex-col items-center justify-center p-8 text-center shadow-[inset_0_0_40px_rgba(0,0,0,0.4)] min-h-[370px] group"
          >
            <Flame className="text-black mb-4 group-hover:scale-125 transition-transform" size={48} strokeWidth={2} />
            <h3 className="text-2xl lg:text-3xl font-[1000] uppercase italic text-black leading-none drop-shadow-sm">No Excuses</h3>
            <p className="text-white text-[10px] lg:text-xs font-black tracking-[0.3em] uppercase mt-3 drop-shadow-md">Only Results</p>
            <div className="absolute bottom-4 right-4 opacity-20 text-black"><Dumbbell size={64} /></div>
          </motion.div>

          {[
            { type: "video", src: "https://res.cloudinary.com/dvc0zrs3w/video/upload/v1775491735/zbwnb6ol6iidbvpl7ssq.mp4" },
            { type: "video", src: "https://res.cloudinary.com/dvc0zrs3w/video/upload/v1775491733/lmje1k8drwfxyw12ekb5.mp4" },
            { type: "video", src: "https://res.cloudinary.com/dvc0zrs3w/video/upload/v1775491733/arionocumonzpfs1xpfm.mp4" },
            { type: "image", src: "/gallery/953612c6-0ce5-43bf-9238-31eab79a165a.jpeg" },
            { type: "video", src: "https://res.cloudinary.com/dvc0zrs3w/video/upload/v1775491727/new-video-1_gyjiso.mp4" },
            { type: "video", src: "https://res.cloudinary.com/dvc0zrs3w/video/upload/v1775491723/WhatsApp_Video_2026-04-04_at_2.02.57_PM_xjyrwl.mp4" },
            { type: "video", src: "https://res.cloudinary.com/dvc0zrs3w/video/upload/v1775491721/Video-788_wbf2w3.mp4" },
            { type: "video", src: "https://res.cloudinary.com/dvc0zrs3w/video/upload/v1775491720/WhatsApp_Video_2026-04-04_at_2.02.57_PM_1_fay0hu.mp4" },
            { type: "video", src: "https://res.cloudinary.com/dvc0zrs3w/video/upload/v1775491718/AQO8E8rLkW2-4oJ9lVI7hcUj3s6C8C9qGPmS6y5AEdYa4TvRISIFQgdS2sN0MSu1j0awZslO85tLXm1yjk9s9bmmfBajCIfI_yj6l4c.mp4" },
            { type: "video", src: "https://res.cloudinary.com/dvc0zrs3w/video/upload/v1775491718/AQPQGNhl1jn3bAbjylTnwn8w4nn3GWyXqS6IDp14rR0CY1Eo81tY6GQPWlL7DfgJFPwGWQI21V-Y2wmLzasX-nYmNpC5h6qP_kv0quv.mp4" },
            { type: "video", src: "https://res.cloudinary.com/dvc0zrs3w/video/upload/v1775491718/AQOkW-pt4iBHS68d6G__Tg-mVruGPLPMfQw8qDIeU9TK6wBBDyAcUv6bYJGbsNaEl5xGe6knLC8iwbC63T-mjAEpLqCmxQfc_syryno.mp4" },
            { type: "video", src: "https://res.cloudinary.com/dvc0zrs3w/video/upload/v1775491717/AQN01ru9pFTcdo8cmNyKm_OmSU5d3GyVLEDrOe0ZKt1Fn8_aobgfUyHt0vHQ74YOQgNNvyCf5Y066OBwA9vE4IeU._bilb0h.mp4" },
            { type: "video", src: "https://res.cloudinary.com/dvc0zrs3w/video/upload/v1775491716/AQO9lXXsr4Jt5TykYO1h1B1ZSTm838dkd7FxL6l7cwI99ezFoA0ssKn5S57e2TG8vkQmOOQnwb4HvWKPOe37-jfZ._r7kvab.mp4" },
            { type: "video", src: "https://res.cloudinary.com/dvc0zrs3w/video/upload/v1775491715/AQMk_sVbxL8R4ZIdDhltp9gloXJEqSVv4omZYL-B500DdN1q7NkJBYVVnnURxyDCFiYDzp1Q0HiL1Pw2ZARk3ghraLhaGoDf_dxvyes.mp4" },
            { type: "video", src: "https://res.cloudinary.com/dvc0zrs3w/video/upload/v1775491714/AQMKWIbEFi-SXrqgYAtJs-sd-bCJRmKNxVz1uhThNDwm1iyQYXpYI3SWHjvw3c7fJx22QIq3tUEjCwloGA3V8tZ0sOWDs2Zy_nr3xha.mp4" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.1 }}
              onContextMenu={(e) => e.preventDefault()}
              className="break-inside-avoid flex flex-col relative bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden group mb-6"
            >
              <div className="absolute inset-0 z-20 shadow-[inset_0_0_60px_rgba(0,0,0,0.9)] pointer-events-none rounded-3xl" />
              <div className="absolute inset-0 z-30 w-full h-full pointer-events-auto cursor-default" onContextMenu={(e) => e.preventDefault()} />

              {item.type === "video" ? (
                <SmartVideo src={item.src} />
              ) : (
                <Image
                  src={item.src}
                  alt={`Gallery Image ${i}`} width={800} height={800} unoptimized
                  draggable={false}
                  className="block w-full h-auto object-cover group-hover:scale-105 transition-all duration-700 pointer-events-none select-none"
                />
              )}
            </motion.div>
          ))}

        </div>
      </section>

      <section className="pb-24 pt-12 px-4 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="relative bg-orange-600 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden"
        >

          <div className="absolute -inset-10 pointer-events-none z-0 flex flex-wrap gap-8 opacity-[0.08] items-center justify-center rotate-[-5deg]">
            {[...Array(20)].map((_, i) => (
              <Instagram key={i} size={80} className="text-black" />
            ))}
          </div>

          <div className="text-center md:text-left relative z-10">
            <h2 className="text-4xl md:text-5xl font-[1000] uppercase italic text-black leading-none mb-3">
              Want to get <br className="hidden md:block" />
              <span className="text-white">Featured?</span>
            </h2>
            <p className="text-black/80 font-black tracking-widest uppercase text-xs md:text-sm">
              Tag us on your daily grind.
            </p>
          </div>
          
          <a 
            href="https://instagram.com/bajrangfitness2026" 
            target="_blank" 
            rel="noreferrer"
            className="relative z-10 w-full md:w-auto flex items-center justify-center gap-3 bg-black text-orange-500 px-10 py-5 font-black uppercase hover:bg-white hover:text-black transition-colors"
          >
            FOLLOW US <Instagram size={24} />
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
};

export default GalleryPage;