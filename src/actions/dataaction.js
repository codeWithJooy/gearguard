import { settingApi } from "../api";
import { getHeaders } from "./actionHelper";

export const getDetails=async()=>{
    try{
        const header=getHeaders()
        const response=await settingApi.get("/all",header)
        if(response.data.code===200){
            console.log("All Data is ",response.data.data)
            return response.data.data
        }
        else{
            return response.data.data
        }
    }catch(error){
        console.log("Error is ",error.message)
    }
}

export const getLinks=async()=>{
    try{
        const header=getHeaders()
        const response=await settingApi.get("/links",header)
        if(response.data.code===200){
            console.log("Link Data is ",response.data.data)
            return response.data.data
        }
        else{
            return response.data.data
        }
    }catch(error){
        console.log("Error is ",error.message)
    }
}