import React from 'react';
import RMGImage from './RMG/RMGImage';
import RMGText from './RMG/RMGText';
import RMGButton from './RMG/RMGButton';
const DynamicComponent = (data) => {
  return (
    <div className="flex items-center">
      <div className="mr-4">
        <RMGImage src='path to your image' alt="Profile Picture" />
      </div>
      <div>
        <RMGText text='john' fontSize="lg" fontWeight="bold" />
        <RMGButton title="Follow" onClick={(e)=>console.log("clicked")} />
      </div>
    </div>
  );
};
export default DynamicComponent;