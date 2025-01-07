'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Create a loader component
const MapLoader = () => (
  <div className="h-full w-full bg-gray-100 animate-pulse flex items-center justify-center">
    <p className="text-gray-500">Loading map...</p>
  </div>
);

// Dynamic import of the actual map component
const Map = dynamic(
  () => import('./Map'),
  { 
    ssr: false,
    loading: MapLoader
  }
);

// Client component wrapper
const ClientMap = ({ jobs, selectedJob, onMarkerClick }) => {
  return <Map jobs={jobs} selectedJob={selectedJob} onMarkerClick={onMarkerClick} />;
};

export default ClientMap;