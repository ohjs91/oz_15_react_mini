import React from 'react';

const Loading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center fixed top-0 left-0">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
