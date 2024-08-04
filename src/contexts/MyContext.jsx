import React, { createContext } from 'react';

// Create a Context with a default value
const MyContext = createContext();

export function MyProvider({ children }) {
    const value = "Hello, World!"; // Context value
    const value2 = "Hello, Universe!"; // Another context value
    return (
      <MyContext.Provider value={{
        value,
        value2
      }}>
        {children}
      </MyContext.Provider>
    );
  }
  
export default MyContext;