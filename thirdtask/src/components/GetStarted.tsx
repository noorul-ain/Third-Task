import React from 'react';

const GetStarted: React.FC = () => {
  return (
    <section id="getstarted" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-blue-600 rounded-lg p-12 flex flex-col items-center text-center border-4 border-blue-300">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">Get started with Homyz</h2>
          <p className="text-blue-100 mb-6">Subscribe and find super attractive price quotes from us.<br />Find your residence soon</p>
          <button className="px-8 py-2 rounded-md border border-white text-white font-semibold hover:bg-white hover:text-blue-600 transition">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted; 