import React from 'react';
import { useNavigate } from 'react-router-dom';
import { jobList } from '../../Data/jobListData';

const Careers = () => {
  const navigate = useNavigate();

  const handleApplyClick = (jobTitle) => {
    navigate(`/careers/jobs/${jobTitle}`);
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobList.map((job, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">{job.role}</h3>
                <p className="text-gray-700 mb-1"><strong>No of Positions:</strong> {job.noOfPositions}</p>
                <p className="text-gray-700 mb-1"><strong>Location:</strong> {job.location.join(', ')}</p>
                <p className="text-gray-700 mb-1"><strong>Work Type:</strong> {job.workType}</p>
                <p className="text-gray-700 mb-1"><strong>Key Skills:</strong></p>
                <ul className="list-disc list-inside mb-4">
                  {job.keySkills.map((skill, i) => (
                    <li key={i} className="text-gray-700">{skill}</li>
                  ))}
                </ul>
                <a href={job.jd} target="_blank" rel="noopener noreferrer" className="text-red-500 underline mb-4 block">Job Description</a>
              </div>
              <button
                onClick={() => handleApplyClick(job.role)}
                className="mt-auto flex items-center text-blue-800 border-2 border-blue-800 px-4 py-2 rounded-lg font-semibold hover:bg-blue-800 hover:text-white transition"
              >
                <span className="mr-2">APPLY NOW</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
