import React, { useState } from "react";
import Testimonial from "../Testimonial/Testimonial";
import Footer from "../../Common/Footer/Footer";
import { uploadContact } from "../../../actions/contactAction";

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    message: "",
    lookingFor: "Safety Shoes",
    buyingFor: "Self",
    who: "Consumer",
    frequency: "One Time",
  });
  const handleTextChange = async (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitContact = async () => {
    let val = await uploadContact(contactForm);
    setContactForm({
      first: "",
      last: "",
      email: "",
      phone: "",
      message: "",
      lookingFor: "Safety Shoes",
      buyingFor: "Self",
      who: "Consumer",
      frequency: "One Time",
    });
    if (val) {
      alert("Request Submitted Successfully");
    } else {
      alert("Something Went Wrong");
    }
  };

  return (
    <div className="contactSection">
      <div className="contactText">
        <div className="contactHeader">
          <p>Contact With Us</p>
        </div>
        <div className="contactUnitDesc">
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
            <input
              type="text"
              placeholder="First Name"
              name="first"
              value={contactForm.first}
              onChange={handleTextChange}
            />
          </div>
          <div className="formRowInput">
            <input
              type="text"
              placeholder="Last Name"
              name="last"
              value={contactForm.last}
              onChange={handleTextChange}
            />
          </div>
        </div>{" "}
        <div className="formRowHalf">
          <div className="formRowInput">
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={contactForm.email}
              onChange={handleTextChange}
            />
          </div>
          <div className="formRowInput">
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              value={contactForm.phone}
              onChange={handleTextChange}
            />
          </div>
        </div>
        <div className="formRowHalf">
          <div className="formRowInputFull">
            <textarea
              placeholder="Message"
              rows={10}
              name="message"
              value={contactForm.message}
              onChange={handleTextChange}
            ></textarea>
          </div>
        </div>
        <div className="formSend">
          <button  onClick={submitContact}>Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
