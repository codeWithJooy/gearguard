import React, { useEffect } from "react";
import "./about.css";

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll(".aboutCard");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <div className="aboutSection">
      <div className="aboutText">
        <div className="aboutTitle">
          <p>Who Are We</p>
        </div>
        <div className="aboutDesc">
          <p>A small Description About Us</p>
        </div>
      </div>
      <div className="aboutCardSection">
        {[
          { src: "Assets/Home/about/shoe.png", text: "We make the best Safety Shoes" },
          { src: "Assets/Home/about/jacket.png", text: "Reliable Safety Jackets" },
          { src: "Assets/Home/about/helmet.png", text: "Strong Protective Helmets" },
          { src: "Assets/Home/about/welding.png", text: "Best Welding Equipment" },
        ].map((item, index) => (
          <div className="aboutCard hidden" key={index}>
            <div className="aboutCardHeader">
              <img src={item.src} alt={item.text} />
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
