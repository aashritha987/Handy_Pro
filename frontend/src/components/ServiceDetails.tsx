import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Star, IndianRupee } from "lucide-react";
import { services } from "../data/Service";
import { apiService } from "../api/apiService";
import { ServiceApi, Providers } from "../types";
import { userId } from "../user";

export const ServiceDetails: React.FC = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);
  const serviceCategories = [
    "Home Repairs",
    "Electrical",
    "Plumbing",
    "Tutoring",
    "Cleaning",
    "Pet Care",
    "Car Repairs",
  ];
  const serviceName =
    id !== undefined ? serviceCategories[parseInt(id) - 1] : "Unknown Service";
  const [servicesApi, setServicesApi] = useState<ServiceApi[]>([]);
  const [providers, setProviders] = useState<Providers[]>([]);

  useEffect(() => {
    const res = apiService.getAllServices();
    res.then((data) => {
      const filteredData = data.data.filter((service: ServiceApi) =>
        service.category.includes(serviceName)
      );
      console.log(filteredData);
      setServicesApi(filteredData);
      const extractedProviders = filteredData.map((service: ServiceApi) => ({
        ...service.provider,
        amount: service.price,
        service: service.title
      }));
      setProviders(extractedProviders);
    });
  }, []);

  const handleBookNow = (_id: object, service: string, amount: string) => {
    const res = apiService.bookService(userId, _id, service, amount);
    res
      .then(() => alert("Booking Successful!!!"))
      .catch((error) => alert("Booking Failed: " + error.message));
  };

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{service.name}</h1>
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="font-medium">{service.rating}</span>
            <span className="text-gray-500">({service.reviews} reviews)</span>
          </div>
          <p className="text-gray-600 mb-8">{service.description}</p>

          <h2 className="text-2xl font-semibold mb-4">Available Services</h2>
          {servicesApi.length != 0 ? (
            <>
              <div className="grid gap-4 mb-8">
                {servicesApi.map((category, i) => (
                  <div key={i} className="border rounded-lg p-4">
                    <h3 className="text-xl font-semibold mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{category.description}</p>
                    <p>
                      Service Provided by:{" "}
                      {category.provider.firstName +
                        " " +
                        category.provider.lastName}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <IndianRupee className="w-4 h-4" />
                        <span>{category.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <h2 className="text-2xl font-semibold mb-4">Service Providers</h2>
              <div className="grid gap-6">
                {providers.map((provider, i) => (
                  <div key={i} className="border rounded-lg p-4">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white text-2xl font-bold rounded-full">
                        {provider.firstName[0]}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">
                          {provider.firstName + " " + provider.lastName}
                        </h3>
                        <div className="flex items-center gap-2 my-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span>{service.rating}</span>
                          <span className="text-gray-500">
                            ({service.reviews} reviews)
                          </span>
                        </div>
                        <p className="text-gray-600">
                          {Math.floor(Math.random() * 4 + 1)} experience
                        </p>
                      </div>
                    </div>
                    <button
                      className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      onClick={() => handleBookNow(provider._id, provider.service, provider.amount)}
                    >
                      Book Now
                    </button>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>No Services Available...</>
          )}
        </div>
      </div>
    </div>
  );
};
