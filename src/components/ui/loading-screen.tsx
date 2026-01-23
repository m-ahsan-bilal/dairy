"use client";

import { motion } from "framer-motion";

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="text-6xl mb-4"
      >
        🥛
      </motion.div>
      <h2 className="text-trust-green font-bold text-xl animate-pulse">
        Qasim Milk Shop
      </h2>
      <p className="text-gray-500 text-sm mt-2">Loading fresh products...</p>
    </div>
  );
}
