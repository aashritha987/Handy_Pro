import React from "react";
import { Star, MapPin, Clock, TrendingUp as Trending, Tag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Service } from "../data/Service";

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/services/${service.id}`)}
      className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative"
    >
      {service.trending && (
        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm">
          <Trending className="w-4 h-4" />
          Trending
        </div>
      )}
      <img
        src={service.image}
        alt={service.name}
        className="w-full h-48 object-cover"
      />
      {service.discount && (
        <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm">
          <Tag className="w-4 h-4" />
          {service.discount}% OFF
        </div>
      )}
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
        <div className="flex items-center gap-2 mb-3">
          <Star className="w-5 h-5 text-yellow-400 fill-current" />
          <span className="font-medium">{service.rating}</span>
          <span className="text-gray-500">({service.reviews} reviews)</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 mb-3">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{service.location}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-green-600">
            <Clock className="w-4 h-4" />
            <span className="text-sm">
              {service.availableSlots} slots available
            </span>
          </div>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/services/${service.id}`);
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};
