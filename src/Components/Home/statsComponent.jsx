import React from 'react';
import CountUp from 'react-countup';
import { statsData } from '../../Data/generalStatsData'; 

const StatisticsSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg shadow-blue-200 p-6 mb-6 mt-8 mx-auto max-w-screen-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 text-center">
        {statsData.map((stat, index) => (
          <div key={index} className="p-4">
            <h3 className="text-2xl font-bold text-blue-800">
              <CountUp end={parseInt(stat.value.replace(/[^0-9]/g, ''), 10)} duration={3} separator="," />
              {stat.value.includes('+' || '%') && '+' || '%'}
            </h3>
            <p className="text-gray-700">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticsSection;
