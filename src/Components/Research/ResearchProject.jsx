import { projects } from '../../Data/researchData';
import React, { useState, useRef, useEffect } from 'react';
import CountUp from 'react-countup';

const ProjectCard = ({ project, isExpanded, onToggleExpand }) => {
    const factKeys = Object.keys(project).filter(key => !['title', 'donor', 'details', 'photos', 'report'].includes(key));
    const [isOverflowing, setIsOverflowing] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            setIsOverflowing(contentRef.current.scrollHeight > contentRef.current.clientHeight);
        }
    }, [project.details]);

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-10 p-6 transform transition duration-500 hover:scale-105">
            <div className="relative">
                <div className="grid grid-cols-2 gap-2 mb-4">
                    {project.photos.map((photo, index) => (
                        <img src={photo} alt={`Project ${index + 1}`} className="rounded-lg shadow-md w-full h-32 object-cover" key={index} />
                    ))}
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                    <h4 className="text-md font-medium text-gray-700 mb-4">Donor: {project.donor}</h4>
                    <div
                        className={`text-sm text-justify text-gray-600 mb-4 ${isExpanded ? '' : 'max-h-16 overflow-hidden'}`}
                        ref={contentRef}
                    >
                        {project.details}
                    </div>
                    <div className="flex justify-around mb-4">
                        {factKeys.map((key, index) => (
                            <div className="text-center" key={index}>
                                <div className="flex flex-col justify-center items-center">
                                    <div className="flex justify-center items-center w-16 h-16 border-2 border-blue-800 text-blue-800 rounded-full mb-2">
                                        <CountUp end={project[key]} duration={3} className="text-blue-800 font-bold" />
                                    </div>
                                    <span className="block text-gray-600 text-xs font-bold">{key.replace(/_/g, ' ')}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    {isOverflowing && (
                        <button onClick={onToggleExpand} className="inline-block px-4 py-2 mt-2 text-xs font-semibold text-white bg-blue-800 rounded hover:bg-blue-900">
                            {isExpanded ? 'Show Less' : 'Read More'}
                        </button>
                    )}
                    {isExpanded && project.report && (
                        <a href={project.report} target="_blank" rel="noopener noreferrer" className="block px-4 py-2 mt-2 text-xs font-semibold text-white bg-blue-800 rounded hover:bg-blue-900">
                            Full Report
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

const ResearchProject = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="bg-gray-100 py-12 pt-4">
            <div className="container mx-auto p-6">
                <h2 className="text-4xl font-bold mb-2 text-gray-800 text-center">Research</h2>
                <div className="h-1 w-24 bg-blue-800 mx-auto mb-6"></div>
                <p className="text-center text-gray-600 mb-4">
                Researching and Translation of content and creation of Modules, Visuals, PPTs, Facilitator Guides etc.
                </p>
                <p className="text-center text-2xl font-bold text-gray-600 mb-12">
                    Our Projects in Research domain
                </p>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            isExpanded={expandedIndex === index}
                            onToggleExpand={() => toggleExpand(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResearchProject;
