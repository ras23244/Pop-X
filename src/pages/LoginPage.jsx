import React, { useState } from 'react';

const LoginPage = () => {
    const [formData, setFormData] = useState({
      email: '',
      password: ''
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
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Signin to your PopX account</h1>

            <p className="text-gray-500 mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex fuga vel doloremque.</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
           
  
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
  
            <button
              type="submit"
              className="w-full bg-gray-600 text-white py-3 rounded-md hover:bg-purple-700 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default LoginPage;