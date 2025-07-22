import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-8 bg-transparent w-full">
      <div className="flex items-center space-x-2">
        <span className="text-white text-2xl font-bold">Homyz</span>
        <span className="w-3 h-3 bg-orange-400 rounded-full inline-block mt-2 ml-1"></span>
      </div>
      <ul className="flex items-center space-x-8 text-white text-sm font-medium">
        <li><a href="#residencies" className="hover:text-blue-400 transition">Residencies</a></li>
        <li><a href="#ourvalue" className="hover:text-blue-400 transition">Our Value</a></li>
        <li><a href="#contactus" className="hover:text-blue-400 transition">Contact Us</a></li>
        <li><a href="#getstarted" className="hover:text-blue-400 transition">Get Started</a></li>
      </ul>
      <a href="#getstarted" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-semibold transition">Contact</a>
    </nav>
  );
};

export default Navbar; 