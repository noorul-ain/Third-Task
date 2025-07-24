"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArchImage } from "./ArchImage";

// Value Image Component

// Accordion Item Component
const AccordionItem = ({
  item,
  idx,
  isOpen,
  toggleAccordion,
}: {
  item: { title: string; content: string };
  idx: number;
  isOpen: boolean;
  toggleAccordion: () => void;
}) => {
  const icons = [
    // Star icon
    <span key="star" className="bg-blue-100 text-blue-600 p-2 rounded-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
          clipRule="evenodd"
        />
      </svg>
    </span>,
    // X-circle icon
    <span key="x-circle" className="bg-blue-100 text-blue-600 p-2 rounded-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
          clipRule="evenodd"
        />
      </svg>
    </span>,
    // Shopping bag icon
    <span key="bag" className="bg-blue-100 text-blue-600 p-2 rounded-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fillRule="evenodd"
          d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
          clipRule="evenodd"
        />
      </svg>
    </span>,
  ];

  return (
    <motion.div
      className={`bg-white rounded-md border border-gray-200 shadow-sm transition-all ${
        isOpen ? "shadow-lg" : ""
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
    >
      <button
        className="flex items-center justify-between w-full px-6 py-4 focus:outline-none"
        onClick={toggleAccordion}
        style={{ outline: "none" }}
      >
        <div className="flex items-center gap-4">
          {icons[idx % 3]}
          <span className="font-bold text-[#1f3e72] text-lg text-left">
            {item.title}
          </span>
        </div>
        <span className="bg-white p-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`w-5 h-5 text-blue-500 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      {isOpen && (
        <motion.div
          className="px-6 pb-4 text-gray-500 text-sm"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          {item.content}
        </motion.div>
      )}
    </motion.div>
  );
};

// Content Section Component
const ValueContent = ({
  accordionData,
}: {
  accordionData: Array<{ title: string; content: string }>;
}) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <motion.div
      className="flex-1 max-w-xl"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
    >
      <span className="text-lg font-semibold text-orange-400">Our Value</span>
      <h2 className="text-3xl md:text-4xl font-bold text-[#1f3e72] mt-2 mb-4">
        Value We Give to You
      </h2>
      <p className="text-gray-500 mb-8">
        We always ready to help by providing the best services for you.
        <br />
        We believe a good place to live can make your life better
      </p>
      <div className="flex flex-col gap-4">
        {accordionData.map((item, idx) => (
          <AccordionItem
            key={idx}
            item={item}
            idx={idx}
            isOpen={openIdx === idx}
            toggleAccordion={() => setOpenIdx(openIdx === idx ? null : idx)}
          />
        ))}
      </div>
    </motion.div>
  );
};

// Main Component
function OurValue() {
  const accordionData = [
    {
      title: "Best interest rates on the market",
      content:
        "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
    {
      title: "Prevent unstable prices",
      content:
        "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
    {
      title: "Best price on the market",
      content:
        "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
  ];

  return (
    <section id="ourvalue" className="py-16 px-6 sm:px-8 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 justify-between">
        <div className="w-full lg:w-auto flex justify-center">
          <ArchImage src="/r1.png" />
        </div>
        <ValueContent accordionData={accordionData} />
      </div>
    </section>
  );
}

export default OurValue;
