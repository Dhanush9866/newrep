import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import { createOrder, verifyPayment } from '../../services/paymentService';

const RAZORPAY_KEY_ID = 'rzp_test_nIGIidBVXBYUap';

const PremiumPackage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    // Load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    script.onerror = () => {
      console.error('Failed to load Razorpay script');
      toast.error('Payment system is temporarily unavailable');
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const packageDetails = {
    name: "Premium",
    features: [
      "Access to 35 courses",
      "VIP Support",
      "Community Access",
      "Daily Live Sessions",
      "Premium Resources",
      "24/7 Priority Support"
    ],
    mrp: "₹9,999",
    price: 7999,
    description: "Premium learning experience with VIP support and daily live sessions",
    gradient: "from-rose-500 to-pink-600",
    bgGradient: "from-slate-900 via-rose-900/10 to-slate-900",
    image: "/images/premium-banner.jpg",
    highlights: [
      "35 Courses",
      "VIP Support",
      "Daily Sessions"
    ],
    benefits: [
      {
        title: "VIP Access",
        description: "Get access to 35 courses with lifetime validity"
      },
      {
        title: "VIP Support",
        description: "Get priority VIP support 24/7"
      },
      {
        title: "Daily Sessions",
        description: "Join interactive daily live sessions"
      }
    ]
  };

  const handlePurchase = async () => {
    if (!isAuthenticated) {
      toast.info('Please login to continue');
      navigate('/login', { 
        state: { 
          returnUrl: window.location.pathname,
          package: packageDetails
        }
      });
      return;
    }

    if (!window.Razorpay) {
      toast.error('Payment system is loading. Please try again in a moment.');
      return;
    }

    try {
      setIsProcessing(true);
      // Convert amount to paise (Razorpay expects amount in smallest currency unit)
      const amountInPaise = Math.round(packageDetails.price * 100);
      
      console.log('Creating order...', { amount: amountInPaise });
      
      // Create order
      const response = await createOrder(amountInPaise, 'premium');
      console.log('Order created:', response);

      if (!response.success || !response.order) {
        throw new Error(response.message || 'Failed to create order');
      }

      // Configure Razorpay options
      const options = {
        key: RAZORPAY_KEY_ID,
        amount: response.order.amount,
        currency: response.order.currency || 'INR',
        name: 'Edunexx',
        description: `Purchase ${packageDetails.name} Package`,
        order_id: response.order.id,
        handler: async function(response) {
          try {
            console.log('Payment success:', response);
            // Verify payment
            const result = await verifyPayment({
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature
            });

            if (result.success) {
              toast.success('Payment successful! Package purchased.');
              navigate('/dashboard');
            } else {
              toast.error('Payment verification failed. Please contact support.');
            }
          } catch (error) {
            console.error('Payment verification error:', error);
            toast.error(error.message || 'Payment verification failed');
          } finally {
            setIsProcessing(false);
          }
        },
        prefill: {
          name: `${user?.firstName} ${user?.lastName}`.trim() || '',
          email: user?.email || '',
        },
        theme: {
          color: '#e11d48'
        },
        modal: {
          ondismiss: function() {
            console.log('Payment modal closed');
            setIsProcessing(false);
          },
          escape: true,
          backdropclose: false
        },
        notes: {
          packageType: 'premium'
        }
      };

      console.log('Initializing Razorpay with options:', { ...options, key: '***' });

      // Initialize Razorpay
      const razorpay = new window.Razorpay(options);

      // Handle payment failures
      razorpay.on('payment.failed', function(response) {
        console.error('Payment failed:', response.error);
        toast.error(response.error.description || 'Payment failed');
        setIsProcessing(false);
      });

      // Open Razorpay modal
      razorpay.open();

    } catch (error) {
      console.error('Payment error:', error);
      toast.error(error.message || 'Failed to process payment');
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/20 to-black/50" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Package Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                <span className="inline-block bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                  {packageDetails.name} Package
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                {packageDetails.description}
              </p>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Package Details */}
              <div className="space-y-10">
                {/* Price Card */}
                <div className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                  <div className="flex flex-col items-center">
                    <p className="text-gray-400 text-lg line-through mb-2">MRP: {packageDetails.mrp}</p>
                    <div className="text-5xl font-bold text-white mb-4">
                      ₹{packageDetails.price}
                      <span className="text-lg text-gray-400 ml-2">/ lifetime</span>
                    </div>
                    <button
                      onClick={handlePurchase}
                      disabled={isProcessing}
                      className={`w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-xl py-4 px-8 font-semibold text-lg transition-all duration-200 transform hover:scale-[1.02] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2`}
                    >
                      {isProcessing ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        'Get Started Now'
                      )}
                    </button>
                  </div>
                </div>

                {/* Features List */}
                <div className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-6">What's Included</h3>
                  <div className="space-y-4">
                    {packageDetails.features?.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-rose-500/20 flex items-center justify-center">
                          <svg className="w-3.5 h-3.5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Benefits & Highlights */}
              <div className="space-y-10">
                {/* Highlights */}
                <div className="grid grid-cols-3 gap-4">
                  {packageDetails.highlights.map((highlight, index) => (
                    <div 
                      key={index}
                        className="bg-gradient-to-br from-rose-500/10 to-pink-500/10 backdrop-blur-xl border border-white/10 rounded-xl p-4 text-center"
                    >
                      <p className="text-white font-semibold">{highlight}</p>
                    </div>
                  ))}
                </div>

                {/* Benefits */}
                <div className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-6">Key Benefits</h3>
                  <div className="space-y-6">
                    {packageDetails.benefits.map((benefit, index) => (
                      <div key={index} className="space-y-2">
                        <h4 className="text-lg font-medium text-rose-400">{benefit.title}</h4>
                        <p className="text-gray-300">{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-slate-900 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  question: "What's included in the Premium package?",
                  answer: "The Premium package includes access to 35 courses, VIP support, community access, daily live sessions, premium resources, and 24/7 priority support."
                },
                {
                  question: "How is Premium different from Advanced?",
                  answer: "The Premium package offers more courses, VIP support, daily live sessions instead of weekly, and additional premium features."
                },
                {
                  question: "What kind of support is included?",
                  answer: "You get VIP priority support 24/7 with the fastest response times and dedicated support staff."
                },
                {
                  question: "Is there a payment plan?",
                  answer: "Yes, we offer flexible EMI options for the Premium package. Contact support for details."
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/[0.02] backdrop-blur-xl rounded-xl p-6 border border-white/10"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumPackage;