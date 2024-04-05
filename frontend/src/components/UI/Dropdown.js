import React from 'react';

const Dropdown = ({ value, onChange, options, placeholder, className }) => {
    return (
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`block py-2 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 ${className}`}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  };
  

export default Dropdown;
