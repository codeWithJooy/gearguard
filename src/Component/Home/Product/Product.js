import React from "react";
import ProductCard from "../ProductCard/ProductCard";

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
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Product;
