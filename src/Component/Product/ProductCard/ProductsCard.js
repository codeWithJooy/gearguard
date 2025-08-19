import React from "react";
import { useHistory } from "react-router-dom";

const ProductsCard = ({ productId,name, images, description, rate }) => {
  const history=useHistory()
  const handleClick=()=>{
    history.push("/productdescription",{productId})
  }

  return (
    <div className="productsCard" onClick={handleClick}>
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
            <p>Rs {Math.floor(rate * 1.1)}</p>
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
