"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-green-100 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-emerald-100 rounded-full opacity-30 blur-3xl"></div>
        {/* Dots Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, #166534 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10 flex flex-col md:flex-row items-center gap-12 py-20">
        
        {/* Left: Text Content */}
        <div className="flex-1 text-center md:text-left space-y-8">
           <motion.div 
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.1 }}
             className="inline-block"
           >
             <span className="bg-green-100 text-green-800 px-5 py-2 rounded-full text-sm font-bold tracking-wide uppercase border border-green-200">
               🌿 100% Organic & Fresh
             </span>
           </motion.div>

           <motion.h1 
             initial={{ y: 30, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.2, duration: 0.6 }}
             className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-[1.1]"
           >
             Farm Fresh{" "}
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
               Milk
             </span>{" "}
             &amp; <br/> Dairy Products
           </motion.h1>

           <motion.p 
             initial={{ y: 30, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.3, duration: 0.6 }}
             className="text-xl text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed"
           >
             We offer a wide range of pure, unadulterated Milk &amp; Dairy Products delivered straight to your doorstep.
           </motion.p>

           <motion.div
             initial={{ y: 30, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.4, duration: 0.6 }}
             className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4"
           >
              <a 
                href="#shop" 
                className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-300 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                 Shop Now <ArrowRight size={20} />
              </a>
              <a 
                href="#contact" 
                className="bg-white text-gray-800 border-2 border-gray-200 px-10 py-4 rounded-full font-bold text-lg hover:border-green-500 hover:text-green-600 transition-all duration-300"
              >
                 Contact Us
              </a>
           </motion.div>

           {/* Trust Badges */}
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.6 }}
             className="flex flex-wrap items-center gap-6 justify-center md:justify-start pt-4 text-sm text-gray-500"
           >
             <span className="flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full"></span> Free Delivery</span>
             <span className="flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full"></span> 100% Pure</span>
             <span className="flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full"></span> Farm Direct</span>
           </motion.div>
        </div>

        {/* Right: Hero Image */}
        <div className="flex-1 relative w-full h-[400px] md:h-[500px]">
           <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
              className="relative w-full h-full"
           >
              {/* Main Hero Product Image */}
              <Image 
                src="/images/products/milk-bottle.png" 
                alt="Fresh Milk Bottle"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute top-10 right-10 bg-white p-5 rounded-2xl shadow-xl border border-green-100"
              >
                 <div className="text-center">
                    <span className="block text-3xl font-black text-green-600">100%</span>
                    <span className="text-xs uppercase font-bold text-gray-500 tracking-wider">Pure</span>
                 </div>
              </motion.div>

              {/* Price Badge */}
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-0 bg-white p-4 rounded-2xl shadow-xl border border-green-100"
              >
                 <div className="text-center">
                    <span className="text-xs text-gray-400 block">Starting from</span>
                    <span className="block text-2xl font-black text-green-600">₨ 200</span>
                    <span className="text-xs text-gray-500">/Liter</span>
                 </div>
              </motion.div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};
