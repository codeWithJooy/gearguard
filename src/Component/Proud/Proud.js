import React, { useEffect, useState } from "react";
import "./Proud.css";

const milestones = [
  { date: "2015", description: "Company founded with a vision." },
  { date: "2017", description: "Launched our first product." },
  { date: "2019", description: "Expanded to international markets." },
  { date: "2021", description: "Reached 1 million users milestone." },
  { date: "2023", description: "Introduced AI-driven solutions." },
];

const Milestone = ({ date, description, isLeft, isVisible }) => {
  return (
    <div className={`milestone ${isLeft ? "left" : "right"} ${isVisible ? "visible" : "hidden"}`}>
      <div className="content">
        <h3>{date}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Proud = () => {
  const [visibleMilestones, setVisibleMilestones] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".milestone");
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setVisibleMilestones((prev) => [...new Set([...prev, index])]);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="proud-container">
      <div className="timeline-container">
        <div className="header">
          <h2>Proud Moments</h2>
          <p>Our company's journey through the years</p>
        </div>
        <div className="timeline">
          {milestones.map((milestone, index) => (
            <Milestone
              key={index}
              date={milestone.date}
              description={milestone.description}
              isLeft={index % 2 === 0}
              isVisible={visibleMilestones.includes(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proud;
