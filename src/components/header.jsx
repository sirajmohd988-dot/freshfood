import React from "react";
import { ShoppingCart, Search, User } from "lucide-react";
import { CgProfile } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Header() {
  return (
    <header className="bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-green-500 text-white px-3 py-1 rounded-md font-bold text-lg">
              FRESH
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-green-600 font-medium"
            >
              Home
            </a>
            <span className="flex items-center text-sm text-gray-700 cursor-pointer">
              Categories <RiArrowDropDownLine size={22} />
            </span>
            <span className="flex items-center text-sm text-gray-700 cursor-pointer">
              Pages <RiArrowDropDownLine size={22} />
            </span>
            <a
              href="#"
              className="text-gray-700 hover:text-green-600 font-medium"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-green-600 font-medium"
            >
              About
            </a>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Input with Search icon inside */}

            <div className="relative">
              <input
                type="text"
                placeholder="Search for product..."
                className="pl-4 pr-12 py-2.5 rounded-full border-0 text-sm w-full bg-white shadow-sm"
              />
              <button className="absolute right-0 top-0 bottom-0 bg-green-600 hover:bg-green-700 rounded-r-full px-4 transition-colors flex items-center justify-center">
                <Search className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* User Icon */}
            <CgProfile className="w-5 h-5 text-gray-600 cursor-pointer" />

            {/* Shopping Cart Icon with badge */}
            <div className="relative">
              <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
