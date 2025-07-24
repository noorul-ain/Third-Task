"use client";

import HeroSection from "../components/HeroSection";
import ResidenciesSection from "../components/ResidenciesSection";
import OurValue from "../components/OurValue";
import ContactUs from "../components/ContactUs";
import GetStarted from "../components/GetStarted";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// Import specific components from framer-motion instead of the entire library
import { motion as m } from "framer-motion";
import { ArchImage } from "@/components/ArchImage";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Navbar with dark background */}
      <div className="bg-[#131110] relative">
        {/* Gradient overlay in the top left */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-[#1a1a19]/50 to-transparent"></div>

        <Navbar />

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto pt-4 md:pt-8 px-4 pb-16">
          {/* Left Side - Hero Content */}
          <div className="w-full lg:w-1/2 lg:pr-8">
            <HeroSection />
          </div>

          {/* Right Side - Building Image */}
          <m.div
            className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Arch-shaped container to match the provided image */}
            <div className="relative w-full max-w-[500px] ">
              {/* Arch shape using border-radius on top */}
              <ArchImage src="hero-image.png" type="hero" />

              {/* Floating elements */}
              <m.div
                className="absolute top-[5%] right-[15%] w-5 h-5 bg-orange-400 rounded-full"
                animate={{ y: [-8, 0, -8] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <m.div
                className="absolute bottom-[15%] left-[10%] w-4 h-4 bg-blue-300 rounded-full"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <m.div
                className="absolute top-[40%] right-[5%] w-3 h-3 bg-white rounded-full"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </m.div>
        </div>
      </div>

      {/* Other Sections - All with consistent container styling */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto">
          <ResidenciesSection />
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto">
          <OurValue />
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto">
          <ContactUs />
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto">
          <GetStarted />
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto">
          <Footer />
        </div>
      </div>
    </main>
  );
}
