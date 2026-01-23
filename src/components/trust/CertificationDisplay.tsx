"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Certificate {
  id: string;
  name: string;
  date: string;
  issuer: string;
}

interface CertificationDisplayProps {
  certificates: Certificate[];
}

export function CertificationDisplay({ certificates }: CertificationDisplayProps) {
  return (
    <div className="bg-fresh-cream py-8 overflow-hidden">
      <div className="container mx-auto px-4 mb-4">
        <h2 className="text-2xl font-bold text-trust-green text-center">Quality Certifications</h2>
        <p className="text-center text-gray-600 text-sm">Recognized by Punjab Food Authority</p>
      </div>

      <div className="flex relative">
        <motion.div
          className="flex gap-8 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {[...certificates, ...certificates].map((cert, index) => (
            <div
              key={`${cert.id}-${index}`}
              className="flex-shrink-0 w-64 bg-white p-4 rounded-lg shadow-sm border border-gold/20 flex flex-col items-center"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-full mb-3 flex items-center justify-center text-2xl">
                📜
              </div>
              <h3 className="font-bold text-trust-green text-sm">{cert.name}</h3>
              <p className="text-xs text-gray-500">{cert.issuer}</p>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded mt-2">
                Valid: {cert.date}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
