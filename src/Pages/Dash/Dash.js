import React,{useState} from "react";
import "./Dash.css";
import DashHeader from "../../Component/Client/DashHeader/DashHeader";

const Dash = () => {
  return (
    <div className="dashSectionMain">
      <div className="fuContainer">
        <DashHeader/>
      </div>
    </div>
  );
};

export default Dash;
