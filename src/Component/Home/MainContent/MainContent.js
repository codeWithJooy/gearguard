import React, { useState, useEffect } from "react";
import Typical from "react-typical";
import "./MainContent.css"; // Import your CSS file for styling

function MainContent() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty array means this effect will only run once when component mounts

  return (
    <div className="parallax-container">
      <div
        className="parallax"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="contentSection">
          <div className="contentContainer">
            <div className="contentText">
            <Typical
             className="typical-text"
                steps={[
                  "We are a leading manufacturer, supplier, and exporter...",
                  1000, // Pause for 1 second
                  "Offering premium quality safety shoes, non-safety PVC boots, and safety gumboots...",
                  1000,
                  "At affordable prices.",
                  1000,
                ]}
                loop={Infinity} // Keeps repeating the animation
                wrapper="p"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
