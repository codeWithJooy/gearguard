import React from "react";
import "./Messages.css";

const MessageCard = () => {
  return (
    <div className="dashMessageCard">
      <div className="dashMessageTop">
        <div className="dashName">
          <p>Abhishek Hazra</p>
        </div>
        <div className="dashStatus">
          <select>
            <option>New</option>
          </select>
        </div>
      </div>
      <div className="dashMessageDetails">
        <div className="dashMessageEmail"><p>abhimicro3@gmail.com</p></div>
        <div className="dashMessagePhone"><p>+91-9007453398</p></div>
      </div>
      <div className="dashMessageText">
        <spn>
          Hi.I am Abhishek Hazra.I am willing to buy new industrial shoes from you.
        </spn>
      </div>
    </div>
  );
};

export default MessageCard;
