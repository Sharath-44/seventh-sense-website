import React from 'react';
import atAGlanceImage from '/map.png';

const AtAGlance = () => {
  return (
    <div className="bg-white py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <img src={atAGlanceImage} alt="At A Glance" className="w-full h-full object-cover rounded-lg shadow-lg" />
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 md:mb-14">At A Glance</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-20">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-800 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20h9m-9 0a9 9 0 01-9-9H3a9 9 0 019-9v9z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Founded in 2010</h3>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-800 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20h9m-9 0a9 9 0 01-9-9H3a9 9 0 019-9v9z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">HQ in Bengaluru</h3>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-800 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20h9m-9 0a9 9 0 01-9-9H3a9 9 0 019-9v9z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Presence in 17 States</h3>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-800 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20h9m-9 0a9 9 0 01-9-9H3a9 9 0 019-9v9z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Our verticals: <br/>Community, College, Corporate</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtAGlance;
