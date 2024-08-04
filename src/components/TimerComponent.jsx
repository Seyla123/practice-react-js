import React, { useState, useEffect, useContext } from 'react';
import MyContext from '../contexts/MyContext';

function TimerComponent() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000); // Increment seconds every second

    // Cleanup function to clear the interval
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array, runs once when mounted
  const {value2} = useContext(MyContext);
  return (
    <div>
    <h2> hello :{value2}</h2>
      <h4>Seconds Elapsed: {seconds}</h4>
    </div>
  );
}

export default TimerComponent;
