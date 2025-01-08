import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import services from '../data/servicesData';

const NavigationMenuAlt = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentView, setCurrentView] = useState('main');
  const [activeCategory, setActiveCategory] = useState(null);
  const menuRef = useRef(null);


  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setCurrentView('main');
        setActiveCategory(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCategoryClick = (category, index) => {
    if (category.submenu) {
      setCurrentView('submenu');
      setActiveCategory({ ...category, index });
    }
  };

  const handleBackClick = () => {
    setCurrentView('main');
    setActiveCategory(null);
  };

  return (
    <div className="relative" ref={menuRef}>
      {/* Explore Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 text-black font-semibold hover:text-gray-700 flex items-center gap-1"
      >
        Explore
        <ChevronRight 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-90' : ''}`}
        />
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          {currentView === 'main' ? (
            // Main Menu View
            services.map((section, sectionIndex) => (
              <div key={sectionIndex} className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-semibold text-gray-900">{section.title}</h3>
                  {sectionIndex === 0 && (
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
                      See all
                    </a>
                  )}
                </div>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <button
                        onClick={() => handleCategoryClick(item, itemIndex)}
                        className="w-full flex items-center justify-between px-2 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md group"
                      >
                        <span className="flex items-center gap-2">
                          {item.icon && <span>{item.icon}</span>}
                          <span>{item.label}</span>
                        </span>
                        {item.submenu && (
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            // Submenu View
            <div className="p-4">
              <button
                onClick={handleBackClick}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-4"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back to main menu</span>
              </button>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                {activeCategory?.label}
              </h3>
              <ul className="space-y-2">
                {activeCategory?.submenu.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="block px-2 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NavigationMenuAlt;