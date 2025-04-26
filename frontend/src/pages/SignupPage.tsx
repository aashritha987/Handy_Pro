import React from "react";
import { Link } from "react-router-dom";
import { UserCircle, Briefcase } from "lucide-react";

const SignupPage = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Choose your account type
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </Link>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Link
            to="/signup/customer"
            className="relative bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-indigo-500 transition-colors group"
          >
            <div className="flex items-center space-x-4">
              <UserCircle className="h-8 w-8 text-indigo-600" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Sign up as a Customer
                </h3>
                <p className="text-gray-500">
                  Find and book trusted service providers
                </p>
              </div>
            </div>
          </Link>

          <Link
            to="/signup/provider"
            className="relative bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-indigo-500 transition-colors group"
          >
            <div className="flex items-center space-x-4">
              <Briefcase className="h-8 w-8 text-indigo-600" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Sign up as a Service Provider
                </h3>
                <p className="text-gray-500">
                  Grow your business and find new customers
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
