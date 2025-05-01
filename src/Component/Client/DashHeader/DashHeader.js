import React, { useState } from "react";
import "./DashHeader.css"

const DashHeader = ({title}) => {
  const [open, SetOpen] = useState(false);
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
            <div className="sidebarLink">
              <img src="Assets/Dashboard/user.png" />
              <p>Abhishek Hazra</p>
            </div>
            <div className="sidebarLink">
              <img src="Assets/Dashboard/user.png" />
              <p>Abhishek Hazra</p>
            </div>
            <div className="sidebarLink">
              <img src="Assets/Dashboard/user.png" />
              <p>Abhishek Hazra</p>
            </div>
            <div className="sidebarLink">
              <img src="Assets/Dashboard/user.png" />
              <p>Abhishek Hazra</p>
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
