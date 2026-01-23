"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { fadeInUp, staggerContainer, scaleOnHover } from "@/lib/animations";
import { formatPKR, cn } from "@/lib/utils";
import { 
  Check, 
  Zap, 
  Users, 
  ShieldCheck, 
  Calendar,
  MessageCircle,
  TrendingDown
} from "lucide-react";

type BillingPeriod = "monthly" | "yearly";

export const SubscriptionSection = () => {
  const t = useTranslations("Subscription");
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");

  const plans = [
    {
      id: "premium",
      color: "bg-authority-blue",
      lightColor: "bg-authority-blue/5",
      isPopular: false,
    },
    {
      id: "family",
      color: "bg-trust-green",
      lightColor: "bg-trust-green/5",
      isPopular: true,
    },
    {
      id: "starter",
      color: "bg-quality-gray",
      lightColor: "bg-gray-50",
      isPopular: false,
    },
  ];

  return (
    <section className="py-24 bg-pure-white" id="subscriptions">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-fresh-cream text-trust-green px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-4 shadow-sm">
             <Users size={14} /> {t("subscribedCount")}
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-trust-green mb-4 font-urdu leading-tight">
            {t("title")}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-2xl mx-auto font-sans mb-10">
            {t("subtitle")}
          </motion.p>

          {/* Billing Toggle */}
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4">
             <span className={cn("text-sm font-bold transition-colors", billingPeriod === 'monthly' ? "text-trust-green" : "text-gray-400")}>
               {t("monthly")}
             </span>
             <button 
               onClick={() => setBillingPeriod(prev => prev === 'monthly' ? 'yearly' : 'monthly')}
               className="relative w-16 h-8 bg-quality-gray rounded-full p-1 transition-colors hover:bg-gray-200"
             >
                <motion.div 
                  animate={{ x: billingPeriod === 'monthly' ? 0 : 32 }}
                  className="w-6 h-6 bg-trust-green rounded-full shadow-md"
                />
             </button>
             <div className="flex flex-col items-start gap-1">
               <span className={cn("text-sm font-bold transition-colors", billingPeriod === 'yearly' ? "text-trust-green" : "text-gray-400")}>
                 {t("yearly")}
               </span>
               <span className="text-[10px] bg-premium-gold text-trust-green font-black px-2 py-0.5 rounded-full animate-pulse">
                 {t("saveExtra")}
               </span>
             </div>
          </motion.div>
        </motion.div>

        {/* Pricing Grid - Anchor Pricing (Expensive First) */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch pt-8">
           {plans.map((plan) => (
              <PricingCard 
                key={plan.id}
                period={billingPeriod}
                {...plan}
              />
           ))}
        </div>

        {/* Bottom Guarantee */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 text-gray-400 opacity-70"
        >
           <div className="flex items-center gap-2 border-r pr-8 border-gray-100 last:border-0">
             <ShieldCheck size={20} />
             <span className="text-xs font-bold uppercase tracking-widest">{t("subtitle").split('•')[0]}</span>
           </div>
           <div className="flex items-center gap-2 border-r pr-8 border-gray-100 last:border-0">
             <Calendar size={20} />
             <span className="text-xs font-bold uppercase tracking-widest">{t("subtitle").split('•')[1]}</span>
           </div>
           <div className="flex items-center gap-2">
             <TrendingDown size={20} />
             <span className="text-xs font-bold uppercase tracking-widest">{t("subtitle").split('•')[2]}</span>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

const PricingCard = ({ id, color, lightColor, isPopular, period }: any) => {
  const t = useTranslations("Subscription");
  const rawPrice = Number(t(`plans.${id}.price`));
  
  // Calculate price based on period
  // Monthly price = base
  // Yearly price = (base * 12) * 0.9 (10% discount)
  const displayPrice = period === 'monthly' ? rawPrice : (rawPrice * 0.9);
  const savings = period === 'monthly' ? Math.floor(rawPrice * 0.15) : Math.floor(rawPrice * 0.25);

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -10 }}
      className={cn(
        "relative rounded-[2.5rem] p-8 md:p-10 border transition-all flex flex-col overflow-hidden group",
        isPopular ? "border-trust-green shadow-premium-green/20 ring-4 ring-trust-green/5 bg-white scale-105 z-10" : "border-gray-100 shadow-xl bg-white",
        id === 'premium' ? "bg-white" : ""
      )}
    >
      {isPopular && (
        <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-trust-green text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
          {t("popular")}
        </div>
      )}

      {/* Plan Info */}
      <div className="mb-8">
        <h3 className={cn("text-2xl font-black mb-2 font-urdu", id === 'premium' ? "text-authority-blue" : "text-trust-green")}>
          {t(`plans.${id}.name`)}
        </h3>
        <p className="text-gray-500 text-sm font-medium leading-relaxed">{t(`plans.${id}.desc`)}</p>
      </div>

      {/* Pricing */}
      <div className="mb-8 p-6 rounded-3xl" style={{ backgroundColor: lightColor === 'bg-authority-blue/5' ? 'rgba(21, 101, 192, 0.05)' : lightColor === 'bg-trust-green/5' ? 'rgba(27, 94, 32, 0.05)' : '#F9FAFB' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={period}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-end gap-2"
          >
            <span className="text-4xl font-black text-trust-green font-sans">
              {formatPKR(displayPrice)}
            </span>
            <span className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-tight">
              / {period === 'monthly' ? 'mo' : 'mo (billed yearly)'}
            </span>
          </motion.div>
        </AnimatePresence>
        <div className="mt-2 flex items-center gap-1.5 text-red-500">
           <TrendingDown size={14} strokeWidth={3} />
           <span className="text-xs font-black uppercase tracking-wide">
             {t("saveVsDaily", { amount: formatPKR(savings) })}
           </span>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-10 flex-grow">
        {t.raw(`plans.${id}.features`).map((feature: string, idx: number) => (
          <li key={idx} className="flex items-start gap-4">
            <div className={cn("mt-1 p-0.5 rounded-full shrink-0", isPopular || id === 'premium' ? "bg-trust-green text-white" : "bg-quality-gray text-trust-green")}>
              <Check size={12} strokeWidth={4} />
            </div>
            <span className="text-sm font-bold text-gray-600 transition-colors group-hover:text-trust-green">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <motion.button
        variants={scaleOnHover}
        whileHover="hover"
        whileTap="tap"
        className={cn(
          "w-full py-5 rounded-2xl font-black text-lg shadow-xl flex items-center justify-center gap-3 transition-all",
          isPopular ? "bg-trust-green text-white" : id === 'premium' ? "bg-authority-blue text-white" : "bg-quality-gray text-trust-green hover:bg-trust-green hover:text-white"
        )}
      >
        <MessageCircle size={22} />
        {t("cta")}
      </motion.button>
      
      {/* Background Decor */}
      <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:scale-110 transition-transform duration-700 pointer-events-none">
         {id === 'premium' ? <ShieldCheck size={200} /> : id === 'family' ? <Zap size={200} /> : <Calendar size={200} />}
      </div>
    </motion.div>
  );
};
