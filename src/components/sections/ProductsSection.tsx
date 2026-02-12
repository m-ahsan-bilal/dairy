"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { formatPKR, cn } from "@/lib/utils";
import { 
  CheckCircle2, 
  FlaskConical, 
  Leaf, 
  Star,
  Info,
  MessageCircle
} from "lucide-react";

interface Product {
  id: string;
  category: 'milk' | 'yogurt' | 'sweets' | 'dairy';
  image: string;
  price: number;
  ramadanPrice?: number;
  unit: 'liter' | 'kg';
  inStock: boolean;
  testedToday: boolean;
  freshBatch: boolean;
  purity: number;
  rating: number;
  reviewCount: number;
}

const CATEGORIES = ['all', 'milk', 'yogurt', 'sweets', 'dairy'] as const;

export const ProductsSection = () => {
  const t = useTranslations("Products");
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>('all');

  const products: Product[] = useMemo(() => [
    {
      id: 'fresh-milk',
      category: 'milk',
      image: '/images/products/milk-bottle.png',
      price: 230,
      ramadanPrice: 200,
      unit: 'liter',
      inStock: true,
      testedToday: true,
      freshBatch: true,
      purity: 100,
      rating: 4.9,
      reviewCount: 3000,
    },
    {
      id: 'yogurt',
      category: 'yogurt',
      image: '/images/products/yogurt-bowl.png',
      price: 260,
      ramadanPrice: 200,
      unit: 'kg',
      inStock: true,
      testedToday: true,
      freshBatch: true,
      purity: 100,
      rating: 4.9,
      reviewCount: 1500,
    },
    {
      id: 'desi-ghee',
      category: 'dairy',
      image: '/images/products/ghee.png',
      price: 3500,
      unit: 'kg',
      inStock: true,
      testedToday: true,
      freshBatch: false,
      purity: 100,
      rating: 5.0,
      reviewCount: 200,
    },
    {
      id: 'khoya',
      category: 'sweets',
      image: '/images/products/khoya.png',
      price: 2000,
      unit: 'kg',
      inStock: true,
      testedToday: true,
      freshBatch: true,
      purity: 100,
      rating: 4.8,
      reviewCount: 150,
    },
    {
      id: 'barfi',
      category: 'sweets',
      image: '/images/products/barfi.png',
      price: 1800,
      unit: 'kg',
      inStock: true,
      testedToday: false,
      freshBatch: true,
      purity: 100,
      rating: 4.9,
      reviewCount: 300,
    },
    {
      id: 'sohan-halwa',
      category: 'sweets',
      image: '/images/products/halwa.png',
      price: 2200,
      unit: 'kg',
      inStock: true,
      testedToday: false,
      freshBatch: true,
      purity: 100,
      rating: 4.9,
      reviewCount: 120,
    }
  ], []);

  const filteredProducts = products.filter(p => 
    activeCategory === 'all' ? true : p.category === activeCategory
  );

  return (
    <section className="py-24 bg-pure-white" id="products">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-trust-green mb-4 font-urdu leading-tight">
            {t("title")}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
             {t("subtitle")}
          </motion.p>
        </motion.div>

        {/* Filters */}
        <div className="flex justify-center mb-12 flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2 rounded-full font-bold transition-all text-sm",
                activeCategory === cat 
                  ? "bg-trust-green text-white shadow-lg" 
                  : "bg-quality-gray text-gray-500 hover:bg-gray-200"
              )}
            >
              {t(`categories.${cat}`)}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id}
                product={product}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  const t = useTranslations("Products");
  
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5, borderColor: "var(--trust-green)" }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 flex flex-col group relative transition-all duration-300"
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
        {product.ramadanPrice && (
           <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-sm">
             -{Math.round(((product.price - product.ramadanPrice) / product.price) * 100)}% OFF
           </span>
        )}
      </div>

      {/* Image Section */}
      <div className="relative h-56 w-full bg-white p-4">
        <Image 
          src={product.image} 
          alt={product.id} 
          fill 
          className="object-contain group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Info Section */}
      <div className="p-4 flex-grow flex flex-col text-center">
        <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-trust-green transition-colors font-sans">
          {product.id.split('-').map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(' ')}
        </h3>
        
        {/* Pricing */}
        <div className="mb-4">
          <div className="flex items-center justify-center gap-2">
            <span className="text-xl font-bold text-trust-green">
              {formatPKR(product.ramadanPrice || product.price)}
            </span>
            {product.ramadanPrice && (
               <span className="text-sm text-gray-400 line-through">
                 {formatPKR(product.price)}
               </span>
            )}
          </div>
        </div>

        {/* Action */}
        <a 
          href={`https://wa.me/9230104524400?text=I%20want%20to%20order%20${product.id}%20(${formatPKR(product.ramadanPrice || product.price)})`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-trust-green text-white py-2.5 rounded-lg font-bold text-sm hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 mt-auto"
        >
           <MessageCircle size={16} /> Order on WhatsApp
        </a>
      </div>
    </motion.div>
  );
};

const FeatureIcon = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center gap-1.5 opacity-70">
     <span className="text-trust-green">{icon}</span>
     <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
  </div>
);
