import React, { useState } from "react";
import Header from "../../Component/Common/Header/Header";
import { category } from "../../Data/Product/productCategory";
import { safetySub } from "../../Data/Product/safetyCategory";
import { weildingSub } from "../../Data/Product/weildingCategory";
import "./Product.css";
import ProductsCard from "../../Component/Product/ProductCard/ProductsCard";
import Testimonial from "../../Component/Home/Testimonial/Testimonial";
import Contact from "../../Component/Home/Contact/Contact";
import DynamicTitle from "../../Component/Common/DynamicTitle";

const Product = () => {
  DynamicTitle("Products:GearGuard")  
  const [categorylabel, setCategorylabel] = useState(category[0].categoryType);
  const [subLabel, setSublabel] = useState(safetySub[0].name);
  return (
    <div className="mainHome">
      <Header />

      <div className="productScroll">
        {category &&
          category.map((data, key) => (
            <CategoryUnit
              key={key}
              categoryType={data.categoryType}
              image={data.image}
              label={categorylabel}
              setCategorylabel={setCategorylabel}
            />
          ))}
      </div>
      <div className="productSub">
        {categorylabel === "Safety Equipments" &&
          safetySub.map((data, key) => (
            <CategorySub
              key={key}
              name={data.name}
              label={subLabel}
              setSublabel={setSublabel}
            />
          ))}
        {categorylabel === "Weilding Equipments" &&
          weildingSub.map((data, key) => (
            <CategorySub
              key={key}
              name={data.name}
              label={subLabel}
              setSublabel={setSublabel}
            />
          ))}
      </div>
      <div className="products">
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
      </div>
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Product;

const CategoryUnit = ({ categoryType, image, label, setCategorylabel }) => {
  return (
    <div
      className={categoryType === label ? "scrollUnitSelected" : "scrollUnit"}
      onClick={() => setCategorylabel(categoryType)}
    >
      <img src={image} alt={label} />
      <div className="scrollText">
        <p>{categoryType}</p>
      </div>
    </div>
  );
};

const CategorySub = ({ name, label, setSublabel }) => {
  return (
    <div
      className={name === label ? "subTabSelected" : "subTab"}
      onClick={() => setSublabel(name)}
    >
      <p>{name}</p>
    </div>
  );
};
