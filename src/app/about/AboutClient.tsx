"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  Dumbbell,
  Users,
  Droplets,
  ShieldCheck,
  Wind,
  Timer,
  Award,
  Instagram,
  Quote
} from 'lucide-react';
import Image from 'next/image';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const AboutPage = () => {
  const facilities = [
    {
      icon: <Dumbbell className="text-orange-500" size={32} />,
      title: "Brand New Machines",
      desc: "Equipped with the latest biomechanically advanced strength and cardio equipment for maximum gains."
    },
    {
      icon: <Users className="text-orange-500" size={32} />,
      title: "Expert Trainers",
      desc: "Certified professionals to guide your form, posture, and workout splits for safe and fast results."
    },
    {
      icon: <Zap className="text-orange-500" size={32} />,
      title: "Personalized Guidance",
      desc: "Customized diet and workout charts tailored specifically to your body type and fitness goals."
    },
    {
      icon: <Droplets className="text-orange-500" size={32} />,
      title: "RO Water Dispensers",
      desc: "Chilled and purified RO drinking water available 24/7 to keep you hydrated during intense sessions."
    },
    {
      icon: <Wind className="text-orange-500" size={32} />,
      title: "Proper Ventilation",
      desc: "High-power air circulation and exhaust systems to maintain a fresh and odorless environment."
    },
    {
      icon: <ShieldCheck className="text-orange-500" size={32} />,
      title: "Safe Environment",
      desc: "CCTV monitored premises with a dedicated focus on hygiene and member safety."
    }
  ];

  return (
    <main className="bg-[#050505] min-h-screen">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-[1000] uppercase italic tracking-tighter text-white mb-6 leading-none">
              OUR <span className="text-orange-500">STORY</span>
            </h1>
            <p className="text-gray-400 font-medium text-lg leading-relaxed uppercase mb-6 italic">
              Bajrang Fitness started with one mission: To bring elite-level training standards to Haldwani.
            </p>
            <div className='text-gray-400 font-bold text-xs uppercase tracking-[0.15em] leading-loose'>
              Born and built in <span className="text-white">Haldwani</span>, we started with a simple mission — to give the people of <span className="text-white">Haldwani</span> a fitness space they truly deserve. Not a flashy chain, not a far-away facility. A <span className="text-orange-500">real neighbourhood gym</span> on <span className="text-white">Pilikothi Road</span>, run by people who live here, just like you.

              <div className='mt-3'>Whether you are a student from the local school, a working professional, a homemaker, or someone who just wants to feel better, Our gym in <span className="text-white">Haldwani</span> has a place for you. We have seen beginners become athletes, and we have watched our members grow into a <span className="text-orange-500">tight knit community</span>.</div>
              <div className="mt-3">
                <span className='text-orange-500'>Our certified trainers</span> know <span className="text-white">Haldwani's lifestyle</span> the food, the weather, the schedules. That means your fitness plan is <span className="text-white">built for your real life</span>, not someone else's.
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-[400px] md:h-[600px] border-l-8 border-orange-600 shadow-[20px_20px_0px_#111] overflow-hidden group"
            onContextMenu={(e) => e.preventDefault()} // Block right-click
          >
            {/* Anti-Download Invisible Shield */}
            <div className="absolute inset-0 z-10 w-full h-full pointer-events-auto cursor-default" />
            <Image
              src="/gallery/953612c6-0ce5-43bf-9238-31eab79a165a.jpeg"
              alt="Bajrang Fitness Gym Interior in Haldwani" // SEO optimized alt text
              fill
              draggable={false} // Block drag & drop
              className="object-cover transition-all duration-700 pointer-events-none select-none group-hover:scale-105"
            />
          </motion.div>
        </div>
      </section>

      {/* --- FOUNDER MESSAGE SECTION --- */}
      <section className="py-24 px-4 md:px-8 bg-[#050505]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Image Side - Reverse layout compared to Hero */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[450px] md:h-[550px] border-r-8 border-orange-600 shadow-[-20px_20px_0px_#111] overflow-hidden group order-2 md:order-1"
            onContextMenu={(e) => e.preventDefault()}
          >
            <div className="absolute inset-0 z-10 w-full h-full pointer-events-auto cursor-default" />
            <Image
              src="/gallery/owner.jpeg"
              alt="Shivraj Singh Supyal - Founder of Bajrang Fitness"
              fill
              draggable={false}
              className="object-cover object-top transition-all duration-700 pointer-events-none select-none group-hover:scale-105"
            />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-orange-500"></div>
              <h2 className="text-orange-500 font-black tracking-[0.3em] uppercase text-sm">Meet The Founder</h2>
            </div>

            <h3 className="text-5xl md:text-6xl font-[1000] uppercase italic tracking-tighter text-white mb-8 leading-none">
              MORE THAN JUST <br /><span className="text-orange-500">A GYM</span>
            </h3>

            <div className="relative">
              <Quote className="absolute -top-6 -left-6 text-white/5" size={80} />
              <p className="text-gray-300 font-medium text-base md:text-lg leading-relaxed mb-8 relative z-10">
                "When I envisioned Bajrang Fitness, the goal wasn't just to open another business. It was to build a community for the people of Haldwani. A place where genuine fitness and hard work are prioritized over flashy trends. We've brought in the best equipment, but what truly makes this place special is the dedication of our members. This isn't just my gym; it's our iron sanctuary."
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-white/10 pt-8 mt-4">
              <div>
                <h4 className="text-white font-black text-xl uppercase tracking-wider">Shivraj Singh Supyal</h4>
                <p className="text-orange-500 font-bold text-xs uppercase tracking-widest mt-1">Owner & Founder</p>
              </div>

              {/* Social Icon */}
              <a
                href="https://www.instagram.com/shivraj2879"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                aria-label="Follow Owner on Instagram"
              >
                <Instagram className="text-gray-400 group-hover:text-black transition-colors" size={20} />
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* --- WHAT WE PROVIDE SECTION --- */}
      <section className="py-24 bg-zinc-950 px-4 md:px-8 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-orange-500 font-black tracking-[0.3em] uppercase text-sm mb-2">The Bajrang Advantage</h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase italic text-white">WHAT WE <span className="underline decoration-orange-600 decoration-4 underline-offset-8">PROVIDE</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black/40 border border-white/10 p-10 hover:bg-zinc-900 transition-all group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-xl font-black uppercase text-white mb-4 italic tracking-tight group-hover:text-orange-500 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto border-2 border-dashed border-orange-600/30 p-12">
          <Award className="text-orange-500 mx-auto mb-6" size={48} />
          <h2 className="text-4xl font-black uppercase italic mb-6 text-white">Ready to join the Iron Paradise?</h2>
          <a href="/#plans" className="inline-block bg-orange-600 text-black px-12 py-4 font-black uppercase text-lg hover:bg-white transition-all">
            See Memberships
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;