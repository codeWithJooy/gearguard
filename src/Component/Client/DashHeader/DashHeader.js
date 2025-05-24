import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./DashHeader.css";

const DashHeader = ({ title, page }) => {
  const [open, SetOpen] = useState(false);

  const history = useHistory();
  const handleRoute = (route) => {
    let val=""
    switch (route) {
      case "dashProducts":
        val = "/dashproducts";
        break;
      case "dashMessages":
        val = "/dashmessages";
        break;
      case "settings":
        val = "/settings";
        break;
      default:
        val = "/dash";
    }
    history.push(val);
  };
  return (
    <>
      {open && (
        <div className="fuSidebar">
          <img
            src="Assets/Dashboard/close.png"
            className="sidebarClose"
            onClick={() => SetOpen(false)}
            alt=""
          />
          <div className="sidebarUser">
            <img src="Assets/Dashboard/user.png" />
            <p>Abhishek Hazra</p>
          </div>
          <div className="sidebarLinks">
            <div className="sidebarLink" onClick={()=>handleRoute()}>
              <img src="Assets/Dashboard/dashboard.png" />
              <p>Dashboard</p>
            </div>
            <div className="sidebarLink" onClick={()=>handleRoute("dashProducts")}>
              <img src="Assets/Dashboard/products.png" />
              <p>Products</p>
            </div>
            <div className="sidebarLink" onClick={()=>handleRoute("dashMessages")}>
              <img src="Assets/Dashboard/message.png" />
              <p>Messages</p>
            </div>
            <div className="sidebarLink" onClick={()=>handleRoute("settings")}>
              <img src="Assets/Dashboard/settings.png" />
              <p>Settings</p>
            </div>
          </div>
        </div>
      )}
      <div className="header">
        <div className="headerIcon">
          <img
            src="Assets/Dashboard/hamburger.png"
            onClick={() => SetOpen(true)}
            alt=""
          />
        </div>
        <div className="dashTitle">
          <p>{title}</p>
        </div>
      </div>
    </>
  );
};

export default DashHeader;
