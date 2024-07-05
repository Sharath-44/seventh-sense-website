import React from 'react';
import { Link } from 'react-router-dom';
import skilling from '/homeSlideshow/skilling.jpg';
import innovationEntrepreneurship from '/homeSlideshow/innovation.jpg';
import womenEmpowermentImage from '/homeSlideshow/we.jpg';
import employability from '/homeSlideshow/employment.jpg';
import research from '/homeSlideshow/research.jpg';

const PrimaryAreas = () => {
  const areas = [
    {
      title: 'Women Empowerment',
      image: womenEmpowermentImage,
      link: '/women-empowerment'
    },
    {
      title: 'Innovation & Entrepreneurship',
      image: innovationEntrepreneurship,
      link: '/innovation-entrepreneurship'
    },
    {
      title: 'Skilling',
      image: skilling,
      link: '/skilling'
    },
    {
      title: 'Employment',
      image: employability,
      link: '/employment'
    },
    {
      title: 'Research',
      image: research,
      link: '/research'
    },
  ];

  return (
    <div className="bg-blue-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h2 className="text-4xl font-extrabold mb-6 text-center">Mission & Vision</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {areas.map((area) => (
            <Link to={area.link} key={area.title} className="block rounded-lg overflow-hidden shadow-lg bg-white text-black transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <img src={area.image} alt={area.title} className="w-full h-40 object-contain" />
              <div className="p-4">
                <h3 className="text-lg font-medium">{area.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrimaryAreas;
