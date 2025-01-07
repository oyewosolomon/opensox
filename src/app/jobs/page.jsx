"use client"

import React, { useState } from 'react';
import { Search, ChevronDown, Wifi, MapPin, X } from 'lucide-react';
import ClientMap from '../components/ClientMap';
import HeaderMenu from '../components/HeaderMenu'; // Import the HeaderMenu component


const JobBoard = () => {
  // Add selectedJob state
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedRemoteStatus, setSelectedRemoteStatus] = useState('All');
  const [isDepOpen, setIsDepOpen] = useState(false);
  const [isLocOpen, setIsLocOpen] = useState(false);
  const [isRemoteOpen, setIsRemoteOpen] = useState(false);

  // Rest of your component code remains the same...
  const jobs = [
    {
      id: 1,
      title: 'APAC - Customer Experience Agent (Walk-ins | Bengaluru)',
      department: 'Customer Experience',
      location: 'Bengaluru',
      coordinates: [12.9716, 77.5946],
      remote: false
    },
    {
      id: 2,
      title: 'Affiliate Manager',
      department: 'Marketing',
      location: 'Bengaluru',
      coordinates: [12.9716, 77.5946],
      remote: false
    },
    {
      id: 3,
      title: 'Business Development Representative',
      department: 'Sales',
      location: 'Melbourne',
      coordinates: [-37.8136, 144.9631],
      remote: true
    },
    {
      id: 4,
      title: 'Customer Experience Agent (German + English Speaking)',
      department: 'Customer Experience',
      location: 'London',
      coordinates: [51.5074, -0.1278],
      remote: true
    }
  ];

  // Get unique values from jobs array
  const departments = ['All', ...new Set(jobs.map(job => job.department))];
  const locations = ['All', ...new Set(jobs.map(job => job.location))];
  const remoteStatuses = ['All', 'Remote', 'On-site'];

  // Filter jobs based on selected filters
  const filteredJobs = jobs.filter(job => {
    const departmentMatch = selectedDepartment === 'All' || job.department === selectedDepartment;
    const locationMatch = selectedLocation === 'All' || job.location === selectedLocation;
    const remoteMatch = selectedRemoteStatus === 'All' || 
      (selectedRemoteStatus === 'Remote' && job.remote) || 
      (selectedRemoteStatus === 'On-site' && !job.remote);
    
    return departmentMatch && locationMatch && remoteMatch;
  });

  // Close dropdowns when clicking outside
  const closeDropdowns = (e) => {
    if (!e.target.closest('.dropdown-container')) {
      setIsDepOpen(false);
      setIsLocOpen(false);
      setIsRemoteOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', closeDropdowns);
    return () => document.removeEventListener('click', closeDropdowns);
  }, []);

  // Reset selectedJob when filters change if it's no longer in the filtered list
  React.useEffect(() => {
    if (selectedJob && !filteredJobs.find(job => job.id === selectedJob.id)) {
      setSelectedJob(null);
    }
  }, [filteredJobs, selectedJob]);

  const DropdownMenu = ({ 
    items, 
    isOpen, 
    setIsOpen, 
    selected, 
    setSelected, 
    buttonText 
  }) => (
    <div className="relative dropdown-container">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className={`flex items-center gap-2 border rounded-lg px-4 py-2 whitespace-nowrap ${
          selected !== 'All' ? 'border-blue-500 bg-blue-50' : ''
        }`}
      >
        <span className="flex items-center gap-2">
          {buttonText}
          {selected !== 'All' && (
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full">
              {selected}
            </span>
          )}
        </span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute z-50 mt-2 w-64 rounded-lg bg-white shadow-lg border">
          <div className="p-2">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium text-gray-900">{buttonText}</h3>
              {selected !== 'All' && (
                <button
                  onClick={() => {
                    setSelected('All');
                    setIsOpen(false);
                  }}
                  className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1"
                >
                  Clear <X className="w-3 h-3" />
                </button>
              )}
            </div>
            <div className="space-y-1">
              {items.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setSelected(item);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                    selected === item
                      ? 'bg-blue-50 text-blue-700'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <HeaderMenu />

      {/* Search Bar */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto p-4 z-[1055] flex gap-4 overflow-x-auto overflow-y-hidden">
          <div className="flex-1 flex items-center border rounded-lg px-4 py-2">
            <Search className="text-gray-400 w-5 md:w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none"
            />
          </div>
          
          <DropdownMenu
            items={departments}
            isOpen={isDepOpen}
            setIsOpen={setIsDepOpen}
            selected={selectedDepartment}
            setSelected={setSelectedDepartment}
            buttonText="Departments"
          />
          
          <DropdownMenu
            items={locations}
            isOpen={isLocOpen}
            setIsOpen={setIsLocOpen}
            selected={selectedLocation}
            setSelected={setSelectedLocation}
            buttonText="Locations (Map area)"
          />
          
          <DropdownMenu
            items={remoteStatuses}
            isOpen={isRemoteOpen}
            setIsOpen={setIsRemoteOpen}
            selected={selectedRemoteStatus}
            setSelected={setSelectedRemoteStatus}
            buttonText="Remote Statuses"
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-4 flex flex-col-reverse md:flex-row gap-4">
      {/* Job Listings */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-lg font-medium text-gray-900">
            {filteredJobs.length} jobs <span className="text-gray-500">(out of {jobs.length})</span>
          </h2>
          
          {filteredJobs.map((job) => (
            <button
              key={job.id}
              onClick={() => setSelectedJob(job)}
              className={`w-full text-left p-4 rounded-lg border ${
                selectedJob?.id === job.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'
              }`}
            >
              <h3 className="text-blue-600 font-medium mb-2">{job.title}</h3>
              <div className="flex items-center gap-4 text-gray-600">
                <span>{job.department}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {job.location}
                </div>
                {job.remote && (
                  <>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Wifi className="w-4 h-4" />
                      Remote
                    </div>
                  </>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Map */}
        <div className="w-full md:w-1/2 bg-white rounded-lg border h-[calc(100vh-200px)] overflow-hidden z-0">
        <ClientMap 
            jobs={filteredJobs} 
            selectedJob={selectedJob} 
            onMarkerClick={setSelectedJob} 
          />
        </div>
      </main>
    </div>
  );
};

export default JobBoard;