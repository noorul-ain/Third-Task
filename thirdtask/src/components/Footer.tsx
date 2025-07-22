import React from 'react';

const Footer: React.FC = () => {
  return (
    <nav className="flex justify-between items-start w-full px-12 py-8 bg-white">
      {/* Left: Logo and tagline */}
      <div className="flex flex-col items-start max-w-xs">
        <div className="relative flex items-center">
          <span className="text-3xl font-bold text-blue-800">Homyz</span>
          {/* Dot above the 'z' */}
          <span className="absolute left-[60px] -top-3 w-5 h-5 bg-orange-400 rounded-full"></span>
        </div>
        <p className="mt-4 text-gray-500 text-base">
          Our vision is to make all people<br />
          the best place to live for them.
        </p>
      </div>
      {/* Right: Information and nav links */}
      <div className="flex flex-col items-end text-right max-w-md">
        <span className="text-2xl font-bold text-blue-900 mb-2">Information</span>
        <span className="text-gray-400 text-sm mb-4">145 New York, FL 5467, USA</span>
        <ul className="flex space-x-6 text-black font-semibold text-base mt-2">
          <li><a href="#property" className="hover:underline">Property</a></li>
          <li><a href="#services" className="hover:underline">Services</a></li>
          <li><a href="#product" className="hover:underline">Product</a></li>
          <li><a href="#aboutus" className="hover:underline">About Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Footer; 