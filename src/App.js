// App.js
import React, { useState } from 'react';
import UsersRequest from './Components/UsersRequest';
import generateLayoutFromDescription from './Api Call/RequestToGPT';
import DynamicComponent from './Components/DynamicComponent';

function App() {
  const [result, setResult] = useState('');
  const handleUserRequest = async (description) => {
    try {
      const layout = await generateLayoutFromDescription(description);
      setResult(layout);
      // Handle the layout object as needed
    } catch (error) {
      console.error('Error:', error);
      // Handle errors
    }
  };

  return (
    <div>
      <UsersRequest onSubmit={handleUserRequest} />
      <div style={{ backgroundColor: '#f1f1f1', padding: '10px', borderRadius: '5px' }}>
        <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>{result}</pre>
      </div>
      {/* <DynamicComponent /> */}
    </div>
  );
}

export default App;
