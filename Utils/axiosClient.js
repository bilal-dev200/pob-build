// utils/axiosClient.js
import axios from "axios";

const API_URL =
  process.env.NEXT_PUBLIC_APP_ENV === "production"
    ? process.env.NEXT_PUBLIC_ADMIN_URL_LIVE
    : process.env.NEXT_PUBLIC_ADMIN_URL_LOCAL;

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add token
axiosClient.interceptors.request.use(
  (config) => {
    const token = typeof window !== "undefined" ? localStorage.getItem("ACCESS_TOKEN") : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle errors
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    try {
      const { response } = error;
      if (response && response.status === 401) {
        if (typeof window !== "undefined") {
          localStorage.removeItem("ACCESS_TOKEN");
          // Optionally redirect to login page
          // window.location.href = "/login";
        }
      }
    } catch (err) {
      console.error(err);
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
