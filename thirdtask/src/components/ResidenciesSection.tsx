'use client'
import React, { useState } from 'react';
import ResidenceCard from './ResidenceCard';

const residences = [
  {
    image: '/globe.svg',
    price: '66,353',
    title: 'Asatti Garden City',
    address: 'Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat',
    link: 'https://example.com/1',
  },
  {
    image: '/vercel.svg',
    price: '35,853',
    title: 'Citralan Puri Serang',
    address: 'Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten',
    link: 'https://example.com/2',
  },
  {
    image: '/next.svg',
    price: '47,043',
    title: 'Aliva Priva Jardin',
    address: 'Jakarta Garden City Street, Cakung, Pulo Gadung, Jakarta Timur, DKI Jakarta',
    link: 'https://example.com/3',
  },
  {
    image: '/globe.svg',
    price: '66,353',
    title: 'Asatti Garden City',
    address: 'Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat',
    link: 'https://example.com/4',
  },
  {
    image: '/vercel.svg',
    price: '39,000',
    title: 'New Residence',
    address: 'Somewhere, City, Country',
    link: 'https://example.com/5',
  },
  {
    image: '/next.svg',
    price: '50,000',
    title: 'Another Place',
    address: 'Another Address, City, Country',
    link: 'https://example.com/6',
  },
];

const logos = [
  { src: '/globe.svg', alt: 'PROLOGIS' },
  { src: '/vercel.svg', alt: 'AMERICAN TOWER' },
  { src: '/next.svg', alt: 'EQUINIX' },
  { src: '/globe.svg', alt: 'DIGITAL REALTY' },
];

const CARDS_PER_PAGE = 4;

const ResidenciesSection: React.FC = () => {
  const [startIdx, setStartIdx] = useState(0);

  const handlePrev = () => {
    setStartIdx((prev) => Math.max(prev - CARDS_PER_PAGE, 0));
  };

  const handleNext = () => {
    setStartIdx((prev) =>
      prev + CARDS_PER_PAGE < residences.length ? prev + CARDS_PER_PAGE : prev
    );
  };

  const visibleResidences = residences.slice(startIdx, startIdx + CARDS_PER_PAGE);

  return (
    <section id="residencies" className="py-16 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Logos Row */}
        <div className="flex justify-center items-center gap-16 mb-8">
          {logos.map((logo, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img src={logo.src} alt={logo.alt} className="h-10 w-auto opacity-60 mb-2" />
              <span className="text-xs text-gray-400 font-semibold tracking-wide uppercase">{logo.alt}</span>
            </div>
          ))}
        </div>
        {/* Section Title and Arrows */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
          <div>
            <span className="text-lg font-semibold text-orange-400">Best Choices</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#23205F] mt-2">Popular Residencies</h2>
          </div>
          <div className="flex space-x-2 mt-4 md:mt-0">
            <button onClick={handlePrev} disabled={startIdx === 0} className={`bg-white shadow p-2 rounded-md hover:bg-gray-100 transition flex items-center justify-center ${startIdx === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#23205F]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button onClick={handleNext} disabled={startIdx + CARDS_PER_PAGE >= residences.length} className={`bg-white shadow p-2 rounded-md hover:bg-gray-100 transition flex items-center justify-center ${(startIdx + CARDS_PER_PAGE >= residences.length) ? 'opacity-50 cursor-not-allowed' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#23205F]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {visibleResidences.map((res, idx) => (
            <ResidenceCard key={idx} {...res} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResidenciesSection; 