"use client";
import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, ShieldCheck, Zap } from 'lucide-react';
import Image from 'next/image';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

// Form Component (Separated to safely use useSearchParams with Suspense)
const InquireForm = () => {
  const searchParams = useSearchParams();
  const planParam = searchParams.get('plan');
  const [selectedPlan, setSelectedPlan] = useState('');

  // Auto-select plan from URL
  useEffect(() => {
    if (planParam) {
      setSelectedPlan(planParam);
    }
  }, [planParam]);

  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      
      {/* Auto-Selected Plan Banner (Only shows if redirected from Plans) */}
      {planParam && (
        <div className="bg-orange-600/10 border border-orange-500/30 p-4 flex items-center gap-3 mb-6">
          <ShieldCheck className="text-orange-500" size={24} />
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500">Selected Plan</p>
            <p className="text-white font-bold uppercase tracking-wide">{planParam} Membership</p>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <input 
          type="text" 
          placeholder="FULL NAME" 
          required 
          className="w-full bg-[#050505] border-2 border-white/10 p-5 focus:border-orange-500 outline-none font-bold text-white transition-colors uppercase placeholder:text-gray-700 hover:border-white/20" 
        />
        <input 
          type="tel" 
          placeholder="PHONE NUMBER" 
          required 
          className="w-full bg-[#050505] border-2 border-white/10 p-5 focus:border-orange-500 outline-none font-bold text-white transition-colors uppercase placeholder:text-gray-700 hover:border-white/20" 
        />
      </div>

      <div className="relative">
        <select 
          value={selectedPlan} 
          onChange={(e) => setSelectedPlan(e.target.value)}
          required
          className="w-full bg-[#050505] border-2 border-white/10 p-5 focus:border-orange-500 outline-none font-bold text-white transition-colors uppercase cursor-pointer appearance-none hover:border-white/20"
        >
          <option value="" disabled className="text-gray-600">-- SELECT YOUR MEMBERSHIP PLAN --</option>
          <option value="Starter">STARTER (1 MONTH)</option>
          <option value="Quarterly">QUARTERLY (3 MONTHS) - MOST POPULAR</option>
          <option value="Half Yearly">HALF YEARLY (6 MONTHS)</option>
          <option value="Annual Elite">ANNUAL ELITE (12 MONTHS)</option>
        </select>
        {/* Custom Dropdown Arrow */}
        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-orange-500">
          ▼
        </div>
      </div>

      <textarea 
        placeholder="ANY SPECIFIC GOALS OR PAST INJURIES? (OPTIONAL)" 
        rows={3} 
        className="w-full bg-[#050505] border-2 border-white/10 p-5 focus:border-orange-500 outline-none font-bold text-white transition-colors uppercase resize-none placeholder:text-gray-700 hover:border-white/20"
      ></textarea>
      
      <button 
        type="submit" 
        className="w-full bg-orange-600 py-6 text-black font-black uppercase tracking-widest hover:bg-white transition-all shadow-[8px_8px_0px_rgba(255,255,255,0.1)] hover:shadow-none flex items-center justify-center gap-3 group transform hover:translate-y-1 hover:translate-x-1"
      >
        Submit Registration <Send size={20} className="group-hover:translate-x-2 transition-transform" />
      </button>
      
      <p className="text-[10px] text-gray-500 font-bold uppercase text-center mt-4 tracking-wider">
        * Our team will contact you within 24 hours to confirm your slot.
      </p>
    </form>
  );
}

const InquirePage = () => {
  return (
    <main className="bg-[#050505] min-h-screen selection:bg-orange-600 selection:text-black">
      <Navbar />
      
      <section className="pt-40 pb-24 px-4 min-h-screen flex items-center border-b border-white/5 relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 z-0 opacity-10">
          <Image src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069" alt="Texture" fill className="object-cover grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* LEFT SIDE: Typography & Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-2 text-orange-500 mb-6 font-black uppercase text-xs tracking-[0.3em]">
              <Zap size={16} fill="currentColor" /> Application Form
            </div>
            <h1 className="text-6xl md:text-[5.5rem] font-[1000] uppercase italic tracking-tighter text-white leading-[0.85] mb-8">
              SECURE YOUR <br/> <span className="text-orange-500 underline decoration-4 underline-offset-8">SPOT</span>
            </h1>
            <p className="text-gray-400 font-bold uppercase tracking-wider text-sm max-w-md leading-relaxed mb-12">
              Step into Haldwani's most elite iron paradise. Fill out the application and our team will get back to you to finalize your enrollment.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-zinc-900 border border-white/10 flex items-center justify-center text-orange-500">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-gray-500 font-black uppercase text-[10px] tracking-widest">Call Us</p>
                  <p className="text-lg font-black tracking-tighter text-white">+91 8445588806</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-zinc-900 border border-white/10 flex items-center justify-center text-orange-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-gray-500 font-black uppercase text-[10px] tracking-widest">Location</p>
                  <p className="text-sm font-bold uppercase tracking-tight text-white leading-tight">Pilikothi Road, OPP primary school<br/>Haldwani, UK</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* RIGHT SIDE: The Form Box */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="bg-zinc-900 border border-white/10 p-8 md:p-12 relative overflow-hidden shadow-2xl">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-2 bg-orange-600" />
              
              <h3 className="text-3xl font-black uppercase italic text-white mb-8">Join The <span className="text-orange-500">Tribe</span></h3>
              
              <Suspense fallback={<div className="text-orange-500 text-center font-black uppercase animate-pulse py-20">Loading secure form...</div>}>
                <InquireForm />
              </Suspense>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
};

export default InquirePage;