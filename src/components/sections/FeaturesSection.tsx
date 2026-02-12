"use client";

import { Heart, ShieldCheck, Truck } from "lucide-react";

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Healthy & Happy Cows = <br/> Healthy Raw Milk & Happy Customers
          </h2>
          <div className="w-24 h-1 bg-trust-green mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-trust-green">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Pure & Organic</h3>
            <p className="text-gray-600">
              Our milk comes from happy cows fed on organic fodder, ensuring the highest quality dairy.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Hygiene Guaranteed</h3>
            <p className="text-gray-600">
              We follow strict hygiene protocols during milking and packaging to ensure safety.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-600">
              <Truck size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Farm to Home</h3>
            <p className="text-gray-600">
              Direct delivery from our farm to your doorstep within hours of milking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
