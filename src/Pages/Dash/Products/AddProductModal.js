import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "./Products.css";

const AddProductModal = ({ onClose, onSubmit }) => {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productRate, setProductRate] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", productName);
    formData.append("category", productCategory);
    formData.append("rate", productRate);
    formData.append("description", description);
    files.forEach(file => {
      formData.append("images", file);
    });
    console.log("Form Data is :",formData)
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="dashProductModal">
      <div className="modalContent">
        <div className="modalHeader">
          <h2>Add New Product</h2>
          <button onClick={onClose} className="closeBtn">&times;</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="formGroup">
            <label>Product Name</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>
          
          <div className="formGroup">
            <label>Category</label>
            <select
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
              required
            >
              <option value="">Select Category</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="books">Books</option>
              <option value="home">Home & Kitchen</option>
            </select>
          </div>

          <div className="formGroup">
            <label>Product Rate ($)</label>
            <input
              type="number"
              value={productRate}
              onChange={(e) => setProductRate(e.target.value)}
              required
            />
          </div>

          <div className="formGroup">
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="formGroup">
            <label>Product Images</label>
            <div
              {...getRootProps()}
              className={`dropzone ${isDragActive ? "active" : ""}`}
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here...</p>
              ) : (
                <p>Drag & drop images here, or click to select</p>
              )}
            </div>
            <div className="previewContainer">
              {files.map((file, index) => (
                <div key={index} className="imagePreview">
                  <img src={file.preview} alt="preview" />
                </div>
              ))}
            </div>
          </div>

          <div className="modalActions">
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default AddProductModal;