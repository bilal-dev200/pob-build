"use client";

import axios from "axios";
import { getAccessToken } from "./storage"; 



const API_URL =
  process.env.NEXT_PUBLIC_API_ENV === "production"
    ? process.env.NEXT_PUBLIC_API_URL_LIVE
    : process.env.NEXT_PUBLIC_API_URL_LOCAL;

console.log("API URL:", API_URL);

// Public Instance
export const publicApi = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
  },
});

// Protected Instance
const protectedApi = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
  },
});

// Token Interceptor
protectedApi.interceptors.request.use(
  async (config) => {
    const token = await getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// CSRF Function
const getCsrfToken = () => {
  const name = "XSRF-TOKEN=";
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.startsWith(name)) {
      return cookie.substring(name.length);
    }
  }
  return "";
};

// CSRF Interceptor
publicApi.interceptors.request.use(
  (config) => {
    const csrfToken = getCsrfToken();
    if (csrfToken) config.headers["X-XSRF-TOKEN"] = csrfToken;
    return config;
  },
  (error) => Promise.reject(error)
);

export default {
  public: publicApi,
  protected: protectedApi,
};
