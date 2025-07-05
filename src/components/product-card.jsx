import React from "react";
import { Plus } from "lucide-react";

export default function ProductCard({ name, price, image, unit = "500g" }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="relative mb-4">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-32 object-cover rounded-lg"
        />
        <button className="absolute top-2 right-2 bg-green-500 text-white p-1 rounded-full hover:bg-green-600 transition-colors">
          <Plus className="w-4 h-4" />
        </button>
      </div>
      <h3 className="font-semibold text-gray-800 mb-1">{name}</h3>
      <p className="text-sm text-gray-500 mb-2">{unit}</p>
      <p className="text-green-600 font-bold">${price}</p>
    </div>
  );
}
