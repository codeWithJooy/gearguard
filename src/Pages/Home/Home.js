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
import Footer from "../../Component/Common/Footer/Footer";

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
      <Footer/>
    </div>
  );
};

export default Home;
