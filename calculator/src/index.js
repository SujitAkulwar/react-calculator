import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react";
import './App.css';

const Header = () => {
  const [val, setVal] = useState("");
  
  const backspace = () => {
    try{
      setVal(val.slice(0, -1))
    }catch(error){
      setVal("")
    }
  }
  const calculate = () => {
    try{
      setVal(eval(val));
    }catch(error){
      setVal("error")
    }
  }
  return (
    <>
      <h1>Calculator</h1>
      <div id='container'>
        <div>
          <input type="text" id="inputss" name="" placeholder="" value={val} onChange={(e) => setVal(e.target.value)}/>
        </div>
        <div id='row'>
          <button id='col' value={1} onClick={(e) => setVal(val + e.target.value)}>1</button>
          <button id='col' value={2} onClick={(e) => setVal(val + e.target.value)}>2</button>
          <button id='col' value={3} onClick={(e) => setVal(val + e.target.value)}>3</button>
          <button id='col' value="c" onClick={() => backspace()}>c</button>
        </div>
        <div id='row'>
          <button id='col' value={4} onClick={(e) => setVal(val + e.target.value)}>4</button>
          <button id='col' value={5} onClick={(e) => setVal(val + e.target.value)}>5</button>
          <button id='col' value={6} onClick={(e) => setVal(val + e.target.value)}>6</button>
          <button id='col' value="+" onClick={(e) => setVal(val + e.target.value)}>+</button>
        </div>
        <div id='row'>
          <button id='col' value={7} onClick={(e) => setVal(val + e.target.value)}>7</button>
          <button id='col' value={8} onClick={(e) => setVal(val + e.target.value)}>8</button>
          <button id='col' value={9} onClick={(e) => setVal(val + e.target.value)}>9</button>
          <button id='col' value="-" onClick={(e) => setVal(val + e.target.value)}>-</button>
        </div>
        <div id='row'>
          <button id='col2' value="." onClick={(e) => setVal(val + e.target.value)}>.</button>
          <button id='col2' value={0} onClick={(e) => setVal(val + e.target.value)}>0</button>
          <button id='col2' value="*" onClick={(e) => setVal(val + e.target.value)}>x</button>
          <button id='col2' value="/" onClick={(e) => setVal(val + e.target.value)}>/</button>
          <button id='col2' value="=" onClick={() => calculate()}>=</button>
        </div>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);