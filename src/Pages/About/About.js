import React from "react";
import "./index.css";
import Header from '../../Component/Common/Header/Header'
import SectionLeft from "./SectionLeft";
import SectionRight from "./SectionRight";
import Industry from "../../Component/Home/Industry/Industry";
import Proud from "../../Component/Proud/Proud";
import Testimonial from "../../Component/Home/Testimonial/Testimonial";
import Contact from "../../Component/Home/Contact/Contact";
const About = () => {
  return (
    <div className="mainHome">
      <Header />
      <div className="aboutmain">
        <div className="aboutmaincontainer">
          <div className="aboutmaintext">
            <div className="aboutmainheader">
              <p>ABOUT US</p>
            </div>
            .
            <div className="aboutmaindesc">
              <p>
                HILLSON is one of the largest manufacturers and exporters of
                Industrial Safety Shoes and Gumboots. The footwear range from
                Safety Boots to PVC Safety Shoes to PU Safety Boots. They also
                offer Work Safety Shoes, Leather Safety Shoes, and many more.
                Some of the safety shoes are also suitable for women. These
                safety shoes and gumboots have reinforced toes and resilient
                material that protects the workers’ feet from hazards imminent
                at some workplaces. Hillson Safety Footwear is considered an
                essential Personal Protective Equipment (PPE) at many industrial
                and construction work-sites. Hillson Gumboots and Safety Shoes
                are designed to protect industrial workers from airborne matter,
                chemicals, electrical, heavy objects, mud and sludge, hot
                objects, and biohazards.
              </p>
            </div>
          </div>
          <div className="aboutmainpic">
            <img src="Assets/Logo/capture.PNG" />
          </div>
        </div>
      </div>
      <div className="aboutSection">
        <div className="aboutContainer">
          <div className="sectionheader">
            <p>Our Motto</p>
          </div>
          <SectionLeft />
          <SectionRight />
          <SectionLeft />
          <SectionRight />
        </div>
      </div>
      <Industry />
      <Proud />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default About;
