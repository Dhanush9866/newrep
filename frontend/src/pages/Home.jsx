import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
// import logo from "/images/herosection.jpg";
import logo from "/public/images/herosection.png"; //
import Footer from "../components/Footer";

const Home = () => {
  const { user } = useAuth();
  const [openFaq, setOpenFaq] = useState(-1);

  return (
    <div className="bg-gradient-to-br from-black via-gray-700 to-purple-800">
      {/* Hero Section */}
      <section className="relative text-white h-screen w-full overflow-hidden">
        {/* Enhanced animated background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/hero-pattern.png')] bg-cover opacity-10 animate-pulse-slow"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-gray-700/30 to-purple-800/40"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-800/10 via-transparent to-transparent animate-pulse"></div>
        </div>

        {/* Enhanced animated shapes with more vibrant effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-24 sm:w-32 md:w-40 lg:w-48 h-24 sm:h-32 md:h-40 lg:h-48 bg-gradient-to-r from-purple-800/20 to-black/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/3 right-1/3 w-32 sm:w-40 md:w-48 lg:w-56 h-32 sm:h-40 md:h-48 lg:h-56 bg-gradient-to-r from-purple-800/20 to-black/30 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 right-1/4 w-20 sm:w-24 md:w-28 lg:w-32 h-20 sm:h-24 md:h-28 lg:h-32 bg-gradient-to-r from-purple-800/20 to-black/30 rounded-full blur-2xl animate-float-slow"></div>
          <div className="absolute top-1/3 right-1/3 w-16 sm:w-20 md:w-24 lg:w-28 h-16 sm:h-20 md:h-24 lg:h-28 bg-gradient-to-r from-purple-800/20 to-black/20 rounded-full blur-2xl animate-float"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center w-full">
            {/* Content Section */}
            <div className="text-center lg:text-left space-y-3 sm:space-y-4">
              {/* Enhanced title with more dramatic gradient text and animation */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fadeIn text-white">
                Unlock Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 animate-gradient relative">
                  Digital Potential
                  <div className="absolute inset-0 bg-gradient-to-r from-[#7A1CAC]/20 to-[#7A1CAC]/20 blur-xl -z-10"></div>
                </span>{" "}
                with DigitalBillionaire
              </h1>
              <p className="text-base sm:text-lg md:text-xl opacity-90 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-white">
                Master in-demand skills with our comprehensive e-learning
                platform. Learn, Implement & Grow your digital business.
              </p>

              {/* Enhanced CTA buttons with more dramatic glassmorphism effect */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link
                  to={user ? "/dashboard" : "/signup"}
                  className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 flex items-center justify-center gap-3 text-sm sm:text-base"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 sm:h-6 sm:w-6 transform group-hover:rotate-180 transition-transform duration-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {user ? "Go to Dashboard" : "Register Now"}
                  </span>
                </Link>
                <Link
                  to="/courses"
                  className="group relative bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 flex items-center justify-center gap-3 border border-white/20 text-sm sm:text-base"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 sm:h-6 sm:w-6 transform group-hover:rotate-180 transition-transform duration-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                    Browse Courses
                  </span>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-4">
                {[
                  {
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 sm:h-9 sm:w-9 text-pink-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    ),
                    title: "High Value",
                    subtitle: "Certification",
                  },
                  {
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 sm:h-9 sm:w-9 text-purple-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    ),
                    title: "Lifetime",
                    subtitle: "Access",
                  },
                  {
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 sm:h-9 sm:w-9 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    ),
                    title: "1000+",
                    subtitle: "Students",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="group relative bg-white/5 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300"
                  >
                    <div className="text-base sm:text-lg font-bold mb-1 flex items-center justify-center gap-2">
                      {feature.icon}
                      {feature.title}
                    </div>
                    <div className="text-xs sm:text-sm opacity-90 group-hover:text-purple-300 transition-colors duration-300">
                      {feature.subtitle}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Section */}
            <div className="relative hidden lg:block">
              <div className="relative w-full">
                <img
                  src={logo}
                  alt="Digital entrepreneur working"
                  className="w-full h-[80vh] object-contain rounded-xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="absolute -top-4 -right-3 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse-delayed"></div>
              <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Packages Section */}
      <section className="relative py-8 sm:py-10 lg:py-12 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -right-32 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl animate-pulse-delayed"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-2xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-block">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Educational Packages
              </h2>
              <div className="h-0.5 w-16 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform transition-all duration-500 hover:scale-x-110"></div>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-xl mx-auto mt-4">
              Choose the Perfect Package for Your Learning Journey
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 sm:gap-10">
            {[
              {
                name: "Basic",
                features: [
                  "Access to 5 courses",
                  "Basic Support",
                  "Community Access",
                  "Monthly Live Sessions",
                  "Basic Resources",
                  "Email Support",
                ],
                price: "₹1,999",
                badge: "STARTER",
                recommended: false,
                gradientFrom: "from-blue-500",
                gradientTo: "to-blue-700",
                route: "/packages/basic"
              },
              {
                name: "Pro package",
                features: [
                  "Access to 15 courses",
                  "Priority Support",
                  "Community Access",
                  "Weekly Live Sessions",
                  "Advanced Resources",
                ],
                price: "₹3,999",
                badge: "POPULAR",
                recommended: false,
                gradientFrom: "from-emerald-500",
                gradientTo: "to-emerald-700",
                route: "/packages/pro"
              },
              {
                name: "Advanced",
                features: [
                  "Access to 25 courses",
                  "Premium Support",
                  "Community Access",
                  "Weekly Live Sessions",
                  "Premium Resources",
                  "24/7 Support",
                ],
                price: "₹5,999",
                badge: "BEST VALUE",
                recommended: true,
                gradientFrom: "from-purple-500",
                gradientTo: "to-purple-700",
                route: "/packages/advanced"
              },
              {
                name: "Premium",
                features: [
                  "Access to 35 courses",
                  "VIP Support",
                  "Community Access",
                  "Daily Live Sessions",
                  "Premium Resources",
                  "24/7 Priority Support",
                ],
                price: "₹7,999",
                badge: "PREMIUM",
                recommended: false,
                gradientFrom: "from-rose-500",
                gradientTo: "to-rose-700",
                route: "/packages/premium"
              },
              {
                name: "Premium Max",
                features: [
                  "Access to All Courses",
                  "VIP Support",
                  "Community Access",
                  "Daily Live Sessions",
                  "Premium Resources",
                  "24/7 Priority Support",
                  "1-on-1 Mentoring",
                ],
                price: "₹9,999",
                badge: "ULTIMATE",
                recommended: false,
                gradientFrom: "from-pink-500",
                gradientTo: "to-pink-700",
                route: "/packages/premium-max"
              },
            ].map((pkg, index) => (
              <div
                key={index}
                className={`relative group bg-white/10 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${pkg.recommended ? "ring-2 ring-indigo-500/50" : ""
                  }`}
              >
                {/* Animated gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                {/* Package badge */}
                <div
                  className={`absolute top-0 left-0 bg-gradient-to-r ${pkg.gradientFrom} ${pkg.gradientTo} text-white px-2.5 py-0.5 rounded-br-lg text-[10px] font-bold tracking-wider`}
                >
                  {pkg.badge}
                </div>

                {pkg.recommended && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-2 py-0.5 rounded-bl-lg text-[10px] font-bold tracking-wider animate-pulse">
                    RECOMMENDED
                  </div>
                )}

                <div className="p-4 sm:p-5">
                  {/* Package name with gradient underline */}
                  <div className="relative inline-block mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {pkg.name}
                    </h3>
                    <div
                      className={`h-0.5 w-1/2 bg-gradient-to-r ${pkg.gradientFrom} ${pkg.gradientTo} rounded-full mt-1.5 transform transition-all duration-300 group-hover:w-full`}
                    ></div>
                  </div>

                  {/* Price with animated background */}
                  <div
                    className={`relative mt-3 mb-4 inline-block rounded-lg px-3 py-1.5 bg-gradient-to-r ${pkg.gradientFrom}/10 ${pkg.gradientTo}/10`}
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                      {pkg.price}
                    </div>
                    <span className="text-gray-400 text-xs">
                      /lifetime access
                    </span>
                  </div>

                  {/* Features list with enhanced checkmarks */}
                  <ul className="space-y-2.5 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start group/item"
                      >
                        <span
                          className={`flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-r ${pkg.gradientFrom} ${pkg.gradientTo} flex items-center justify-center mr-2 mt-0.5 group-hover/item:scale-110 transition-transform duration-300`}
                        >
                          <svg
                            className="w-2.5 h-2.5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        <span className="text-xs sm:text-sm text-gray-200 group-hover/item:text-white transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Enhanced CTA button */}
                  <Link
                    to={pkg.route}
                    className={`block w-full bg-gradient-to-r ${pkg.gradientFrom} ${pkg.gradientTo} text-white text-center py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-${pkg.gradientFrom}/20 relative overflow-hidden group`}
                  >
                    <span className="relative z-10">Get Started</span>
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Freelance Training Section - Elegant Design */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-900 to-indigo-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/10">
            <div className="flex flex-col md:flex-row">
              {/* Content Side */}
              <div className="md:w-1/2 p-8 sm:p-10 md:p-12 lg:p-14 flex flex-col justify-center">
                <div className="mb-1">
                  <span className="text-xs font-semibold tracking-wider text-purple-300 uppercase">
                    Exclusive Training
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white leading-tight">
                  Master <span className="text-purple-400">Freelance</span>{" "}
                  Skills
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                    Coming Soon
                  </span>
                </h2>

                <div className="flex items-center text-purple-100 mb-5">
                  <svg
                    className="h-5 w-5 mr-2 text-purple-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm sm:text-base font-medium">
                    Date Will Be Announced
                  </span>
                </div>

                <p className="text-gray-200 mb-8 leading-relaxed text-sm sm:text-base opacity-90">
                  Join our popular Sunday Blockbuster sessions where we've
                  covered diverse domains like content creation, marketing,
                  video editing, and finance. Our next transformative session
                  will be announced shortly.
                </p>

                <div className="space-y-4">
                  <button className="relative group bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl text-sm sm:text-base font-semibold hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <span className="relative z-10 flex items-center">
                      Give Your Feedback
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </button>

                  <p className="text-xs text-gray-300 italic">
                    What topic would you like for our next session?
                  </p>
                </div>
              </div>

              {/* Image Side */}
              <div className="md:w-1/2 relative">
                <div className="absolute inset-0 bg-gradient-to-l from-purple-500/10 to-indigo-900/30 z-10"></div>
                <img
                  src="/images/freelance.png"
                  alt="Freelance Training"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-purple-500/10 rounded-full filter blur-3xl -z-0"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-500/10 rounded-full filter blur-3xl -z-0"></div>
      </section>


      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">Why Choose DigitalBillionaire</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Your Gateway to Lifelong Learning and Professional Success
            </p>
          </div>

          {/* Enhanced auto-sliding carousel */}
          <div className="relative overflow-hidden group">
            {/* Gradient fade edges */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>

            {/* Carousel track with duplicated items for seamless looping */}
            <div className="flex animate-infinite-scroll space-x-6 sm:space-x-8">
              {[...Array(2)].map((_, loopIndex) => (
                <React.Fragment key={`loop-${loopIndex}`}>
                  {[
                    {
                      icon: (
                        <div className="relative group-hover:pause-animation">
                          <div className="absolute inset-0 bg-purple-500 rounded-lg blur opacity-75 animate-pulse"></div>
                          <div className="relative flex items-center justify-center h-14 w-14 bg-purple-600 rounded-lg transition-all duration-500 group-hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          </div>
                        </div>
                      ),
                      title: "Expert Instructors",
                      description: "Learn from industry leaders with real-world experience and proven teaching methods.",
                      bg: "bg-gradient-to-br from-purple-900/30 to-purple-700/20"
                    },
                    {
                      icon: (
                        <div className="relative group-hover:pause-animation">
                          <div className="absolute inset-0 bg-indigo-500 rounded-lg blur opacity-75 animate-pulse"></div>
                          <div className="relative flex items-center justify-center h-14 w-14 bg-indigo-600 rounded-lg transition-all duration-500 group-hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                          </div>
                        </div>
                      ),
                      title: "Expanding Curriculum",
                      description: "Access our ever-growing library with new courses added monthly across emerging technologies.",
                      bg: "bg-gradient-to-br from-indigo-900/30 to-indigo-700/20"
                    },
                    {
                      icon: (
                        <div className="relative group-hover:pause-animation">
                          <div className="absolute inset-0 bg-pink-500 rounded-lg blur opacity-75 animate-pulse"></div>
                          <div className="relative flex items-center justify-center h-14 w-14 bg-pink-600 rounded-lg transition-all duration-500 group-hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                          </div>
                        </div>
                      ),
                      title: "Vibrant Community",
                      description: "Connect with peers, mentors, and industry professionals in our active learning network.",
                      bg: "bg-gradient-to-br from-pink-900/30 to-pink-700/20"
                    },
                    {
                      icon: (
                        <div className="relative group-hover:pause-animation">
                          <div className="absolute inset-0 bg-blue-500 rounded-lg blur opacity-75 animate-pulse"></div>
                          <div className="relative flex items-center justify-center h-14 w-14 bg-blue-600 rounded-lg transition-all duration-500 group-hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                        </div>
                      ),
                      title: "Fast Learning",
                      description: "Accelerated courses designed to get you job-ready in weeks, not years.",
                      bg: "bg-gradient-to-br from-blue-900/30 to-blue-700/20"
                    },
                    {
                      icon: (
                        <div className="relative group-hover:pause-animation">
                          <div className="absolute inset-0 bg-teal-500 rounded-lg blur opacity-75 animate-pulse"></div>
                          <div className="relative flex items-center justify-center h-14 w-14 bg-teal-600 rounded-lg transition-all duration-500 group-hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                        </div>
                      ),
                      title: "Verified Certificates",
                      description: "Earn industry-recognized certifications to boost your career prospects.",
                      bg: "bg-gradient-to-br from-teal-900/30 to-teal-700/20"
                    }
                  ].map((item, index) => (
                    <div
                      key={`${loopIndex}-${index}`}
                      className={`flex-shrink-0 w-72 sm:w-80 p-6 rounded-2xl backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-300 ${item.bg}`}
                    >
                      <div className="flex justify-center mb-6">{item.icon}</div>
                      <h3 className="text-xl font-bold mb-3 text-white text-center">{item.title}</h3>
                      <p className="text-gray-300 text-center text-sm sm:text-base">{item.description}</p>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Desktop grid (hidden on mobile) */}
          <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
            {[



            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white text-center">{item.title}</h3>
                <p className="text-gray-300 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
    @keyframes infinite-scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(calc(-100% - 1.5rem));
      }
    }
    .animate-infinite-scroll {
      display: flex;
      animation: infinite-scroll 20s linear infinite;
    }
    .group:hover .animate-infinite-scroll {
      animation-play-state: paused;
    }
    @media (min-width: 640px) {
      .animate-infinite-scroll {
        animation-duration: 30s;
      }
    }
  `}</style>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 to-indigo-900">
        {/* Luxury decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600 rounded-full filter blur-[100px]"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Animated header */}
          <div className="text-center mb-16">
            <span className="inline-block mb-4 text-sm font-semibold tracking-widest text-purple-300 uppercase">
              Your Questions Answered
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white">
              <span className="relative inline-block">
                <span className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl blur-3xl opacity-30"></span>
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-100">
                  FAQ with DigitalBillionaire
                </span>
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto italic">
              Because inquiring minds deserve beautiful answers
            </p>
          </div>

          {/* Luxury accordion */}
          <div className="space-y-4">
            {[
              {
                question: "What is DigitalBillionaire?",
                answer: "DigitalBillionaire is a premier digital learning platform that bridges the gap between ambition and expertise through cutting-edge courses taught by industry leaders."
              },
              {
                question: "Do the courses offer flexible learning?",
                answer: "Absolutely. Our courses are designed for modern learners with 24/7 access, self-paced modules, and mobile-friendly content to fit your schedule."
              },
              {
                question: "Do your courses include certification?",
                answer: "Yes, all completed courses include verifiable digital certificates that showcase your new skills to employers and clients."
              },
              {
                question: "How can I pay for a course or package?",
                answer: "We accept all major credit cards, PayPal, and cryptocurrency. Payment plans are available for premium programs."
              },
              {
                question: "Is your platform payment-secure and encrypted?",
                answer: "Security is paramount. We use 256-bit SSL encryption and PCI-compliant processing to ensure your data remains protected."
              },
              {
                question: "Can DigitalBillionaire help me become a successful freelancer?",
                answer: "Definitely. Our freelancer success tracks include client acquisition strategies, pricing models, and portfolio building alongside technical skills."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300"
              >
                <button
                  className="flex items-center justify-between w-full p-6 text-left bg-gray-800/50 hover:bg-gray-800/70 transition-colors duration-200"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                >
                  <h3 className="text-xl font-medium text-white group-hover:text-purple-300 transition-colors duration-200">
                    {item.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-purple-400 transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  className={`transition-all duration-500 ${openFaq === index ? 'max-h-[500px]' : 'max-h-0'} overflow-hidden`}
                >
                  <div className="p-6 pt-0 text-gray-300 bg-gray-900/30 backdrop-blur-sm">
                    <p className="text-lg leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA section */}
          <div className="mt-16 text-center">
            <p className="text-xl text-gray-300 mb-8">
              Still have questions? Our learning concierges are standing by.
            </p>
            <button className="relative px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold overflow-hidden group">
              <span className="relative z-10">Contact Support</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
