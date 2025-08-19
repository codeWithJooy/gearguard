import React from "react";
import "./Products.css"

const DashProductCard=({product})=>{
    return(
        <div className="dashProductCard">
        <div className="dashProductImage">
          <img src={product.images[0]} alt="" />
        </div>
        <div className="dashProductName">
            <p>{product.name}</p>
        </div>
        <div className="dashProductDetails">
            <div className="dashProductRate">
                Rs {product.rate}
            </div>
            <div className="dashProductCategory">
                {product.category}
            </div>
        </div>
      </div>
    )
}

export default DashProductCard;