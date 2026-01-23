"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface PurityIndicatorProps {
  purityScore: number;
  lastTested: string;
}

export function PurityIndicator({ purityScore = 100, lastTested }: PurityIndicatorProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="bg-pure-white p-6 rounded-xl shadow-md border border-fresh-cream max-w-sm">
      <h3 className="text-lg font-bold text-trust-green mb-4 flex items-center gap-2">
        💧 Purity Meter
      </h3>
      
      <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden mb-2">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${purityScore}%` } : { width: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 left-0 h-full bg-trust-green rounded-full"
        />
      </div>
      
      <div className="flex justify-between text-sm text-gray-600">
        <span className="font-bold text-trust-green">{purityScore}% Pure</span>
        <span>Target: 100%</span>
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-punjab-green bg-green-50 p-2 rounded">
        <span>✓ No Water Added</span>
        <span>✓ No Preservatives</span>
      </div>
      
      <div className="mt-2 text-xs text-gray-500 text-right">
        Last Lab Test: <span className="font-medium text-trust-green">{lastTested}</span>
      </div>
    </div>
  );
}
