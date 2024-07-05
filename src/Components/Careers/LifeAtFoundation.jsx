import React from 'react';

const images = [
  '/seventhTeam/s1.jpg',
  '/seventhTeam/s3.jpg',
  '/seventhTeam/s2.jpg',
];

const LifeAtFoundation = () => {
  return (
    <div className="bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white mb-4">Life at Seventh Sense</h2>
          <p className="text-lg text-white mb-6">
            The experience of living at the Seventh Sense is lively and fulfilling. We promote a collaborative, innovative, and ever-learning culture. A common enthusiasm for using technology to advance positive social change motivates our team members. Life at Seventh Sense is inspiring and gratifying, with possibilities for professional advancement, a friendly work environment, and important projects. <br />Come along with us and become a part of a community changing the world.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img src={image} alt={`Life at foundation ${index + 1}`} className="object-cover w-full h-64" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LifeAtFoundation;
