import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import SignupCustomerPage from "./pages/SignupCustomer";
import SignupProviderPage from "./pages/SignupProvider";
import CustomerDashboard from "./components/CustomerDashboard";
import ProviderDashboard from "./components/ProviderDashboard";
import { ServicesPage } from "./pages/ServicePage";
import { ServiceDetails } from "./components/ServiceDetails";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/customer-dashboard" element={<CustomerDashboard />} />
          <Route path="/provider-dashboard" element={<ProviderDashboard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
          <Route path="/signup/customer" element={<SignupCustomerPage />} />
          <Route path="/signup/provider" element={<SignupProviderPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;