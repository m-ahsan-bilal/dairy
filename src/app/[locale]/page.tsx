import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBadge } from "@/components/trust/TrustBadge";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { SubscriptionSection } from "@/components/sections/SubscriptionSection";
import { AreasSection } from "@/components/sections/AreasSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />

      <section className="py-20 container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-trust-green font-urdu leading-tight">
              Hamara Waada: 100% Khalis <br/>
              <span className="text-premium-gold">Our Promise: 100% Pure</span>
            </h2>
            <p className="text-lg text-gray-600 font-sans leading-relaxed">
              For over 5 years, Qasim Milk Shop has been the gold standard for dairy in Lahore. 
              We don't just deliver milk; we deliver health, trust, and morning smiles to your doorstep 
              before the city wakes up.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <TrustBadge 
                type="pfa" 
                label="PFA Approved" 
                tooltipText="Verified by Punjab Food Authority" 
              />
              <TrustBadge 
                type="lab-tested" 
                label="Lab Tested" 
                tooltipText="Tested daily for fat & purity" 
              />
            </div>
          </div>
          <div className="flex justify-center flex-col gap-6">
            {/* Components removed as per user request */}
          </div>
        </div>
      </section>

      <TrustSection />

      <ProductsSection />

      <AreasSection />





      <SubscriptionSection />

      <ContactSection />
    </main>
  );
}
