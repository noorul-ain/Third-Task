import React from 'react';
import Image from 'next/image';

const contacts = [
  {
    icon: (
      <span className="bg-blue-100 text-blue-500 p-2 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 8.5C2 7.12 3.12 6 4.5 6h15A2.5 2.5 0 0122 8.5v7A2.5 2.5 0 0119.5 18h-15A2.5 2.5 0 012 15.5v-7z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 10h.01M12 10h.01M18 10h.01" />
        </svg>
      </span>
    ),
    title: 'Call',
    number: '021 123 145 14',
    action: 'Call now',
    actionColor: 'text-blue-600',
  },
  {
    icon: (
      <span className="bg-blue-100 text-blue-500 p-2 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8a9 9 0 100-18 9 9 0 000 18z" />
        </svg>
      </span>
    ),
    title: 'Chat',
    number: '021 123 145 14',
    action: 'Chat now',
    actionColor: 'text-blue-600',
  },
  {
    icon: (
      <span className="bg-blue-100 text-blue-500 p-2 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A2 2 0 0020 6.382V5a2 2 0 00-2-2H6a2 2 0 00-2 2v1.382a2 2 0 00.447 1.342L9 10m6 0v4a2 2 0 01-2 2H7a2 2 0 01-2-2v-4m11 0h-1.5" />
        </svg>
      </span>
    ),
    title: 'Video Call',
    number: '021 123 145 14',
    action: 'Video Call now',
    actionColor: 'text-blue-600',
  },
  {
    icon: (
      <span className="bg-blue-100 text-blue-500 p-2 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v8z" />
        </svg>
      </span>
    ),
    title: 'Message',
    number: '021 123 145 14',
    action: 'Message now',
    actionColor: 'text-blue-600',
  },
];

const ContactUs: React.FC = () => {
  return (
    <section id="contactus" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Content */}
        <div className="flex-1 max-w-xl">
          <span className="text-lg font-semibold text-orange-400">Our Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#23205F] mt-2 mb-2">Easy to contact us</h2>
          <p className="text-gray-400 mb-8">We always ready to help by providing the best services for you. We believe a good place to live can make your life better</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contacts.map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-md shadow-sm p-6 flex flex-col gap-2">
                <div className="flex items-center gap-4 mb-2">
                  {item.icon}
                  <div>
                    <div className="font-bold text-[#23205F] text-lg">{item.title}</div>
                    <div className="text-gray-400 text-sm">{item.number}</div>
                  </div>
                </div>
                <button className={`mt-2 bg-blue-50 rounded-md py-2 font-semibold ${item.actionColor} transition hover:bg-blue-100`}>{item.action}</button>
              </div>
            ))}
          </div>
        </div>
        {/* Right: Arch Image */}
        <div className="flex-1 flex justify-center items-center">
          <div className="overflow-hidden rounded-b-[120px] rounded-t-full border-4 border-gray-200 w-[350px] h-[400px] relative">
            <Image src="/globe.svg" alt="Contact Us" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs; 