import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaUserFriends, FaLightbulb, FaChalkboardTeacher, FaBriefcase, FaSearch } from 'react-icons/fa';

const goals = [
  {
    icon: <FaUserFriends className="text-white text-4xl" />,
    title: "Women Empowerment",
    color: "bg-blue-600",
    link: "/women-empowerment"
  },
  {
    icon: <FaLightbulb className="text-white text-4xl" />,
    title: "Innovation & Entrepreneurship",
    color: "bg-blue-400",
    link: "/innovation-entrepreneurship"
  },
  {
    icon: <FaChalkboardTeacher className="text-white text-4xl" />,
    title: "Skilling",
    color: "bg-blue-800",
    link: "/skilling"
  },
  {
    icon: <FaBriefcase className="text-white text-4xl" />,
    title: "Employment",
    color: "bg-blue-300",
    link: "/employment"
  },
  {
    icon: <FaSearch className="text-white text-4xl" />,
    title: "Research",
    color: "bg-blue-500",
    link: "/research"
  },
];

const WiserHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  };

  return (
    <div className="bg-gray-50 pt-1 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl my-2 pt-6 font-extrabold text-gray-900">
            WISER
          </h2>
          <div className="h-1 w-24 bg-blue-800 mx-auto mb-4"></div>
          <p className="font-bold">
          We at Seventh Sense work in the domains of WISER - Women Empowerment, Innovation and Entrepreneurship, Skilling, Employment & Research.
          </p>
        </div>
        <div className="md:flex md:space-x-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-gray-700 text-lg text-justify sm:text-xl">
              We design scalable interventions that build future-ready skills and enable innovative, entrepreneurial thinking and change through youth ideas. We believe that to build a new world that is socially inclusive, economically vibrant, and environmentally sustainable, we need to nurture future leaders, changemakers, innovators, and entrepreneurs who can transform their communities and the world. This involves Entrepreneurship / Capacity building, content development, IT and software training, soft skills training, team development, communication skills, leadership skills and training facilitation.
            </p>
          </div>
          <div className="md:w-1/2">
            <Slider {...settings}>
              {goals.map((goal, index) => (
                <div key={index} className="p-4">
                  <Link to={goal.link}>
                    <div className={`p-6 rounded-lg h-56 flex flex-col items-center justify-center text-center ${goal.color}`}>
                      <div className="mb-4">{goal.icon}</div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">{goal.title}</h3>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WiserHome;
