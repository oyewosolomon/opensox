"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { X, Menu } from 'lucide-react';

const HeroSection = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative min-h-screen bg-blue-500">
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 p-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Menu Toggle Button */}
          <button 
            onClick={toggleSidebar}
            className="text-white z-50 transition-opacity duration-200"
            aria-label="Toggle menu"
          >
            {isSidebarOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Centered Logo */}
          <div className="absolute flex place-items-center left-1/2 transform -translate-x-1/2">
            <img 
              src="/logo-white.svg" 
              alt="Company Logo" 
              className="h-8 md:h-10"
            />
            <span className='text-white font-bold text-2xl'>
            Opensox
            </span>
          </div>

          {/* Empty div to maintain flex spacing */}
          <div className="w-6"></div>
        </div>
      </nav>

      {/* Fullscreen Menu */}
      <div 
        className={`fixed inset-0 bg-black transition-transform duration-500 ease-in-out z-40 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Menu Content */}
        <div className="h-full flex flex-col items-center justify-center text-white">
          <nav className="space-y-8 text-center">
            <Link 
              href="/about" 
              className="block text-3xl md:text-4xl font-bold hover:text-blue-400 transition-colors duration-300"
              onClick={toggleSidebar}
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="block text-3xl md:text-4xl font-bold hover:text-blue-400 transition-colors duration-300"
              onClick={toggleSidebar}
            >
              Services
            </Link>
            <Link 
              href="/connect" 
              className="block text-3xl md:text-4xl font-bold hover:text-blue-400 transition-colors duration-300"
              onClick={toggleSidebar}
            >
              Connect
            </Link>
            <Link 
              href="/jobs" 
              className="block text-3xl md:text-4xl font-bold hover:text-blue-400 transition-colors duration-300"
              onClick={toggleSidebar}
            >
              Jobs
            </Link>
          </nav>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="flex flex-col w-2/3 mx-auto items-center justify-center min-h-screen text-center px-4">
        {/* Hero Text */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-12">
        Connecting Experts with Opportunities, Seamlessly
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/connect" 
            className="px-14 py-3 bg-black text-white rounded-full font-medium hover:bg-navy-800 transition-colors"
          >
            Join as a Professional
          </Link>
          <Link 
            href="/jobs" 
            className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-navy-800 transition-colors"
          >
            Job openings
          </Link>
        </div>

        {/* Scroll Indicator */}
        <a href="#forclient">
        <div className="absolute bottom-8 animate-bounce">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
          
        </div>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;