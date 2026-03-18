"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for fast routing
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated Navigation Links
  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Plans", href: "/#plans" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-black/95 py-2 border-b border-orange-500/30' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        
        {/* LOGO REDIRECTS TO HOME (/) */}
        <Link href="/" className="relative z-10 w-32 md:w-48 h-12 md:h-16 flex items-center pl-2 md:pl-4">
          <Image 
            src="/logo.png" 
            alt="Bajrang Fitness" 
            fill 
            className="object-contain object-left scale-[1.5] origin-left" 
            priority 
          />
        </Link>
        
        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 font-black uppercase text-[11px] tracking-widest text-white">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-orange-500 transition-colors">
              {link.name}
            </Link>
          ))}
          <Link href="/inquire" className="bg-orange-600 px-6 py-2.5 text-black hover:bg-white transition-all shadow-[5px_5px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
            JOIN NOW
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button className="md:hidden p-2 text-orange-500" onClick={() => setMobileMenu(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[200] bg-black p-8 flex flex-col justify-center gap-8 text-center"
          >
            <button className="absolute top-8 right-8 text-orange-500" onClick={() => setMobileMenu(false)}>
              <X size={40} />
            </button>
            
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenu(false)} 
                className="text-4xl font-black uppercase italic text-white hover:text-orange-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <Link 
              href="/inquire" 
              onClick={() => setMobileMenu(false)} 
              className="bg-orange-600 text-black py-4 font-black uppercase text-xl mt-4 shadow-[8px_8px_0px_rgba(255,255,255,0.2)]"
            >
              Join Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;