import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '/images/4.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem('token'));
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isPackageActive = () => {
    return location.pathname.startsWith('/packages/');
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/courses', label: 'Courses' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const handlePackageClick = (path) => {
    // Simply navigate to the package page
    navigate(path);
    // Close dropdowns
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
  };

  const packageLinks = [
    { path: '/packages/basic', label: 'Basic', price: '₹1,999', description: 'Perfect for beginners' },
    { path: '/packages/pro', label: 'Pro', price: '₹3,999', description: 'Most popular choice' },
    { path: '/packages/advanced', label: 'Advanced', price: '₹5,999', description: 'For serious learners' },
    { path: '/packages/premium', label: 'Premium', price: '₹7,999', description: 'Complete learning experience' },
    { path: '/packages/premium-max', label: 'Premium Max', price: '₹9,999', description: 'Ultimate learning bundle' }
  ];

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-black/70 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img className="h-8 w-auto" src={logo} alt="Edunexx" />
            <span className="ml-2 text-lg font-bold text-white">Edunexx</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-white bg-gradient-to-r from-blue-600 to-violet-600 px-3 py-2 rounded-lg shadow-lg'
                    : 'text-gray-200 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg hover:shadow-lg'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Packages Dropdown */}
            <div className="relative inline-block">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center text-sm font-semibold transition-all duration-300 ${
                  isPackageActive()
                    ? 'text-white bg-gradient-to-r from-blue-600 to-violet-600 px-3 py-2 rounded-lg shadow-lg'
                    : 'text-gray-200 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg hover:shadow-lg'
                }`}
              >
                Packages
                <svg
                  className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-gradient-to-br from-black/95 via-gray-900/95 to-purple-900/95 backdrop-blur-xl rounded-xl shadow-2xl py-2 z-50 border border-blue-500/20">
                  {packageLinks.map((link) => (
                    <button
                      key={link.path}
                      onClick={() => handlePackageClick(link.path)}
                      className="w-full text-left px-4 py-3 hover:bg-white/5 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-white">{link.label}</div>
                          <div className="text-xs text-gray-400 mt-0.5">{link.description}</div>
                        </div>
                        <div className="ml-4">
                          <span className="text-blue-400 font-medium">{link.price}</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Enhanced CTA button */}
            {!isLoggedIn && (
              <>
                <Link
                  to="/signup"
                  className="text-sm font-semibold text-gray-200 hover:text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-300"
                >
                  Signup
                </Link>
                <Link
                  to="/login"
                  className="text-sm font-semibold text-gray-200 hover:text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-300"
                >
                  Login
                </Link>
              </>
            )}

            {/* Auth Buttons */}
            {isLoggedIn && (
              <div className="flex items-center space-x-3">
                <Link
                  to="/dashboard"
                  className="text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-sm font-semibold text-gray-200 hover:text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-300"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-200 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-br from-black/95 via-gray-900/95 to-purple-900/95 backdrop-blur-xl border-t border-blue-500/20">
          <div className="px-4 pt-2 pb-3 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-white bg-gradient-to-r from-blue-600 to-violet-600'
                    : 'text-gray-200 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Packages Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center justify-between w-full px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
                  isPackageActive()
                    ? 'text-white bg-gradient-to-r from-blue-600 to-violet-600'
                    : 'text-gray-200 hover:text-white hover:bg-white/10'
                }`}
              >
                Packages
                <svg
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="mt-2 space-y-1 bg-white/5 rounded-lg">
                  {packageLinks.map((link) => (
                    <button
                      key={link.path}
                      onClick={() => handlePackageClick(link.path)}
                      className="w-full text-left px-4 py-3 hover:bg-white/5 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-white">{link.label}</div>
                          <div className="text-xs text-gray-400 mt-0.5">{link.description}</div>
                        </div>
                        <div className="ml-4">
                          <span className="text-blue-400 font-medium">{link.price}</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Auth Buttons */}
            <div className="pt-2 space-y-2">
              {!isLoggedIn && (
                <>
                  <Link
                    to="/signup"
                    className="block w-full text-center px-4 py-3 text-base font-medium text-gray-200 hover:text-white bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Signup
                  </Link>
                  <Link
                    to="/login"
                    className="block w-full text-center px-4 py-3 text-base font-medium text-gray-200 hover:text-white bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                </>
              )}
              {isLoggedIn && (
                <>
                  <Link
                    to="/dashboard"
                    className="block w-full text-center text-white bg-gradient-to-r from-blue-600 to-violet-600 px-3 py-2 rounded-lg font-medium transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-center text-gray-200 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg font-medium transition-all duration-300"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;