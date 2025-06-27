import axios from 'axios';

const API_URL = 'http://localhost:5001/api'; // Updated port to match backend
const RAZORPAY_KEY_ID = 'rzp_test_nIGIidBVXBYUap';

export const loadRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const createOrder = async (amount) => {
  try {
    const response = await axios.post(`${API_URL}/payment/create-order`, { amount });
    return response.data;
  } catch (error) {
    console.error('Create order error:', error);
    throw error;
  }
};
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Oops! Something went wrong</h2>
            <p className="text-gray-600 mb-4">We're sorry for the inconvenience. Please try refreshing the page.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
const verifyPayment = async (paymentDetails) => {
  try {
    localStorage.setItem('paymentSuccess', JSON.stringify({
      ...paymentDetails,
      timestamp: new Date().toISOString()
    }));
    return { success: true };
  } catch (error) {
    console.error('Payment verification error:', error);
    throw new Error('Payment verification failed');
  }
};

export { verifyPayment };
export const initializePayment = (packageDetails) => {
  return new Promise((resolve, reject) => {
    try {
      const options = {
        key: RAZORPAY_KEY_ID,
        amount: packageDetails.price * 100, // Convert to paise
        currency: 'INR',
        name: 'Edunexx',
        description: `${packageDetails.name} Purchase`,
        handler: function(response) {
          const paymentData = {
            packageName: packageDetails.name,
            amount: packageDetails.price,
            paymentId: response.razorpay_payment_id,
            purchaseDate: new Date().toISOString()
          };
          localStorage.setItem('packagePurchased', JSON.stringify(paymentData));
          resolve(paymentData);
        },
        modal: {
          ondismiss: () => reject(new Error('Payment cancelled')),
          escape: false,
          backdropClose: false
        },
        prefill: {
          name: '',
          email: '',
          contact: ''
        },
        theme: {
          color: '#3399cc'
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      reject(error);
    }
  });
};