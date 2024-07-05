import React, { useState, useEffect } from 'react';
import AppRoutes from './AppRoutes'; 
import LoadingSpinner from './Components/Loading';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // loading time

    return () => clearTimeout(timer);
  }, []);

  return loading ? <LoadingSpinner/> : <AppRoutes />;
};

export default App;
