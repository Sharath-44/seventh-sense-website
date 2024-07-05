import React from 'react';

const CollegeButton = () => {
  const handleClick = () => {
    window.location.href = 'https://www.seventhsensetalent.com/';
  };

  return (
    <div className="flex justify-center mt-8">
      <button
        type="button"
        onClick={handleClick}
        className="text-white bg-gradient-to-r from-blue-800 via-blue-800 to-blue-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-md text-xl px-8 py-4"
      >
        FOR STUDENTS - CLICK HERE
      </button>
    </div>
  );
};

export default CollegeButton;
