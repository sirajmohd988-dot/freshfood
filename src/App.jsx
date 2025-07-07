import React from "react";
import Header from "./components/header";
import HeroSection from "./components/hero-section";
import FeaturesSection from "./components/features-section";
import SuggestedProducts from "./components/suggested-products";
import BrowseProducts from "./components/browse-products";
import DeliverySection from "./components/delivery-section";
import Footer from "./components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <SuggestedProducts />
      <BrowseProducts />
      <DeliverySection />
      <Footer />
    </div>
  );
}
