import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/partnerSlideshow.css';

const partners = [
  { src: '/partnerImages/government-of-karnataka.jpg', name: 'Govt of Karnataka' },
  { src: '/partnerImages/nayara.jpg', name: 'Nayara Energy' },
  { src: '/partnerImages/nasscom.png', name: 'Nasscom Foundation' },
  { src: '/partnerImages/jpmc.png', name: 'JPMC' },
  { src: '/partnerImages/ITC.png', name: 'ITC Limited' },
  { src: '/partnerImages/bosch.png', name: 'BOSCH' },
  { src: '/partnerImages/unicef.png', name: 'UNICEF' },
  { src: '/partnerImages/undp.png', name: 'UNDP' },
  { src: '/partnerImages/ksdc.png', name: 'KSDC' },
  { src: '/partnerImages/plan.png', name: 'PLAN International' },
  { src: '/partnerImages/cimmyt.png', name: 'CIMMYT' },
  { src: '/partnerImages/acenture.png', name: 'Accenture' },
  { src: '/partnerImages/Emblem_of_Telangana.png', name: 'Govt of Telangana' },
  { src: '/partnerImages/ap.png', name: 'Govt of Andhra Pradesh' },
  { src: '/partnerImages/CDOT.png', name: 'C-DOT' },
  { src: '/partnerImages/beml.png', name: 'BEML' },
  { src: '/partnerImages/TNSDC.png', name: 'TNSDC' },
  { src: '/partnerImages/ksrlps.jpg', name: 'KSRLPS' },
];

const PartnerSlideshow = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="partner-slideshow bg-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold pb-2 text-gray-900">Our Partners</h2>
          <div className="h-1 w-24 bg-blue-800 mx-auto mb-4"></div>
        </div>
        <Slider {...settings}>
          {partners.map((partner, index) => (
            <div key={index} className="p-4">
              <div className="bg-white border border-gray-300 rounded-lg p-2 hover:shadow-lg transition-shadow duration-300">
                <img src={partner.src} alt={partner.name} className="mx-auto h-24" />
                <p className="text-center mt-2 text-sm text-gray-600 font-bold">{partner.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PartnerSlideshow;
