import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialStatCard from "./TestimonialStatCard";
const testimonials = [
  {
    name: "Abhi Hazra",
    company: "Elevance Tech",
    feedback:
      "Such a nice experience we have working with the company. Will recommend to our friends too.",
    img: "Assets/Logo/client.jpg",
  },
  {
    name: "John Doe",
    company: "Tech Solutions",
    feedback:
      "Great service and support. Their team is professional and delivers on time!",
    img: "Assets/Logo/client.jpg",
  },
  {
    name: "Jane Smith",
    company: "Innovate Hub",
    feedback: "Highly satisfied with the collaboration. Excellent results!",
    img: "Assets/Logo/client.jpg",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
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
  );
};

export default Testimonial;
