"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Facebook, Youtube, MapPin, Phone, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          <div className="space-y-6">
            <div className="relative w-48 h-12">
              <Image
                src="/logo.png"
                alt="Bajrang Fitness Logo"
                fill
                className="object-contain object-left scale-[1.5] origin-left"
              />
            </div>
            <p className="text-gray-500 font-bold text-xs leading-relaxed uppercase tracking-widest max-w-sm">
              Haldwani's premier fitness destination. We don't just build bodies; we build legacies. Join the tribe today.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.instagram.com/bajrangfitness2026/" aria-label="Follow us on Instagram" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-zinc-900 border border-white/5 flex items-center justify-center text-orange-500 hover:bg-orange-600 hover:text-black hover:scale-110 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg">
                <Instagram size={20} aria-hidden="true" />
              </a>
              <a href="#" aria-label="Follow us on Facebook" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-zinc-900 border border-white/5 flex items-center justify-center text-orange-500 hover:bg-orange-600 hover:text-black hover:scale-110 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg">
                <Facebook size={20} aria-hidden="true" />
              </a>
              <a href="#" aria-label="Subscribe to our Youtube Channel" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-zinc-900 border border-white/5 flex items-center justify-center text-orange-500 hover:bg-orange-600 hover:text-black hover:scale-110 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg">
                <Youtube size={20} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="md:pl-12">
            <h3 className="text-white font-black uppercase tracking-widest mb-6 border-l-4 border-orange-600 pl-4">Explore</h3>
            <ul className="space-y-4 text-gray-500 font-bold uppercase text-xs tracking-wider">
              <li>
                <Link href="/about" className="hover:text-orange-500 hover:translate-x-2 inline-block transition-transform duration-300 focus:outline-none focus-visible:text-orange-500 rounded-sm">About Story</Link>
              </li>
              <li>
                <Link href="/#plans" className="hover:text-orange-500 hover:translate-x-2 inline-block transition-transform duration-300 focus:outline-none focus-visible:text-orange-500 rounded-sm">Membership Plans</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-orange-500 hover:translate-x-2 inline-block transition-transform duration-300 focus:outline-none focus-visible:text-orange-500 rounded-sm">The Arena</Link>
              </li>
              <li>
                <Link href="/rules" className="hover:text-orange-500 hover:translate-x-2 inline-block transition-transform duration-300 focus:outline-none focus-visible:text-orange-500 rounded-sm">Gym Rules</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black uppercase tracking-widest mb-6 border-l-4 border-orange-600 pl-4">Location</h3>
            <ul className="space-y-6 text-gray-500 font-bold uppercase text-xs leading-loose">
              <li className="flex gap-4 items-start group">
                <MapPin className="text-orange-600 shrink-0 mt-1 group-hover:scale-110 transition-transform" size={20} aria-hidden="true" />
                <span className="group-hover:text-white transition-colors">Pilikothi Road, Near Narsingh Palace, <br /> OPP Govt. Primary School, Haldwani, Uttarakhand</span>
              </li>
              <li className="flex gap-4 items-center group">
                <Phone className="text-orange-600 shrink-0 group-hover:scale-110 transition-transform" size={20} aria-hidden="true" />
                <div className="flex flex-wrap gap-1">
                  <a href="tel:+918445588806" className="transition-colors hover:text-white underline decoration-orange-600/30 hover:decoration-orange-500 underline-offset-4 focus:outline-none focus-visible:text-white rounded-sm">
                    +91 8445588806
                  </a>
                  <span className="text-gray-500">,</span>
                  <a href="tel:+917253008213" className="transition-colors hover:text-white underline decoration-orange-600/30 hover:decoration-orange-500 underline-offset-4 focus:outline-none focus-visible:text-white rounded-sm">
                    +91 7253008213
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">

          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">
            <p className="text-white/80 flex items-center gap-1.5">
              Made with <Heart size={14} className="text-orange-500" fill="currentColor" aria-hidden="true" /> for Bajrang Fitness Haldwani
            </p>
            <span className="hidden md:inline text-white/20">|</span>
            <Link
              href="/privacy-policy"
              className="hover:text-orange-500 transition-colors underline decoration-white/20 hover:decoration-orange-500 underline-offset-4 focus:outline-none focus-visible:text-orange-500 rounded-sm"
            >
              Privacy Policy
            </Link>
          </div>

          <p className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-500 hover:text-gray-300 transition-colors duration-500">
            Developed By <a href="https://elevenxsolutions.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-sm">elevenxsolutions.com</a>
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;