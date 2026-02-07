"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail,
  Heart
} from "lucide-react";
import { cn } from "@/lib/utils";
import { CONFIG } from "@/lib/config";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

// Social Links (Placeholders)
const SOCIALS = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export const Footer = () => {
  const t = useTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-trust-green text-white pt-16 pb-8 rounded-t-[3rem] mt-auto">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
           
           {/* Column 1: Brand */}
           <div className="space-y-6">
             <div>
                <h2 className="text-3xl font-black mb-2 font-urdu">Qasim Milk Shop</h2>
                <p className="text-fresh-cream font-bold text-sm tracking-widest uppercase">{t("brand.tagline")}</p>
             </div>
             <p className="text-white/80 text-sm leading-relaxed">
               {t("brand.desc")}
             </p>
             <div className="flex gap-4">
               {SOCIALS.map((social, idx) => (
                 <a 
                   key={idx} 
                   href={social.href}
                   aria-label={social.label}
                   className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-trust-green transition-all transform hover:scale-110"
                 >
                    <social.icon size={18} />
                 </a>
               ))}
             </div>
           </div>

{/* Column 2: Quick Links */}
           <FooterColumn title={t("links.title")}>
             <ul className="space-y-3">
               <li><a href="#" className="text-white/70 hover:text-white hover:translate-x-1 transition-all inline-block">{t("links.home")}</a></li>
               <li><a href="#products" className="text-white/70 hover:text-white hover:translate-x-1 transition-all inline-block">{t("links.products")}</a></li>
               <li><a href="#subscriptions" className="text-white/70 hover:text-white hover:translate-x-1 transition-all inline-block">{t("links.plans")}</a></li>
               <li><a href="#ramadan" className="text-white/70 hover:text-white hover:translate-x-1 transition-all inline-block">{t("links.ramadan")}</a></li>
               <li><a href="#about" className="text-white/70 hover:text-white hover:translate-x-1 transition-all inline-block">{t("links.about")}</a></li>
             </ul>
           </FooterColumn>

           {/* Column 3: Products */}
           <FooterColumn title={t("products.title")}>
             <ul className="space-y-3">
               <li className="flex items-center gap-2 text-white/70">
                 <span className="w-1.5 h-1.5 bg-premium-gold rounded-full"></span>
                 {t("products.milk")}
               </li>
               <li className="flex items-center gap-2 text-white/70">
                 <span className="w-1.5 h-1.5 bg-premium-gold rounded-full"></span>
                 {t("products.yogurt")}
               </li>
               <li className="flex items-center gap-2 text-white/70">
                 <span className="w-1.5 h-1.5 bg-premium-gold rounded-full"></span>
                 {t("products.cream")}
               </li>
               <li className="flex items-center gap-2 text-white/70">
                 <span className="w-1.5 h-1.5 bg-premium-gold rounded-full"></span>
                 {t("products.butter")}
               </li>
             </ul>
           </FooterColumn>

           {/* Column 4: Contact */}
           <FooterColumn title={t("contact.title")}>
             <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-4">
                  <MapPin className="shrink-0 text-premium-gold" size={20} />
                  <span className="text-white/80">{t("contact.address")}</span>
                </li>
                <li className="flex items-center gap-4">
                   <Phone className="shrink-0 text-premium-gold" size={20} />
                   <span className="text-white/80 font-mono font-bold text-base">{CONFIG.contact.phone}</span>
                </li>
                <li className="flex items-center gap-4">
                   <Mail className="shrink-0 text-premium-gold" size={20} />
                   <span className="text-white/80">{CONFIG.contact.email}</span>
                </li>
             </ul>
           </FooterColumn>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/50">
           <div className="text-center md:text-left">
             <p>{t("bottom.rights").replace('2026', year.toString())}</p>
             <p className="mt-1 text-premium-gold/80">{t("bottom.pfa")}</p>
           </div>

           <div className="flex items-center gap-2 px-4 py-2 bg-black/20 rounded-full">
             <span>Made with</span>
             <Heart size={12} fill="#ef4444" className="text-red-500 animate-pulse" />
             <span>in Lahore</span>
           </div>

           <div className="flex gap-6">
             <a href="#" className="hover:text-white transition-colors">{t("bottom.privacy")}</a>
             <a href="#" className="hover:text-white transition-colors">{t("bottom.terms")}</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-4 md:space-y-6 border-b border-white/10 md:border-none pb-4 md:pb-0 last:border-none">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center justify-between w-full md:cursor-default"
      >
        <h3 className="text-xl font-bold font-urdu text-left">{title}</h3>
        <ChevronDown 
          className={cn(
            "md:hidden transition-transform duration-300",
            isOpen ? "rotate-180" : "rotate-0"
          )} 
        />
      </button>
      <div 
        className={cn(
          "overflow-hidden transition-all duration-300 md:h-auto md:opacity-100",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 md:max-h-none"
        )}
      >
        {children}
      </div>
    </div>
  );
};
