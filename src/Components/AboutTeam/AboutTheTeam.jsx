// AboutTheTeam.js
import React from 'react';
import { boardMembers, teamLeads, teamMembers } from '../../Data/teamData';

const AboutTheTeam = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2 text-center">About the Team</h1>
      <div className="h-1 w-24 bg-blue-800 mx-auto mb-6"></div>

      {/* Board Members Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-center">Board Members</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-8 p-8">
          {boardMembers.map((member, index) => (
            <div key={index} className="relative bg-white rounded-lg shadow-md shadow-blue-200 overflow-hidden group w-full sm:w-1/2 lg:w-1/3">
              <img src={member.image} alt={member.name} className="w-full h-64 px-2 object-contain" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-700">{member.role}</p>
                {member.description && <p className="text-gray-600 mt-2 text-justify">{member.description}</p>}
              </div>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-blue-600 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <img src="/linkedin.jpg" alt="LinkedIn" className="w-10 h-10" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Team Leads Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-center">Team Leads</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
          {teamLeads.map((member, index) => (
            <div key={index} className="relative bg-white rounded-lg shadow-md shadow-blue-200 overflow-hidden group">
              <img src={member.image} alt={member.name} className="w-full h-64 px-2 object-contain" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-700">{member.role}</p>
              </div>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-blue-600 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <img src="/linkedin.jpg" alt="LinkedIn" className="w-10 h-10" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Team Members Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-center">Team Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative bg-white rounded-lg shadow-md shadow-blue-200 overflow-hidden group">
              <img src={member.image} alt={member.name} className="w-full h-64 px-2 object-contain" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-700">{member.role}</p>
              </div>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-blue-600 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <img src="/linkedin.jpg" alt="LinkedIn" className="w-10 h-10" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTheTeam;
