import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Header = ({ page = "Home" }) => {
  const [drop, setDrop] = useState(false);
  const history = useHistory();
  const handleDrop = () => {
    setDrop(!drop);
  };
  const handleNav = (path) => {
    history.push(path);
  };
  return (
    <div className="headerSection">
      <div className="headerLeft">
        <div className="logoSection">
          <img src="Assets/Logo/logo.jpg" />
        </div>
        <div className="logoName">
          <p>Laxmi True Safe</p>
        </div>
        <div className="iconMobile">
          {!drop && (
            <img src="Assets/Logo/hamburger.png" onClick={handleDrop} />
          )}
          {drop && <img src="Assets/Logo/cross.png" onClick={handleDrop} />}
        </div>
      </div>
      <div className="headerRight">
        <div className="headerRightTop">
          <div className="mailSection">
            <img src="Assets/Contact/email.png" />
            <p>enigma.abhi.ty@gmail.com</p>
          </div>
          <div className="mailSection">
            <img src="Assets/Contact/telephone.png" />
            <p>9007453398</p>
          </div>
          <div className="mailSection">
            <img src="Assets/Contact/facebook.png" />
          </div>
          <div className="mailSection">
            <img src="Assets/Contact/instagram.png" />
          </div>
          <div className="mailSection">
            <img src="Assets/Contact/youtube.png" />
          </div>
          <div className="mailSection">
            <img src="Assets/Contact/linkedin.png" />
          </div>
        </div>
        <div className="headerRightBottom">
          <div
            className={`${page === "Home" ? "highlightHeader" : "headerLinks"}`}
            onClick={() => handleNav("/")}
          >
            <p>Home</p>
          </div>
          <div
            className={`${
              page === "Products" ? "highlightHeader" : "headerLinks"
            }`}
            onClick={() => handleNav("/product")}
          >
            <p>Products</p>
          </div>
          <div
            className={`${
              page === "About" ? "highlightHeader" : "headerLinks"
            }`}
            onClick={() => handleNav("/about")}
          >
            <p>About</p>
          </div>
          <div
            className={`${
              page === "Contact" ? "highlightHeader" : "headerLinks"
            }`}
            onClick={() => handleNav("/contact")}
          >
            <p>Contact Us</p>
          </div>
          <div className="headerLinks">
            <a href="/Brochure/cat.pdf" download="Laxmi_True_Safe_Brochure.pdf">
              <p>Get Brochure</p>
            </a>
          </div>
        </div>
      </div>
      {drop && (
        <div className="headerOpen">
          <div className="headerContainer">
            <div
              className="headerContainerUnit"
              onClick={() => handleNav("/")}
            >
              <p>Home</p>
            </div>
            <div
              className="headerContainerUnit"
              onClick={() => handleNav("/product")}
            >
              <p>Products</p>
            </div>
            <div
              className="headerContainerUnit"
              onClick={() => handleNav("/about")}
            >
              <p>About Us</p>
            </div>
            <div
              className="headerContainerUnit"
              onClick={() => handleNav("/contact")}
            >
              <p>Contact Us</p>
            </div>
            <div className="headerContainerUnit">
              <a
                href="/Brochure/cat.pdf"
                download="Laxmi_True_Safe_Brochure.pdf"
              >
                <p>Get Brochure</p>
              </a>
            </div>
            <div style={{ marginTop: "150px" }}></div>
            <div className="headerContainerUnit">
              <img src="Assets/Logo/mail_white.png" />
              <p>laxmitruesafe@gmail.com</p>
            </div>
            <div className="headerContainerUnit">
              <img src="Assets/Logo/phone_white.png" />
              <p>+91-8527561666</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
