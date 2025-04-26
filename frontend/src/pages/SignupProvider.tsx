import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BusinessFormData, RegisterFormData } from "../types";
import {
  Mail,
  Lock,
  User,
  Phone,
  Briefcase,
  MapPin,
  CheckCircle,
} from "lucide-react";
import { apiService } from "../api/apiService";

const SignupProviderPage = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "provider",
  });

  const [formDataBusiness, setFormDataBusiness] = useState<BusinessFormData>({
    title: "",
    description: "",
    category: "",
    price: "",
    location: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = apiService.register(formData, formDataBusiness);
      response
        .then((data) => {
          localStorage.setItem("user", JSON.stringify(data.data));
          window.location.href = "/";
        })
        .catch((error) => {
          alert(`Registration failed: ${error}`);
        });
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleChangeBusiness = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormDataBusiness((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Join Our Service Provider Network
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Create your professional profile and start connecting with customers
            looking for your services.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="flex items-center space-x-2 mb-8">
              <CheckCircle className="h-6 w-6 text-indigo-600" />
              <span className="text-sm text-gray-500">
                All fields are required
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-2 border-b border-gray-200 pb-3 mb-6">
                  <User className="h-5 w-5 text-indigo-600" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Personal Information
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="form-input block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="form-input block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="form-input block w-full pl-10 px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        className="form-input block w-full pl-10 px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Information Section */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2 border-b border-gray-200 pb-3 mb-6">
                  <Briefcase className="h-5 w-5 text-indigo-600" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Business Information
                  </h2>
                </div>

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
                      onChange={handleChangeBusiness}
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
                      onChange={handleChangeBusiness}
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
                        onChange={handleChangeBusiness}
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
                        onChange={handleChangeBusiness}
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
                      onChange={handleChangeBusiness}
                    />
                  </div>
                </div>
              </div>

              {/* Security Section */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2 border-b border-gray-200 pb-3 mb-6">
                  <Lock className="h-5 w-5 text-indigo-600" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Security
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      className="form-input block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Confirm Password
                    </label>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      required
                      className="form-input block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150"
                >
                  Create Your Professional Account
                </button>
                <p className="mt-4 text-center text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupProviderPage;
