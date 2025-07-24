"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        {/* Left: Logo and tagline */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center">
            <span className="text-4xl font-bold text-blue-800">Homyz</span>
            <div className="relative">
              <div className="absolute -top-2 -left-2 w-5 h-5 bg-orange-400 rounded-full"></div>
            </div>
          </div>
          <p className="mt-4 text-gray-500 text-sm max-w-xs">
            Our vision is to make all people
            <br />
            the best place to live for them.
          </p>
        </motion.div>

        {/* Right: Information and nav links */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-[#1f3e72] mb-4">
            Information
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            145 New York, FL 5467, USA
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-[#1f3e72] font-medium">
            <a href="#property" className="hover:underline">
              Property
            </a>
            <a href="#services" className="hover:underline">
              Services
            </a>
            <a href="#product" className="hover:underline">
              Product
            </a>
            <a href="#aboutus" className="hover:underline">
              About Us
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
