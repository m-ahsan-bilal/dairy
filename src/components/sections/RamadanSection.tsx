"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { fadeInUp, staggerContainer, scaleOnHover, gentlePulse } from "@/lib/animations";
import { Check, Moon, Star, Clock } from "lucide-react";
import { formatPKR } from "@/lib/utils";

export const RamadanSection = () => {
    const t = useTranslations("Ramadan");
    const [timeLeft, setTimeLeft] = useState({ days: 15, hours: 8, minutes: 45 });

    // Dummy countdown logic
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1 };
                return prev;
            });
        }, 60000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-ramadan-gold to-premium-gold">
            {/* Islamic Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url("/images/islamic-pattern.svg")`, backgroundSize: '400px' }} />
            
            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 text-white/20 rotate-45 pointer-events-none">
                <Moon size={120} fill="currentColor" />
            </div>
            <div className="absolute bottom-10 right-10 text-white/20 pointer-events-none">
                <Star size={80} fill="currentColor" />
            </div>

            <div className="container mx-auto px-4 relative z-10 max-w-7xl">
                {/* Header */}
                <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div variants={fadeInUp} className="flex justify-center mb-4 text-white">
                        <Moon size={48} className="drop-shadow-lg" fill="white" />
                    </motion.div>
                    <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-white mb-4 font-urdu drop-shadow-md">
                        {t("title")}
                    </motion.h2>
                    <motion.p variants={fadeInUp} className="text-white/90 text-lg font-medium max-w-2xl mx-auto mb-8 font-sans">
                        {t("subtitle")}
                    </motion.p>
                    
                    {/* Countdown Timer */}
                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-6 bg-white/20 backdrop-blur-md px-8 py-4 rounded-3xl border border-white/30 shadow-xl">
                        <span className="text-white font-bold uppercase tracking-wider text-sm">{t("timerLabel")}</span>
                        <div className="flex gap-4">
                            <FlipNumber value={timeLeft.days} label={t("days")} />
                            <FlipNumber value={timeLeft.hours} label="hrs" />
                            <FlipNumber value={timeLeft.minutes} label="mins" />
                        </div>
                    </motion.div>
                </motion.div>

                {/* Offer Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <OfferCard 
                        image="/images/ramadan/milk-bottle.png"
                        name={t("milkOffer.name")}
                        originalPrice={220}
                        discountedPrice={175}
                        badge={t("milkOffer.save")}
                        features={t.raw("milkOffer.features")}
                        cta={t("orderNow")}
                    />
                    <OfferCard 
                        image="/images/ramadan/yogurt-bowl.png"
                        name={t("yogurtOffer.name")}
                        originalPrice={180}
                        discountedPrice={140}
                        badge={t("yogurtOffer.save")}
                        features={t.raw("yogurtOffer.features")}
                        cta={t("orderNow")}
                        badgeColor="bg-premium-gold"
                    />
                </div>

                {/* Family Bundle */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-6">
                        <span className="bg-ramadan-gold text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse">
                            👑 {t("familyBundle.badge")}
                        </span>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-3xl font-extrabold text-trust-green mb-2 font-urdu">{t("familyBundle.name")}</h3>
                            <p className="text-gray-600 mb-6 text-lg">{t("familyBundle.description")}</p>
                            
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-4xl font-black text-trust-green font-sans">{formatPKR(5500)}</span>
                                <span className="text-xl text-gray-400 line-through font-sans">{formatPKR(8000)}/mo</span>
                            </div>

                            <p className="text-red-500 font-bold text-sm mb-6 flex items-center gap-2">
                                🔥 {t("familyBundle.slots", { count: 50 })}
                            </p>

                            <motion.button 
                                variants={scaleOnHover}
                                whileHover="hover"
                                whileTap="tap"
                                className="w-full md:w-auto bg-trust-green text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all font-urdu"
                            >
                                {t("familyBundle.cta")}
                            </motion.button>
                        </div>
                        <div className="hidden md:flex justify-center">
                            <div className="text-[120px] filter drop-shadow-2xl">📦</div>
                        </div>
                    </div>
                </motion.div>

                {/* Footer Purity Reinforcement */}
                <div className="mt-12 text-center text-white/80">
                    <p className="text-sm font-medium mb-4 italic">🛡️ {t("guarantee")}</p>
                    <div className="flex justify-center gap-4 opacity-70 grayscale hover:grayscale-0 transition-all">
                        <span className="bg-white/10 px-4 py-2 rounded-xl text-xs font-bold border border-white/20">PFA REGISTERED</span>
                        <span className="bg-white/10 px-4 py-2 rounded-xl text-xs font-bold border border-white/20">ISO 9001</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FlipNumber = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
        <div className="bg-white rounded-xl w-14 h-16 flex items-center justify-center shadow-lg relative overflow-hidden group">
            <motion.span 
                key={value}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-2xl font-black text-trust-green font-mono"
            >
                {value.toString().padStart(2, '0')}
            </motion.span>
            <div className="absolute bottom-0 w-full h-1 bg-premium-gold/30" />
        </div>
        <span className="text-[10px] text-white font-bold uppercase mt-2 tracking-widest">{label}</span>
    </div>
);

const OfferCard = ({ image, name, originalPrice, discountedPrice, badge, features, cta, badgeColor = "bg-red-500" }: any) => (
    <motion.div 
        variants={fadeInUp}
        whileHover={{ y: -10 }}
        className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col h-full border border-white/50"
    >
        <div className="relative h-64 w-full bg-gray-50 flex items-center justify-center group overflow-hidden">
            <Image src={image} alt={name} fill className="object-contain p-8 group-hover:scale-110 transition-transform duration-500" />
            <motion.div 
                variants={gentlePulse}
                animate="pulse"
                className={`absolute top-4 right-4 ${badgeColor} text-white px-4 py-1 rounded-full text-xs font-black shadow-lg`}
            >
                {badge}
            </motion.div>
        </div>
        <div className="p-8 flex-grow flex flex-col">
            <h3 className="text-2xl font-bold text-trust-green mb-4 font-urdu leading-tight">{name}</h3>
            
            <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-black text-trust-green font-sans">{formatPKR(discountedPrice)}</span>
                <span className="text-lg text-gray-400 line-through font-sans">{formatPKR(originalPrice)}</span>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
                {features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600 font-medium text-sm">
                        <div className="bg-green-100 p-1 rounded-full">
                            <Check size={12} className="text-trust-green" strokeWidth={4} />
                        </div>
                        {feature}
                    </li>
                ))}
            </ul>

            <motion.button 
                variants={scaleOnHover}
                whileHover="hover"
                whileTap="tap"
                className="w-full bg-trust-green text-white py-4 rounded-2xl font-bold tracking-wide shadow-xl hover:bg-opacity-90 transition-all font-urdu"
            >
                {cta}
            </motion.button>
        </div>
    </motion.div>
);
