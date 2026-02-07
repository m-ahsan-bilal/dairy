"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { CONFIG } from "@/lib/config";

const WHATSAPP_NUMBER = CONFIG.whatsappNumber;

export const FloatingContact = () => {
  const [showBottomBar, setShowBottomBar] = useState(false);
  
  // Logic to only show bottom bar on scroll or after hero
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBottomBar(true);
      } else {
        setShowBottomBar(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  };

  const openPhone = () => {
    window.location.href = `tel:+${WHATSAPP_NUMBER}`;
  };

  return (
    <>
      {/* Desktop Floating Button */}
      <div className="hidden md:flex flex-col gap-4 fixed bottom-8 right-8 z-50 items-end">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={openWhatsApp}
          className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:shadow-green-500/30 transition-shadow group relative"
        >
          <MessageCircle size={32} fill="white" className="absolute animate-ping opacity-25" />
          <MessageCircle size={32} fill="white" className="relative z-10" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out whitespace-nowrap ml-0 group-hover:ml-3 font-bold">
            Order Now
          </span>
        </motion.button>
      </div>

      {/* Mobile Bottom Bar */}
      <AnimatePresence>
        {showBottomBar && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 w-full z-50 md:hidden bg-white border-t border-gray-100 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] px-4 py-3 flex gap-4 safe-area-bottom"
          >
             <button 
               onClick={openPhone}
               className="flex-1 bg-blue-50 text-blue-600 font-bold py-3 rounded-xl flex items-center justify-center gap-2 active:bg-blue-100 transition-colors"
             >
               <Phone size={20} />
               Call
             </button>
             <button 
                onClick={openWhatsApp}
               className="flex-1 bg-[#25D366] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 active:bg-green-600 transition-colors shadow-lg shadow-green-200"
             >
               <MessageCircle size={20} fill="white" />
               WhatsApp
             </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
