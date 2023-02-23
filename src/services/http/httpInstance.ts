import axios, {
  type AxiosRequestConfig,
  type AxiosRequestHeaders,
} from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const httpInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: "",
  },
});

httpInstance.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    const tempHeader = config.headers as Partial<AxiosRequestHeaders>;
    tempHeader.Authorization = `Bearer ${"token"}`;
    config.headers = tempHeader;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { httpInstance };
