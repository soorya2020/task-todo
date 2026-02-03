import axios from "axios";
export const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

// Add token in headers
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 2. RESPONSE Interceptor: "Handle errors globally"
API.interceptors.response.use(
  (response) => response, // If request is successful, do nothing
  (error) => {
    // Check if the error is 401 (Expired or Invalid Token)
    if (error.response && error.response.status === 401) {
      console.warn("Token expired or unauthorized. Logging out...");

      // Clear local storage so ProtectedRoute triggers a redirect
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // Hard redirect to login to clear all React states
      window.location.href = "/app/login";
    }

    return Promise.reject(error);
  },
);
