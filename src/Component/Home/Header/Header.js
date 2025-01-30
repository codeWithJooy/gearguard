import React, { useState } from "react";

const Header = () => {
  const [drop, setDrop] = useState(false);
  const handleDrop=()=>{
    setDrop(!drop)
  }
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
          { !drop &&  <img src="Assets/Logo/hamburger.png" onClick={handleDrop}/>}
          { drop &&  <img src="Assets/Logo/cross.png" onClick={handleDrop}/>}
        </div>
      </div>
      <div className="headerRight">
        <div className="headerRightTop">
          <div className="mailSection">
            <img src="Assets/Logo/mail.png" />
            <p>enigma.abhi.ty@gmail.com</p>
          </div>
          <div className="mailSection">
            <img src="Assets/Logo/mail.png" />
            <p>9007453398</p>
          </div>
          <div className="mailSection">
            <img src="Assets/Logo/facebook_black.png" />
          </div>
          <div className="mailSection">
            <img src="Assets/Logo/instagram_black.png" />
          </div>
          <div className="mailSection">
            <img src="Assets/Logo/youtube_black.png" />
          </div>
          <div className="mailSection">
            <img src="Assets/Logo/linkedin_black.png" />
          </div>
        </div>
        <div className="headerRightBottom">
          <div className="headerLinks">
            <p>Home</p>
          </div>
          <div className="headerLinks">
            <p>Products</p>
          </div>
          <div className="headerLinks">
            <p>About</p>
          </div>
          <div className="headerLinks">
            <p>Contact Us</p>
          </div>
        </div>
      </div>
      {
        drop && 
        <div className="headerOpen">
        <div className="headerContainer">
          <div className="headerContainerUnit">
            <p>Home</p>
          </div>
          <div className="headerContainerUnit">
            <p>Products</p>
          </div>
          <div className="headerContainerUnit">
            <p>About Us</p>
          </div>
          <div className="headerContainerUnit">
            <p>Contact Us</p>
          </div>
          <div style={{marginTop:"150px"}}></div>
          <div className="headerContainerUnit">
            <img src="Assets/Logo/mail_white.png" />
            <p>enigma.abhi.ty@gmail.com</p>
          </div>
          <div className="headerContainerUnit">
            <img src="Assets/Logo/phone_white.png" />
            <p>9007453398</p>
          </div>
        </div>
      </div>
      }
    </div>
  );
};

export default Header;
