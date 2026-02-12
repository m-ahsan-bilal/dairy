"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ExternalLink } from "lucide-react";

export const TrustSection = () => {
  const t = useTranslations("Trust");

  return (
    <section className="py-24 bg-white" id="certificates">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-trust-green mb-4 font-urdu">
            {t("title")}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            {t("subtitle")}
          </motion.p>
        </motion.div>

        {/* Certification Cards */}
        <div className="flex flex-wrap justify-center gap-6">
           <CertCard 
             image="/images/trust/pfa-cert.png"
             title={t("certs.pfa.title")}
             badge={t("certs.pfa.badge")}
             desc={t("certs.pfa.desc")}
             footer={`Lic: ${t("certs.pfa.number")} | Exp: ${t("certs.pfa.valid")}`}
             btnText={t("certs.pfa.btn")}
           />
           <CertCard 
             image="/images/trust/lab-testing.png"
             title={t("certs.lab.title")}
             badge={t("certs.lab.badge")}
             desc={t("certs.lab.desc")}
             footer="Batch: #QM-992 | Today 4 AM"
             btnText={t("certs.lab.btn")}
           />
           <CertCard 
             image="/images/trust/quality-seal.png"
             title={t("certs.purity.title")}
             badge={t("certs.purity.badge")}
             desc={t("certs.purity.desc")}
             footer="100% Satisfaction Guarantee"
             btnText={t("certs.purity.btn")}
           />
        </div>
      </div>
    </section>
  );
};

const CertCard = ({ image, title, badge, desc, footer, btnText }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="w-full md:w-[350px] bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col"
  >
    <div className="relative h-48 w-full bg-gray-50 flex items-center justify-center">
       {/* Use a placeholder if image fails, handling 404s gracefully in production if needed, but for now assuming assets exist or consistent placeholders */}
       <div className="w-full h-full flex items-center justify-center text-gray-300">
          <Image src={image} alt={title} fill className="object-contain p-6" />
       </div>
       <div className="absolute top-4 right-4 bg-authority-blue text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg uppercase tracking-widest">
          {badge}
       </div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
       <h3 className="text-xl font-bold text-trust-green mb-2">{title}</h3>
       <p className="text-gray-500 text-sm mb-6 flex-grow">{desc}</p>
       <div className="text-[10px] font-bold text-gray-400 mb-6 uppercase tracking-widest border-t pt-4">
          {footer}
       </div>
       <button className="w-full py-3 bg-quality-gray text-trust-green font-bold text-sm rounded-xl flex items-center justify-center gap-2 hover:bg-trust-green hover:text-white transition-all group">
         <ExternalLink size={16} className="group-hover:scale-110 transition-transform" /> {btnText}
       </button>
    </div>
  </motion.div>
);
