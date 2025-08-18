import { contactApi } from "../api";
import { getHeaders } from "./actionHelper";

export const uploadContact=async(data)=>{
    try{
      const header=getHeaders()  
      const response=await contactApi.post("/",data,header)
      if(response.data.code===200){
        console.log(response.data.message)
        return true;
      }
      else{
        console.log(response.data.message)
        return false
      }

    }catch(error){
      console.log("Error is ",error)
    }
}