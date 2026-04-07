"use client";
import React from 'react';
import { Phone, MapPin, Mail, Clock, Navigation } from 'lucide-react';

const Contact = () => {
  // Google Maps Auto-Direction link (Opens navigation directly to the gym)
  const googleMapsLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3482.407080568569!2d79.50315847531162!3d29.211578375353486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09b58061ef629%3A0xacf44c6ce888aefe!2sBAJRANG%20FITNESS!5e0!3m2!1sen!2sin!4v1773832097330!5m2!1sen!2sin";

  return (
    <section id="contact" className="py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/5 bg-[#050505]">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

        {/* --- LEFT SIDE: INFO CARDS (5 Columns) --- */}
        <div className="lg:col-span-5 flex flex-col justify-center">

          <div className="mb-10">
            <h2 className="text-orange-500 font-black tracking-widest uppercase text-sm mb-2 italic">Get In Touch</h2>
            <h3 className="text-6xl md:text-7xl font-[1000] uppercase italic tracking-tighter text-white leading-none">
              REACH <span className="text-orange-500 underline decoration-4 underline-offset-8">OUT</span>
            </h3>
            <p className="text-gray-400 font-bold tracking-widest uppercase text-[11px] mt-6 leading-relaxed">
              Ready to step into the Iron Paradise? Contact us directly or follow the map to our location.
            </p>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Phone Card */}
            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-colors group flex flex-col justify-center">
              <Phone className="text-orange-500 mb-4 group-hover:scale-110 transition-transform" size={28} />
              <h4 className="text-white font-black uppercase text-sm mb-2">Call Us</h4>
              {/* OPTIMIZED FONT: Readable, standard casing, larger size */}
              <div className="text-gray-300 font-medium text-sm md:text-base font-sans leading-relaxed space-y-1">
                <a href="tel:+918445588806" className="hover:text-orange-500 transition-colors block">+91 8445 588 806</a>
                <a href="tel:+917253008213" className="hover:text-orange-500 transition-colors block">+91 7253 008 213</a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-colors group flex flex-col justify-center">
              <Mail className="text-orange-500 mb-4 group-hover:scale-110 transition-transform" size={28} />
              <h4 className="text-white font-black uppercase text-sm mb-2">Email</h4>
              {/* OPTIMIZED FONT: Lowercase for emails, readable font */}
              <p className="text-gray-300 font-medium text-sm font-sans break-all">
                <a href="mailto:info@bajrangfitness.com" className="hover:text-orange-500 transition-colors">info@bajrangfitness.com</a>
              </p>
            </div>

            {/* Hours Card (Full Width) */}
            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-colors group sm:col-span-2 flex items-center gap-6">
              <div className="bg-black p-3 rounded-xl shrink-0">
                <Clock className="text-orange-500 group-hover:rotate-12 transition-transform" size={24} />
              </div>
              <div>
                <h4 className="text-white font-black uppercase text-sm mb-1">Iron Hours</h4>
                {/* OPTIMIZED FONT: Normal casing, clean spacing */}
                <p className="text-gray-300 font-medium text-sm font-sans">
                  Mon - Sat: 5:00 AM - 10:00 PM <br className="sm:hidden" />
                  <span className="hidden sm:inline"> | </span>
                  <span className="text-orange-500 font-bold">Sun: Closed</span>
                </p>
              </div>
            </div>

            {/* Address Card (Full Width) */}
            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-colors group sm:col-span-2 flex items-center gap-6">
              <div className="bg-black p-3 rounded-xl shrink-0">
                <MapPin className="text-orange-500 group-hover:-translate-y-1 transition-transform" size={24} />
              </div>
              <div>
                <h4 className="text-white font-black uppercase text-sm mb-1">Address</h4>
                {/* OPTIMIZED FONT: Normal casing for easy reading of location */}
                <p className="text-gray-300 font-medium text-sm font-sans leading-relaxed">
                  Pilikothi Road, OPP Primary School,<br />Haldwani, Uttarakhand
                </p>
              </div>
            </div>

          </div>

          {/* Explicit Contact Message CTA */}
          <a href="/inquire" className="mt-8 inline-flex items-center justify-center gap-3 bg-orange-600 text-black px-10 py-5 font-black uppercase text-sm tracking-widest shadow-[0_5px_15px_rgba(234,88,12,0.3)] hover:shadow-[0_0_20px_rgba(234,88,12,0.5)] hover:bg-white hover:-translate-y-1 transition-all duration-300 group w-full rounded-xl">
            Send A Message
            <Mail size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        {/* --- RIGHT SIDE: OPTIMIZED MAP SECTION (7 Columns) --- */}
        {/* Adjusted shadows, borders, and added a wrapper for better alignment */}
        <div className="lg:col-span-7 relative min-h-[400px] md:min-h-[500px] h-full w-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] mt-8 lg:mt-0 flex flex-col">
          
          {/* Subtle gradient overlay at the bottom so the button pops perfectly */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 pointer-events-none" />

          {/* Exact Embed with no CSS filters */}
          <iframe
            src={googleMapsLink}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full z-0"
          ></iframe>

          {/* GET DIRECTIONS FLOATING BUTTON (Aligned perfectly with the gradient) */}
          <a
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-6 left-6 right-6 md:right-6 md:left-auto z-20 bg-orange-600 py-4 px-8 text-black font-black uppercase text-xs tracking-widest hover:bg-white hover:scale-105 transition-all duration-300 rounded-xl flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(234,88,12,0.4)] group/btn"
          >
            <span>Get Directions</span>
            <Navigation size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
          </a>

          {/* Live Location Badge */}
          <div className="absolute top-6 left-6 md:left-auto md:right-6 z-20 bg-black/80 backdrop-blur-md border border-orange-500/30 px-4 py-2 rounded-full pointer-events-none flex items-center gap-2 shadow-lg">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-white font-black uppercase text-[10px] tracking-widest">Live Map</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;