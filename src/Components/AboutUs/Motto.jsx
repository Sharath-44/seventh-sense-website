import React from 'react';
import backgroundImage from '/mottoBack.jpg'; 

const Motto = () => {
  return (
    <div
      className="relative bg-cover bg-center h-80 md:h-96 flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-black bg-opacity-70 p-4 sm:p-6 md:p-8 rounded-lg max-w-3xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-4 text-center">Our Motto</h2>
        <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed text-justify">
          Our motto is to nurture problem-solving capacity in children and youth across the globe. We design scalable interventions that build future-ready skills and enable innovative, entrepreneurial thinking and change through youth ideas. We believe that to build a new world that is socially inclusive, economically vibrant, and environmentally sustainable, we need to nurture future leaders, changemakers, innovators, and entrepreneurs who can transform their communities and the world. This involves Entrepreneurship / Capacity building, content development, IT and software training, soft skills training, team development, communication skills, leadership skills, and training facilitation.
        </p>
      </div>
    </div>
  );
};

export default Motto;
