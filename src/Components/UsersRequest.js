// UsersRequest.js
import React, { useState } from 'react';

const UsersRequest = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    // Call the onSubmit prop with the input value
    onSubmit(value);
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="border rounded px-2 py-1"
      />
      <button
        onClick={handleClick}
        className="bg-black text-white py-2 px-4 rounded hover:bg-opacity-90 focus:outline-none"
      >
        Click me
      </button>
    </div>
  );
};

export default UsersRequest;
