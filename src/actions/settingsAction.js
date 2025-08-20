import { settingApi } from "../api";
import { getHeaders } from "./actionHelper";

export const settingsUpload = async (formData) => {
  try {
    const response = await settingApi.post("/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (response.data.code == 200) {
      console.log("Settings saved successfully:", response.data);
      return true;
    }
    else{
      return false;
    }
  } catch (error) {
    console.error("Error saving settings:", error);
  }
};

export const settingsFetch = async () => {
  try {
    const headers=getHeaders()
    const response = await settingApi.get("/all",headers);
    if (response.data.code == 200) {
      console.log("Settings saved successfully:", response.data);
      return response.data;
    }
  } catch (error) {
    console.error("Error saving settings:", error.message);
    //alert("Error saving settings. Please try again.");
  }
};
