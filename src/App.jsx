import React from "react";
import {
  decrement,
  increment,
  reset,
} from "./redux/actions/action.counter";
import { useSelector, useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => {
    return state.counterReducer;
  })

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>
        Hello World <br /> Counter App using Redux. YaaY!
      </h1>
      <h1>Counter</h1>
      <h1>{counter}</h1>
      <button style={{
        margin: '20px',
        padding: '5px',
        width: '50px'
      }} onClick={() => dispatch(increment())}>+</button>
      <button style={{
        margin: '20px',
        padding: '5px',
        width: '50px'
      }} onClick={() => dispatch(decrement())}>-</button>
      <button style={{
        margin: '20px',
        padding: '5px',
        width: '50px'
      }} onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}


export default App;