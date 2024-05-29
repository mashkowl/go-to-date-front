import axios from "axios";

export const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const API = axios.create({
  baseURL: BASE_URL,
});

API.interceptors.response.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default API;
