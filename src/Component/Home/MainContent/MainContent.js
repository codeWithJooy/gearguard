import React, { useState, useEffect } from "react";
import "./MainContent.css"; // Import CSS for styling

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
            <div className="contentText">
              <div className="contentMain">
                <p>
                  We manufacture, supply, and export safety shoes, PVC boots,
                  and gumboots at affordable prices
                </p>
              </div>
              <div className="contentDesc">
                <p>
                  Hillson began as a small unit with a vision to stand out and
                  meet consumer needs. As one of India's largest safety shoe
                  manufacturers, we serve diverse industries with certified,
                  high-quality products. We prioritize Durability,
                  Affordability, and Value for Money to enrich customers' lives.
                  More than a company, Hillson is a family that stands together
                  through thick and thin.
                </p>
              </div>
              <div className="contentButton">
                <button>Our Products</button>
              </div>
            </div>
            <div className="contentImage">
              <img src="Assets/Home/home.jpg" alt="Hillson Safety Shoes" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
