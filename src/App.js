import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [count, setCount] = useState(4);
  function incrementCount(){
    setCount(count+=1)
  }
  function decrementCount(){
    setCount(count-=1)
  }
  function reset(){
    setCount(count=0)
  }
  return (
    <div className="App">
      <button onClick = {decrementCount} >-</button>
      <h1>{count}</h1>
      <button onClick = {incrementCount}>+</button>
      <button className = 'reset' onClick = {reset}>Reset</button>
    </div>
  );
}



export default App;
