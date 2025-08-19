import axios from "axios";
const url = "https://gearguardbackend.onrender.com";
const devApis = {
  SETTINGS_API: "http://localhost:5000/api/settings",
  PRODUCTS_API: "http://localhost:5000/api/product",
  CONTACT_API: "http://localhost:5000/api/message",
};
const prodApis = {
  SETTINGS_API: `${url}/api/settings`,
  PRODUCTS_API: `${url}/api/product`,
  CONTACT_API: `${url}/api/contact`,
};

const getApiUrls = () => {
  const environment = process.env.REACT_APP_ENV;
  console.log(environment);
  switch (environment) {
    case "dev":
      return devApis;
    case "prod":
      return prodApis;
    default:
      return devApis;
  }
};

export const APIS = getApiUrls();

export const settingApi = axios.create({
  baseURL: APIS.SETTINGS_API,
});

export const productApi = axios.create({
  baseURL: APIS.PRODUCTS_API,
});

export const contactApi = axios.create({
  baseURL: APIS.CONTACT_API,
});
