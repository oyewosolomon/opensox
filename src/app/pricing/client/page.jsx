"use client"

import React, { useState } from 'react';

import FAQSection from '@/app/components/FaqSection';
import Footer from '@/app/components/Footer';
import NavigationAlt from '@/app/components/NavigationAlt';

const ClientPricing = () => {

  return (
    <>
  <NavigationAlt/>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 leading-tight">
           Pricing
          </h1>
          <p className="text-xl text-gray-700">
          From the moment you sign up, we'll send you leads for free. You only pay to contact customers that you think are the right fit for your business
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
              Join as a Prfessional
            </button>
            <a 
              href="/login" 
              className="text-blue-600 hover:text-blue-700 underline py-3 transition-colors"
            >
              Login
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-20 items-center">
          
        {/* Right Image */}
        <div className="relative">
          <div className="flex  place-item-center text-center rounded-lg overflow-hidden">
            <img 
              src="/creditcard.png"
              alt="Developer working on laptop"
              className="w-2/3 my-auto h-50 object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 leading-tight">
          Credits at the ready
          </h1>
          <p className="text-xl text-gray-700">
          We use a simple credit system. Buy a credit pack and simply use the credits to contact the customers you’re interested in. No commission, no hidden fees.
          </p>
          
        </div>
      </div>
    </div>

   <FAQSection/>
  <Footer/>
    </>
  );
};

export default ClientPricing;