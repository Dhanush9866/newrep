import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaMapMarker, FaCalendar, FaVenusMars, FaStar, FaHeadset, FaChartLine } from 'react-icons/fa';
import Navbar from '../../components/Navbar';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    state: '',
    age: '',
    gender: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '',
    guideCode: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    console.log("Form data",formData);
    try {
      const response = await fetch('http://localhost:8001/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok && data.msg === 'User registered successfully') {
        navigate('/login', {
          state: { message: 'Account created successfully! Please login.' }
        });
      } else {
        setError(data?.msg || 'Failed to sign up');
      }
    } catch (err) {
      console.error('Signup api error:', err);
      setError('Failed to sign up. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-#111827 from-black via-gray-700 to-purple-800">
      <Navbar />
      <div className="pt-16 min-h-screen flex items-center justify-center p-4">
        <div className="flex flex-col lg:flex-row w-full max-w-6xl bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl">
          {/* Left Side - Welcome Content */}
          <div className="lg:w-1/2 p-8 text-white flex flex-col">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">Welcome to DigitalBillionaire</h1>
              <p className="text-lg opacity-90">
                Join our platform and embark on your journey to digital success
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="bg-purple-600 p-2 rounded-full mr-3">
                  <FaStar className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Premium Content</h3>
                  <p className="opacity-80 text-sm">Access exclusive courses and resources</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-600 p-2 rounded-full mr-3">
                  <FaHeadset className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Expert Support</h3>
                  <p className="opacity-80 text-sm">Get guidance from industry professionals</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-600 p-2 rounded-full mr-3">
                  <FaChartLine className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Growth Tools</h3>
                  <p className="opacity-80 text-sm">Everything you need to scale your business</p>
                </div>
              </div>
            </div>

            <div className="mt-auto">
              <img
                src="/images/signup.png"
                alt="Join DigitalBillionaire"
                className="rounded-lg w-full h-auto max-h-120 object-cover"
              />
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-1/2 bg-#393E46 p-8 flex flex-col justify-center ">

          
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Create Account
            </h2>

            {error && (
              <div className="mb-4 p-2 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">
              {/* First Name */}
              <div className="relative">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-2 pl-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
              </div>
              {/* Last Name */}
              <div className="relative">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-2 pl-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
              </div>
              {/* Country Dropdown */}
              <div className="relative">
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full p-2 pl-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                >
                  <option value="">Select Country</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                </select>
              </div>
              {/* State Dropdown */}
              <div className="relative">
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full p-2 pl-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                >
                  <option value="">Select State</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                </select>
              </div>
              {/* Age */}
              <div className="relative">
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full p-2 pl-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                  min="1"
                  required
                />
              </div>
              {/* Gender Dropdown */}
              <div className="relative">
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full p-2 pl-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              {/* Mobile Number */}
              <div className="relative col-span-2">
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Phone Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full p-2 pl-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
              </div>
              {/* Email */}
              <div className="relative col-span-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 pl-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
              </div>
              {/* Password */}
              <div className="relative col-span-2">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-2 pl-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
              </div>
              {/* Confirm Password */}
              <div className="relative col-span-2">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-2 pl-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
              </div>
              {/* Guide Code */}
              <div className="relative col-span-2">
                <input
                  type="text"
                  name="guideCode"
                  placeholder="Guide Code"
                  value={formData.guideCode}
                  onChange={handleChange}
                  className="w-full p-2 pl-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="col-span-2 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 text-sm mt-2"
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>
              <p className="col-span-2 text-center text-xs text-white mt-2">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-600 hover:text-blue-500 font-medium">
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>      </div>
    </div>
  );
};

export default Signup;