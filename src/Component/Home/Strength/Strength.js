import React from "react";
import "./Strength.css";

const strengths = [
  { title: "Quality Policy", description: "We ensure top-notch quality.", imgSrc: "Assets/Logo/strength/quality.webp" },
  { title: "Network", description: "Our team is highly skilled.", imgSrc: "Assets/Logo/strength/network.webp" },
  { title: "Advantage", description: "We have a strong network.", imgSrc: "Assets/Logo/strength/advantage.webp" },
  { title: "Team Work", description: "We ensure top-notch quality.", imgSrc: "Assets/Logo/strength/team.webp" },
  { title: "Versatility", description: "Our team is highly skilled.", imgSrc: "Assets/Logo/strength/verse.webp" },
  { title: "Motto", description: "We have a strong network.", imgSrc: "Assets/Logo/strength/motto.webp" }
];

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
        {strengths.map((strength, index) => (
          <div key={index} className="strengthCard">
            <div className="strengthCardInner">
              <img src={strength.imgSrc} alt={strength.title} />
              <div className="strengthCardInnerTitle">
                <p>{strength.title}</p>
              </div>
              <div className="strengthDescription">
                <p>{strength.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Strength;
