import React, { useEffect, useState } from "react";
import "./Products.css";
import DashHeader from "../../../Component/Client/DashHeader/DashHeader";
import DashProductCard from "./DashProductCard";
import AddProductModal from "./AddProductModal";
import { getAllProducts, productUpload } from "../../../actions/productAction";

const Products = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [productAdd, setProductAdd] = useState(false);
  const handleAddProduct = async (formData) => {
    // Handle form submission to your backend
    await productUpload(formData);
    setProductAdd(true);
  };
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
      setProductAdd(false);
    };

    fetchProducts();
  }, [productAdd]);
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="dashSectionMain">
      <div className="fuContainer">
        <div className="dashTopSticky">
          <DashHeader title={"Products"} />
          <div className="dashProductSearch">
            <img src="Assets/Dashboard/search.png" />
            <input
              type="text"
              placeholder="Search Product"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="dashProductSection">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <DashProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="no-results">
              <p>No products found matching your search</p>
            </div>
          )}
        </div>
        <img
          src="Assets/Dashboard/plus.png"
          className="dashproductadd"
          onClick={() => setShowModal(true)}
          alt=""
        />
        {showModal && (
          <AddProductModal
            onClose={() => setShowModal(false)}
            onSubmit={handleAddProduct}
          />
        )}
      </div>
    </div>
  );
};

export default Products;
