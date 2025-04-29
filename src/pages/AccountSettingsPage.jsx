import React from 'react';

const AccountSettingsPage=() => {
  return (
    <div className="min-h-screen bg-gray-50 max-w-md mx-auto">
      <div className="px-4 py-6">
        <h1 className="text-xl font-medium text-gray-900 mb-6">Account Settings</h1>
        
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="absolute -bottom-1 -right-1 bg-purple-600 rounded-full w-6 h-6 flex items-center justify-center">
                <span className="text-white text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l3-3h12l3 3M4 8v10a2 2 0 002 2h12a2 2 0 002-2V8M12 12a4 4 0 100-8 4 4 0 000 8z" />
                  </svg>
                </span>
              </div>
            </div>
            
            <div>
              <h2 className="text-lg font-medium text-gray-900">Marry Doe</h2>
              <p className="text-gray-600">Marry@Gmail.Com</p>
            </div>
          </div>
          
          <p className="mt-6 text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nirmod tempor invidunt ut labore et dolore magna aliquam erat. Sed diam
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsPage;