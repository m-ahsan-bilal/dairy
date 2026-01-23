"use client";

import { motion } from "framer-motion";
import { gentlePulse, scaleOnHover } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface TrustBadgeProps {
  type: "halal" | "pfa" | "organic" | "lab-tested";
  label: string;
  tooltipText: string;
  className?: string;
}

const badgeConfig = {
  halal: { icon: "🕌", color: "bg-trust-green" },
  pfa: { icon: "🛡️", color: "bg-authority-blue" },
  organic: { icon: "🍃", color: "bg-punjab-green" },
  "lab-tested": { icon: "🔬", color: "bg-trust-green" },
};

export function TrustBadge({ type, label, tooltipText, className }: TrustBadgeProps) {
  const config = badgeConfig[type];

  return (
    <motion.div
      variants={scaleOnHover}
      whileHover="hover"
      whileTap="tap"
      className={cn("relative group flex flex-col items-center justify-center p-4 rounded-full border-2 border-premium-gold/30 bg-pure-white shadow-lg cursor-pointer w-24 h-24", className)}
    >
      <motion.div variants={gentlePulse} animate="pulse" className="text-3xl mb-1">
        {config.icon}
      </motion.div>
      <span className="text-xs font-bold text-trust-green text-center leading-tight">
        {label}
      </span>
      
      {/* Tooltip */}
      <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity bottom-full mb-2 bg-trust-green text-white text-xs p-2 rounded w-32 text-center pointer-events-none z-10 shadow-xl">
        {tooltipText}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-trust-green"></div>
      </div>
    </motion.div>
  );
}
