import React from 'react';

const ChildComponent = React.memo(({ onClick }) => {
  console.log('Child component rendered');
  return (
    <button onClick={onClick}>Click me</button>
  );
});

export default ChildComponent;
