"use client"

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    company: "PerfectServe",
    logo: "/path-to-perfectserve-logo.svg",
    quote: "If we didn't have Opensox...the quality of talent wouldn't be as easy to measure, and we wouldn't have the incredible support we get from the Opensox team.",
    person: "Jessica Khawaja, VP of People Operations",
    results: [
      { label: "11 days", description: "to post a job, hire, classify, and onboard selected talent" },
      { label: "Nearly Doubled", description: "the support hours for a project" },
    ],
    bgColor: "bg-blue-700",
  },
  {
    id: 2,
    company: "Microsoft",
    logo: "/path-to-microsoft-logo.svg",
    quote: "One of the advantages of utilizing freelancers is finding talent with different skills quickly as our needs change.",
    person: "Carol Taylor, Director of Content Experience",
    results: [
      { label: "50% Faster", description: "launch of projects" },
      { label: "10,000", description: "projects completed" },
    ],
    bgColor: "bg-blue-400",
  },
  {
    id: 3,
    company: "Startuply",
    logo: "/path-to-startuply-logo.svg",
    quote: "Opensox has been a game-changer for us. We needed specialized talent to scale our product, and Opensox delivered beyond our expectations.",
    person: "Ahmed Tanveer, Co-founder & CTO",
    results: [
      { label: "3 months", description: "to build an MVP with global-ready infrastructure" },
      { label: "80% Cost Reduction", description: "compared to hiring full-time engineers" },
    ],
    bgColor: "bg-blue-600",
  },
  {
    id: 4,
    company: "WellNest",
    logo: "/path-to-wellnest-logo.svg",
    quote: "We were impressed by the speed and professionalism of the freelancers we hired through Opensox. They became an essential part of our team.",
    person: "Maria Gonzalez, Head of Product",
    results: [
      { label: "6 weeks", description: "to develop a fully functional mobile app" },
      { label: "40% Faster", description: "project completion time compared to internal resources" },
    ],
    bgColor: "bg-purple-700",
  },
];

const TrustedSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(testimonials.length / 2);
  const containerRef = useRef(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const minSwipeDistance = 50;

  const slideLeft = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const slideRight = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const onTouchMove = (e) => {
    if (!isDragging) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    setIsDragging(false);
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      slideRight();
    } else if (isRightSwipe) {
      slideLeft();
    }
  };

  return (
    <div className="relative py-12">
      {/* <h2 className="text-3xl font-bold text-center mb-8">
        Trusted by leading <br /> brands and startups
      </h2> */}
      <h2 className="flex justify-center align-middle place-items-center px-5 text-center text-3xl font-bold text-gray-800 mb-12 font-sora">
      Trusted by leading <br /> brands and startups
        </h2>
      
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Navigation Arrows */}
        <button
          onClick={slideLeft}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-colors"
          aria-label="Previous testimonials"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={slideRight}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-colors"
          aria-label="Next testimonials"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slider Container */}
        <div 
          ref={containerRef}
          className="overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div key={pageIndex} className="w-full flex-none grid grid-cols-1 md:grid-cols-2 gap-6 px-3">
                {testimonials.slice(pageIndex * 2, pageIndex * 2 + 2).map(({ id, company, logo, quote, person, results, bgColor }) => (
                  <div
                    key={id}
                    className={`p-6 rounded-lg ${bgColor} text-white shadow-md`}
                  >
                    <div className="flex items-center mb-4">
                      {/* <img src={logo} alt={`${company} logo`} className="h-8 mr-4" /> */}
                      <h3 className="font-semibold text-lg">{company}</h3>
                    </div>
                    <p className="italic mb-4">{quote}</p>
                    <p className="font-bold">{person}</p>
                    <hr className="my-4 border-white/20" />
                    <div>
                      {results.map(({ label, description }) => (
                        <div key={label} className="mb-2">
                          <p className="font-semibold">{label}</p>
                          <p className="text-sm opacity-90">{description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedSection;