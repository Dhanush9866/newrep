import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/images/4.png';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 text-white pt-16 pb-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating gradient circles */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-purple-600/10 to-blue-500/10 rounded-full blur-3xl animate-float opacity-70"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-br from-purple-600/10 to-pink-500/10 rounded-full blur-3xl animate-float-delayed opacity-70"></div>
        
        {/* Pulsing center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 rounded-full blur-xl animate-pulse-slow"></div>
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-purple-900/20"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Brand Info */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-3 group transform transition-all duration-500 hover:scale-[1.02]">
              {/* Logo with glow effect */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full blur-lg group-hover:blur-xl transition-all duration-700"></div>
                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-md group-hover:opacity-70 transition-all duration-500"></div>
                <img 
                  src={logo} 
                  alt="DigitalBillionaire Logo" 
                  className="h-10 sm:h-14 w-auto relative transform transition-all duration-500 group-hover:rotate-[5deg] group-hover:scale-110" 
                />
              </div>
              
              {/* Logo text with gradient animation */}
              <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient group-hover:animate-gradient-faster">
                DigitalBillionaire
              </h3>
            </div>
            
            {/* Tagline */}
            <p className="text-gray-300/90 text-xs sm:text-sm leading-relaxed max-w-md font-light tracking-wide">
              Transform your learning journey with our cutting-edge courses. 
              We bridge the gap between ambition and achievement through 
              immersive, industry-relevant education.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-5 pt-2">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  ),
                  href: "https://facebook.com",
                  label: "Facebook",
                  color: "from-blue-600 to-blue-800"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  ),
                  href: "https://twitter.com",
                  label: "Twitter",
                  color: "from-sky-500 to-sky-700"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  ),
                  href: "https://instagram.com",
                  label: "Instagram",
                  color: "from-pink-500 to-purple-600"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.261-2.148-.558-2.913-.306-.789-.717-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                    </svg>
                  ),
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                  color: "from-blue-500 to-blue-700"
                }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center"
                  aria-label={social.label}
                >
                  {/* Animated background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.color} rounded-full opacity-0 group-hover:opacity-100 blur-md group-hover:blur-lg transition-all duration-500`}></div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 blur-xs transition-all duration-300"></div>
                  
                  {/* Icon container */}
                  <div className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300 transform group-hover:scale-110">
                    <div className="w-4 h-4 sm:w-6 sm:h-6">
                      {social.icon}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            {/* Resources */}
            <div className="space-y-2 sm:space-y-4">
              <h4 className="text-base sm:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 group inline-block">
                <span className="relative">
                  Resources
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-500"></span>
                </span>
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  { to: "/courses", text: "All Courses" },
                  { to: "/webinars", text: "Webinars" },
                  { to: "/blog", text: "Blog" },
                  { to: "/guides", text: "Learning Guides" }
                ].map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.to} 
                      className="text-gray-300/90 hover:text-white transition-colors duration-300 flex items-center group text-xs sm:text-sm tracking-wide"
                    >
                      <span className="w-0 h-[1px] bg-gradient-to-r from-purple-400 to-blue-400 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 group inline-block">
                <span className="relative">
                  Support
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-500"></span>
                </span>
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  { to: "/help-center", text: "Help Center" },
                  { to: "/faq", text: "FAQs" },
                  { to: "/contact", text: "Contact Us" },
                  { to: "/feedback", text: "Feedback" }
                ].map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.to} 
                      className="text-gray-300/90 hover:text-white transition-colors duration-300 flex items-center group text-xs sm:text-sm tracking-wide"
                    >
                      <span className="w-0 h-[1px] bg-gradient-to-r from-blue-400 to-purple-400 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 group inline-block">
                <span className="relative">
                  Company
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-500"></span>
                </span>
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  { to: "/about", text: "About Us" },
                  { to: "/careers", text: "Careers" },
                  { to: "/privacy", text: "Privacy Policy" },
                  { to: "/terms", text: "Terms of Service" }
                ].map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.to} 
                      className="text-gray-300/90 hover:text-white transition-colors duration-300 flex items-center group text-xs sm:text-sm tracking-wide"
                    >
                      <span className="w-0 h-[1px] bg-gradient-to-r from-purple-400 to-pink-400 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-gray-800/50 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center relative">
          {/* Floating orb effect */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full blur-lg animate-pulse-slow"></div>
          
          {/* Copyright */}
          <p className="text-gray-400/80 text-[10px] sm:text-xs font-light tracking-wide">
            © {new Date().getFullYear()} DigitalBillionaire Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;