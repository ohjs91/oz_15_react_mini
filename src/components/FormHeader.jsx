import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
const FormHeader = ({ title }) => {
  return (
    <div className="mb-12 relative text-center">
      <Link to="/">
        <FaArrowLeft
          size={26}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black transition"
        />
      </Link>
      <h1 className="text-4xl font-bold">{title}</h1>
    </div>
  );
};

export default FormHeader;
