import React from "react";
import Header from "../../Component/Common/Header/Header";

import "./Contact.css";
import DynamicTitle from "../../Component/Common/DynamicTitle";
import Testimonial from "../../Component/Home/Testimonial/Testimonial";
import Footer from "../../Component/Common/Footer/Footer";
const Contact = () => {
  DynamicTitle("Contact Us:GearGuard");
  return (
    <div className="mainHome">
      <Header page={"Contact"}/>
      <div className="contactMain">
        <div className="contactHeader">
          <p>Contact Us</p>
        </div>
        <div className="contactDescription">
          <p>
            Get in touch and we’ll get back to you as soon as we can. We look
            forward to hearing from you! Use the following form and request a
            call back!
          </p>
        </div>
        <div className="contactContainer">
          <div className="contactAddress">
            <div className="addressContainer">
              <div className="addressPageHeader">
                <p>Les't talk</p>
                <p>on Something <span>great</span></p>
                <p>together</p>
              </div>
              <div className="addressRow">
                <div className="addressImg">
                  <img src="Assets/Contact/location.png" />
                </div>
                <div className="addressField">
                  <p>
                    Plot No. 420-421, M.I.E. Part I, Bahadurgarh, Haryana 124507
                  </p>
                </div>
              </div>
              <div className="addressRow">
                <div className="addressImg">
                  <img src="Assets/Contact/telephone.png" />
                </div>
                <div className="addressField">
                  <p>+91-9518685275</p>
                </div>
              </div>
              <div className="addressRow">
                <div className="addressImg">
                <img src="Assets/Contact/email.png" />
                </div>
                <div className="addressField">
                  <p>sales@hillsonshoes.com</p>
                </div>
              </div>
              <div className="addressRowBottom">
                <img src="Assets/Contact/facebook.png"/>
                <img src="Assets/Contact/linkedin.png"/>
                <img src="Assets/Contact/instagram.png"/>
                <img src="Assets/Contact/youtube.png"/>
              </div>
            </div>
          </div>
          <div className="contactFormSection">
            <div className="contactMainForm">
              <div className="contactRow">
                <div className="contactRowHalf">
                  <input type="text" placeholder="First Name" />
                </div>
                <div className="contactRowHalf">
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>
              <div className="contactRow">
                <div className="contactRowHalf">
                  <input type="text" placeholder="Email" />
                </div>
                <div className="contactRowHalf">
                  <input type="text" placeholder="Phone" />
                </div>
              </div>
              <div className="contactRow">
                <div className="contactRowFull">
                  <textarea rows={5} placeholder="Message"></textarea>
                </div>
              </div>
              <div className="contactQuestionRow">
                <p>I am looking for </p>
                <select>
                  <option>Safety Shoes</option>
                  <option>Gum Boots</option>
                  <option>Both</option>
                </select>
              </div>
              <div className="contactQuestionRow">
                <p>I want to buy it for </p>
                <select>
                  <option>Self</option>
                  <option>For My Company</option>
                  <option>Reselling</option>
                </select>
              </div>
              <div className="contactQuestionRow">
                <p>I am</p>
                <select>
                  <option>Consumer</option>
                  <option>Dealer</option>
                  <option>Purchase Manager/ Corporate Buyer</option>
                </select>
              </div>
              <div className="contactQuestionRow">
                <p>Frequency Of Buying</p>
                <select>
                  <option>One Time</option>
                  <option>Monthly</option>
                  <option>Half Yearly</option>
                </select>
              </div>
              <div className="contactRow">
                <div className="contactRowFull">
                  <button className="contactFormButton">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonial/>
      <Footer/>
    </div>
  );
};

export default Contact;
