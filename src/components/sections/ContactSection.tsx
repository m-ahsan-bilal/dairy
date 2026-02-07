"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { 
  MessageCircle, 
  Phone, 
  MapPin, 
  Send,
  CreditCard,
  Banknote,
  Smartphone
} from "lucide-react";

// Placeholder phone, easy to replace
import { CONFIG } from "@/lib/config";

// Placeholder phone, easy to replace
const WHATSAPP_NUMBER = CONFIG.whatsappNumber;

export const ContactSection = () => {
  const t = useTranslations("Contact");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "",
    product: "",
    quantity: "",
    type: "oneTime",
    message: ""
  });

  const [error, setError] = useState("");

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate Pakistani Phone Number
    // Accepts formats: 03001234567, +923001234567, 923001234567
    const phoneRegex = /^((\+92)|(92)|(0))3\d{9}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      setError("Please enter a valid Pakistani mobile number (e.g., 03001234567)");
      return;
    }
    
    // Format message for WhatsApp
    const message = encodeURIComponent(
      `*New Order Request*\n\n` +
      `👤 Name: ${formData.name}\n` +
      `📞 Phone: ${formData.phone}\n` +
      `📍 Area: ${formData.area}\n` +
      `🥛 Product: ${formData.product}\n` +
      `⚖️ Quantity: ${formData.quantity}\n` +
      `🚚 Type: ${formData.type === 'oneTime' ? 'One-time' : 'Subscription'}\n` +
      `📝 Note: ${formData.message}`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white" id="contact">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16"
        >
          {/* Left Side - Info */}
          <div className="space-y-12">
            <div>
              <motion.h2 variants={fadeInUp} className="text-5xl font-extrabold text-trust-green mb-4 font-urdu leading-tight">
                {t("title")}
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-gray-600 font-sans">
                {t("subtitle")}
              </motion.p>
            </div>

            <div className="space-y-6">
              {/* WhatsApp Card */}
              <motion.div variants={fadeInUp} className="bg-white p-6 rounded-2xl shadow-lg border-2 border-trust-green flex flex-col sm:flex-row items-center gap-6 group hover:shadow-2xl transition-all">
                <div className="w-16 h-16 rounded-full bg-green-100 text-trust-green flex items-center justify-center shrink-0">
                  <MessageCircle size={32} fill="currentColor" className="animate-pulse" />
                </div>
                <div className="text-center sm:text-left flex-grow">
                   <h3 className="text-2xl font-bold text-gray-900">{t("whatsapp.title")}</h3>
                   <p className="text-green-600 font-medium mb-3">{t("whatsapp.status")}</p>
                   <button 
                     onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
                     className="bg-trust-green text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors w-full sm:w-auto"
                   >
                     {t("whatsapp.cta")}
                   </button>
                </div>
              </motion.div>

              {/* Call Card */}
              <motion.div variants={fadeInUp} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex items-center gap-6 group hover:border-authority-blue/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-authority-blue flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                   <h3 className="text-lg font-bold text-gray-900">{t("phone.title")}</h3>
                   <a href={`tel:${WHATSAPP_NUMBER}`} className="text-xl font-mono font-bold text-gray-600 hover:text-authority-blue transition-colors block">
                     {t("phone.cta")}
                   </a>
                   <p className="text-xs text-gray-400 mt-1">{t("phone.status")}</p>
                </div>
              </motion.div>

                {/* Location Card */}
               <motion.div variants={fadeInUp} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex items-center gap-6 group hover:border-orange-200 transition-all">
                <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                   <h3 className="text-lg font-bold text-gray-900">{t("location.title")}</h3>
                   <p className="text-gray-600 text-sm mb-2 max-w-xs">{t("location.address")}</p>
                   <a href="https://maps.app.goo.gl/YourMapLinkHere" target="_blank" className="text-sm font-bold text-orange-500 hover:underline">
                     {t("location.cta")}
                   </a>
                </div>
              </motion.div>
            </div>

            {/* Payment Methods */}
            <motion.div variants={fadeInUp} className="pt-8 border-t border-gray-200">
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">{t("payment.title")}</h4>
              <div className="flex flex-wrap gap-4">
                 <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 shadow-sm">
                   <Banknote size={18} className="text-trust-green" /> {t("payment.cod")}
                 </div>
                 <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 shadow-sm">
                   <Smartphone size={18} className="text-red-500" /> {t("payment.digital")}
                 </div>
                 <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                    <CreditCard size={14} /> {t("payment.secure")}
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Form */}
          <motion.div 
            variants={fadeInUp}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 lg:sticky lg:top-24 h-fit"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-black text-gray-900 mb-2 font-urdu">{t("form.title")}</h3>
              <p className="text-gray-500 text-sm">Send your details directly to our WhatsApp for instant processing. <br/><strong>Delivery Timings: 10 AM & 8 PM</strong></p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="md:col-span-2">
                    {error && (
                      <div className="mb-4 p-3 bg-red-50 text-red-500 text-sm rounded-lg flex items-center justify-center font-bold animate-pulse">
                        {error}
                      </div>
                    )}
                 </div>
                 <input 
                   name="name"
                   required
                   placeholder={t("form.name")}
                   className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-trust-green/20 focus:border-trust-green transition-all"
                   onChange={handleChange}
                 />
                 <input 
                   name="phone"
                   required
                   type="tel"
                   placeholder={t("form.phone")}
                   className={cn(
                     "w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-trust-green/20 focus:border-trust-green transition-all",
                     error ? "border-red-300 focus:border-red-500 focus:ring-red-200" : ""
                   )}
                   onChange={(e) => {
                     handleChange(e);
                     if(error) setError("");
                   }}
                 />
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <select 
                   name="area" 
                   required
                   className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-trust-green/20 focus:border-trust-green transition-all text-gray-600"
                   onChange={handleChange}
                   defaultValue=""
                 >
                    <option value="" disabled>{t("form.area")}</option>
                    <option value="Shad Bagh">Shad Bagh</option>
                    <option value="China Scheme">China Scheme</option>
                    <option value="Wassan Pura">Wassan Pura</option>
                    <option value="Amir Road">Amir Road</option>
                    <option value="Other">Other</option>
                 </select>
                 <select 
                   name="product" 
                   required
                   className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-trust-green/20 focus:border-trust-green transition-all text-gray-600"
                   onChange={handleChange}
                   defaultValue=""
                 >
                    <option value="" disabled>{t("form.product")}</option>
                    <option value="Milk">Fresh Milk</option>
                    <option value="Yogurt">Yogurt</option>
                    <option value="Desi Ghee">Desi Ghee</option>
                    <option value="Sweets">Mithai</option>
                 </select>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    name="quantity"
                    required
                    placeholder={t("form.quantity")}
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-trust-green/20 focus:border-trust-green transition-all"
                    onChange={handleChange}
                  />
                  <select 
                   name="type" 
                   className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-trust-green/20 focus:border-trust-green transition-all text-gray-600"
                   onChange={handleChange}
                   defaultValue="oneTime"
                 >
                    <option value="oneTime">{t("form.types.oneTime")}</option>
                    <option value="subscription">{t("form.types.subscription")}</option>
                 </select>
               </div>

               <textarea 
                  name="message"
                  placeholder={t("form.message")}
                  rows={3}
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-trust-green/20 focus:border-trust-green transition-all resize-none"
                  onChange={handleChange}
               />

               <button 
                 type="submit"
                 className="w-full bg-gradient-to-r from-trust-green to-emerald-600 text-white font-black py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
               >
                 <Send size={20} />
                 {t("form.submit")}
               </button>
               
               <p className="text-center text-xs text-gray-400 mt-4">
                 By clicking submit, you will be redirected to WhatsApp to complete your order.
               </p>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
