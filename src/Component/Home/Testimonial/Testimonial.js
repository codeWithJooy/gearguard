import React from "react";
import TestimonialStatCard from "./TestimonialStatCard";
const Testimonial=()=>{
    return(
        <div className="testimonial">
        <div className="testimonialPhoto">
          <div className="testiStatsContainer">
            <TestimonialStatCard />
            <TestimonialStatCard />
            <TestimonialStatCard />
            <TestimonialStatCard />
          </div>
        </div>
        <div className="testiPeople">
          <div className="testiStatsContainer">
          <div className="testiHeader">
            <p>Our Lovely Customers Say</p>
          </div>
          <div className="testiValue">
            <p>
              Such a nice experience we have working with the Company.Will
              Recommend to our friends too.
            </p>
          </div>
          <div className="clientPicName">
            <img src="Assets/Logo/client.jpg" />
            <div className="clientName">
              <p>Abhi Hazra</p>
            </div>
            <div className="clientCompany">
              <p>Elevance Tech</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
}

export default Testimonial;