import React, { useState } from 'react';

const SignupPage = () => {
    const [formData, setFormData] = useState({
      fullName: '',
      phoneNumber: '',
      email: '',
      password: '',
      companyName: '',
      isAgency: 'yes'
    });
  
    const handleInputChange = (e) => {
      const { name, value, type } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: type === 'radio' ? e.target.value : value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
    };
  
    return (
      <div className="min-h-screen bg-white p-4 md:p-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Create your PopX account</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-purple-600">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
  
            <div className="space-y-2">
              <label className="block text-sm font-medium text-purple-600">
                Phone number<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
  
            <div className="space-y-2">
              <label className="block text-sm font-medium text-purple-600">
                Email address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
  
            <div className="space-y-2">
              <label className="block text-sm font-medium text-purple-600">
                Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
  
            <div className="space-y-2">
              <label className="block text-sm font-medium text-purple-600">
                Company name
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Enter your company name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
  
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-900">
                Are you an Agency?<span className="text-red-500">*</span>
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="isAgency"
                    value="yes"
                    checked={formData.isAgency === 'yes'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-900">Yes</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="isAgency"
                    value="no"
                    checked={formData.isAgency === 'no'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-900">No</span>
                </label>
              </div>
            </div>
  
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-colors"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default SignupPage;