import React from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="bg-white text-green-600 px-3 py-1 rounded-md font-bold text-lg mb-4 inline-block">
              FRESH
            </div>
            <p className="text-green-100 mb-4">Fresh Food</p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-green-200" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-green-200" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-green-200" />
              <Youtube className="w-5 h-5 cursor-pointer hover:text-green-200" />
            </div>
          </div>

          {/* Fresh Food Pages */}
          <div>
            <h3 className="font-semibold mb-4">Fresh Food Pages</h3>
            <ul className="space-y-2 text-green-100">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-semibold mb-4">Information</h3>
            <ul className="space-y-2 text-green-100">
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="text-green-100 space-y-2">
              <p>📧 info@freshfood.com</p>
              <p>📞 +1 234 567 8900</p>
              <p>📍 123 Fresh Street, City</p>
            </div>
          </div>
        </div>

        <div className="border-t border-green-500 mt-8 pt-8 text-center text-green-100">
          <p>&copy; 2024 Fresh Food. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
