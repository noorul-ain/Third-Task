"use client";

import React, { useState } from "react";
import { motion as m } from "framer-motion";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full py-6 px-4 md:px-8 bg-transparent relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <m.div
          className="flex items-center space-x-2 group cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center">
            <span className="text-4xl font-bold text-white">Homyz</span>
            <div className="relative">
              <div className="absolute -top-5 -z-20 -left-2 w-5 h-5 bg-gradient-to-br from-white to-blue-500 rounded-full"></div>
            </div>
          </div>
        </m.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center space-x-8 text-white text-sm font-medium">
            <m.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <a
                href="#residencies"
                className="hover:text-blue-400 transition-all duration-300 relative group py-2"
              >
                Residencies
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </m.li>
            <m.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a
                href="#ourvalue"
                className="hover:text-blue-400 transition-all duration-300 relative group py-2"
              >
                Our Value
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </m.li>
            <m.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href="#contactus"
                className="hover:text-blue-400 transition-all duration-300 relative group py-2"
              >
                Contact Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </m.li>
            <m.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="#getstarted"
                className="hover:text-blue-400 transition-all duration-300 relative group py-2"
              >
                Get Started
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </m.li>
          </ul>

          {/* Contact Button */}
          <m.a
            href="#contact"
            className="bg-[#4066ff] hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-all hover:shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </m.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
        >
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${
              isMenuOpen ? "rotate-45" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-sm transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 max-h-[400px]"
            : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          <a
            href="#residencies"
            className="block text-white hover:text-blue-400 py-2 border-b border-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Residencies
          </a>
          <a
            href="#ourvalue"
            className="block text-white hover:text-blue-400 py-2 border-b border-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Value
          </a>
          <a
            href="#contactus"
            className="block text-white hover:text-blue-400 py-2 border-b border-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </a>
          <a
            href="#getstarted"
            className="block text-white hover:text-blue-400 py-2 border-b border-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Started
          </a>
          <a
            href="#contact"
            className="block bg-[#4066ff] hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold text-center mt-4 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
