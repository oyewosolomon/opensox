"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { X, Menu } from 'lucide-react';

const HeaderMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Header */}
      <header className="bg-blue-600 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={toggleSidebar}
            className="text-white z-50 transition-opacity duration-200"
            aria-label="Toggle menu"
          >
            {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <a href="/">
            <img src="/logo-white.svg" alt="Bark Logo" className="h-10" />
          </a>
        </div>
      </header>

      {/* Fullscreen Menu */}
      <div
        className={`fixed inset-0 bg-black transition-transform duration-500 ease-in-out z-40 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Menu Content */}
        <div className="h-full flex flex-col items-center justify-center text-white">
          <nav className="space-y-8 text-center">
            {['About', 'Services', 'Connect', 'Jobs'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="block text-3xl md:text-4xl font-bold hover:text-blue-400 transition-colors duration-300"
                onClick={toggleSidebar}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default HeaderMenu;
