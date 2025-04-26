import React, { useEffect, useState } from "react";
import { Calendar, X, Check, MapPin } from "lucide-react";
import { userId, userName } from "../user";
import { apiService } from "../api/apiService";
import { bookingType, BusinessFormData, ServiceApi } from "../types";

const serviceCategories = [
  "Home Repairs",
  "Electrical",
  "Plumbing",
  "Tutoring",
  "Cleaning",
  "Pet Care",
  "Car Repairs",
  "Other",
];

export default function ProviderDashboard() {
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [formDataBusiness, setFormDataBusiness] = useState<
    BusinessFormData & { provider: object }
  >({
    provider: userId,
    title: "",
    description: "",
    category: "",
    price: "",
    location: "",
  });
  const [services, setServices] = useState<ServiceApi[]>([]);
  const [bookings, setBookings] = useState<bookingType[]>([]);

  const handleBookingAction = (_Id: object, status: "confirmed" | "cancelled") => {
    const res = apiService.changeBookingStatus(_Id, status);
    res.then(() => window.location.reload()).catch((err) => alert(err));
  };

  const handleServiceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = apiService.createService(formDataBusiness);
    res
      .then(() => {
        setIsServiceModalOpen(false);
        setFormDataBusiness({
          provider: userId,
          title: "",
          description: "",
          category: "",
          price: "",
          location: "",
        });
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleServiceChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormDataBusiness((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    try {
      const res = apiService.getAllServices();
      res.then((data) => {
        const filteredData = data.data.filter(
          (service: ServiceApi) => service.provider._id === userId
        );
        setServices(filteredData);
      });
      const response = apiService.getBookings(userId);
      response.then((data) => {
        const filteredData = data.data.bookings.filter(
          (booking: bookingType) => booking.provider._id === userId
        );
        setBookings(filteredData);
        console.log(filteredData);
      });
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              Provider Dashboard
            </h1>
            <p className="text-lg text-gray-600 mt-2">
              Welcome back, {userName}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Your Services</h2>
            <button
              onClick={() => setIsServiceModalOpen(true)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Add New Service
            </button>
          </div>
          <div className="space-y-4">
            {services.map((service, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <span>{service.location}</span>
                    <div className="flex items-center mt-2 space-x-4">
                      <span className="text-gray-600">${service.price}/hr</span>
                      <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                        Available
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Upcoming Bookings
          </h2>
          <div className="space-y-6">
            {bookings.map((booking, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors duration-200"
              >
                <div className="flex items-center space-x-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {booking.service}
                    </h3>
                    <p className="text-gray-600 mt-1">
                      {booking.customer.firstName +
                        " " +
                        booking.customer.lastName}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 space-x-6 mt-2">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(booking.date).toISOString().split("T")[0]}
                      </span>
                      <span className="font-medium text-gray-900">
                        ${booking.amount}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  {booking.status === "pending" ? (
                    <>
                      <button
                        onClick={() =>
                          handleBookingAction(booking._id, "confirmed")
                        }
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
                      >
                        <Check className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() =>
                          handleBookingAction(booking._id, "cancelled")
                        }
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </>
                  ) : (
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-medium capitalize
                      ${
                        booking.status === "confirmed"
                          ? "bg-green-50 text-green-700"
                          : "bg-red-50 text-red-700"
                      }`}
                    >
                      {booking.status}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isServiceModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Add New Service
                </h2>
                <button
                  onClick={() => setIsServiceModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              <form onSubmit={handleServiceSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Business Name
                    </label>
                    <input
                      id="title"
                      name="title"
                      type="text"
                      required
                      className="form-input block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                      placeholder="Your Business Name"
                      value={formDataBusiness.title}
                      onChange={handleServiceChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="category"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Service Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      required
                      className="form-select block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                      value={formDataBusiness.category}
                      onChange={handleServiceChange}
                    >
                      <option value="">Select a category</option>
                      {serviceCategories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Service Area / Location
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="location"
                        name="location"
                        type="text"
                        required
                        className="form-input block w-full pl-10 px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                        placeholder="City, State"
                        value={formDataBusiness.location}
                        onChange={handleServiceChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Price
                    </label>
                    <div className="relative">
                      <input
                        id="price"
                        name="price"
                        type="number"
                        required
                        className="form-input block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                        placeholder="Enter Price"
                        value={formDataBusiness.price}
                        onChange={handleServiceChange}
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Business Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      rows={4}
                      className="form-textarea block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                      placeholder="Describe your services, experience, and what makes your business unique..."
                      value={formDataBusiness.description}
                      onChange={handleServiceChange}
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsServiceModalOpen(false)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Confirm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
