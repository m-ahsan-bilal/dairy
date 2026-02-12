"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { 
  Home, 
  ShoppingBag, 
  Percent, 
  Phone 
} from "lucide-react";
import { motion } from "framer-motion";

export const MobileNav = () => {
  const t = useTranslations("MobileNav");
  const pathname = usePathname();

  const navItems = [
    {
      name: t("home"),
      href: "/",
      icon: Home,
      active: pathname === "/"
    },
    {
      name: t("shop"),
      href: "/#products",
      icon: ShoppingBag,
      active: pathname.includes("products") || pathname === "/#products"
    },
    {
      name: t("offers"),
      href: "/#ramadan-offers", // Assuming we add this ID to hero or ramadan section
      icon: Percent,
      active: pathname === "/#ramadan-offers"
    },
    {
      name: t("contact"),
      href: "/#contact",
      icon: Phone,
      active: pathname === "/#contact"
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.1)] md:hidden pb-safe">
      <div className="flex justify-around items-center px-2 py-3">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex flex-col items-center gap-1 w-full relative group"
          >
            {item.active && (
              <motion.div
                layoutId="nav-pill"
                className="absolute -top-3 w-8 h-1 bg-trust-green rounded-b-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <item.icon 
              size={24} 
              className={cn(
                "transition-colors duration-200",
                item.active ? "text-trust-green fill-trust-green/10" : "text-gray-400 group-hover:text-gray-600"
              )} 
            />
            <span 
              className={cn(
                "text-[10px] font-bold transition-colors duration-200",
                item.active ? "text-trust-green" : "text-gray-400 group-hover:text-gray-600"
              )}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};
