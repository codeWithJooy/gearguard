import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "./Dashboard.css";
import DashCard from "../../Component/Dashboard/DashCard/DashCard";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("messages");
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [productName, setProductName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [productImages, setProductImages] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setProductImages(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log({
      productName,
      selectedCategory,
      price,
      description,
      productImages,
    });
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setShowAddProductModal(false);
    // Reset form fields
    setProductName("");
    setSelectedCategory("");
    setPrice("");
    setDescription("");
    setProductImages([]);
  };
  return (
    <div className="dashMain">
      {/* Add Product Modal */}
      {showAddProductModal && (
        <div className="modalOverlay">
          <div className="addProductModal">
            <h2>Add New Product</h2>
            <form onSubmit={handleSubmit}>
              <div className="formGroup">
                <label>Category:</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="electronics">Electronics</option>
                  <option value="clothing">Clothing</option>
                  <option value="books">Books</option>
                </select>
              </div>

              <div className="formGroup">
                <label>Product Name:</label>
                <input
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  required
                />
              </div>

              <div className="formGroup">
                <label>Price:</label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>

              <div className="formGroup">
                <label>Description:</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>

              <div className="formGroup">
                <label>Product Images:</label>
                <div {...getRootProps({ className: "dropzone" })}>
                  <input {...getInputProps()} />
                  <p>Drag & drop images here, or click to select</p>
                </div>
                <div className="previewContainer">
                  {productImages.map((file) => (
                    <div key={file.name} className="imagePreview">
                      <img src={file.preview} alt="preview" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="modalActions">
                <button type="button" onClick={handleCloseModal}>
                  Cancel
                </button>
                <button type="submit">Upload</button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="dashContainer">
        <div className="dashHeader">
          <p>Dashboard</p>
        </div>
        <div className="dashCardContainer">
          <div className="dashCardContainer">
            <DashCard />
            <DashCard />
            <DashCard />
          </div>
        </div>
        <div className="dashProducts">
          <div className="dashProHeader">
            <div
              className={`dashTab ${
                activeTab === "messages" ? "dashActive" : ""
              }`}
              onClick={() => setActiveTab("messages")}
            >
              <p>Messages</p>
            </div>
            <div
              className={`dashTab ${
                activeTab === "product" ? "dashActive" : ""
              }`}
              onClick={() => setActiveTab("product")}
            >
              <p>Product</p>
            </div>
          </div>

          {activeTab == "messages" && (
            <div className="dashTable">
              <div className="messageFilter">
                <select>
                  <otion>Option 1</otion>
                  <option>Option 2</option>
                </select>
              </div>
              <div className="dashMessageSection">
                <div className="messageUnitHeader">
                  <p>Name</p>
                </div>
                <div className="messageUnitHeader">
                  <p>Phone</p>
                </div>
                <div className="messageUnitHeader">
                  <p>Gmail</p>
                </div>
                <div className="messageUnitHeader">
                  <p>Date</p>
                </div>
                <div className="messageUnitHeader">
                  <p>Status</p>
                </div>
              </div>
              
              <div className="dashMessageUnit">
                <div className="messageUnit">
                  <p>Abhishek Hazra</p>
                </div>
                <div className="messageUnit">
                  <p>+91 9007453398</p>
                </div>
                <div className="messageUnit">
                  <p>abhimicro3@gmail.com</p>
                </div>
                <div className="messageUnit">
                  <p>09/05/1992</p>
                </div>
                <div className="messageUnit">
                  <select>
                    <option>New</option>
                    <option>Viewed</option>
                  </select>
                </div>
              </div>
              <div className="dashMessageUnit">
                <div className="messageUnit">
                  <p>Abhishek Hazra</p>
                </div>
                <div className="messageUnit">
                  <p>+91 9007453398</p>
                </div>
                <div className="messageUnit">
                  <p>abhimicro3@gmail.com</p>
                </div>
                <div className="messageUnit">
                  <p>09/05/1992</p>
                </div>
                <div className="messageUnit">
                  <select>
                    <option>New</option>
                    <option>Viewed</option>
                  </select>
                </div>
              </div>
              
              
            </div>
          )}
          {activeTab == "product" && (
            <div className="dashTable">
              <div className="messageFilter">
                <button onClick={() => setShowAddProductModal(true)}>
                  Add Product
                </button>

                <select>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>
              <div className="dashMessageSection">
                <div className="messageUnitHeader">
                  <p>Name</p>
                </div>
                <div className="messageUnitHeader">
                  <p>Category</p>
                </div>
                <div className="messageUnitHeader">
                  <p>SubCategory</p>
                </div>
                <div className="messageUnitHeader">
                  <p>Price</p>
                </div>
                <div className="messageUnitButton"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
