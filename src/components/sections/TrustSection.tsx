"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { fadeInUp, staggerContainer, scaleOnHover } from "@/lib/animations";
import { 
  ShieldCheck, 
  FlaskConical, 
  CheckCircle2, 
  Award, 
  Milk, 
  ThermometerSnowflake, 
  Truck, 
  Search,
  XCircle,
  Clock,
  ExternalLink,
  Star
} from "lucide-react";
import { cn } from "@/lib/utils";

export const TrustSection = () => {
  const t = useTranslations("Trust");

  return (
    <div className="flex flex-col">
      {/* 1. Header & Certificates */}
      <section className="py-24 bg-white">
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
          <div className="flex overflow-x-auto pb-10 gap-6 no-scrollbar snap-x">
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
               image="/images/trust/halal-cert.png"
               title={t("certs.halal.title")}
               badge={t("certs.halal.badge")}
               desc={t("certs.halal.desc")}
               footer="NHC Verified | 2026"
               btnText={t("certs.halal.btn")}
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

      {/* 2. Testing Process Visualization */}
      <section className="py-24 bg-quality-gray/30 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-trust-green text-center mb-16 underline decoration-premium-gold underline-offset-8">Our Daily Journey to Your Doorstep</h2>
          
          <div className="relative">
             {/* Connection Line Desktop */}
             <div className="hidden md:block absolute top-[40px] left-0 w-full h-1 bg-gradient-to-r from-trust-green/10 via-trust-green/50 to-trust-green/10 z-0" />
             
             <div className="grid md:grid-cols-4 gap-8 relative z-10">
                <ProcessStep 
                   icon={<Milk size={32} className="text-white"/>}
                   title={t("process.step1.title")}
                   time={t("process.step1.time")}
                   desc={t("process.step1.desc")}
                   step="01"
                />
                <ProcessStep 
                   icon={<FlaskConical size={32} className="text-white"/>}
                   title={t("process.step2.title")}
                   time={t("process.step2.time")}
                   desc={t("process.step2.desc")}
                   step="02"
                />
                <ProcessStep 
                   icon={<ThermometerSnowflake size={32} className="text-white"/>}
                   title={t("process.step3.title")}
                   time={t("process.step3.time")}
                   desc={t("process.step3.desc")}
                   step="03"
                />
                <ProcessStep 
                   icon={<Truck size={32} className="text-white"/>}
                   title={t("process.step4.title")}
                   time={t("process.step4.time")}
                   desc={t("process.step4.desc")}
                   step="04"
                />
             </div>
          </div>
        </div>
      </section>

      {/* 3. Social Proof Stats */}
      <section className="py-20 bg-trust-green text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
             <StatBox value="10,000+" label={t("stats.families")} />
             <StatBox value="50,000+" label={t("stats.liters")} />
             <StatBox value="5+" label={t("stats.years")} />
             <StatBox value="99.8%" label={t("stats.ontime")} />
          </div>
        </div>
      </section>

      {/* 4. Comparison Table */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-trust-green text-center mb-16">{t("comparison.title")}</h2>
          
          <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-2xl transition-all hover:shadow-premium-green/20">
             <table className="w-full text-left font-sans">
                <thead className="bg-quality-gray">
                   <tr>
                      <th className="p-6 text-trust-green font-bold">Features</th>
                      <th className="p-6 text-center text-trust-green font-black bg-trust-green/5 italic">{t("comparison.qasim")}</th>
                      <th className="p-6 text-center text-gray-400 font-bold">{t("comparison.others")}</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                   {t.raw("comparison.features").map((feature: string, idx: number) => (
                      <tr key={idx} className="group hover:bg-gray-50 transition-colors">
                         <td className="p-6 text-gray-600 font-medium">{feature}</td>
                         <td className="p-6 text-center bg-trust-green/5">
                            <CheckCircle2 className="mx-auto text-trust-green" size={24} />
                         </td>
                         <td className="p-6 text-center">
                            {(idx === 0 || idx === 3) ? <CheckCircle2 className="mx-auto text-gray-200" size={20} /> : <XCircle className="mx-auto text-gray-200" size={20} />}
                         </td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
        </div>
      </section>

      {/* 5. Customer Testimonials Carousel */}
      <section className="py-24 bg-quality-gray/30 overflow-hidden">
         <div className="container mx-auto px-4 max-w-7xl mb-12 text-center">
            <h2 className="text-3xl font-bold text-trust-green mb-4">What Lahore Says About Us</h2>
         </div>
         
         <div className="flex gap-8 whitespace-nowrap animate-infinite-scroll hover:[animation-play-state:paused]">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <TestimonialSmall 
                  name="Ahmed Ali" 
                  loc="DHA Phase 6" 
                  comment="Best milk in Lahore! The delivery is always on time, usually before I wake up for Fajr."
                />
                <TestimonialSmall 
                  name="Sara Khan" 
                  loc="Gulberg III" 
                  comment="The Desi Ghee is pure gold. Reminds me of my village life. Highly recommended for kids."
                />
                <TestimonialSmall 
                  name="Zubair Sheikh" 
                  loc="Model Town" 
                  comment="Reliable service and the purity is actually visible. No more worrying about adulterated milk."
                />
                <TestimonialSmall 
                  name="Fatima Bibi" 
                  loc="Johar Town" 
                  comment="Using for 3 years now. The quality has never dropped once. Truly pure dairy."
                />
              </React.Fragment>
            ))}
         </div>
      </section>
    </div>
  );
};

const TestimonialSmall = ({ name, loc, comment }: any) => (
  <div className="inline-block w-[350px] bg-white p-6 rounded-3xl shadow-lg border border-gray-100 whitespace-normal">
    <div className="flex items-center gap-1 text-premium-gold mb-3">
       {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
    </div>
    <p className="text-gray-600 text-sm mb-4 line-clamp-3">"{comment}"</p>
    <div className="flex items-center gap-3 border-t pt-4">
       <div className="w-10 h-10 bg-quality-gray rounded-full flex items-center justify-center font-bold text-trust-green">
         {name[0]}
       </div>
       <div>
         <div className="text-sm font-bold text-trust-green flex items-center gap-1">
           {name} <CheckCircle2 size={12} className="text-authority-blue" fill="currentColor" />
         </div>
         <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{loc}</div>
       </div>
    </div>
  </div>
);

const CertCard = ({ image, title, badge, desc, footer, btnText }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="min-w-[300px] md:min-w-[340px] snap-center bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col"
  >
    <div className="relative h-48 w-full bg-gray-50 flex items-center justify-center">
       <Image src={image} alt={title} fill className="object-contain p-6" />
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

const ProcessStep = ({ icon, title, time, desc, step }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex flex-col items-center text-center group"
  >
    <div className="relative mb-6">
       <div className="w-20 h-20 bg-trust-green rounded-full flex items-center justify-center shadow-[0_0_0_8px_rgba(27,94,32,0.1)] group-hover:scale-110 transition-transform z-10 relative">
          {icon}
       </div>
       <span className="absolute -top-2 -right-2 bg-premium-gold text-trust-green w-8 h-8 rounded-full flex items-center justify-center font-black text-xs z-20 shadow-lg italic">
          {step}
       </span>
    </div>
    <h3 className="text-xl font-extrabold text-trust-green mb-1">{title}</h3>
    <span className="text-authority-blue font-bold text-xs mb-3 flex items-center gap-1">
       <Clock size={12} /> {time}
    </span>
    <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">{desc}</p>
  </motion.div>
);

const StatBox = ({ value, label }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="space-y-2"
  >
     <div className="text-4xl md:text-5xl font-black text-premium-gold drop-shadow-md">{value}</div>
     <div className="text-sm font-bold opacity-80 uppercase tracking-widest">{label}</div>
  </motion.div>
);
