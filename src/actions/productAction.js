import { productApi } from "../api";
import { getHeaders } from "./actionHelper";

export const productUpload = async (formData) => {
  try {
    const response = await productApi.post("/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (response.data.code == 200) {
      console.log("Settings saved successfully:", response.data);
      return response.data;
    }
  } catch (error) {
    console.log("Error Saving Product", error.message);
  }
};
