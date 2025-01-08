"use client"

import Image from 'next/image';
import { useState } from 'react';
import MultiStepForm from './MultiStepForm'; 


export default function ForClient() {
  const [isFormOpen, setIsFormOpen] = useState(false); // State to control form visibility

  const toggleForm = () => setIsFormOpen(prev => !prev);
  const handleFormClose = () => {
    console.log('The form was closed');
  };

  return (
    <div className=" h-screen overflow-hidden" id='forclient'>
        <div className='relative max-w-6xl mx-auto my-10 pb-10 pt-10 h-[600px] rounded-xl'>
            {/* Background image */}
            <div className="absolute inset-0 -z-10  rounded-xl">
                <Image
                src="/business-man.jpg" // replace with your actual image path
                alt="Background"
                layout="fill"
                objectFit="cover"
                quality={100}
                className=' rounded-xl'
                />
            </div>

            {/* Content Section */}
            <div className="container mx-auto h-full flex flex-col justify-between px-8 text-white">
                <p className="text-lg mb-4">For clients</p>
                <h1 className="text-5xl font-bold mb-6">
                Discover talent <br/>
                as you want it.
                </h1>
                <p className="text-lg max-w-lg mb-8">
                Get things done, from speedy turnarounds to significant transformations, by collaborating with the biggest network of independent specialists.
                </p>

                {/* Action Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card
                    title="Describe your task and hire a pro"
                    description="Talent Box"
                    onClick={toggleForm} 
                  
                />
                </div>
            </div>
        </div>
        {/* {isFormOpen && <MultiStepForm onClose={handleFormClose} />} */}
        <MultiStepForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </div>
  );
}
function Card({ title, description, onClick }) {
  return (
    <div
      className="block bg-blue-600 text-white p-6 rounded-lg hover:bg-blue-700 transition cursor-pointer"
      onClick={onClick} // Call the onClick function when the card is clicked
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p>{description} →</p>
    </div>
  );
}
