"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function DeliveryTimeIndicator() {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    // Calculate time until next Fajr (approximate for demo) or 6 AM
    const calculateTimeLeft = () => {
      const now = new Date();
      const tomorrow6am = new Date(now);
      tomorrow6am.setDate(now.getDate() + 1);
      tomorrow6am.setHours(6, 0, 0, 0);
      
      const diff = tomorrow6am.getTime() - now.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      
      return `${hours}h ${minutes}m`;
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-trust-green text-white p-4 rounded-lg shadow-md flex items-center justify-between overflow-hidden relative">
      <div className="z-10 relative">
        <h3 className="text-sm font-bold text-premium-gold uppercase tracking-wider mb-1">
          Next Delivery: Before Fajr
        </h3>
        <p className="text-2xl font-bold font-mono">{timeLeft}</p>
        <p className="text-xs opacity-80 mt-1">Order now to receive by tomorrow morning</p>
      </div>
      
      <div className="z-10 relative text-right">
        <div className="text-xs bg-white/10 px-2 py-1 rounded inline-block mb-1">
          📍 DHA, Gulberg, Model Town
        </div>
        <div>
           🚚 Free Delivery
        </div>
      </div>

      {/* Decorative Background Icon */}
      <div className="absolute right-[-10px] bottom-[-20px] text-9xl opacity-10 rotate-12 pointer-events-none">
        🌤️
      </div>
    </div>
  );
}
