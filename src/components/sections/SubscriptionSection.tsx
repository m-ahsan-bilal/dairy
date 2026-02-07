"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Check, PhoneCall, Clock, ShieldCheck } from "lucide-react";

export const SubscriptionSection = () => {
  const t = useTranslations("Subscription");

  return (
    <section className="py-20 bg-white" id="subscriptions">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-trust-green to-emerald-800 rounded-[2.5rem] p-8 md:p-14 text-center text-white shadow-2xl relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.png')] opacity-10 pointer-events-none" />
          
          <motion.div variants={fadeInUp} className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 font-urdu leading-tight">
              {t("title")}
            </h2>
            <p className="text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto mb-10 font-sans leading-relaxed">
              Join 2500+ families getting fresh milk delivered before breakfast. No delivery charges. Sample it today!
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto relative z-10">
             <FeatureItem 
               icon={<Clock className="text-premium-gold" size={24} />} 
               text="Delivery by 7:00 AM" 
             />
             <FeatureItem 
               icon={<ShieldCheck className="text-premium-gold" size={24} />} 
               text="100% Pure & Tested" 
             />
             <FeatureItem 
               icon={<Check className="text-premium-gold" size={24} />} 
               text="Monthly Billing" 
             />
          </motion.div>

          <motion.div variants={fadeInUp} className="relative z-10">
            <a 
              href="https://wa.me/923001234567?text=Hi,%20I%20want%20to%20start%20daily%20milk%20delivery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-trust-green px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-gray-100 hover:scale-105 transition-all"
            >
              <PhoneCall size={24} />
              Start Daily Delivery
            </a>
            <p className="mt-4 text-sm text-emerald-200/80 font-medium">
              No long forms. Just message us on WhatsApp.
            </p>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
};

const FeatureItem = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
  <div className="flex flex-col items-center gap-3 bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
    {icon}
    <span className="font-bold text-white text-base">{text}</span>
  </div>
);
