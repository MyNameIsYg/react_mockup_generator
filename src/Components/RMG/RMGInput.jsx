import React from 'react';
const RMGInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="border rounded px-2 py-1"
    />
  );
};
export default RMGInput;