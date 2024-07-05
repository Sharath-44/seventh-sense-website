import React from 'react';
import { partnerData } from '../../Data/partnerData';

const PartnerTiles = () => {
  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Our Partners</h2>
          <div className="h-1 w-24 bg-blue-800 mx-auto mb-4"></div>
        </div>

        {Object.entries(partnerData).map(([sectionTitle, partners], sectionIndex) => (
          <div key={sectionIndex} className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{sectionTitle.replace(/([A-Z])/g, ' $1').trim()}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-center">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg shadow-lg bg-white transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl flex flex-col items-center"
                  style={{ height: '175px' }} 
                >
                  <img src={partner.logo} alt={partner.name} className="h-20 mx-auto" />
                  <p className="text-center mt-2 text-sm text-gray-600 font-bold">{partner.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerTiles;
