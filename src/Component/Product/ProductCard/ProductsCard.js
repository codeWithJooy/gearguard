import React from "react";

const ProductsCard = ({ name, images, description, rate }) => {
  return (
    <div className="productsCard">
      <div className="productsImg">
        <img src={images[0]} alt="" />
      </div>
      <div className="productsText">
        <div className="productsTitle">
          <p>{name}</p>
        </div>
        <div className="productsDescription">
          <p>{description}</p>
        </div>
        <div className="productsRate">
          <div className="productsActual">
            <p>Rs {rate * 1.1}</p>
          </div>
          <div className="productsOld">
            <p>Rs {rate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
