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
    // Added aria-label to the main nav tag for clear landmark navigation
    <nav aria-label="Main Navigation" className={`fixed w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-black/95 py-2 border-b border-orange-500/30' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        
        {/* LOGO REDIRECTS TO HOME (/) */}
        {/* Added aria-label for screen readers to know this is the home button */}
        <Link href="/" aria-label="Bajrang Fitness Home" className="relative z-10 w-32 md:w-48 h-12 md:h-16 flex items-center pl-2 md:pl-4">
          <Image 
            src="/logo.png" 
            alt="Bajrang Fitness Logo" 
            fill 
            className="object-contain object-left scale-[1.5] origin-left" 
            priority 
          />
        </Link>
        
        {/* DESKTOP MENU - Changed to semantic ul/li list */}
        <ul className="hidden md:flex items-center gap-8 font-black uppercase text-[11px] tracking-widest text-white">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="hover:text-orange-500 transition-colors">
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/inquire" className="bg-orange-600 px-6 py-2.5 text-black hover:bg-white transition-all shadow-[5px_5px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 block">
              JOIN NOW
            </Link>
          </li>
        </ul>

        {/* MOBILE MENU TOGGLE */}
        {/* FIX: Added aria-label, aria-expanded, and aria-controls for accessibility */}
        <button 
          className="md:hidden p-2 text-orange-500" 
          onClick={() => setMobileMenu(true)}
          aria-label="Open main menu"
          aria-expanded={mobileMenu}
          aria-controls="mobile-menu-dialog"
        >
          <Menu size={28} aria-hidden="true" />
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            id="mobile-menu-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            initial={{ opacity: 0, x: '100%' }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[200] bg-black p-8 flex flex-col justify-center gap-8 text-center"
          >
            {/* FIX: Added aria-label to close button */}
            <button 
              className="absolute top-8 right-8 text-orange-500" 
              onClick={() => setMobileMenu(false)}
              aria-label="Close main menu"
            >
              <X size={40} aria-hidden="true" />
            </button>
            
            {/* Mobile links changed to semantic ul/li */}
            <ul className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    onClick={() => setMobileMenu(false)} 
                    className="text-4xl font-black uppercase italic text-white hover:text-orange-500 transition-colors block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="mt-4">
                <Link 
                  href="/inquire" 
                  onClick={() => setMobileMenu(false)} 
                  className="bg-orange-600 text-black py-4 font-black uppercase text-xl shadow-[8px_8px_0px_rgba(255,255,255,0.2)] block w-full"
                >
                  Join Now
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;