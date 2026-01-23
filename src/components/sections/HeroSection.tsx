"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { WhatsAppFloatingButton } from "../ui/whatsapp-button";
import { Link } from "@/i18n/routing";
import { 
  PhoneCall, 
  ShoppingCart, 
  CheckCircle, 
  ShieldCheck, 
  Droplet, 
  Clock, 
  Users, 
  Trophy,
  History 
} from "lucide-react";
import { fadeInUp, staggerContainer, scaleOnHover, gentlePulse } from "@/lib/animations";

export const HeroSection = () => {
  const t = useTranslations("Hero");
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-white pt-20"
      aria-label="Hero Section"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero/hero-bg.png"
          alt="Fresh Milk Pouring"
          fill
          priority
          className="object-cover opacity-30 md:opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/40 to-white" />
        <div className="absolute inset-0 bg-gradient-to-r from-trust-green/5 to-transparent" />
      </motion.div>

      {/* Main Content Container */}
      <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div
           variants={staggerContainer}
           initial="hidden"
           animate="visible"
           style={{ y: contentY }}
           className="flex flex-col items-center text-center space-y-8"
        >
          {/* Logo & Ship Name */}
          <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-2">
            <motion.div variants={gentlePulse} animate="pulse" className="bg-trust-green p-2 rounded-full shadow-lg">
              <Droplet className="text-white w-6 h-6" />
            </motion.div>
            <span className="text-xl md:text-2xl font-bold text-trust-green tracking-tight font-sans">
              Qasim Milk Shop
            </span>
          </motion.div>

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
          </div>

          {/* Trust Badges Row */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 md:gap-8 py-4 overflow-x-auto no-scrollbar max-w-full"
          >
            <TrustItem icon={<ShieldCheck size={18} />} label={t("badges.pfa")} />
            <TrustItem icon={<CheckCircle size={18} />} label={t("badges.lab")} />
            <TrustItem icon={<Droplet size={18} />} label={t("badges.halal")} />
            <TrustItem icon={<Clock size={18} />} label={t("badges.time")} />
          </motion.div>

          {/* CTA Group */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4"
          >
            <motion.a
              href="https://wa.me/923001234567"
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

          {/* Free Delivery Promo */}
          <motion.p 
            variants={fadeInUp}
            className="text-sm font-semibold text-ramadan-gold animate-bounce"
          >
            ⚡ {t("freeDelivery")}
          </motion.p>
        </motion.div>
      </div>

      {/* Stats Section Overlay */}
      <div className="w-full mt-20 bg-quality-gray/80 backdrop-blur-md border-y border-gray-100 py-10 z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem icon={<Droplet className="text-trust-green"/>} label={t("stats.liters")} />
            <StatItem icon={<Users className="text-trust-green"/>} label={t("stats.families")} />
            <StatItem icon={<Trophy className="text-trust-green"/>} label={t("stats.years")} />
            <StatItem icon={<History className="text-trust-green"/>} label={t("stats.ontime")} />
          </div>
        </div>
      </div>

      {/* Scrolling Social Proof Strip */}
      <div className="w-full bg-trust-green py-3 overflow-hidden z-10 relative">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex whitespace-nowrap text-white font-bold text-sm md:text-base gap-20 uppercase tracking-widest px-10"
        >
          {[...Array(2)].map((_, i) => (
             <span key={i} className="flex gap-20 items-center">
               <span>{t("socialProof")}</span>
               <span className="text-premium-gold">★ ★ ★ ★ ★</span>
               <span>{t("socialProof")}</span>
               <span className="text-premium-gold">★ ★ ★ ★ ★</span>
             </span>
          ))}
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
