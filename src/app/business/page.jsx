"use client"

import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Search } from 'lucide-react';
import serviceCategories from '../data/serviceCategories';
import NavigationAlt from '../components/NavigationAlt';
import Footer from '../components/Footer';
import TalentExpert from '../components/TalentExpert';
import MarketplaceExpert from '../components/MarketplaceExpert';

const ServiceCategory = ({ title, services }) => {
  const [isOpen, setIsOpen] = useState(true);
  const formatSlug = (service) => {
    return service.toLowerCase().replace(/[&\s]+/g, '-').replace(/[()]/g, '');
  };
  return (
    <div className="mb-8">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center w-full text-left mb-4 group"
      >
        {isOpen ? (
          <ChevronDown className="h-8 w-8 border rounded-full p-2 text-blue-500 mr-2 transition-transform group-hover:text-blue-600" />
        ) : (
          <ChevronRight className="h-8 w-8 border rounded-full p-2 text-blue-500 mr-2 transition-transform group-hover:text-blue-600" />
        )}
        <h2 className="text-2xl font-semibold text-blue-500 group-hover:text-blue-600 transition-colors">
          {title}
        </h2>
      </button>
      
      {isOpen && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-8">
          {services.map((service) => (
            <a
              key={service}
              href={`/business/${formatSlug(title)}/${formatSlug(service)}`}
              className="p-4 rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all duration-200 ease-in-out"
            >
              <span className="text-gray-700 hover:text-blue-600">{service}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const ServicesPage = () => {

  return (
    <>
    <NavigationAlt/>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 leading-tight">
            Hire the best Talent/Consultants
          </h1>
          <p className="text-xl text-gray-700">
            Get a risk-free quote with Top Rated talent to scope out your project.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
              Hire a talent
            </button>
            <a 
              href="#" 
              className="text-blue-600 hover:text-blue-700 underline py-3 transition-colors"
            >
              Join as a professional
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="rounded-lg overflow-hidden">
            <img 
              src="/service-woman.jpg"
              alt="Developer working on laptop"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 py-12 mt-6 mb-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">All Services</h1>
      
      {/* Search Bar */}
      <div className="mb-12">
        <div className="relative max-w-xl">
          <input
            type="text"
            placeholder="Search services..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none pl-10"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Service Categories */}
      <div className="space-y-6">
        {Object.entries(serviceCategories).map(([category, services]) => (
          <ServiceCategory
            key={category}
            title={category}
            services={services}
          />
        ))}
      </div>
    </div>
    <MarketplaceExpert/>
    <Footer/>
    </>
  );
};

export default ServicesPage;