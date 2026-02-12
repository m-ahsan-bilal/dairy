"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";

export const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group border border-gray-100"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Quick Add Button */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 right-4 bg-trust-green text-white p-3 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-green-700"
        >
          <ShoppingCart size={20} />
        </button>
      </div>

      <div className="p-4 text-center">
        <span className="text-xs uppercase tracking-wider text-gray-500 mb-1 block">
          {product.category}
        </span>
        <h3 className="font-bold text-gray-800 text-lg mb-2">{product.name}</h3>
        <div className="flex items-center justify-center gap-1 text-trust-green font-bold text-xl">
          <span className="text-sm">₨</span>
          <span>{product.price.toLocaleString()}</span>
        </div>
        
        <button
          onClick={handleAddToCart}
          className="w-full mt-4 bg-gray-900 text-white py-2.5 rounded-lg font-medium hover:bg-trust-green transition-colors text-sm"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};
