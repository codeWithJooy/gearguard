import React from "react";
import Header from "../../Component/Common/Header/Header";

import "./Contact.css";
import DynamicTitle from "../../Component/Common/DynamicTitle";
const Contact = () => {
  DynamicTitle("GearGuard:Contact Us");
  return (
    <div className="mainHome">
      <Header />
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
              <div className="addressRow">
                <div className="addressImg">
                  <img src="Assets/Logo/mail.png" />
                </div>
                <div className="addressField">
                  <p>
                    Plot No. 420-421, M.I.E. Part I, Bahadurgarh, Haryana 124507
                  </p>
                </div>
              </div>
              <div className="addressRow">
                <div className="addressImg">
                  <img src="Assets/Logo/mail.png" />
                </div>
                <div className="addressField">
                  <p>+91-9518685275</p>
                </div>
              </div>
              <div className="addressRow">
                <div className="addressImg">
                  <img src="Assets/Logo/mail.png" />
                </div>
                <div className="addressField">
                  <p>sales@hillsonshoes.com</p>
                </div>
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
                  <input type="text" placeholder="First Name" />
                </div>
                <div className="contactRowHalf">
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>
              <div className="contactRow">
                <div className="contactRowHalf">
                  <input type="text" placeholder="First Name" />
                </div>
                <div className="contactRowHalf">
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>
              <div className="contactRow">
                <div className="contactRowFull">
                  <textarea rows={5} placeholder="Message"></textarea>
                </div>
              </div>
              <div className="contactRow">
                <div className="contactRowHalf">
                  <button className="contactButton">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
