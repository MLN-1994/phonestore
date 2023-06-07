
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

api.interceptors.request.use(
  (config) => {
    if (typeof document !== "undefined") {
      const token = localStorage?.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const ProductApi = {
  getAll: () => api.get(`/products`),
  insert: (product) => api.post(`/products`),
};

export { ProductApi };