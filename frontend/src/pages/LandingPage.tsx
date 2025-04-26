import { Link } from 'react-router-dom';
import { Search, CheckCircle, Clock, CreditCard, Star, MapPin, Zap, DollarSign } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <section 
        className="relative h-screen flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Find Trusted Local Services in Minutes!
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Connect with verified professionals for home repairs, tutoring, pet care, and more—all in one place!
          </p>
          
          <div className="max-w-3xl mx-auto bg-white p-2 rounded-lg shadow-lg flex mb-8">
            <input
              type="text"
              placeholder="Search for a service (e.g., Electrician)"
              className="flex-1 px-4 py-2 outline-none"
            />
            <input
              type="text"
              placeholder="Location"
              className="w-48 px-4 py-2 border-l outline-none"
            />
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700">
              <Search className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex justify-center gap-4">
            <Link to="/signup" className="bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-indigo-700">
              Get Started
            </Link>
            <Link to="/services" className="bg-white text-indigo-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100">
              Browse Services
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Search className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Search & Choose</h3>
              <p className="text-gray-600">Find local professionals</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Book Instantly</h3>
              <p className="text-gray-600">Schedule services with real-time tracking</p>
            </div>
            <div className="text-center">
              <CreditCard className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Pay Securely</h3>
              <p className="text-gray-600">Multiple payment options</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Get it Done!</h3>
              <p className="text-gray-600">Verified professionals ensure quality work</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
     

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Star className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Verified Professionals</h3>
              <p className="text-gray-600">Background checks & customer reviews</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hyperlocal Service</h3>
              <p className="text-gray-600">Find providers near you</p>
            </div>
            <div className="text-center">
              <Zap className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Instant Bookings</h3>
              <p className="text-gray-600">Real-time availability & tracking</p>
            </div>
            <div className="text-center">
              <DollarSign className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
              <p className="text-gray-600">Transparent rates & no hidden fees</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Customer",
                content: "Found an amazing electrician within minutes. The service was professional and efficient!"
              },
              {
                name: "Mike Thompson",
                role: "Service Provider",
                content: "ServiceHub has helped me grow my business and connect with new customers in my area."
              },
              {
                name: "Emily Davis",
                role: "Customer",
                content: "The platform is so easy to use, and I love the instant booking feature!"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-gray-500 text-sm">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Join Thousands of Satisfied Customers & Skilled Workers!</h2>
          <div className="flex justify-center gap-4">
            <Link to="/signup/customer" className="bg-white text-indigo-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100">
              Sign Up as a Customer
            </Link>
            <Link to="/signup/provider" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-indigo-600">
              Sign Up as a Provider
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;