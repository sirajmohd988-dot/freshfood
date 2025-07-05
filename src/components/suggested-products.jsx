import React from "react";import ProductCard from "./product-card";

export default function SuggestedProducts() {
  const products = [
    {
      name: "Tomato",
      price: "26.00",
      image: "/placeholder.svg?height=120&width=120",
      unit: "1kg",
    },
    {
      name: "Carrots",
      price: "18.00",
      image: "/placeholder.svg?height=120&width=120",
      unit: "1kg",
    },
    {
      name: "Cucumbers",
      price: "12.00",
      image: "/placeholder.svg?height=120&width=120",
      unit: "1kg",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Suggested for you
          </h2>
          <button className="text-green-600 hover:text-green-700 font-medium">
            View All →
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
