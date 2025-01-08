"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ArrowLeft, X } from 'lucide-react';
import NavigationMenu from './NavigationMenu';
import Navigation from './Navigation';
import MultiStepForm from './MultiStepForm';


const HeroSection = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleClose = () => {
    setIsOpen(false);
    setSearchQuery('');
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  

  return (
    <div className="relative min-h-screen bg-blue-600">
      {/* Navigation Bar */}
      <Navigation/>

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
      <MultiStepForm/>
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