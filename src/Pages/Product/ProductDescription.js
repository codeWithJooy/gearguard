import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../Component/Common/Header/Header";
import Testimonial from "../../Component/Home/Testimonial/Testimonial";
import Contact from "../../Component/Home/Contact/Contact";
import { getSingleProduct } from "../../actions/productAction";
const ProductDescription = () => {
  const location = useLocation();
  const { productId } = location.state || {}; // safe check
  const [showDetails, setShowDetails] = useState(false);
  const [productDetails, setProductDetails] = useState({});
  const [selectedImage,setSelectedImage]=useState("")

  const handleDetails = () => {
    setShowDetails(true);
  };
  const handleDescription = () => {
    setShowDetails(false);
  };

  useEffect(() => {
    (async () => {
      let data = await getSingleProduct(productId);
      setProductDetails(data);
      setSelectedImage(data.images[0])
    })();
  }, []);
  return (
    <div className="mainHome">
      <Header />
      <div className="descContainer">
        <div className="descImageSection">
          <div className="descImage">
            <img src={selectedImage} />
          </div>
          <div className="descSmallImages">
            {productDetails.images &&
              productDetails.images.map((data, key) => (
                <div className="smallUnit" onClick={()=>setSelectedImage(data)}>
                  <img src={data} alt="" />
                </div>
              ))}
          </div>
        </div>
        <div className="descDetailsSection">
          <div className="descProductTitle">
            <p>{productDetails.name}</p>
          </div>
          <div className="descPrice">
            <p>Rs {productDetails.rate}</p>
          </div>
          <div className="descDetails">
            <div
              className={`${
                showDetails ? "descDetailsName" : "descDetailsNameActive"
              }`}
              onClick={handleDescription}
            >
              <p>Description</p>
            </div>
            <div
              className={`${
                showDetails ? "descDetailsNameActive" : "descDetailsName"
              }`}
              onClick={handleDetails}
            >
              <p>Details</p>
            </div>
            {showDetails ? (
              <div className="descTable">
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <tbody>
                    <tr style={{ backgroundColor: "#f2f2f2" }}>
                      <td style={{ fontWeight: "bold" }}>Weight</td>
                      <td>Size-8 1020 grams</td>
                    </tr>
                    <tr style={{ backgroundColor: "#ffffff" }}>
                      <td style={{ fontWeight: "bold" }}>Size</td>
                      <td>5, 6, 7, 8, 9, 10, 11</td>
                    </tr>
                    <tr style={{ backgroundColor: "#f2f2f2" }}>
                      <td style={{ fontWeight: "bold" }}>Warranty</td>
                      <td>Minimum 6 months </td>
                    </tr>
                    <tr style={{ backgroundColor: "#ffffff" }}>
                      <td style={{ fontWeight: "bold" }}>Approvals</td>
                      <td>IS 15298 (PART-3): 2016</td>
                    </tr>
                    <tr style={{ backgroundColor: "#f2f2f2" }}>
                      <td style={{ fontWeight: "bold" }}>Upper</td>
                      <td>Real leather upper in Barton printa</td>
                    </tr>
                    <tr style={{ backgroundColor: "#ffffff" }}>
                      <td style={{ fontWeight: "bold" }}>Outsole</td>
                      <td>Fully moulded polyurethane (PU) sole</td>
                    </tr>
                    {/* Add more rows as needed */}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="descFull">
                <p>{productDetails.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Testimonial />
      <Contact />
    </div>
  );
};

export default ProductDescription;
