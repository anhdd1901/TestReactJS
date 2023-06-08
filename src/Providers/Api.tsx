import { message } from "antd";
import Axios from "axios";
import { merchantCode } from "../Auth/services/auth.type";

export const baseURL = "https://test.epayservices.com.vn:11002/gw";

const Api = Axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    merchantCode: merchantCode,
    lang: "vi",
    version: "1.0.0",
    clientIp: "127.0.0.1",
  },
  timeout: 60 * 1000,
  validateStatus: (status) => {
    return status >= 200 && status < 400;
  },
});

Api.interceptors.response.use(
  // Trả về data cho client
  (response) => {
    return response.data;
  },

  (error) => {
    console.log(error);
    message.error(error.message);
    return Promise.reject(error);
  }
);

export default Api;
