"use client"
;
import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const residences = [
  {
    image: "/r1.png",
    price: "47,043",
    title: "Aliva Priva Jardin",
    address:
      "Jakarta Garden City Street, Cakung, Pulo Gadung, Jakarta Timur, DKI Jakarta",
  },
  {
    image: "/r2.png",
    price: "66,353",
    title: "Asatti Garden City",
    address:
      "Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat",
  },
  {
    image: "/r3.png",
    price: "35,853",
    title: "Citralan Puri Serang",
    address:
      "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
  },
  {
    image: "/r1.png",
    price: "47,043",
    title: "Aliva Priva Jardin",
    address:
      "Jakarta Garden City Street, Cakung, Pulo Gadung, Jakarta Timur, DKI Jakarta",
  },

  {
    image: "/r2.png",
    price: "66,353",
    title: "Asatti Garden City",
    address:
      "Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat",
  },
  {
    image: "/r3.png",
    price: "35,853",
    title: "Citralan Puri Serang",
    address:
      "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
  },
  {
    image: "/r1.png",
    price: "47,043",
    title: "Aliva Priva Jardin",
    address:
      "Jakarta Garden City Street, Cakung, Pulo Gadung, Jakarta Timur, DKI Jakarta",
  },
];

// Using the existing SVGs as logo placeholders
const logos = [
  { src: "/logo1.png", alt: "PROLOGIS" },
  { src: "/logo2.png", alt: "AMERICAN TOWER" },
  { src: "/logo3.png", alt: "EQUINIX" },
  { src: "/logo4.png", alt: "DIGITAL REALTY" },
];

function ResidenciesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < residences.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex === residences.length - 1;

  return (
    <section id="residencies" className="py-16">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Logos Row */}
        <div className="flex flex-row flex-wrap justify-center items-center gap-8 mb-10">
          {logos.map((logo, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={40}
                className="h-20 w-auto opacity-70 mb-2 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>

        {/* Section Title and Navigation */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-lg font-semibold text-orange-400">
              Best Choices
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1f3e72] mt-2">
              Popular Residencies
            </h2>
          </motion.div>

          <div className="flex space-x-2 mt-4 md:mt-0">
            <motion.button
              onClick={handlePrev}
              disabled={isAtStart}
              className={`bg-white shadow-md p-2 rounded-md transition-all duration-300 ${
                isAtStart ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
              }`}
              whileHover={!isAtStart ? { scale: 1.1 } : {}}
              whileTap={!isAtStart ? { scale: 0.95 } : {}}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-[#1f3e72]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </motion.button>

            <motion.button
              onClick={handleNext}
              disabled={isAtEnd}
              className={`bg-white shadow-md p-2 rounded-md transition-all duration-300 ${
                isAtEnd ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
              }`}
              whileHover={!isAtEnd ? { scale: 1.1 } : {}}
              whileTap={!isAtEnd ? { scale: 0.95 } : {}}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-[#1f3e72]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Cards Carousel */}
        <div ref={carouselRef} className="relative overflow-hidden">
          <motion.div
            className="flex gap-3 py-4"
            initial={{ x: 0 }}
            animate={{
              x: `-${currentIndex * (100 / residences.length)}%`,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {residences.map((residence, idx) => (
              <motion.div
                key={idx}
                className="min-w-[120px] sm:min-w-[120px] flex-shrink-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl">
                  <div className="relative w-full h-36">
                    <Image
                      src={residence.image}
                      alt={residence.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-2">
                    <div className="text-orange-400 font-bold text-sm mb-1">
                      ${residence.price}
                    </div>
                    <h3 className="text-sm font-bold text-[#1f3e72] mb-1">
                      {residence.title}
                    </h3>
                    <p className="text-gray-500 text-[8px] line-clamp-2">
                      {residence.address}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ResidenciesSection;
