import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col justify-center h-full py-16 px-8 text-white max-w-xl">
      <h1 className="text-5xl font-bold leading-tight mb-4">
        Discover <span className="relative inline-block">
          Most Suitable
          <span className="absolute -top-4 -right-6 w-12 h-12 bg-orange-400 rounded-full -z-10"></span>
        </span><br />
        Property
      </h1>
      <p className="text-gray-300 mb-8 max-w-md">
        Find a variety of properties that suit you very easily<br />
        Forget all difficulties in finding a residence for you
      </p>
      <div className="flex items-center bg-white rounded-md shadow-md p-2 mb-8 w-full max-w-lg">
        <span className="text-blue-600 text-xl px-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c.414-1.13 1.36-2.94 2.25-4.5C15.9 14.1 18 11.5 18 9a6 6 0 10-12 0c0 2.5 2.1 5.1 3.75 7.5.89 1.56 1.84 3.37 2.25 4.5z" />
            <circle cx="12" cy="9" r="2.25" />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 px-2 py-2 text-gray-800 bg-transparent outline-none"
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-semibold transition">
          Search
        </button>
      </div>
      <div className="flex space-x-12 mt-4">
        <div>
          <span className="text-2xl font-bold">9,000 <span className="text-yellow-400">+</span></span>
          <div className="text-xs text-gray-400 mt-1">Premium Product</div>
        </div>
        <div>
          <span className="text-2xl font-bold">2,000 <span className="text-yellow-400">+</span></span>
          <div className="text-xs text-gray-400 mt-1">Happy Customer</div>
        </div>
        <div>
          <span className="text-2xl font-bold">28 <span className="text-yellow-400">+</span></span>
          <div className="text-xs text-gray-400 mt-1">Awards Winning</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 