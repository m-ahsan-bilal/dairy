"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { 
  PhoneCall, 
  Star,
  CheckCircle,
  MapPin
} from "lucide-react";
import { fadeInUp, staggerContainer, scaleOnHover } from "@/lib/animations";

export const HeroSection = () => {
  const t = useTranslations("Hero");
  const rT = useTranslations("Ramadan");

  return (
    <section 
      className="relative min-h-[90vh] flex flex-col items-center justify-start pt-32 overflow-hidden bg-white"
      aria-label="Hero Section"
    >
      {/* Background Image - Static for performance */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-bg.png"
          alt="Fresh Milk Pouring"
          fill
          priority
          className="object-cover opacity-20 md:opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/50 to-white" />
      </div>

      {/* Ramadan Banner */}
      <div className="absolute top-0 w-full bg-ramadan-gold text-white text-center py-2 z-20 font-bold animate-pulse">
        {rT("title")} - {rT("milkOffer.save")}!
      </div>

      {/* Main Content Container */}
      <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-7xl mt-10">
        <motion.div
           variants={staggerContainer}
           initial="hidden"
           animate="visible"
           className="flex flex-col items-center text-center space-y-6"
        >
          {/* Headline */}
          <div className="space-y-4">
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-trust-green leading-tight font-urdu"
            >
              {t("headline")}
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-2xl text-authority-blue max-w-2xl mx-auto font-sans font-medium"
            >
              {t("subheadline")}
            </motion.p>
             <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                <MapPin size={16} />
                <span>{t("socialProof")}</span>
             </motion.div>
          </div>

          {/* Pricing Highlight */}
          <motion.div variants={fadeInUp} className="bg-red-50 border-2 border-red-100 p-4 rounded-2xl max-w-md w-full mx-auto my-4 transform -rotate-1">
             <p className="text-red-500 font-bold mb-1 uppercase tracking-wider text-xs">{rT("milkOffer.name")}</p>
             <div className="flex items-end justify-center gap-2">
               <span className="text-4xl font-black text-red-600 font-sans">Rs. 200</span>
               <span className="text-lg text-gray-400 line-through font-sans mb-1">Rs. 230</span>
               <span className="text-sm font-bold text-red-500 mb-2">/ Liter</span>
             </div>
          </motion.div>

          {/* CTA Group */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4"
          >
            <motion.a
              href="https://wa.me/9230104524400"
              variants={scaleOnHover}
              whileHover="hover"
              whileTap="tap"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold text-lg shadow-xl hover:bg-[#20bd5a] transition-colors"
            >
              <PhoneCall size={20} />
              {t("ctaWhatsApp")}
            </motion.a>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-trust-green text-trust-green rounded-full font-bold text-lg hover:bg-trust-green hover:text-white transition-all"
            >
              {t("ctaProducts")}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-100 shadow-sm whitespace-nowrap">
    <span className="text-trust-green">{icon}</span>
    <span className="text-xs font-bold text-trust-green uppercase tracking-tight">{label}</span>
  </div>
);

const StatItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex flex-col items-center text-center space-y-2">
    <div className="p-3 bg-white rounded-2xl shadow-sm border border-gray-50 mb-1">
      {icon}
    </div>
    <span className="text-sm font-bold text-trust-green font-sans">{label}</span>
  </div>
);
