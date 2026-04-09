"use client";
import { motion } from 'framer-motion';
import { ShieldAlert, Database, Lock, Trash2, EyeOff, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  const policies = [
    {
      icon: <Database className="text-orange-500" size={32} />,
      title: "1. What We Collect",
      description: "We keep it simple. When you submit an inquiry, we only ask for exactly what we need to help you: your Full Name, Contact Number, the Membership Plan you are interested in, and any specific fitness goals or past injuries you choose to share."
    },
    {
      icon: <Lock className="text-orange-500" size={32} />,
      title: "2. How We Use Your Data",
      description: "Your information is used strictly for one purpose: to contact you, answer your queries, and help you get started on your fitness journey at Bajrang Fitness. We do not use your number for annoying promotional spam."
    },
    {
      icon: <EyeOff className="text-orange-500" size={32} />,
      title: "3. Zero-Sell Guarantee",
      description: "Your data is safe and secure. We despise spam as much as you do. We guarantee that we will NEVER sell, rent, or misuse your personal information with any third-party marketing agencies or brokers."
    },
    {
      icon: <Trash2 className="text-orange-500" size={32} />,
      title: "4. Routine Data Deletion",
      description: "We don't hoard your data. Once our team has successfully contacted you regarding your inquiry, your details are routinely wiped from our active inquiry databases to ensure maximum privacy."
    }
  ];

  return (
    <main className="bg-[#050505] min-h-screen selection:bg-orange-600 selection:text-black font-sans">
      <Navbar />

      <section className="pt-40 pb-24 px-4 md:px-8 max-w-4xl mx-auto min-h-[80vh]">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-zinc-900 border border-orange-500/30 p-4 rounded-full shadow-[0_0_30px_rgba(234,88,12,0.15)]">
              <ShieldAlert size={40} className="text-orange-500" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-[1000] uppercase italic tracking-tighter text-white mb-6">
            Privacy <span className="text-orange-500 underline decoration-4 underline-offset-8">Policy</span>
          </h1>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-xs md:text-sm leading-relaxed max-w-2xl mx-auto">
            At Bajrang Fitness, we respect your privacy as much as we respect the grind. Here is exactly how we handle your information.
          </p>
        </motion.div>

        {/* Policy Grid */}
        <div className="space-y-6">
          {policies.map((policy, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zinc-900/50 border border-white/5 p-6 md:p-8 rounded-2xl hover:border-orange-500/30 transition-colors duration-300 flex flex-col md:flex-row gap-6 items-start group"
            >
              <div className="bg-black p-4 rounded-xl shrink-0 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                {policy.icon}
              </div>
              <div>
                <h2 className="text-white font-black uppercase text-xl mb-3 tracking-wide">
                  {policy.title}
                </h2>
                <p className="text-gray-400 font-medium leading-relaxed text-sm md:text-base">
                  {policy.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Assurance */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-orange-600/10 border border-orange-500/30 p-6 rounded-2xl flex items-center justify-center gap-3 text-center"
        >
          <CheckCircle2 className="text-orange-500 shrink-0" size={24} />
          <p className="text-white font-bold uppercase tracking-wider text-xs md:text-sm">
            By submitting an inquiry, you agree to this straightforward policy.
          </p>
        </motion.div>

      </section>

      <Footer />
    </main>
  );
};

export default PrivacyPolicy;