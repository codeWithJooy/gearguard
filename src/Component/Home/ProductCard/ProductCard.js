import React from "react";

const ProductCard = () => {
  return (
    <div className="productCard">
      <div className="productImg">
        <img src="Assets/Logo/shoe.png" />
      </div>
      <div className="productCardTitle">
        <p>Product Title</p>
      </div>
      <div className="productRate">
        <div className="rateStrike">
          <p>Rs1200</p>
        </div>
        <div className="rateOriginal">
          <p>Rs 800</p>
        </div>
      </div>
      <div className="productCardBuy">
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
