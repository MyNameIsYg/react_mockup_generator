import React from 'react';
const RMGText = ({ text, fontSize, fontWeight }) => {
  return (
    <p className={`text-${fontSize} font-${fontWeight}`}>
      {text}
    </p>
  );
};
export default RMGText;