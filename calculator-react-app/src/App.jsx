import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [num, setnum] = useState("");
  const [inputData, setinputData] = useState("");
  const [operator, setoperator] = useState("");

  const handleInput = (n) => {
    if (inputData.length < 8) {
      setinputData((prev) => prev + n);
    }
  };

  const handleOperator = (op) => {
    if (num == "") {
      setnum(() => inputData);
      setinputData(() => "");
    }

    document.querySelector("#input-box").innerHTML = "";
    setoperator(() => op);
    console.log(num, inputData);
  };

  const handleAdvance = (prev) => {
    let res;
    let num = +inputData;
    if (prev == "sq") {
      res = num ** 2;
    } else if (prev == "sqrt") {
      res = num ** (1 / 2);
    } else if (prev == "cube") {
      res = num ** 3;
    } else {
      res = num ** (1 / 3);
    }

    setinputData(() => res);
    document.querySelector("#input-box").innerHTML = res;
  };

  const handleClear = () => {
    document.querySelector("#input-box").innerHTML = "";
    setinputData(() => "");
    setnum(() => "");
    setoperator(() => "");
  };

  const handleResult = () => {
    if (num == "" || inputData == "" || operator == "") {
      return;
    }

    let a = +num;
    let b = +inputData;
    let res;

    if (operator == "+") {
      res = a + b;
    } else if (operator == "-") {
      res = a - b;
    } else if (operator == "*") {
      res = a * b;
    } else {
      res = a / b;
    }

    setnum(() => "");
    setinputData(() => String(res));
    setoperator(() => "");
  };

  useEffect(() => {
    document.querySelector("#operator-display").innerHTML = "";
    document.querySelector("#operator-display").innerHTML = operator;
  }, [operator]);

  useEffect(() => {
    document.querySelector("#input-box").innerHTML = "";
    document.querySelector("#input-box").innerHTML = inputData;
  }, [inputData]);

  return (
    <div className="App">
      <h1>Maths Calculator</h1>
      <div id="calculator">
        <p id="input-box"></p>
        <button id="operator-display">~</button>
        <button id="add" onClick={() => handleOperator("+")}>
          +
        </button>
        <button id="sub" onClick={() => handleOperator("-")}>
          -
        </button>
        <button id="multiple" onClick={() => handleOperator("*")}>
          X
        </button>
        <button id="divide" onClick={() => handleOperator("/")}>
          /
        </button>
        <button id="square" onClick={() => handleAdvance("sq")}>
          sq
        </button>
        <button id="square-root" onClick={() => handleAdvance("sqrt")}>
          sqrt
        </button>
        <button id="cube" onClick={() => handleAdvance("cube")}>
          cb.
        </button>
        <button id="cube-root" onClick={() => handleAdvance("cbrt")}>
          cbrt
        </button>
        <button id="one" onClick={() => handleInput("1")}>
          1
        </button>
        <button id="two" onClick={() => handleInput("2")}>
          2
        </button>
        <button id="three" onClick={() => handleInput("3")}>
          3
        </button>
        <button id="four" onClick={() => handleInput("4")}>
          4
        </button>
        <button id="five" onClick={() => handleInput("5")}>
          5
        </button>
        <button id="six" onClick={() => handleInput("6")}>
          6
        </button>
        <button id="seven" onClick={() => handleInput("7")}>
          7
        </button>
        <button id="eight" onClick={() => handleInput("8")}>
          8
        </button>
        <button id="nine" onClick={() => handleInput("9")}>
          9
        </button>
        <button id="dot" onClick={() => handleInput(".")}>
          .
        </button>
        <button id="zero" onClick={() => handleInput("0")}>
          0
        </button>
        <button id="clear" onClick={() => handleClear()}>
          C
        </button>
        <button id="result" onClick={() => handleResult()}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
