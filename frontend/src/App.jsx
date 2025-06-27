import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { PackageProvider } from './context/PackageContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Courses = React.lazy(() => import('./pages/Courses'));
const Contact = React.lazy(() => import('./pages/Contact'));
const BasicPackage = React.lazy(() => import('./pages/packages/BasicPackage'));
const ProPackage = React.lazy(() => import('./pages/packages/ProPackage'));
const AdvancedPackage = React.lazy(() => import('./pages/packages/AdvancedPackage'));
const PremiumPackage = React.lazy(() => import('./pages/packages/PremiumPackage'));
const PremiumMaxPackage = React.lazy(() => import('./pages/packages/PremiumMaxPackage'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/auth/Login'));
const Signup = React.lazy(() => import('./pages/auth/Signup'));
const ForgotPassword = React.lazy(() => import('./pages/auth/ForgotPassword'));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <LoadingSpinner />
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <PackageProvider>
          <Router>
            <div className="flex flex-col min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">
              <Navbar />
              <main className="flex-grow">
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/packages">
                      <Route index element={<Navigate to="/" replace />} />
                      <Route path="basic" element={<BasicPackage />} />
                      <Route path="pro" element={<ProPackage />} />
                      <Route path="advanced" element={<AdvancedPackage />} />
                      <Route path="premium" element={<PremiumPackage />} />
                      <Route path="premium-max" element={<PremiumMaxPackage />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route
                      path="/dashboard"
                      element={
                          <Dashboard />
                      }
                    />
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
              <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </div>
          </Router>
        </PackageProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
