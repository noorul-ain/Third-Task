import React from 'react';
import Image from 'next/image';

type ResidenceCardProps = {
  image: string;
  price: string;
  title: string;
  address: string;
  link?: string;
};

const ResidenceCard: React.FC<ResidenceCardProps> = ({ image, price, title, address, link }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-60 flex flex-col cursor-pointer transition-transform hover:-translate-y-2 hover:shadow-lg">
      <div className="relative w-full h-32">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Image src={image} alt={title} fill className="rounded-t-xl object-cover" />
          </a>
        ) : (
          <Image src={image} alt={title} fill className="rounded-t-xl object-cover" />
        )}
      </div>
      <div className="p-3 flex-1 flex flex-col">
        <span className="text-yellow-500 font-semibold text-base">${price}</span>
        <h3 className="text-lg font-bold text-[#23205F] mt-1 mb-1">{title}</h3>
        <p className="text-gray-400 text-xs leading-snug">{address}</p>
      </div>
    </div>
  );
};

export default ResidenceCard; 