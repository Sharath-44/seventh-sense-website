import React from 'react';
import { FaHandshake, FaHandsHelping, FaHeart } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';

const GetInvolved = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold pb-2 text-gray-900">Get Involved</h2>
          <div className="h-1 w-24 bg-blue-800 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Here’s how you can get involved and make a change.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="flex-shrink-0 mb-4">
              <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-800 text-white">
                <FaHandsHelping className="h-8 w-8" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Support Us</h3>
            <p className="text-gray-600 mb-4">Change starts with a single step. Support us in creating a change in People's Lives.</p>
            <button
              className="text-white bg-blue-800 hover:bg-blue-500 px-4 py-2 rounded-full"
              onClick={() => navigate('/support-us')}
            >
              Donate
            </button>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="flex-shrink-0 mb-4">
              <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-800 text-white">
                <FaHandshake className="h-8 w-8" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Partner With Us</h3>
            <p className="text-gray-600 mb-4">Make a real positive Impact by joining hands with us in creating Impactful Initiatives.</p>
            <button
              className="text-white bg-blue-800 hover:bg-blue-500 px-4 py-2 rounded-full"
              onClick={() => navigate('/partner-us')}
            >
              Connect
            </button>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="flex-shrink-0 mb-4">
              <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-800 text-white">
                <FaHeart className="h-8 w-8" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Work With Us</h3>
            <p className="text-gray-600 mb-4">Be a part of the action. Join our team to make a difference from the ground up.</p>
            <button
              className="text-white bg-blue-800 hover:bg-blue-500 px-4 py-2 rounded-full"
              onClick={() => navigate('/careers')}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
