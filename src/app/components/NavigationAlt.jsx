"use client"

import React, { useState } from 'react';
import { Search, ArrowLeft, X } from 'lucide-react';
import NavigationMenu from './NavigationMenu';
import NavigationMenuAlt from './NavigationMenuAlt';
import Link from 'next/link';
import ProfileMenu from './ProfileMenu';

const NavigationAlt = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleClose = () => {
    setIsOpen(false);
    setSearchQuery('');
  };

  return (
    <nav className="absolute top-0 left-0 right-0 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <NavigationMenuAlt />
        
        {/* Centered Logo */}
        <Link href='/' className="absolute flex place-items-center left-1/2 transform -translate-x-1/2">
          <img 
            src="/logo.svg" 
            alt="Company Logo" 
            className="h-6 md:h-10"
          />
          <span className='text-black font-bold text-xl md:2xl'>
            Opensox
          </span>
        </Link>

        {/* Search Section */}
        <div className="relative">
          {/* Desktop Search */}
          <div className="hidden md:flex items-center gap-2">
            <div className="relative">
              <input 
                type="text" 
                className="pl-10 pr-4 py-2 rounded-lg bg-white/10 text-black placeholder-black/70 border border-black/20 focus:outline-none focus:border-black/40 w-64"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit" 
                className="absolute left-3 top-1/2 -translate-y-1/2"
              >
                <Search className="w-4 h-4 text-black/70 hover:text-black" />
              </button>
            </div>
              <ProfileMenu/>
          </div>

          {/* Mobile Search Icon */}
          <button 
            onClick={() => setIsOpen(true)} 
            className="text-white md:hidden"
          >
            <Search className="w-6 h-6 text-black/70 hover:text-black" />
          </button>

          {/* Mobile Search Overlay */}
          {isOpen && (
            <div className="fixed inset-0 bg-white z-50 md:hidden">
              <div className="p-4">
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <button 
                    onClick={handleClose}
                    className="p-1 hover:bg-gray-100 rounded-full"
                  >
                    <ArrowLeft className="w-6 h-6 text-gray-700" />
                  </button>
                  <div className="flex-1">
                    <div className="relative">
                      <input 
                        type="text"
                        className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Search..."
                        autoFocus
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      {searchQuery && (
                        <button
                          onClick={() => setSearchQuery('')}
                          className="absolute right-3 top-1/2 -translate-y-1/2"
                        >
                          <X className="w-4 h-4 text-gray-500" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Search Results Area */}
                <div className="mt-4">
                  {/* Add your search results here */}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavigationAlt;