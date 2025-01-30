import React from "react";

const Strength = () => {
  return (
    <div className="strengthSection">
      <div className="strengthText">
        <div className="strengthTitle">
          <p>Our Strengths</p>
        </div>
        <div className="strengthDesc">
          <p>A small Description About Us</p>
        </div>
      </div>
      <div className="strengthCardSection">
        <div className="strengthCard">
          <div className="strengthCardInner">
            <img src="Assets/Logo/quality.webp" />
            <div className="strengthCardInnerTitle">
              <p>Quality</p>
            </div>
            <div className="strengthDescription">
              <p>Small Description about our strength</p>
            </div>
          </div>
        </div>

        <div className="strengthCard">
          <div className="strengthCardInner">
            <img src="Assets/Logo/team.webp" />
            <div className="strengthCardInnerTitle">
              <p>Team</p>
            </div>
            <div className="strengthDescription">
              <p>Small Description about our strength</p>
            </div>
          </div>
        </div>

        <div className="strengthCard">
          <div className="strengthCardInner">
            <img src="Assets/Logo/network.webp" />
            <div className="strengthCardInnerTitle">
              <p>Network</p>
            </div>
            <div className="strengthDescription">
              <p>Small Description about our strength</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strength;
