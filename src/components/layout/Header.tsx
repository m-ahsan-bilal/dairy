"use client";

import React, { useState, useEffect } from "react";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Menu, 
  X, 
  PhoneCall, 
  Droplet,
  Globe
} from "lucide-react";

export const Header = () => {
  const t = useTranslations("HomePage"); // Assuming navigation items might be here or just hardcoded/generic
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    const nextLocale = locale === 'ur' ? 'en' : 'ur';
    router.replace(pathname, { locale: nextLocale });
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" }, // Assuming we might have a separate page or section
    { name: "Areas", href: "#areas" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
             <div className="bg-trust-green p-2 rounded-full text-white group-hover:bg-emerald-600 transition-colors">
               <Droplet size={24} fill="currentColor" />
             </div>
             <div className="flex flex-col">
               <span className={cn("font-bold text-xl leading-none text-trust-green", isScrolled ? "text-trust-green" : "text-trust-green")}>
                 Qasim Milk Shop
               </span>
               <span className="text-[10px] text-gray-500 font-medium tracking-wider">
                 PURE & FRESH
               </span>
             </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-gray-600 font-medium hover:text-trust-green transition-colors text-sm uppercase tracking-wide"
              >
                {link.name} {/* Ideally translate these */}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-sm font-bold text-gray-600 hover:text-trust-green transition-colors px-3 py-1 rounded-full border border-gray-200 hover:border-trust-green"
            >
              <Globe size={16} />
              {locale === 'ur' ? 'English' : 'اردو'}
            </button>
            
            <a 
              href="tel:03104524400"
              className="flex items-center gap-2 bg-trust-green text-white px-5 py-2.5 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-emerald-600 transition-all text-sm"
            >
              <PhoneCall size={18} />
              <span>0310 4524400</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gray-800 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden flex flex-col gap-6"
          >
             <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold text-gray-800 hover:text-trust-green"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            
            <div className="flex flex-col gap-4 mt-8">
              <button 
                onClick={() => {
                  toggleLanguage();
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 w-full py-3 border-2 border-gray-100 rounded-xl font-bold text-gray-600"
              >
                <Globe size={20} />
                Switch Language
              </button>
              
              <a 
                href="tel:03104524400"
                className="flex items-center justify-center gap-2 bg-trust-green text-white py-4 rounded-xl font-bold shadow-lg"
              >
                <PhoneCall size={20} />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
