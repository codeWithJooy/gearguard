import React from "react";
import { industryData } from "../../../Data/Home/industry";
const Industry = () => {
  return (
    <div className="industrySection">
      <div className="industryText">
        <div className="industryTitle">
          <p>Industries Using Safety Shoes</p>
        </div>
        {/* <div className="industryDesc">
          <p>A small Description About Us</p>
        </div> */}
      </div>
      <div className="industryCardSection">
        {industryData.map((data, key) => (
          <div className="industryCard" key={key}>
            <img src={data.image} alt="img" />
            <div className="yellowBox">
              <p>{data.text}</p>
              <a href={data.link} class="viewMore">
                VIEW MORE
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industry;
