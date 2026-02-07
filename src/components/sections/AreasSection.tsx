"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { 
  MapPin, 
  CheckCircle2, 
  Truck,
  BellRing,
  ThermometerSnowflake
} from "lucide-react";

const areas = [
  "Shad Bagh",
  "Amir Road",
  "Gol Bagh",
  "Wassan Pura",
  "China Scheme",
  "Iqbal Road",
  "New Shad Bagh",
  "Taj Pura",
  "Chah Miran"
];

export const AreasSection = () => {
  const t = useTranslations("Areas");

  return (
    <section className="py-24 bg-white overflow-hidden relative" id="areas">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-50">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-trust-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-authority-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial="hidden" 
            whileInView="visible" 
            variants={fadeInUp} 
            className="text-4xl md:text-5xl font-extrabold text-trust-green mb-4 font-urdu leading-tight"
          >
            {t("title")}
          </motion.h2>
          <motion.p 
            initial="hidden" 
            whileInView="visible" 
            variants={fadeInUp} 
            className="text-xl text-gray-600 max-w-2xl mx-auto font-sans"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Areas List */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {areas.map((area, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="bg-gray-50 rounded-xl p-4 flex items-center gap-4 border border-gray-100 hover:border-trust-green/30 hover:shadow-lg transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-gray-100 group-hover:border-trust-green transition-colors">
                    <MapPin size={20} className="text-gray-400 group-hover:text-trust-green transition-colors" />
                  </div>
                  <h4 className="font-bold text-gray-900 group-hover:text-trust-green transition-colors">{area}</h4>
                  <span className="ml-auto text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full uppercase tracking-wider">
                     {t("status")}
                  </span>
                </motion.div>
              ))}
            </div>
            
            <motion.div variants={fadeInUp} className="mt-8 bg-blue-50 p-6 rounded-2xl border border-blue-100 text-center">
              <h3 className="text-lg font-bold text-authority-blue mb-2">{t("expansion.title")}</h3>
              <p className="text-gray-600 text-sm mb-4">{t("expansion.text")}</p>
              <button className="bg-authority-blue text-white px-6 py-2 rounded-full font-bold hover:bg-blue-700 transition-colors">
                 {t("expansion.btn")}
              </button>
            </motion.div>
          </motion.div>

          {/* Map / Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
             <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white h-[500px] w-full bg-gray-100">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13596.538562479493!2d74.3416093!3d31.594747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b7044031737%3A0x6d9426c602055676!2sShad%20Bagh%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1707123456789!5m2!1sen!2s" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
               />
               
               {/* Floating Stats */}
               <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex justify-between items-center text-center">
                     <div>
                       <div className="text-trust-green mb-1 flex justify-center"><CheckCircle2 size={24} /></div>
                       <p className="text-[10px] font-bold uppercase text-gray-400">{t("guarantee.ontime")}</p>
                     </div>
                     <div className="w-px h-8 bg-gray-200" />
                     <div>
                       <div className="text-trust-green mb-1 flex justify-center"><Truck size={24} /></div>
                       <p className="text-[10px] font-bold uppercase text-gray-400">{t("guarantee.morning")}</p>
                     </div>
                     <div className="w-px h-8 bg-gray-200" />
                     <div>
                       <div className="text-trust-green mb-1 flex justify-center"><BellRing size={24} /></div>
                       <p className="text-[10px] font-bold uppercase text-gray-400">{t("guarantee.alerts")}</p>
                     </div>
                     <div className="w-px h-8 bg-gray-200" />
                     <div>
                       <div className="text-trust-green mb-1 flex justify-center"><ThermometerSnowflake size={24} /></div>
                       <p className="text-[10px] font-bold uppercase text-gray-400">{t("guarantee.temp")}</p>
                     </div>
                  </div>
               </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
