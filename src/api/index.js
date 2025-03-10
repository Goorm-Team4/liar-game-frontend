import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

function apiInstance() {
  return axios.create({
    baseURL: URL,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
}

function apiFormInstance() {
  return axios.create({
    baseURL: URL,
    headers: {
      "Content-type": "multipart/form-data",
    },
  });
}

export { apiInstance, apiFormInstance };