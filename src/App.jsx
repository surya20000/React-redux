import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { listSelector } from './reducer/reducer';
import { listAction } from './reducer/reducer';
function App() {
  const dispatch = useDispatch();
  const count = useSelector(listSelector)
    return (
      <>
        <h1>{count}</h1>
        <button onClick={() => dispatch(listAction.increment())}>Like</button>
        <button onClick={() => dispatch(listAction.decrement())}>Unlike</button>
      </>
    )
  }
  
  export default App
