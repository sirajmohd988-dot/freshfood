import React from "react";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-black">
              Eat Healthy
              <br />
              Live Healthy
            </h1>
            <p className="text-lg mb-6 opacity-90 text-gray-400">
              We provide you the fresh organic and chemical free foods to your
              doorstep as your needs.
            </p>
            <button className="text-white bg-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
              Call for details
              <ArrowRight className="w-4 h-4" />
            </button>

            
          </div>
          {/* <div className="relative">
            <div className="bg-white/20 rounded-full p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <img
                    src="/placeholder.svg?height=80&width=80"
                    alt="Fresh vegetables"
                    className="w-full h-20 object-cover rounded"
                  />
                </div>
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <img
                    src="/placeholder.svg?height=80&width=80"
                    alt="Fresh fruits"
                    className="w-full h-20 object-cover rounded"
                  />
                </div>
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <img
                    src="/placeholder.svg?height=80&width=80"
                    alt="Organic produce"
                    className="w-full h-20 object-cover rounded"
                  />
                </div>
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <img
                    src="/placeholder.svg?height=80&width=80"
                    alt="Healthy food"
                    className="w-full h-20 object-cover rounded"
                  />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
