"use client";

import React, { useState } from "react";
import { motion as m } from "framer-motion";

function HeroSection() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <section className="flex flex-col justify-center h-full py-8 md:py-16 px-4 md:px-8 text-white max-w-xl">
      {/* Main Heading */}
      <m.h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        Discover{" "}
        <span className="relative inline-block">
          Most Suitable
          <m.span
            className="absolute -top-2 md:-top-4 -right-4 md:-right-6 w-8 h-8 md:w-12 md:h-12 bg-orange-400 rounded-full -z-10"
            animate={{ y: [-5, 0, -5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          ></m.span>
        </span>
        <br />
        Property
      </m.h1>

      {/* Description */}
      <m.p
        className="text-gray-300 mb-8 max-w-md text-sm md:text-base leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Find a variety of properties that suit you very easily
        <br />
        Forget all difficulties in finding a residence for you
      </m.p>

      {/* Search Bar */}
      <m.div
        className="flex items-center bg-white rounded-lg shadow-xl p-1 mb-8 w-full max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <span className="text-blue-600 text-xl px-3 py-2 flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 md:w-6 md:h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z"
            />
          </svg>
        </span>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search by location..."
          className="flex-1 px-2 py-3 text-gray-800 bg-transparent outline-none text-sm md:text-base placeholder-gray-500"
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-md font-semibold transition-all hover:scale-[1.03]">
          Search
        </button>
      </m.div>

      {/* Statistics */}
      <m.div
        className="flex justify-center gap-2 sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8 md:space-x-12 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <div className="group cursor-pointer hover:scale-105 transition-transform">
          <span className="text-2xl md:text-3xl font-bold inline-block">
            9,000 <span className="text-orange-400">+</span>
          </span>
          <div className="text-xs md:text-sm text-gray-400 mt-1 group-hover:text-gray-300">
            Premium Product
          </div>
        </div>
        <div className="group cursor-pointer hover:scale-105 transition-transform">
          <span className="text-2xl md:text-3xl font-bold inline-block">
            2,000 <span className="text-orange-400">+</span>
          </span>
          <div className="text-xs md:text-sm text-gray-400 mt-1 group-hover:text-gray-300">
            Happy Customer
          </div>
        </div>
        <div className="group cursor-pointer hover:scale-105 transition-transform">
          <span className="text-2xl md:text-3xl font-bold inline-block">
            28 <span className="text-orange-400">+</span>
          </span>
          <div className="text-xs md:text-sm text-gray-400 mt-1 group-hover:text-gray-300">
            Awards Winning
          </div>
        </div>
      </m.div>
    </section>
  );
}

export default HeroSection;
