import React from "react";
import "./Products.css"

const DashProductCard=()=>{
    return(
        <div className="dashProductCard">
        <div className="dashProductImage">
          <img src="Assets/Dashboard/Products/jacket.jpg" alt="" />
        </div>
        <div className="dashProductName">
            <p>Product Name</p>
        </div>
        <div className="dashProductDetails">
            <div className="productRate">
                Rs 100
            </div>
            <div className="dashProductCategory">
                Category
            </div>
        </div>
        <div className="dashProductDescription">
            <p>Product Description is added here to kept a details what the hell the product is</p>
        </div>
      </div>
    )
}

export default DashProductCard;