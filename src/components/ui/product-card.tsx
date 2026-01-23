"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { scaleOnHover } from "@/lib/animations";
import { formatPKR } from "@/lib/utils";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  imageSrc: string;
  stockLevel: "high" | "low" | "out";
  isFreshToday?: boolean;
}

export function ProductCard({ 
  id, 
  name, 
  price, 
  originalPrice, 
  imageSrc, 
  stockLevel,
  isFreshToday = true 
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      variants={scaleOnHover}
      whileHover="hover"
      whileTap="tap"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group relative"
    >
      {/* Badges */}
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
        {isFreshToday && (
           <span className="bg-trust-green text-white text-xs px-2 py-1 rounded-full shadow-sm font-bold animate-pulse">
             🌱 Fresh Today
           </span>
        )}
        {originalPrice && (
           <span className="bg-ramadan-gold text-white text-xs px-2 py-1 rounded-full shadow-sm font-bold">
             🌙 Ramadan Offer
           </span>
        )}
      </div>

      {/* Image Area */}
      <div className="relative h-48 w-full bg-gray-50 flex items-center justify-center overflow-hidden">
        {/* Fallback or Next Image */}
        <div className="text-4xl">🥛</div> 
        {/* Use Next Image in real app with Unsplash */}
        {/* <Image src={imageSrc} alt={name} fill className="object-cover" /> */}
        
        {/* Farm Source Overlay on Hover */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-xs text-center p-4 backdrop-blur-sm transition-opacity"
        >
          <p>Sourced from: <br/><span className="font-bold text-premium-gold text-sm">Qasim Model Farm, Kasur</span></p>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-trust-green text-lg mb-1">{name}</h3>
        
        <div className="flex items-center gap-2 mb-2">
           <span className="text-xl font-bold text-premium-gold">{formatPKR(price)}</span>
           {originalPrice && (
             <span className="text-sm text-gray-400 line-through decoration-red-400">{formatPKR(originalPrice)}</span>
           )}
        </div>

        {/* Stock Indicator */}
        <div className="mb-4">
          {stockLevel === 'low' ? (
            <p className="text-xs text-red-500 font-bold flex items-center gap-1">
              🔥 Only few bottles left!
            </p>
          ) : (
            <p className="text-xs text-green-600 flex items-center gap-1">
              ✓ In Stock (Fresh Batch)
            </p>
          )}
        </div>

        <button className="w-full bg-trust-green text-white py-2 rounded-lg font-bold hover:bg-opacity-90 transition active:scale-95 flex items-center justify-center gap-2">
          Add to Cart <span className="text-xl leading-none">+</span>
        </button>
      </div>
    </motion.div>
  );
}
