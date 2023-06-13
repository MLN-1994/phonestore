import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/",
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
  delete: (itemId) => api.delete(`/products/${itemId}`),

  update: (productId, formData) =>
    api.put(`/products/${productId}/update`, formData),
};

const UserApi = {
  login: (formData) => api.post(`/login`, formData),
  register: (formData) => api.post(`/register`, formData),
};

const OrderApi = {
  order: (formData) => api.post(`/orders`, formData),
  getOrders: () => api.get("/getorders"),
  deleteOrder: (orderId) => api.delete(`/orders/${orderId}/delete`),
};

export { ProductApi, UserApi, OrderApi };
