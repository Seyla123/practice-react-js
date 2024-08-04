import { useState, useEffect } from 'react';

function useCount(initalValue, storedStorage) {
    const [count, setCount] = useState(initalValue);
    useEffect(()=>{
        localStorage.setItem(storedStorage, count)
    },[count])
    const increase = ()=>{
        setCount(count+1)
    }
    const discrease = ()=>{
        setCount(count-1)
    }
    const reset = () =>{
        setCount(0)
        localStorage.removeItem(storedStorage)
    }
    return [count, increase, discrease,reset]
}

export default useCount;