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
  Instagram
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
            <p className="text-gray-500 font-bold text-sm leading-loose">
              We believe that fitness is not just about looking good, but about developing the discipline and strength of a warrior. Since our inception, we have been committed to providing an atmosphere where every drop of sweat counts. Whether you are a beginner or a pro athlete, our arena is built to push your limits.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-[400px] md:h-[600px] border-l-8 border-orange-600 shadow-[20px_20px_0px_#111]"
          >
            <Image 
              src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069" 
              alt="Gym Interior" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            />
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