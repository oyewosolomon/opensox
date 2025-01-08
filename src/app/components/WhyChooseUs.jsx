"use client"

import { FaUsers, FaCheckCircle, FaShieldAlt, FaHandshake } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function WhyChooseOpensox() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("why-choose-opensox");
      if (section && window.scrollY + window.innerHeight > section.offsetTop + 100) {
        setShow(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const features = [
    {
      title: "Broad Talent Pool",
      description:
        "Access a diverse range of professionals across various industries, from tech to craftsmanship.",
      icon: <FaUsers className="text-4xl text-blue-500" />,
    },
    {
      title: "Simplified Hiring Process",
      description:
        "No more lengthy searches—Opensox connects you with verified experts quickly.",
      icon: <FaCheckCircle className="text-4xl text-blue-500" />,
    },
    {
      title: "Built on Trust",
      description:
        "Our platform ensures secure communication, verified profiles, and transparent reviews.",
      icon: <FaShieldAlt className="text-4xl text-blue-500" />,
    },
    {
      title: "Flexible Opportunities",
      description:
        "Whether you’re hiring for a one-time project or looking for long-term collaborators, Opensox adapts to your needs.",
      icon: <FaHandshake className="text-4xl text-blue-500" />,
    },
  ];

  return (
    <section id="why-choose-opensox" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Why Choose Opensox?</h2>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-opacity duration-1000 ${
            show ? "opacity-100" : "opacity-0"
          }`}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
