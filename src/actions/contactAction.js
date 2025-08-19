import { contactApi } from "../api";
import { getHeaders } from "./actionHelper";

export const uploadContact = async (data) => {
  try {
    const header = getHeaders();
    const response = await contactApi.post("/", data, header);
    if (response.data.code === 200) {
      console.log(response.data.message);
      return true;
    } else {
      console.log(response.data.message);
      return false;
    }
  } catch (error) {
    console.log("Error is ", error);
  }
};

export const fetchMessages = async (filterValue = "all") => {
  try {
    // Build query params based on dropdown
    const params =
      filterValue && filterValue !== "all" ? { status: filterValue } : {};

    const header = getHeaders(params);

    const response = await contactApi.get("/", header);
    if (response.data.code === 200) {
      console.log(response.data.message);
      return response.data.data;
    } else {
      return [];
    }
  } catch (error) {
    console.log("Error is ", error.message);
  }
};

export const updateMessage = async (id, val) => {
  try {
    const data = { status: val };
    const header = getHeaders();

    const response = await contactApi.patch(`/${id}`, data, header);
    if (response.data.code === 200) {
      console.log(response.data.message);
      return response.data.data;
    } else {
      return [];
    }
  } catch (error) {
    console.log("Error is ", error.message);
  }
};
