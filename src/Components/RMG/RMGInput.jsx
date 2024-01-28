// RMGInput.js
import React from 'react';

const RMGInput = ({ children, title }) => {
    return <input placeholder={title}>{children}</input>;
};

export default RMGInput;
