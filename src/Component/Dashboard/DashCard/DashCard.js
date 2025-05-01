import React from "react";
import "./DashCard.css"

const DashCard = () => {
  return (
    <div className="dashCard">
      <div className="dashCardHeader">
        <p>1000</p>
      </div>
      <div className="dashCardDesc">
        <p>Total Visitors</p>
      </div>
    </div>
  );
};


export default DashCard;