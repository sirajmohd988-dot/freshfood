import React from "react";
import ProductCard from "./product-card";

export default function BrowseProducts() {
  const products = [
    {
      name: "Cauliflower",
      price: "12.00",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Asparagus",
      price: "18.00",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Carrots",
      price: "15.00",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Tomatoes",
      price: "20.00",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Oranges",
      price: "25.00",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Avocado",
      price: "30.00",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Pumpkin",
      price: "8.00",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Potatoes",
      price: "10.00",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Onions",
      price: "12.00",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Broccoli",
      price: "22.00",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Okra",
      price: "16.00",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Spinach",
      price: "14.00",
      image: "/placeholder.svg?height=100&width=100",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Browse Products</h2>
          <div className="flex gap-2">
            <button className="p-2 border rounded-lg hover:bg-gray-100">
              ←
            </button>
            <button className="p-2 border rounded-lg hover:bg-gray-100">
              →
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
