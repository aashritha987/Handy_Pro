export interface Service {
  id: string;
  name: string;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  location: string;
  availableSlots: number;
  discount?: number;
  trending: boolean;
}

export const services: Service[] = [
  {
    id: "1",
    name: "Home Repairs",
    rating: 4.6,
    reviews: 1876,
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80",
    description: "Expert home repair and maintenance services",
    location: "Bangalore, Karnataka",
    availableSlots: 3,
    discount: 15,
    trending: true,
  },
  {
    id: "2",
    name: "Electrical",
    rating: 4.8,
    reviews: 2103,
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80",
    description: "Certified electrical services for homes and offices",
    location: "Mumbai, Maharashtra",
    availableSlots: 5,
    discount: 10,
    trending: false,
  },
  {
    id: "3",
    name: "Plumbing",
    rating: 4.5,
    reviews: 1650,
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80",
    description: "Reliable plumbing services for all needs",
    location: "Delhi, NCR",
    availableSlots: 4,
    trending: true,
  },
  {
    id: "4",
    name: "Tutoring",
    rating: 4.9,
    reviews: 2540,
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80",
    description: "Expert tutoring for various subjects",
    location: "Hyderabad, Telangana",
    availableSlots: 6,
    discount: 5,
    trending: true,
  },
  {
    id: "5",
    name: "Cleaning",
    rating: 4.7,
    reviews: 1987,
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80",
    description: "Professional home and office cleaning services",
    location: "Chennai, Tamil Nadu",
    availableSlots: 8,
    trending: false,
  },
  {
    id: "6",
    name: "Pet Care",
    rating: 4.8,
    reviews: 1200,
    image:
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80",
    description: "Quality pet care services including grooming and boarding",
    location: "Pune, Maharashtra",
    availableSlots: 5,
    trending: true,
  },
  {
    id: "7",
    name: "Car Repairs",
    rating: 4.7,
    reviews: 1350,
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3",
    description: "Expert car repair and maintenance services",
    location: "Kolkata, West Bengal",
    availableSlots: 4,
    discount: 10,
    trending: false,
  },
];
