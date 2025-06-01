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
      console.log("Product saved successfully:", response.data);
      return response.data;
    }
  } catch (error) {
    console.log("Error Saving Product", error.message);
  }
};

export const getAllProducts=async ()=>{
  try{
    const headers=getHeaders()
    const response=await productApi.get("/",headers);

    if(response.data.code==200){
      console.log("Response Data is ",response.data.data)
      return response.data.data
    }
  }
  catch(error){
    console.error("Error Fetching Products",error.message);
    alert("Error Fetching products")
  }
}
