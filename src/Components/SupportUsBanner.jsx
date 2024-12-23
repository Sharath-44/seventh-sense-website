import React from 'react';
import '../assets/partnerUsBanner.css';

const SupportUsBanner = () => {
  return (
    <div className="relative bg-gray-50 py-60 md:py-80">
      <div className="absolute inset-0 z-0">
        <img
          src="/banner/supportBanner.jpg"
          alt="Team Banner"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
    </div>
  );
};

export default SupportUsBanner;
