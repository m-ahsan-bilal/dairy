"use client";

import { motion } from "framer-motion";
import { gentlePulse } from "@/lib/animations";

export function WhatsAppFloatingButton() {
  return (
    <motion.a
      href="https://wa.me/923001234567?text=I%20want%20to%20order%20premium%20milk."
      target="_blank"
      rel="noopener noreferrer"
      variants={gentlePulse}
      animate="pulse"
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-2xl hover:bg-[#20bd5a] transition-colors group"
    >
      <span className="text-2xl">💬</span>
      <span className="font-bold hidden group-hover:block transition-all duration-300">
        Order Now / آرڈر کریں
      </span>
    </motion.a>
  );
}
