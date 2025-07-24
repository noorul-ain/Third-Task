"use client";
import React from "react";
import { motion } from "framer-motion";

const GetStarted = () => {
  return (
    <section id="getstarted" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="bg-[#4066ff] rounded-xl p-12 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Get started with Homyz
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl">
            Subscribe and find super attractive price quotes from us.
            <br />
            Find your residence soon
          </p>
          <motion.button
            className="px-8 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-[#4066ff] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStarted;
