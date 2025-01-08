"use client"

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import MultiStepForm from './MultiStepForm'; 

const JobsCard = () => {
  const [isFormOpen, setIsFormOpen] = useState(false); // State to control form visibility

  const toggleForm = () => setIsFormOpen(prev => !prev);

  const availableServices = [
      {
        name: "Graphics & Design",
        description: "Bring your ideas to life with creative graphic designs, logos, and branding tailored to your vision.",
        image: "https://placehold.co/600x400/000000/FFFFFF/png",
      },
      {
        name: "Programming & Tech",
        description: "Build powerful applications, websites, and software solutions with expert programming services.",
        image: "https://placehold.co/600x400/000000/FFFFFF/png",
      },
      {
        name: "Digital Marketing",
        description: "Grow your online presence with targeted marketing strategies, social media campaigns, and SEO.",
        image: "https://placehold.co/600x400/000000/FFFFFF/png",
      },
      {
        name: "Video & Animation",
        description: "Create stunning videos and animations for your brand, including explainer videos and promotional content.",
        image: "https://placehold.co/600x400/000000/FFFFFF/png",
      },
      {
        name: "Writing & Translation",
        description: "Get high-quality content writing, editing, and translation services for all your communication needs.",
        image: "https://placehold.co/600x400/000000/FFFFFF/png",
      },
      {
        name: "Music & Audio",
        description: "Enhance your projects with professional audio production, music composition, and voice-over services.",
        image: "https://placehold.co/600x400/000000/FFFFFF/png",
      },
      {
        name: "Business",
        description: "Receive expert advice and support on business plans, market research, and operational strategies.",
        image: "https://placehold.co/600x400/000000/FFFFFF/png",
      },
      {
        name: "Finance",
        description: "Manage your finances effectively with services like financial planning, accounting, and tax consultancy.",
        image: "https://placehold.co/600x400/000000/FFFFFF/png",
      },
      {
        name: "AI Services",
        description: "Leverage cutting-edge AI solutions for automation, machine learning, and data analysis.",
        image: "https://placehold.co/600x400/000000/FFFFFF/png",
      },
    ];
      

  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const duplicatedServices = [...availableServices, ...availableServices, ...availableServices];
  const intervalRef = useRef(null);

  useEffect(() => {
    const startScrolling = () => {
      intervalRef.current = setInterval(() => {
        setScrollPosition((prevPosition) => {
          const newPosition = prevPosition + 1; // Scroll speed
          const containerWidth = availableServices.length * 400;
          return newPosition >= containerWidth ? 0 : newPosition;
        });
      }, 50);
    };

    if (!isPaused) {
      startScrolling();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, availableServices.length]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="mx-auto text-center">
        <h2 className="flex justify-center align-middle place-items-center px-5 text-center text-3xl font-bold text-gray-800 mb-12 font-sora">
          Jobs
        </h2>
        <div className="relative py-10 mt-32 mb-20">
          {/* Gradient background */}
          <div className="bg-gradient-to-tr from-blue-600 via-blue-500 to-blue600 max-w-[95%] md:max-w-[65%] h-[145%] w-full absolute -top-16 left-0 right-0 mx-auto rounded-3xl max-md:hidden" />
          
          {/* Scrolling container */}
          <div 
            className="relative z-10 overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              className={`flex gap-6 ${!isPaused ? 'transition-transform duration-100' : ''}`}
              style={{
                transform: `translateX(-${scrollPosition}px)`,
                width: 'fit-content'
              }}
            >
              {duplicatedServices.map((testimonial, index) => (
                <a href="#"
                  onClick={toggleForm} 
                  key={index}
                  className="flex-shrink-0 w-96 bg-gradient-to-r from-blue-100 via-white to-blue-100 px-6 py-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow "
                //   style={{
                //     backgroundImage: `url(${testimonial.image})`,
                //     backgroundSize: 'cover',
                //     backgroundPosition: 'center',
                //     backgroundRepeat: 'no-repeat',
                //   }}
                
                >
                  <div className="flex justify-between items-center gap-4 mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                     
                    </div>
                  </div>
                  <p className="text-gray-700 text-md">{testimonial.description}</p>
                  <div className='mt-12 float-end'>
                  <span className="bg-blue-600 px-4 py-2 text-white rounded-2xl text-sm">Available Online</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <MultiStepForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </section>
  );
};

export default JobsCard;
