import axios from "axios";

const URL = "";

function apiInstance() {
  const AxiosInst = axios.create({
    baseURL: URL,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });

  return AxiosInst;
}


export default apiInstance;