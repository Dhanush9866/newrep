import React from 'react';

const Courses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-700 to-purple-800 py-16">
      <div className="container mx-auto px-4">
        <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-white">Welcome Courses</h2>
          <ul className="space-y-2">
            <li className="p-4 bg-white/10 backdrop-blur-sm rounded-md">
              <h3 className="font-semibold text-white">Intro to Programming</h3>
              <p className="text-gray-200">Learn the basics of coding with easy-to-follow lessons.</p>
            </li>
            <li className="p-4 bg-white/10 backdrop-blur-sm rounded-md">
              <h3 className="font-semibold text-white">Getting Started with React</h3>
              <p className="text-gray-200">An introduction to React, components, and JSX.</p>
            </li>
            <li className="p-4 bg-white/10 backdrop-blur-sm rounded-md">
              <h3 className="font-semibold text-white">JavaScript Essentials</h3>
              <p className="text-gray-200">Master the building blocks of JavaScript.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Courses;



