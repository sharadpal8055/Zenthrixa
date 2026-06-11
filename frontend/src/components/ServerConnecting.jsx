import React from "react";

const ServerConnecting = () => {
  return (
   <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center">
  <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-md">
    
    <div className="w-16 h-16 mx-auto border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>

    <h1 className="mt-6 text-3xl font-bold text-gray-900">
      Zenthrixa
    </h1>

    <p className="mt-3 text-gray-600">
      Connecting to our servers...
    </p>

    <p className="text-sm text-gray-400 mt-2">
      First visit may take a few seconds.
    </p>
  </div>
</div>
  );
};

export default ServerConnecting;