import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const httpInstance = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

export { httpInstance };
