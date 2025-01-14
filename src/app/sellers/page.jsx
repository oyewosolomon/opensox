"use client"

import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Upload, Mail, Lock } from 'lucide-react';
import NavigationAlt from '../components/NavigationAlt';
import Footer from '../components/Footer';
import ProfileMenu from '../components/ProfileMenu';

const ProfileSetup = () => {
  const [step, setStep] = useState(1);
  const [completionRate, setCompletionRate] = useState(0);
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: '',
    lastName: '',
    displayName: '',
    profilePicture: null,
    description: '',
    languages: [],
    
    // Professional Info
    profession: '',
    expertise: '',
    yearsOfExperience: '',
    education: '',
    certifications: [],
    skills: [],
    portfolio: [],
    linkedIn: '',
    
    // Account Security
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    twoFactorEnabled: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateCompletionRate = () => {
    const fields = {
      1: ['firstName', 'lastName', 'displayName', 'description', 'addLanguage'],
      2: ['profession', 'expertise', 'yearsOfExperience', 'skills'],
      3: ['email', 'password', 'confirmPassword']
    };

    let completedFields = 0;
    let totalFields = 0;

    Object.values(fields).forEach(stepFields => {
      stepFields.forEach(field => {
        totalFields++;
        if (formData[field] && formData[field].length > 0) {
          completedFields++;
        }
      });
    });

    return Math.round((completedFields / totalFields) * 100);
  };

  useEffect(() => {
    const rate = calculateCompletionRate();
    setCompletionRate(rate);
  }, [formData]);

  const steps = [
    { id: 1, name: 'Personal Info' },
    { id: 2, name: 'Professional Info' },
    { id: 3, name: 'Account Security' }
  ];

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      {/* Existing Personal Info fields */}
      <p className="text-gray-600 mb-8">
          Tell us a bit about yourself. This information will appear on your public profile,
          so that potential buyers can get to know you better.
        </p>

        <div className="space-y-6">
          {/* Full Name */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="First Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Last Name"
              />
            </div>
          </div>

          {/* Display Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Display Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="displayName"
              value={formData.displayName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your display name"
            />
          </div>

          {/* Profile Picture */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Profile Picture <span className="text-red-500">*</span>
            </label>
            <div className="mt-1 w-50 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-full p-6">
              <div className="text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="mt-4">
                  <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Upload Photo
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Share a bit about your work experience, cool projects you've completed, and your area of expertise."
            />
            <p className="text-sm text-gray-500 mt-1">min. 150 characters</p>
          </div>

          {/* Languages */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Languages <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-4">
              <select name='language' className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select language</option>
              </select>
              <select className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select level</option>
              </select>
              <button 
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
               
              >
                Add
              </button>
            </div>
          </div>
        </div>
      {/* Rest of personal info fields as before */}
    </div>
  );

  const renderProfessionalInfo = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Profession <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="profession"
          value={formData.profession}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g., Software Developer"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Area of Expertise <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="expertise"
          value={formData.expertise}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g., Frontend Development"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Years of Experience <span className="text-red-500">*</span>
        </label>
        <select
          name="yearsOfExperience"
          value={formData.yearsOfExperience}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select experience</option>
          <option value="0-2">0-2 years</option>
          <option value="3-5">3-5 years</option>
          <option value="5-10">5-10 years</option>
          <option value="10+">10+ years</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Skills <span className="text-red-500">*</span>
        </label>
        <div className="flex gap-2 flex-wrap mb-2">
          {formData.skills.map((skill, index) => (
            <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
        <input
          type="text"
          placeholder="Add skills (press Enter to add)"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && e.target.value) {
              e.preventDefault();
              setFormData(prev => ({
                ...prev,
                skills: [...prev.skills, e.target.value]
              }));
              e.target.value = '';
            }
          }}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          LinkedIn Profile
        </label>
        <input
          type="url"
          name="linkedIn"
          value={formData.linkedIn}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="https://linkedin.com/in/yourprofile"
        />
      </div>
    </div>
  );

  const renderAccountSecurity = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Address <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="your@email.com"
          />
          <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Confirm Password <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="twoFactor"
          name="twoFactorEnabled"
          checked={formData.twoFactorEnabled}
          onChange={(e) => handleInputChange({
            target: {
              name: 'twoFactorEnabled',
              value: e.target.checked
            }
          })}
          className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="twoFactor" className="text-sm text-gray-700">
          Enable two-factor authentication
        </label>
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return renderPersonalInfo();
      case 2:
        return renderProfessionalInfo();
      case 3:
        return renderAccountSecurity();
      default:
        return null;
    }
  };

  const getStepTitle = () => {
    switch (step) {
      case 1:
        return "Personal Info";
      case 2:
        return "Professional Info";
      case 3:
        return "Account Security";
      default:
        return "";
    }
  };

  const ProgressSection = ({ steps, currentStep, completionRate }) => {
    return (
      <div className="mb-8">
        {/* Desktop Progress Steps */}
        <div className="hidden md:flex items-center justify-between mb-2">
          {steps.map((s, idx) => (
            <div key={s.id} className="flex items-center">
              <div className={`flex items-center justify-center h-8 w-8 rounded-full
                ${currentStep >= s.id ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
                {s.id}
              </div>
              <div className={`ml-2 text-sm ${currentStep >= s.id ? 'text-gray-900' : 'text-gray-500'}`}>
                {s.name}
              </div>
              {idx < steps.length - 1 && (
                <div className="mx-4 h-0.5 w-16 bg-gray-200"></div>
              )}
            </div>
          ))}
        </div>
  
        {/* Mobile Progress Steps */}
        <div className="md:hidden">
          <div className="flex items-center justify-center mb-4">
            {steps.map((s, idx) => (
              <div key={s.id} className="flex items-center">
                <div 
                  className={`flex items-center justify-center h-6 w-6 sm:h-7 sm:w-7 rounded-full text-xs sm:text-sm
                    ${currentStep >= s.id ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
                >
                  {s.id}
                </div>
                {idx < steps.length - 1 && (
                  <div className="mx-2 sm:mx-3 h-0.5 w-8 sm:w-12 bg-gray-200"></div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center text-sm mb-4">
            {steps.find(s => s.id === currentStep)?.name}
          </div>
        </div>
  
        {/* Completion Rate - Same for both mobile and desktop */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">
            Completion Rate: {completionRate}%
          </span>
        </div>
        <div className="overflow-hidden rounded-full bg-gray-200">
          <div 
            className="h-2 rounded-full bg-green-500 transition-all duration-500"
            style={{ width: `${completionRate}%` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <>
   <div className="flex gap-4">
      <NavigationAlt />
      {/* Add your search field here */}
       
    </div>
    <div className="max-w-4xl mt-20 mx-auto p-6">
      {/* Progress Section */}
       {/* Progress Section as a separate component */}
       <ProgressSection 
        steps={steps} 
        currentStep={step} 
        completionRate={completionRate} 
      />

      {/* Form Content */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-6">{getStepTitle()}</h2>
        {renderStepContent()}

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <button
            onClick={() => setStep(Math.max(1, step - 1))}
            className={`flex items-center px-4 py-2 text-gray-700 hover:text-gray-900 ${
              step === 1 ? 'invisible' : ''
            }`}
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back
          </button>
          <button
            onClick={() => {
              if (step === steps.length) {
                // Handle form submission
                console.log('Form submitted:', formData);
              } else {
                setStep(Math.min(steps.length, step + 1));
              }
            }}
            className="flex items-center px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            {step === steps.length ? 'Complete Setup' : 'Continue'}
            {step !== steps.length && <ChevronRight className="w-5 h-5 ml-1" />}
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ProfileSetup;