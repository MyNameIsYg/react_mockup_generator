import React from 'react';
const RMGButton = ({ title, onClick }) => {
  return (
    React.createElement('button', {
      onClick: onClick,
      className: 'bg-black text-white py-2 px-4 rounded hover:bg-opacity-90 focus:outline-none'
    }, title)
  );
};
export default RMGButton;