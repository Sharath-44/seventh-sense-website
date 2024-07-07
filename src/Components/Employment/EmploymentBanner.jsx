import React from 'react';

const EmploymentBanner = () => {
  return (
    <div className="relative bg-gray-50 py-40 md:py-60"> 
      <div className="absolute inset-0 z-0">
        <img 
          src="/banner/employmentBanner.jpg" 
          alt="Team Banner" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
    </div>
  );
};

export default EmploymentBanner;

