import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import {userName, email, user, userId} from "../user";
import {bookingType} from "../types"
import { apiService } from "../api/apiService";

export default function CustomerDashboard() {
  const [bookings, setBookings] = useState<bookingType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBookings() {
      try {
        const response = apiService.getBookings(userId);
        response.then((data)=>{
          console.log(data.data.bookings);
          setBookings(data.data.bookings);
        })
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchBookings();
  }, []);

  if (!user) return <div className="text-center p-6">Loading user...</div>;
  if (loading) return <div className="text-center p-6">Fetching bookings...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center space-x-4 mb-6 border-b pb-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">{userName}</h2>
            <p className="text-gray-600">{email}</p>
          </div>
        </div>
        <h2 className="text-2xl font-semibold mb-4">Your Bookings</h2>
        {bookings.length === 0 ? (
          <p className="text-gray-600">No bookings found.</p>
        ) : (
          <div className="space-y-4">
            {bookings.map((booking,i) => (
              <div
                key={i}
                className="flex justify-between items-center p-4 border rounded-lg bg-gray-100"
              >
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {booking.service}
                  </h3>
                  <p className="text-gray-600 text-sm">Provider: {booking.provider.firstName + " " + booking.provider.lastName }</p>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {booking.date}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${
                      booking.status === "confirmed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {booking.status}
                  </span>
                  <p className="font-medium mt-1">${booking.amount}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}