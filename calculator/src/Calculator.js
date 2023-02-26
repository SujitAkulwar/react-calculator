import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Head from "./Head/Head";
import { historyaction } from "./store";
import History from "./History/History";

const Calculator = () => {
  let equation = "";
  let temp = "";

  const dispatch = useDispatch();

  const [val, setVal] = useState("");

  const backspace = () => {
    try {
      setVal(val.slice(0, -1));
    } catch (error) {
      setVal("");
    }
  };
  const calculate = (e) => {
    e.preventDefault();
    equation = val.concat(" = ");

    solution();

    equation = equation.concat(temp);
    dispatch(historyaction.addtohistory(equation));
  };

  function solution() {
    try {
      // eslint-disable-next-line
      temp = eval(val);
    } catch (error) {
      temp = "error";
    }
    setVal(temp);
  }

  const calculatorvar = (
    <div id="container">
      <div className="inp">
        <input
          type="text"
          id="inputss"
          name=""
          placeholder=""
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <button id="col2" value="c" onClick={() => backspace()}>
          c
        </button>
      </div>
      <div id="row">
        <button
          id="col"
          value={1}
          onClick={(e) => setVal(val + e.target.value)}
        >
          1
        </button>
        <button
          id="col"
          value={2}
          onClick={(e) => setVal(val + e.target.value)}
        >
          2
        </button>
        <button
          id="col"
          value={3}
          onClick={(e) => setVal(val + e.target.value)}
        >
          3
        </button>
        <button
          id="col"
          value="+"
          onClick={(e) => setVal(val + " " + e.target.value + " ")}
        >
          +
        </button>
      </div>
      <div id="row">
        <button
          id="col"
          value={4}
          onClick={(e) => setVal(val + e.target.value)}
        >
          4
        </button>
        <button
          id="col"
          value={5}
          onClick={(e) => setVal(val + e.target.value)}
        >
          5
        </button>
        <button
          id="col"
          value={6}
          onClick={(e) => setVal(val + e.target.value)}
        >
          6
        </button>
        <button
          id="col"
          value="-"
          onClick={(e) => setVal(val + " " + e.target.value + " ")}
        >
          -
        </button>
      </div>
      <div id="row">
        <button
          id="col"
          value={7}
          onClick={(e) => setVal(val + e.target.value)}
        >
          7
        </button>
        <button
          id="col"
          value={8}
          onClick={(e) => setVal(val + e.target.value)}
        >
          8
        </button>
        <button
          id="col"
          value={9}
          onClick={(e) => setVal(val + e.target.value)}
        >
          9
        </button>
        <button
          id="col"
          value="*"
          onClick={(e) => setVal(val + " " + e.target.value + " ")}
        >
          x
        </button>
      </div>
      <div id="row">
        <button
          id="col"
          value="."
          onClick={(e) => setVal(val + e.target.value)}
        >
          .
        </button>
        <button
          id="col"
          value={0}
          onClick={(e) => setVal(val + e.target.value)}
        >
          0
        </button>
        <button
          id="col"
          value="/"
          onClick={(e) => setVal(val + " " + e.target.value + " ")}
        >
          /
        </button>
        <button id="col" value="=" onClick={(e) => calculate(e)}>
          =
        </button>
      </div>
    </div>
  );

  return (
    <>
      <Head />
      <div className="main">
        {calculatorvar}
        <History />
      </div>
    </>
  );
};

export default Calculator;
