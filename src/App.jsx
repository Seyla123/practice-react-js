import './App.css'
import { Button, CssBaseline,TextField } from '@mui/material'
import useCount from './hooks/use-count'
import WindowResizeTracker from './components/WindowResizeTracker'
import TimerComponent from './components/TimerComponent'
import MyComponent from './components/MyComponent'
import { MyProvider } from './contexts/MyContext';
import { useState, useCallback, useReducer } from 'react'
import ChildComponent from './components/ChildComponent'
import reducer from './hooks/useCounterReducer'


function App() {
  const init1 = ()=>{
    const storedCount = localStorage.getItem('count1');
    return storedCount ? parseInt(storedCount,10) : 0;
  }
// custom Hook
  const [count, increase1, discrease1,reset1] = useCount(init1(),'count1');
  const [count3, setCount] = useState(0);
  const [text, setText] = useState('');
// useCallback
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

// reducer
  const initialState = {count : 0};
  const [state,dispatch]= useReducer(reducer,initialState);
  const decrement = () => dispatch({ type : 'decrement'})
  const increment = () => dispatch({ type : 'increment'})

  const valueAdd = (e)=>{
    e.preventDefault() 
    const value = parseInt(document.getElementById('outlined-basic').value) || 0;
    dispatch({ type : 'value-add', payload : value})
  }
  const changeValue = (e)=>{
    e.preventDefault()  
    const value = parseInt(document.getElementById('outlined-basic').value) || 0;
    dispatch({ type : 'change-value', payload : value})
  } 
  return (
    <>
      <CssBaseline />
      <MyProvider>
        <MyComponent></MyComponent>
        <TimerComponent></TimerComponent>
      </MyProvider>
      <WindowResizeTracker></WindowResizeTracker>
      <div className='flex justify-center '>
        <div className='text-3xl font-bold m-2'>{count}</div>
      </div>
      <div className='m-2  space-x-2'>
        <Button variant="outlined" onClick={discrease1}>discrease</Button>
        <Button variant="contained" onClick={increase1}>Increase</Button>
        <Button variant='contained' color='error' onClick={reset1}>Reset</Button>
      </div>
      <div className='flex justify-center flex-col items-center'>
        <div className='text-3xl font-bold m-2'>{state.count}</div>
        <TextField id="outlined-basic"  label="Input Value" variant="outlined" />
      </div>
      <div className='m-2 space-x-2'>
        <Button variant="outlined" onClick={decrement}>discrease</Button>
        <Button variant="contained" onClick={increment}>Increase</Button>
        <Button variant="contained" onClick={valueAdd} >Increase Input</Button>
        <Button variant="contained" onClick={changeValue} >Change Value</Button>
        <Button variant='contained' color='error' onClick={() => dispatch({ type : 'reset'})}>Reset</Button>
      </div>
      <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => setCount(count3 + 1)}>Increment</button>
      <ChildComponent  onClick={handleClick} />
    </div>
    </>
  )
}

export default App;