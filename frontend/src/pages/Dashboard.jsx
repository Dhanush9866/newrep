import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, loading, fetchUser } = useAuth();
  const [referralCode, setReferralCode] = useState(user?.referralCode || '');
  const [referralMsg, setReferralMsg] = useState('');
  const [referralLoading, setReferralLoading] = useState(false);

  useEffect(() => {
    setReferralCode(user?.referralCode || '');
  }, [user]);

  // Professional mock data
  const userData = {
    name: "John Doe",
    enrolledCourses: 5,
    completedCourses: 2,
    progress: 45,
    nextLiveSession: "2025-06-16T14:00:00",
    package: "Professional"
  };

  const courses = [
    {
      id: 1,
      title: "Advanced Digital Marketing Strategy",
      progress: 80,
      lastAccessed: "2025-06-13",
      nextLesson: "Marketing Analytics & ROI Measurement",
      category: "Marketing Strategy",
      instructor: "Sarah Johnson",
      duration: "8 weeks"
    },
    {
      id: 2,
      title: "Business Leadership & Management",
      progress: 60,
      lastAccessed: "2025-06-14",
      nextLesson: "Strategic Decision Making",
      category: "Leadership",
      instructor: "Michael Chen",
      duration: "10 weeks"
    },
    {
      id: 3,
      title: "Data-Driven Marketing Analytics",
      progress: 40,
      lastAccessed: "2025-06-12",
      nextLesson: "Predictive Analytics Models",
      category: "Analytics",
      instructor: "Dr. Emily Watson",
      duration: "6 weeks"
    },
    {
      id: 4,
      title: "Corporate Brand Management",
      progress: 25,
      lastAccessed: "2025-06-11",
      nextLesson: "Brand Strategy Development",
      category: "Branding",
      instructor: "David Martinez",
      duration: "8 weeks"
    },
    {
      id: 5,
      title: "Strategic Market Research",
      progress: 15,
      lastAccessed: "2025-06-10",
      nextLesson: "Qualitative Research Methods",
      category: "Research",
      instructor: "Dr. Rachel Kim",
      duration: "12 weeks"
    }
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleGenerateReferral = async () => {
    setReferralMsg('');
    setReferralLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/generate-referral-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setReferralCode(data.referralCode);
        setReferralMsg('Referral code generated!');
        if (fetchUser) await fetchUser(); // Refresh user context
      } else {
        setReferralMsg(data.msg || 'Failed to generate referral code.');
      }
    } catch (err) {
      setReferralMsg('Server error. Please try again.');
    } finally {
      setReferralLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column - Profile & Analytics */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            {/* Profile Card */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-2xl font-bold text-white mb-1">{user?.firstName} {user?.lastName}</h1>
                  <p className="text-blue-300 text-sm">Professional Member</p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  {user?.package || 'Professional'}
                </span>
              </div>
              {/* Referral Code Section */}
              <div className="mb-4">
                <span className="block text-xs text-blue-200 mb-1">Your Referral Code</span>
                <div className="flex items-center gap-2">
                  <div className="bg-blue-900/40 text-blue-200 font-mono px-3 py-2 rounded-lg text-center select-all border border-blue-500/30 min-w-[120px]">
                    {referralCode || 'Not generated'}
                  </div>
                  <button
                    onClick={handleGenerateReferral}
                    disabled={!!referralCode || referralLoading}
                    className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold disabled:opacity-50"
                  >
                    {referralLoading ? 'Generating...' : 'Generate Referral Code'}
                  </button>
                </div>
                {referralMsg && <div className="text-xs text-green-300 mt-1">{referralMsg}</div>}
              </div>
              
              {/* Progress Circle */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    className="text-gray-700"
                    strokeWidth="8"
                    stroke="currentColor"
                    fill="transparent"
                    r="40"
                    cx="50"
                    cy="50"
                  />
                  <circle
                    className="text-blue-500"
                    strokeWidth="8"
                    strokeDasharray={`${userData.progress * 2.51}, 251.2`}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="40"
                    cx="50"
                    cy="50"
                  />
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <span className="text-2xl font-bold text-white">{userData.progress}%</span>
                  <span className="text-blue-300 text-xs block">Progress</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 rounded-xl p-4 border border-blue-500/20">
                  <p className="text-3xl font-bold text-white mb-1">{userData.enrolledCourses}</p>
                  <p className="text-blue-300 text-sm">Enrolled Courses</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-blue-500/20">
                  <p className="text-3xl font-bold text-white mb-1">{userData.completedCourses}</p>
                  <p className="text-blue-300 text-sm">Completed</p>
                </div>
              </div>

              {/* Next Session */}
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-4 border border-blue-500/20">
                <h3 className="text-lg font-semibold text-white mb-3">Next Live Session</h3>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Strategic Planning Workshop</p>
                    <p className="text-blue-300 text-sm">{formatDate(userData.nextLiveSession)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Course Progress */}
          <div className="col-span-12 lg:col-span-8">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-white">Your Learning Path</h2>
                <Link 
                  to="/courses" 
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  View All Courses →
                </Link>
              </div>

              <div className="space-y-6">
                {courses.map((course) => (
                  <div 
                    key={course.id}
                    className="bg-white/5 rounded-xl p-5 border border-blue-500/20 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-1">{course.title}</h3>
                        <div className="flex items-center space-x-4 mb-2">
                          <span className="text-blue-300 text-sm">{course.category}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-blue-300 text-sm">{course.duration}</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-3">
                          Instructor: {course.instructor}
                        </p>
                      </div>
                      <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30">
                        {course.progress}% Complete
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">
                          Next: {course.nextLesson}
                        </span>
                        <Link 
                          to={`/courses/${course.id}`}
                          className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                        >
                          <span>Continue</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
