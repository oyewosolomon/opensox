"use client"

import React, { useState } from 'react';
import { X } from 'lucide-react';

const OnboardingForm = ({isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [isFormVisible, setIsFormVisible] = useState(false); // State to control form visibility
  const [showClosePrompt, setShowClosePrompt] = useState(false); // State to control the close confirmation prompt
  const [formData, setFormData] = useState({
    designType: '',
    websiteNeeds: [],
    otherNeeds: '',
    contactDetails: {
      name: '',
      email: '',
      phone: ''
    }
  });

  const totalSteps = 3;

  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsFormVisible(false); // Hide form after submission
    onClose(); // Call onClose when the form is submitted
  };

  const handleClose = () => {
    setShowClosePrompt(true); // Show close confirmation prompt
  };

  const confirmClose = () => {
    setShowClosePrompt(false);
    setIsFormVisible(false); // Close the form
    setStep(1); // Reset the form step
    onClose(); // Call onClose to notify the parent
  };

  const ProgressBar = () => (
    <div className="w-full bg-gray-200 h-2 rounded-full mb-8">
      <div
        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
        style={{ width: `${(step / totalSteps) * 100}%` }}
      />
    </div>
  );

  if (!isOpen) return null;

  return (
    <>
      {/* Button to open the form */}

      {/* Form Modal */}
     
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
            <div className='flex place-items-center flex-col'>
                <div className='pb-5 items-center'>
                    <button
                    className="right-4 top-4 text-gray-500 hover:text-gray-700"
                    onClick={handleClose}
                    >
                    <X size={24} />
                    </button>
                </div>
                <ProgressBar />
            </div>
            {/* Step 1 */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  What is your web design requirement?
                </h2>
                <p className="text-gray-600 mb-6">Once selected, please click 'continue'</p>
            
                <div className="grid grid-cols-2 gap-4">
                <button
                    className={`p-6 border rounded-lg flex flex-col items-center justify-center space-y-4 transition-all
                    ${formData.designType === 'new' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-200'}`}
                    onClick={() => updateFormData('designType', 'new')}
                >
                    <div className="w-16 h-16 flex items-center justify-center">
                    {/* Laptop with gear icon */}
                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <rect x="2" y="3" width="20" height="14" rx="2" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                    </div>
                    <span className="text-center font-medium">Create a new website</span>
                </button>

                <button
                    className={`p-6 border rounded-lg flex flex-col items-center justify-center space-y-4 transition-all
                    ${formData.designType === 'modify' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-200'}`}
                    onClick={() => updateFormData('designType', 'modify')}
                >
                    <div className="w-16 h-16 flex items-center justify-center">
                    {/* Browser with gear icon */}
                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="12" cy="12" r="3" />
                    </svg>
                    </div>
                    <span className="text-center font-medium">Make changes to my current website</span>
                </button>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
                <div>
                    <h2 className="text-2xl font-semibold mb-6">
                    What are your website needs?
                    </h2>
                    
                    <div className="space-y-4">
                        <label className="flex items-center space-x-3">
                            <input
                            type="checkbox"
                            className="w-5 h-5 rounded border-gray-300 text-blue-600"
                            checked={formData.websiteNeeds.includes('advertise')}
                            onChange={(e) => {
                                const needs = e.target.checked 
                                ? [...formData.websiteNeeds, 'advertise']
                                : formData.websiteNeeds.filter(need => need !== 'advertise');
                                updateFormData('websiteNeeds', needs);
                            }}
                            />
                            <span>To advertise my business/services</span>
                        </label>

                        <label className="flex items-center space-x-3">
                            <input
                            type="checkbox"
                            className="w-5 h-5 rounded border-gray-300 text-blue-600"
                            checked={formData.websiteNeeds.includes('ecommerce')}
                            onChange={(e) => {
                                const needs = e.target.checked 
                                ? [...formData.websiteNeeds, 'ecommerce']
                                : formData.websiteNeeds.filter(need => need !== 'ecommerce');
                                updateFormData('websiteNeeds', needs);
                            }}
                            />
                            <span>To sell products/services e.g. e-commerce</span>
                        </label>

                        <div className="mt-4">
                            <label className="flex items-center space-x-3">
                            <input
                                type="checkbox"
                                className="w-5 h-5 rounded border-gray-300 text-blue-600"
                                checked={formData.websiteNeeds.includes('other')}
                                onChange={(e) => {
                                const needs = e.target.checked 
                                    ? [...formData.websiteNeeds, 'other']
                                    : formData.websiteNeeds.filter(need => need !== 'other');
                                updateFormData('websiteNeeds', needs);
                                }}
                            />
                            <span>Other</span>
                            </label>
                            
                            {formData.websiteNeeds.includes('other') && (
                            <input
                                type="text"
                                className="mt-2 w-full p-2 border rounded-md"
                                placeholder="Please specify"
                                value={formData.otherNeeds}
                                onChange={(e) => updateFormData('otherNeeds', e.target.value)}
                            />
                            )}
                        </div>
                    </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
                <div>
                    <h2 className="text-2xl font-semibold mb-6">
                    Contact Information
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                            </label>
                            <input
                            type="text"
                            className="w-full p-2 border rounded-md"
                            value={formData.contactDetails.name}
                            onChange={(e) => setFormData(prev => ({
                                ...prev,
                                contactDetails: {
                                ...prev.contactDetails,
                                name: e.target.value
                                }
                            }))}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                            </label>
                            <input
                            type="email"
                            className="w-full p-2 border rounded-md"
                            value={formData.contactDetails.email}
                            onChange={(e) => setFormData(prev => ({
                                ...prev,
                                contactDetails: {
                                ...prev.contactDetails,
                                email: e.target.value
                                }
                            }))}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                            </label>
                            <input
                            type="tel"
                            className="w-full p-2 border rounded-md"
                            value={formData.contactDetails.phone}
                            onChange={(e) => setFormData(prev => ({
                                ...prev,
                                contactDetails: {
                                ...prev.contactDetails,
                                phone: e.target.value
                                }
                            }))}
                            />
                        </div>
                    </div>
                </div>
            )}

            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <button
                  className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                  onClick={() => setStep(prev => prev - 1)}
                >
                  Back
                </button>
              )}

              <button
                className="ml-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                onClick={() => {
                  if (step === totalSteps) {
                    handleSubmit();
                  } else {
                    setStep(prev => prev + 1);
                  }
                }}
              >
                {step === totalSteps ? 'Submit' : 'Continue'}
              </button>
            </div>
          </div>
        </div>


      {/* Close Confirmation Prompt */}
      {showClosePrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-sm p-6">
            <h2 className="text-lg font-semibold mb-4">
            Are you sure that you want to leave?
            </h2>
            <p className='mb-5'>
            
            We're asking a few questions so we can find you the right pros, and send you quotes fast and free!
            </p>
            <div className="flex justify-between space-x-4">
              <button
                className="px-4 py-2 border bg-blue-600 text-white border-gray-300 rounded-md hover:bg-blue-500"
                onClick={() => setShowClosePrompt(false)}
              >
                Continue
              </button>
              <button
                className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                onClick={confirmClose}
              >
                Quit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OnboardingForm;
