import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import ProductMainCard from "../ProductCard/ProductMainCard";

const Product = () => {
  return (
    <div className="productSection">
      <div className="productText">
        <div className="productTitle">
          <p>Our Products</p>
        </div>
        <div className="productDesc">
          <p>A small Description About Us</p>
        </div>
      </div>
      <div className="productCardSection">
        <ProductMainCard title={"Best Industrial Safety Shoes"}/>
        <ProductMainCard title={"Ladies Safety Shoes"}/>
        <ProductMainCard title={"Safety Gum Boots"}/>
      </div>
    </div>
  );
};

export default Product;
