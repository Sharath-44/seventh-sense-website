import React from 'react';
import { FaLinkedin, FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const socialMedia = [
  {
    name: 'LinkedIn',
    icon: <FaLinkedin />,
    link: 'http://linkedin.com/in/vinodprabhu',
  },
  {
    name: 'Facebook',
    icon: <FaFacebookF />,
    link: 'https://www.facebook.com/seventhsensetalent/',
  },
  {
    name: 'Instagram',
    icon: <FaInstagram />,
    link: 'https://www.instagram.com/seventh_sense_talent_solutions/',
  },
  {
    name: 'YouTube',
    icon: <FaYoutube />,
    link: 'https://www.youtube.com/@SeventhSenseAptitudePrep',
  },
  {
    name: 'Twitter',
    icon: <FaTwitter />,
    link: 'http://twitter.com/search?q=seventh%20sense%20talent%20solutions&src=typd',
  },
];

const ConnectWithUs = () => {
  return (
    <div className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">Connect with Us</h2>
        <div className="flex justify-center space-x-4">
          {socialMedia.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-20 h-20 rounded-lg border-2 border-gray-300 hover:border-blue-800 hover:bg-blue-800 transition duration-300"
            >
              <span className="text-2xl text-gray-600 hover:text-white transition duration-300">{social.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUs;
