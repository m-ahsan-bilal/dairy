"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ProductGrid } from "@/components/products/ProductGrid";
import { ContactSection } from "@/components/sections/ContactSection";
import { products } from "@/data/products";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");

  const bestSellers = products.filter(p => p.isBestSeller);
  const trendingProducts = products.filter(p => p.isTrending);

  return (
    <main className="flex flex-col min-h-screen pb-20 md:pb-0">
      <HeroSection />

      <ProductGrid 
        title="Best Selling Products" 
        subtitle="Our customers' favorite picks, fresh from the farm."
        products={bestSellers} 
      />

      <FeaturesSection />

      <ProductGrid 
        title="Trending Products" 
        subtitle="Discover what everyone is talking about this week."
        products={trendingProducts} 
      />

      <ContactSection />
    </main>
  );
}
