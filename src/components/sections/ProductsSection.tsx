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
      id: 'cow-milk',
      category: 'milk',
      image: '/images/products/cow-milk.png',
      price: 220,
      unit: 'liter',
      inStock: true,
      testedToday: true,
      freshBatch: true,
      purity: 100,
      rating: 4.8,
      reviewCount: 500,
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
    },
    {
      id: 'kheer',
      category: 'sweets',
      image: '/images/products/kheer.png',
      price: 500,
      unit: 'kg', // or per bowl, assuming kg for consistency or generic unit
      inStock: true,
      testedToday: true,
      freshBatch: true,
      purity: 100,
      rating: 4.9,
      reviewCount: 500,
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
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
      whileHover={{ y: -5 }}
      className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col group relative"
    >
      {/* Badges Overlays */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
        {product.freshBatch && (
          <span className="bg-trust-green text-white text-[10px] font-black px-2 py-1 rounded-full shadow-sm flex items-center gap-1">
            <Leaf size={10} /> {t("badges.fresh")}
          </span>
        )}
        {product.testedToday && (
          <span className="bg-authority-blue text-white text-[10px] font-black px-2 py-1 rounded-full shadow-sm flex items-center gap-1">
            <FlaskConical size={10} /> {t("badges.tested")}
          </span>
        )}
        {product.ramadanPrice && (
          <span className="bg-ramadan-gold text-white text-[10px] font-black px-2 py-1 rounded-full shadow-sm">
             🌙 {t("badges.ramadan")}
          </span>
        )}
      </div>

      {/* Image Section */}
      <div className="relative h-64 w-full bg-gray-50 overflow-hidden">
        <Image 
          src={product.image} 
          alt={product.id} 
          fill 
          className="object-contain p-6 group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Info Section */}
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-trust-green font-urdu">{product.id.split('-').map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(' ')}</h3>
          <div className="flex items-center gap-1 text-premium-gold">
            <Star size={14} fill="currentColor" />
            <span className="text-xs font-bold text-gray-500">{product.rating} ({product.reviewCount})</span>
          </div>
        </div>
        
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">Direct from the farm, chilled to maintain peak freshness and nutritional value.</p>
        
        {/* Features icons */}
        <div className="flex gap-4 mb-6">
           <FeatureIcon icon={<CheckCircle2 size={14}/>} label="100% Pure" />
           <FeatureIcon icon={<Leaf size={14}/>} label="No Additives" />
        </div>

        {/* Pricing */}
        <div className="mt-auto mb-6">
          <div className="flex items-end gap-2">
            <span className="text-3xl font-black text-trust-green font-sans">
              {formatPKR(product.ramadanPrice || product.price)}
            </span>
            <span className="text-sm text-gray-400 font-medium mb-1 line-clamp-1">
              / {t(`units.${product.unit}`)}
            </span>
          </div>
          {product.ramadanPrice && (
            <div className="flex gap-2 items-center mt-1">
               <span className="text-sm text-gray-400 line-through font-sans">{formatPKR(product.price)}</span>
               <span className="text-xs font-bold text-red-500">Save {formatPKR(product.price - product.ramadanPrice)}</span>
            </div>
          )}
        </div>

        {/* Action Section */}
        <div className="space-y-3">
          <a 
            href={`https://wa.me/923001234567?text=I%20want%20to%20order%20${product.id}%20(${formatPKR(product.ramadanPrice || product.price)})`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-grow bg-trust-green text-white py-3 rounded-xl font-bold text-sm shadow-md hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
          >
             <MessageCircle size={18} fill="white" /> {t("actions.quickOrder")}
          </a>
          
          <div className="flex items-center justify-between text-xs">
             <span className={cn("font-bold", product.inStock ? "text-green-600" : "text-orange-500")}>
               ● {product.inStock ? t("actions.inStock") : t("actions.orderTomorrow")}
             </span>
          </div>
        </div>
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
