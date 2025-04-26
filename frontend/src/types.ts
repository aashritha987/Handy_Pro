export interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  role: string;
}

export interface BusinessFormData {
  title: string;
  description: string;
  category: string;
  price: string;
  location: string;
}

export interface bookingType {
  _id: object;
  service: string;
  customer: { _id: object; firstName: string; lastName: string };
  provider: { _id: object; firstName: string; lastName: string };
  date: string;
  status: string;
  amount: string;
}

export interface Service {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  provider: {
    id: string;
    name: string;
    rating: number;
    image: string;
  };
}

export interface Booking {
  id: string;
  service: Service;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  date: string;
  time: string;
  totalAmount: number;
}

export interface Review {
  id: string;
  rating: number;
  comment: string;
  userName: string;
  date: string;
  serviceId: string;
}

export interface ServiceApi {
  _id: object;
  title: string;
  description: string;
  category: string;
  price: number;
  location: string;
  provider: {
    _id: object;
    firstName: string;
    lastName: string;
  };
}

export interface Providers {
  _id: object;
  firstName: string;
  lastName: string;
  email: string;
  amount: string;
  service: string;
}
