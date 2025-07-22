'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const accordionData = [
  {
    icon: (
      <span className="bg-blue-100 text-blue-500 p-2 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </span>
    ),
    title: 'Best interest rates on the market',
    content: 'Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.',
  },
  {
    icon: (
      <span className="bg-blue-100 text-blue-500 p-2 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </span>
    ),
    title: 'Prevent unstable prices',
    content: 'Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.',
  },
  {
    icon: (
      <span className="bg-blue-100 text-blue-500 p-2 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18" />
        </svg>
      </span>
    ),
    title: 'Best price on the market',
    content: 'Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.',
  },
];

const OurValue: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(2);

  return (
    <section id="ourvalue" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Arch Image */}
        <div className="flex-1 flex justify-center items-center">
          <div className="overflow-hidden rounded-b-[120px] rounded-t-full border-4 border-gray-200 w-[350px] h-[400px] relative">
            <Image src="/globe.svg" alt="Our Value" fill className="object-cover" />
          </div>
        </div>
        {/* Right: Content */}
        <div className="flex-1 max-w-xl">
          <span className="text-lg font-semibold text-orange-400">Our Value</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#23205F] mt-2 mb-2">Value We Give to You</h2>
          <p className="text-gray-400 mb-8">We always ready to help by providing the best services for you. We believe a good place to live can make your life better</p>
          <div className="flex flex-col gap-4">
            {accordionData.map((item, idx) => (
              <div key={idx} className={`bg-white rounded-md border border-gray-200 shadow-sm transition-all ${openIdx === idx ? 'shadow-lg' : ''}`}>
                <button
                  className="flex items-center justify-between w-full px-6 py-4 focus:outline-none"
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                >
                  <div className="flex items-center gap-4">
                    {item.icon}
                    <span className="font-bold text-[#23205F] text-lg text-left">{item.title}</span>
                  </div>
                  <span className="bg-blue-100 p-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-5 h-5 text-blue-500 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                {openIdx === idx && item.content && (
                  <div className="px-6 pb-4 text-gray-400 text-sm animate-fade-in">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValue; 