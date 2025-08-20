import React from "react";

const Spinner = ({text}) => {
  return (
    <div className="dashSectionModal">
      <div className="spinnerContainer">
        <div className="spinner"></div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Spinner;
