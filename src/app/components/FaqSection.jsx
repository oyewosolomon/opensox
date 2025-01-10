// components/FAQSection.jsx
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQSection = () => {
  const faqs = [
    {
      question: "Do I get the customer’s phone number or email address?",
      answer: "Yes, once you purchase the contact details, you'll get both."
    },
    {
      question: "Are follow-up messages extra?",
      answer: "No, follow-up messages are included in your initial contact."
    },
    {
      question: "Do Opensox credits expire?",
      answer: "Yes, Opensox credits expire after 12 months."
    },
    {
      question: "Are there any hidden costs?",
      answer: "No, there are no hidden costs."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-6 py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-blue-600 text-center mb-10">FAQs</h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200 pb-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">{faq.question}</h3>
              {openIndex === index ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-20 text-center mb-14">
        <h3 className="text-4xl font-semibold text-blue-600 mb-4">
          Start building <br /> new  business today
        </h3>
        <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700">
          Join as a Professional
        </button>
        <p className="mt-2">
          <a href="/login" className="text-blue-600 underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default FAQSection;
