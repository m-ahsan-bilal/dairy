"use client";

import { motion } from "framer-motion";
import { smoothSlide } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  isVerified?: boolean;
}

export function TestimonialCard({ name, location, rating, comment, date, isVerified = true }: TestimonialCardProps) {
  return (
    <motion.div
      variants={smoothSlide}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-l-trust-green min-w-[300px] flex-shrink-0"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex text-premium-gold">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>{i < rating ? "★" : "☆"}</span>
          ))}
        </div>
        {isVerified && (
          <span className="text-[10px] bg-blue-50 text-authority-blue px-2 py-1 rounded-full flex items-center gap-1">
            ✓ Verified Purchase
          </span>
        )}
      </div>
      
      <p className="text-gray-700 italic mb-4 font-sans text-sm">"{comment}"</p>
      
      <div className="flex justify-between items-end border-t border-gray-100 pt-3">
        <div>
          <h4 className="font-bold text-trust-green text-sm">{name}</h4>
          <p className="text-xs text-gray-500">{location}</p>
        </div>
        <span className="text-xs text-gray-400">{date}</span>
      </div>
    </motion.div>
  );
}
