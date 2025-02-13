import React from "react";
import "./ProductCard.css";

const ProductMainCard = ({title}) => {
  return (
    <div className="productCardMain">
      <div className="productCardMainImageSection">
        <img src="Assets/Logo/shoe.png"/>
      </div>
      <div className="productCardMainText">
        <div className="productCardMainTextHeader">
            <p>{title}</p>
        </div>
        <div className="productCardMainTextDesc">
            <p>Hillson is one of the best manufacturers, suppliers, and exporters of safety shoes in India. Safety shoes provide 360° protection to the feet. However, each shoe has its own specialty and serves different purposes. If you are looking for durable, comfortable safety footwear, then Hillson is your go-to place. </p>
        </div>
      </div>
    </div>
  );
};

export default ProductMainCard;