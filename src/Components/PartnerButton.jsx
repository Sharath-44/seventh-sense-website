import React from 'react';
import { useNavigate } from 'react-router-dom';

const PartnerButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/partner-us');
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        className="text-white bg-gradient-to-r from-blue-800 via-blue-800 to-blue-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-xs text-sm px-5 py-2.5 text-center fixed left-0 top-1/2 transform -translate-y-1/2 -rotate-90 origin-top-left"
      >
        PARTNER WITH US
      </button>
    </div>
  );
};

export default PartnerButton;
