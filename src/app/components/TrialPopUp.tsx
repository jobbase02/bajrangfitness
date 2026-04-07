"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FreeTrialPopup() {
  const [isOpen, setIsOpen] = useState(false);

  // Popup Trigger Logic
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("bajrang_popup_seen");
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("bajrang_popup_seen", "true");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  // Accessibility: Close popup on 'Escape' key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          aria-hidden="false"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
            aria-describedby="popup-desc"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-black border-4 border-orange-600 p-8 shadow-[12px_12px_0px_0px_rgba(234,88,12,0.4)] text-center"
          >
            {/* Close Button with aria-label and autoFocus for keyboard users */}
            <button
              onClick={() => setIsOpen(false)}
              autoFocus
              aria-label="Close Free Trial Popup"
              className="absolute -top-4 -right-4 bg-orange-600 text-black p-2 hover:bg-white hover:scale-110 transition-all border-2 border-black cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <X size={24} strokeWidth={3} aria-hidden="true" />
            </button>

            {/* Popup Content */}
            <h2 id="popup-title" className="text-4xl font-black text-white uppercase italic tracking-tighter mb-2">
              Claim Your <span className="text-orange-500">Free Pass</span>
            </h2>
            
            <p id="popup-desc" className="text-gray-400 font-bold text-sm uppercase tracking-widest mb-8">
              Experience the hardcore iron vibe at Bajrang Fitness before you commit.
            </p>

            <div className="flex flex-col gap-4">
              {/* Primary Call to Action */}
              <Link
                href="/inquire?plan=FreeTrialPass"
                onClick={() => setIsOpen(false)}
                className="w-full bg-orange-600 text-black p-4 text-lg font-black uppercase hover:bg-white transition-colors duration-300 flex justify-center items-center gap-2 focus:outline-none focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black"
              >
                Get 1-Day Free Trial
              </Link>

              {/* Secondary Option / Close Action */}
              <button
                onClick={() => setIsOpen(false)}
                className="text-zinc-500 text-xs font-bold uppercase hover:text-white transition-colors underline underline-offset-4 cursor-pointer focus:outline-none focus-visible:text-white focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-4 focus-visible:ring-offset-black rounded-sm"
              >
                No thanks, I don't want gains
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}