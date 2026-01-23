import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBadge } from "@/components/trust/TrustBadge";
import { PurityIndicator } from "@/components/trust/PurityIndicator";
import { DeliveryTimeIndicator } from "@/components/ui/delivery-time-indicator";
import { RamadanSection } from "@/components/sections/RamadanSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { SubscriptionSection } from "@/components/sections/SubscriptionSection";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <RamadanSection />

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
                type="halal" 
                label="Halal" 
                tooltipText="Certified by National Halal Council" 
              />
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
            <PurityIndicator purityScore={100} lastTested="Today, 4:00 AM" />
            <DeliveryTimeIndicator />
          </div>
        </div>
      </section>

      <TrustSection />

      <ProductsSection />

      <SubscriptionSection />

      <footer className="bg-trust-green text-white py-12">
         <div className="container mx-auto px-4 max-w-7xl text-center">
            <p className="font-bold text-xl mb-4">Qasim Milk Shop</p>
            <p className="opacity-70 text-sm mb-6">Serving purity across Lahore since 2019</p>
            <div className="flex justify-center gap-6 mb-8 underline decoration-premium-gold underline-offset-4">
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
              <a href="#">Lab Reports</a>
            </div>
            <p className="text-xs opacity-50 font-sans">© 2026 Qasim Milk Shop. All rights reserved.</p>
         </div>
      </footer>
    </main>
  );
}
