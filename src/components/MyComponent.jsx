import React, { useContext } from 'react';
import MyContext from '../contexts/MyContext';

function MyComponent() {
  const {value , value2} = useContext(MyContext); // Access context value
  return <div>{value} and {value2}</div>;
}


export default MyComponent