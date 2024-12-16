import React, { createContext } from 'react';
import Child from './Child.jsx';

// Step 1: Create Context
export const MyContext = createContext();

function App() {
  const myValue = "Hello from Context!";

  return (
    // Step 2: Provide Context Value
    <MyContext.Provider value={myValue}>
      <div>
        <h1>Parent Component (App)</h1>
        <Child />
      </div>
    </MyContext.Provider>
  );
}

export default App;
