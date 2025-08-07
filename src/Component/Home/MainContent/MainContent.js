import React, { useState, useEffect } from "react";
import "./MainContent.css"; // Import CSS for styling
import { mainData } from "../../../Data/Home/Main";

function MainContent() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="parallax-container">
      <div
        className="parallax"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="contentSection">
          <div className="contentContainer">
            <div className="contectHeader">
              <p>{mainData.header1}</p>
              <p>{mainData.header2}</p>
            </div>
            <div className="contactDesc">
              <p>{mainData.desc1}</p>
              <p>{mainData.desc2}</p>
            </div>
            <div className="contactSectionButton">
              <button className="productButton">Our Products</button>
            </div>
            <div className="downBottom">
              <img src="Assets/Logo/down.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
