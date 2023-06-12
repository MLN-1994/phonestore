import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
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
  insert: (formData) => api.post(`/insert`, formData),
};

const UserApi = {
  login: (formData) => api.post(`/login`, formData),
  register: (formData) => api.post(`/register`, formData),
};

export { ProductApi, UserApi };
