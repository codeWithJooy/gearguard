import React from "react";
import "./Home.css";
import MainContent from "../../Component/Home/MainContent/MainContent";
import ProductCard from "../../Component/Home/ProductCard/ProductCard";
import Header from '../../Component/Common/Header/Header'
import About from "../../Component/Home/About/About";
import Industry from "../../Component/Home/Industry/Industry";
import Strength from "../../Component/Home/Strength/Strength";
import Product from "../../Component/Home/Product/Product";
import TestimonialStatCard from "../../Component/Home/Testimonial/TestimonialStatCard";
import Testimonial from "../../Component/Home/Testimonial/Testimonial";
import Contact from "../../Component/Home/Contact/Contact";

const Home = () => {
  return (
    <div className="mainHome">
      <Header />
      <MainContent />
      <About />
      <Industry />
      <Strength />
      <Product />
      <Testimonial />
      <Contact />
      <div className="footerSection">
        <div className="footerContainer">
          <div className="footerUnit">
            <div className="unitHeader">
              <p>Contact Info</p>
            </div>
            <div className="addressUnit">
              <div className="addressHeader">
                <p>Address:</p>
              </div>
              <div className="addressText">
                <p>123 Street Name, City, England</p>
              </div>
            </div>
            <div className="addressUnit">
              <div className="addressHeader">
                <p>Phone:</p>
              </div>
              <div className="addressText">
                <p>123 Street Name, City, England</p>
              </div>
            </div>
            <div className="addressUnit">
              <div className="addressHeader">
                <p>Email:</p>
              </div>
              <div className="addressText">
                <p>123 Street Name, City, England</p>
              </div>
            </div>
            <div className="addressUnit">
              <div className="addressHeader">
                <p>Working Days/Hours:</p>
              </div>
              <div className="addressText">
                <p>Mon - Sun / 9:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>
          <div className="footerUnit">
            <div className="unitHeader">
              <p>Customer Service</p>
            </div>
            <div className="addressUnit">
              <div className="addressText">
                <p>Order Tracking</p>
              </div>
            </div>
            <div className="addressUnit">
              <div className="addressText">
                <p>Shipping & Delivery</p>
              </div>
            </div>
            <div className="addressUnit">
              <div className="addressText">
                <p>Orders History</p>
              </div>
            </div>
            <div className="addressUnit">
              <div className="addressText">
                <p>Advanced Search</p>
              </div>
            </div>
            <div className="addressUnit">
              <div className="addressText">
                <p>Shipping & Delivery</p>
              </div>
            </div>
            <div className="addressUnit">
              <div className="addressText">
                <p>Orders History</p>
              </div>
            </div>
            <div className="addressUnit">
              <div className="addressText">
                <p>Advanced Search</p>
              </div>
            </div>
          </div>
          <div className="footerUnit">
            <div className="unitHeader">
              <p>Products</p>
            </div>
            <div className="addressUnit">
              <div className="addressText">
                <p>Order Tracking</p>
              </div>
            </div>
            <div className="addressUnit">
              <div className="addressText">
                <p>Shipping & Delivery</p>
              </div>
            </div>
            <div className="addressUnit">
              <div className="addressText">
                <p>Orders History</p>
              </div>
            </div>
            <div className="addressUnit">
              <div className="addressText">
                <p>Advanced Search</p>
              </div>
            </div>
            <div className="addressUnit">
              <div className="addressText">
                <p>Shipping & Delivery</p>
              </div>
            </div>
            <div className="addressUnit">
              <div className="addressText">
                <p>Orders History</p>
              </div>
            </div>
            <div className="addressUnit">
              <div className="addressText">
                <p>Advanced Search</p>
              </div>
            </div>
          </div>
          <div className="footerUnit">
            <div className="unitHeader">
              <p>Connect</p>
            </div>
            <div className="unitContainer">
             <div className="units">
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
