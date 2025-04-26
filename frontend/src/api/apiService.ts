import axios from "axios";
import { BusinessFormData, RegisterFormData } from "../types";

const api = axios.create({
  baseURL: "http://localhost:5003/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export const apiService = {
  login: async (email: string, password: string) => {
    return await api.post("/auth/login", { email, password });
  },

  register: async (
    formData: RegisterFormData,
    formDataBusiness: BusinessFormData
  ) => {
    return await api.post("/auth/register", { formData, formDataBusiness });
  },

  getBookings: async (userId: string) => {
    return await api.post("/bookings/getBookings", { userId });
  },

  getAllServices: async () => {
    return await api.get("/services/getAllServices");
  },

  getProviders: async () => {
    return await api.get("/auth/getProviders");
  },

  bookService: async (
    customer: object,
    provider: object,
    service: string,
    amount: string
  ) => {
    return await api.post("/bookings/bookService", {
      customer,
      provider,
      service,
      amount,
    });
  },

  createService: async (formDataBusiness: BusinessFormData) => {
    return await api.post("/services/createService", formDataBusiness);
  },

  changeBookingStatus: async (
    _Id: object,
    status: string
  ) => {
    return await api.post("/bookings/changeBookingStatus", {
      _Id,
      status,
    });
  },
};
