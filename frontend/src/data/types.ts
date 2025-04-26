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
