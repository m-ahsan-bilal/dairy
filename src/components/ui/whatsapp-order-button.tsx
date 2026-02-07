"use client";

import { MessageCircle } from "lucide-react";
import { CONFIG } from "@/lib/config";

interface WhatsAppOrderButtonProps {
  productName: string;
  productPrice: number;
}

export const WhatsAppOrderButton = ({ productName, productPrice }: WhatsAppOrderButtonProps) => {
  const handleOrder = () => {
    const message = encodeURIComponent(
      `*New Order Request*\n\n` +
      `Product: ${productName}\n` +
      `Price: Rs. ${productPrice}\n\n` +
      `Please confirm availability.`
    );
    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <button 
      onClick={handleOrder}
      className="bg-[#25D366] text-white px-8 py-3 rounded-full hover:bg-green-600 transition flex items-center gap-2 font-bold shadow-lg shadow-green-200"
    >
      <MessageCircle size={20} fill="white" />
      Order on WhatsApp
    </button>
  );
};
