import React from 'react';
import './Loader.css'; // We'll add the CSS for the rotating square here

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="rotating-square"></div>
    </div>
  );
};

export default Loader;