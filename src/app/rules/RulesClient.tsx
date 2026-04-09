"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldAlert, 
  UserCheck, 
  Dumbbell, 
  Clock, 
  Ban, 
  IdCard,
  CheckCircle2,
  Backpack
} from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const RulesPage = () => {
  const rules = [
    {
      icon: <IdCard className="text-orange-500" size={32} />,
      title: "Registration & ID",
      desc: "Every member must provide full details and a valid Government ID proof (Aadhar/Voter ID) during joining."
    },
    {
      icon: <Clock className="text-orange-500" size={32} />,
      title: "1-Day Trial",
      desc: "We offer a 1-day trial period for new joiners to experience the vibe and equipment before committing."
    },
    {
      icon: <Ban className="text-orange-500" size={32} />,
      title: "Strict Dress Code",
      desc: "Only proper gym wear and clean indoor gym shoes are allowed. Formal wear, jeans, or slippers are strictly prohibited."
    },
    {
      icon: <Dumbbell className="text-orange-500" size={32} />,
      title: "Re-Rack Weights",
      desc: "Always put your weights, dumbbells, and plates back in their designated racks after use. Keep the floor clear."
    },
    {
      icon: <UserCheck className="text-orange-500" size={32} />,
      title: "Conduct & Respect",
      desc: "Zero tolerance for misbehavior, shouting, or harassment. Respect fellow members and trainers at all times."
    },
    {
      icon: <Backpack className="text-orange-500" size={32} />,
      title: "Personal Belongings",
      desc: "Members are responsible for their own belongings. The gym management is not liable for any loss or theft."
    }
  ];

  return (
    <main className="bg-[#050505] min-h-screen">
      <Navbar />

      {/* Hero Header for Rules */}
      <section className="relative pt-40 pb-20 px-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-9xl font-[1000] uppercase italic tracking-tighter text-white">
              GYM <span className="text-orange-500">RULES</span>
            </h1>
            <p className="text-gray-500 font-bold tracking-[0.4em] uppercase text-sm mt-4">
              Discipline is the bridge between goals and accomplishment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rules Grid */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rules.map((rule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900/30 border border-white/5 p-10 hover:border-orange-500/50 transition-all group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {rule.icon}
              </div>
              <h3 className="text-2xl font-black uppercase italic text-white mb-4">
                {rule.title}
              </h3>
              <p className="text-gray-400 font-medium leading-relaxed uppercase text-xs tracking-wider">
                {rule.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Warning / Bottom Note */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto bg-orange-600 p-8 md:p-12 text-black text-center relative overflow-hidden">
          <ShieldAlert className="absolute -top-10 -right-10 w-40 h-40 opacity-20" />
          <h2 className="text-3xl font-[1000] uppercase italic mb-4 relative z-10">
            Compliance is Mandatory
          </h2>
          <p className="font-bold uppercase text-sm relative z-10">
            Failure to follow these rules may result in immediate membership cancellation without refund. 
            Let's keep Bajrang Fitness a safe and elite space for everyone.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default RulesPage;