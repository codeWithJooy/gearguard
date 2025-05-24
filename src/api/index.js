import axios from "axios";

const devApis = {
  SETTINGS_API: "http://localhost:5000/api/settings",
  PRODUCTS_API: "http://localhost:5000/api/product",

};
const prodApis = {
  SETTINGS_API: "https://rentpg.onrender.com/api/settings",
  PRODUCTS_API: "https://rentpg.onrender.com/api/product",
}

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

export const productApi=axios.create({
  baseURL:APIS.PRODUCTS_API
})

