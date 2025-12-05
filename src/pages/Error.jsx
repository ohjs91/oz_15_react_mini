import React from 'react';

const Error = ({ error }) => {
  return (
    <div className="w-full h-full flex items-center justify-center fixed top-0 left-0">
      <div className="">{error}</div>
    </div>
  );
};

export default Error;
