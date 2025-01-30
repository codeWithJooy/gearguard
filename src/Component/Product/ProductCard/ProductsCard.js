import React from "react";

const ProductsCard = () => {
  return (
    <div className="productsCard">
      <div className="productsImg">
        <img src="Assets/Logo/shoe.png" />
      </div>
      <div className="productsText">
        <div className="productsTitle">
          <p>Gum Shoes</p>
        </div>
        <div className="productsDescription">
          <p>Smmall Description About Product</p>
        </div>
        <div className="productsRate">
          <div className="productsActual">
            <p>Rs 12000</p>
          </div>
          <div className="productsOld">
            <p>Rs 10000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
