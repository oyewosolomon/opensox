"use client"

import { FaClipboardList, FaQuoteRight, FaUserCheck, FaCheckCircle } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function HowItWorks() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("how-it-works");
      if (section && window.scrollY + window.innerHeight > section.offsetTop + 100) {
        setShow(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const steps = [
    {
      title: "Post Your Need",
      description: "Describe your task, project, or service requirement.",
      icon: <FaClipboardList className="text-4xl text-blue-500" />,
    },
    {
      title: "Receive Quotes",
      description: "Get competitive quotes from verified professionals.",
      icon: <FaQuoteRight className="text-4xl text-blue-500" />,
    },
    {
      title: "Hire the Best",
      description: "Choose the expert that best fits your needs and budget.",
      icon: <FaUserCheck className="text-4xl text-blue-500" />,
    },
    {
      title: "Get the Job Done",
      description: "Seamlessly collaborate and complete your project.",
      icon: <FaCheckCircle className="text-4xl text-blue-500" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p className="text-lg text-gray-700 mb-10">
          A Marketplace Built for Simplicity and Success
        </p>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-opacity duration-1000 ${
            show ? "opacity-100" : "opacity-0"
          }`}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
