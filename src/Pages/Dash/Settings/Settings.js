import React, { useState, useEffect } from "react";
import DashHeader from "../../../Component/Client/DashHeader/DashHeader";
import "./Settings.css";
import { settingsFetch, settingsUpload } from "../../../actions/settingsAction";
import Spinner from "../../../Component/Spinner/Spinner";

const Settings = () => {
  const [websiteName, setWebsiteName] = useState("");
  const [logoPreview, setLogoPreview] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [file, setFile] = useState(null);
  const [openModal,setOpenModal]=useState(false)

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    setFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOpenModal(true)
    const formData = new FormData();
    formData.append("websiteName", websiteName);
    formData.append("address", address);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("facebook", facebook);
    formData.append("twitter", twitter);
    formData.append("instagram", instagram);
    formData.append("linkedin", linkedin);
    if (logoPreview) {
      formData.append("logo", file);
    }
    console.log(formData);
    const response = await settingsUpload(formData);
    if(response){
      setOpenModal(false)
    }
  };
  // Fetch settings on component mount
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await settingsFetch();
        const data = response?.data;

        setWebsiteName(data?.websiteName || "");
        setLogoPreview(data?.logoUrl || "");
        setAddress(data?.address || "");
        setEmail(data?.email || "");
        setPhone(data?.phone || "");
        setFacebook(data?.facebook || "");
        setTwitter(data?.twitter || "");
        setInstagram(data?.instagram || "");
        setLinkedin(data?.linkedin || "");
        setLogoPreview(data?.logo || "");
      } catch (error) {
        console.error("Error fetching settings:", error);
      }
    };

    fetchSettings();
  }, []);
  return (
    <div className="dashSectionMain">
      <div className="fuContainer">
        <div className="dashTopSticky">
          <DashHeader title={"Settings"} />
        </div>

        <div className="settingsContent">
          <form onSubmit={handleSubmit} className="settingsForm">
            {/* Website Information Section */}
            <div className="settingsCard">
              <div className="cardHeader">
                <h3>
                  <i className="fas fa-globe"></i> Website Information
                </h3>
              </div>
              <div className="cardBody">
                <div className="formGroup">
                  <label>Website Name</label>
                  <div className="inputWithIcon">
                    <i className="fas fa-pencil-alt"></i>
                    <input
                      type="text"
                      value={websiteName}
                      onChange={(e) => setWebsiteName(e.target.value)}
                      placeholder="Enter website name"
                    />
                  </div>
                </div>

                <div className="formGroup">
                  <label>Website Logo</label>
                  <div className="logoUploadContainer">
                    <div className="logoPreviewArea">
                      {logoPreview ? (
                        <img src={logoPreview} alt="Website logo preview" />
                      ) : (
                        <div className="uploadPrompt">
                          <i className="fas fa-cloud-upload-alt"></i>
                          <p>Drag & drop or click to upload</p>
                          <span>Recommended size: 300x300px</span>
                        </div>
                      )}
                    </div>
                    <label className="modernUploadButton">
                      <input
                        type="file"
                        onChange={handleLogoUpload}
                        accept="image/*"
                        hidden
                      />
                      <i className="fas fa-upload"></i> Choose File
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="settingsCard">
              <div className="cardHeader">
                <h3>
                  <i className="fas fa-address-book"></i> Contact Information
                </h3>
              </div>
              <div className="cardBody gridLayout">
                <div className="formGroup">
                  <label>Office Address</label>
                  <div className="inputWithIcon">
                    <i className="fas fa-map-marker-alt"></i>
                    <textarea
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Enter office address"
                      rows="4"
                    />
                  </div>
                </div>

                <div className="formGroup">
                  <label>Email Address</label>
                  <div className="inputWithIcon">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email address"
                    />
                  </div>
                </div>

                <div className="formGroup">
                  <label>Phone Number</label>
                  <div className="inputWithIcon">
                    <i className="fas fa-phone"></i>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="settingsCard">
              <div className="cardHeader">
                <h3>
                  <i className="fas fa-hashtag"></i> Social Media Links
                </h3>
              </div>
              <div className="cardBody gridLayout">
                <div className="formGroup">
                  <label>
                    <i className={`fab fa-facebook`}></i> Facebook
                  </label>
                  <input
                    type="url"
                    value={facebook}
                    onChange={(e) => setFacebook(e.target.value)}
                    placeholder={`https://facebook.com/yourprofile`}
                  />
                </div>
                <div className="formGroup">
                  <label>
                    <i className={`fab fa-twitter`}></i> Twitter
                  </label>
                  <input
                    type="url"
                    value={twitter}
                    onChange={(e) => setTwitter(e.target.value)}
                    placeholder={`https://twitter.com/yourprofile`}
                  />
                </div>
                <div className="formGroup">
                  <label>
                    <i className={`fab fa-instagram`}></i> Instagram
                  </label>
                  <input
                    type="url"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                    placeholder={`https://instagram.com/yourprofile`}
                  />
                </div>
                <div className="formGroup">
                  <label>
                    <i className={`fab fa-linkedin`}></i> Linkedin
                  </label>
                  <input
                    type="url"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                    placeholder={`https://linkedin.com/yourprofile`}
                  />
                </div>
              </div>
            </div>

            <div className="saveBar">
              <button type="submit" className="saveButton">
                <i className="fas fa-save"></i> Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
      {
        openModal && <Spinner text={"Uploading Data"}/>
      }
    </div>
  );
};

export default Settings;
