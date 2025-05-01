import React, { useState } from "react";
import "./Products.css";
import DashHeader from "../../../Component/Client/DashHeader/DashHeader";
import DashProductCard from "./DashProductCard";

const Products = () => {
  return (
    <div className="dashSectionMain">
      <div className="fuContainer">
        <DashHeader title={"Products"} />
        <div className="dashProductSection">
          <DashProductCard/>
        </div>
      </div>
    </div>
  );
};

export default Products;
