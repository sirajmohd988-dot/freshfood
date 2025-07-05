import React from "react";
import { Truck, Shield, Clock } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Truck className="w-8 h-8 text-green-600" />,
      title: "Super Fast Delivery",
    //   description: "Our team fresh up your family anytime and anywhere",
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "100% Eco Friendly",
    //   description: "100% healthy & Fresh food",
    },
    {
      icon: <Clock className="w-8 h-8 text-green-600" />,
      title: "Organic Foods",
    //   description: "1 hour fast delivery",
    },
  ];

  return (
    <section className="py-16 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-12">
          Get fresh foods for your family anytime and anywhere.
        </h2>

        {/* 3 Columns for features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              {/* <p className="text-gray-600">{feature.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
