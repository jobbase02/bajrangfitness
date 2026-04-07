"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Facebook, Youtube, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP PART: 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: Brand Section */}
          <div className="space-y-6">
            <div className="relative w-48 h-12">
               <Image 
                src="/logo.png" 
                alt="Bajrang Fitness" 
                fill 
                className="object-contain object-left scale-[1.5] origin-left" 
               />
            </div>
            <p className="text-gray-500 font-bold text-xs leading-relaxed uppercase tracking-widest max-w-sm">
              Haldwani's premier fitness destination. We don't just build bodies; we build legacies. Join the tribe today.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.instagram.com/bajrangfitness2026/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-zinc-900 border border-white/5 flex items-center justify-center text-orange-500 hover:bg-orange-600 hover:text-black hover:scale-110 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-zinc-900 border border-white/5 flex items-center justify-center text-orange-500 hover:bg-orange-600 hover:text-black hover:scale-110 transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-zinc-900 border border-white/5 flex items-center justify-center text-orange-500 hover:bg-orange-600 hover:text-black hover:scale-110 transition-all">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:pl-12">
            <h4 className="text-white font-black uppercase tracking-widest mb-6 border-l-4 border-orange-600 pl-4">Explore</h4>
            <ul className="space-y-4 text-gray-500 font-bold uppercase text-xs tracking-wider">
              <li>
                <Link href="/about" className="hover:text-orange-500 hover:translate-x-2 inline-block transition-transform duration-300">About Story</Link>
              </li>
              <li>
                <Link href="/#plans" className="hover:text-orange-500 hover:translate-x-2 inline-block transition-transform duration-300">Membership Plans</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-orange-500 hover:translate-x-2 inline-block transition-transform duration-300">The Arena</Link>
              </li>
              <li>
                <Link href="/rules" className="hover:text-orange-500 hover:translate-x-2 inline-block transition-transform duration-300">Gym Rules</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest mb-6 border-l-4 border-orange-600 pl-4">Location</h4>
            <ul className="space-y-6 text-gray-500 font-bold uppercase text-xs leading-loose">
              <li className="flex gap-4 items-start group">
                <MapPin className="text-orange-600 shrink-0 mt-1 group-hover:scale-110 transition-transform" size={20} />
                <span className="group-hover:text-white transition-colors">Pilikothi Road, OPP primary school,<br/>Haldwani, Uttarakhand</span>
              </li>
              <li className="flex gap-4 items-center group">
                {/* Icon will still scale when the whole line is hovered */}
                <Phone className="text-orange-600 shrink-0 group-hover:scale-110 transition-transform" size={20} />
                
                {/* Numbers are now handled individually for hover states */}
                <div className="flex flex-wrap gap-1">
                  <a href="tel:+918445588806" className="transition-colors hover:text-white underline decoration-orange-600/30 hover:decoration-orange-500 underline-offset-4">
                    +91 8445588806
                  </a>
                  <span className="text-gray-500">,</span>
                  <a href="tel:+917253008213" className="transition-colors hover:text-white underline decoration-orange-600/30 hover:decoration-orange-500 underline-offset-4">
                    +91 7253008213
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR: Agency Credit & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          
          {/* Eleven X Solutions Credit */}
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">
            Developed By <a href="https://elevenxsolutions.com" target="_blank" rel="noreferrer" className="text-orange-500 hover:text-white transition-colors underline decoration-orange-600/50 hover:decoration-orange-500 underline-offset-4">elevenxsolutions.com</a>
          </p>
          
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">
            Bajrang Fitness
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;