import React from 'react';
const FormInput = ({
  label,
  id,
  type = 'text',
  placeholder,
  required,
  value,
  onChange,
  vali,
}) => {
  return (
    <div>
      <label htmlFor={id} className="text-gray-700 font-semibold text-lg">
        {label}
      </label>

      <input
        type={type}
        id={id}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className="form_input mt-2"
      />
      {vali && <p className="text-red-500 text-xs mt-1 mb-0">{vali}</p>}
    </div>
  );
};

export default FormInput;
