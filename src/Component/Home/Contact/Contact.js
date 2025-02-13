import React from "react";
const Contact = () => {
  return (
    <div className="contactSection">
      <div className="contactText">
        <div className="contactHeader">
          <p>Contact With Us</p>
        </div>
        <div className="contactDesc">
          <p>
            It's very easy to get in touch with us. Just use the contact form or
            pay us a visit for a coffee at the office. Dynamically innovate
            competitive technology after an expanded array of leadership
          </p>
        </div>
      </div>
      <div className="contactForm">
        <div className="formRowHalf">
          <div className="formRowInput">
            <input type="text" placeholder="Enter Name" />
          </div>
          <div className="formRowInput">
            <input type="text" placeholder="Enter Email" />
          </div>
        </div>
        <div className="formRowHalf">
          <div className="formRowInput">
            <input type="text" placeholder="Your Phone" />
          </div>
          <div className="formRowInput">
            <input type="text" placeholder="Your Company" />
          </div>
        </div>
        <div className="formRowHalf">
          <div className="formRowInputFull">
            <textarea placeholder="Message" rows={10}></textarea>
          </div>
        </div>
        <div className="formButton">
          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
