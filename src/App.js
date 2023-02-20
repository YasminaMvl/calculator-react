
import { useState, useEffect } from "react";
import "./App.css";

//Definir les states de chaque element

function App() {
  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  const inputNum = e => {
    if (curState.includes(".") && e.target.innerText === ".") return
    if (total) {
      setPreState("")
    }

    curState ? setCurState((pre) => pre + e.target.innerText) : setCurState(e.target.innerText)
    setTotal(false);
  };

  useEffect(() => {
    setInput(curState)
  }, [curState])

  useEffect(() => {
    setInput("0")
  }, [])


  const operatorType = e => {
    setTotal(false)
    setOperator(e.target.innerText)
    if (curState === "") return
    if (preState !== "") {
      equals()
    } setPreState(curState)
    setCurState("")
  };

  const equals = e => {
    if (e.target.innerText === "=") {
      setTotal(true)
    };

    let cal
    switch (operator) {
      case "/":
        cal = String(parseFloat(preState) / parseFloat(curState));
        break;
      case "+":
        cal = String(parseFloat(preState) + parseFloat(curState));
        break;
      case "*":
        cal = String(parseFloat(preState) * parseFloat(curState));
        break;
      case "-":
        cal = String(parseFloat(preState) - parseFloat(curState));
        break;
      default:
        break;
    }
    setInput("")
    setPreState(cal)
    setCurState("")
  }
  const minusPlus = () => { };

  const percent = () => { };

  const reset = () => {
    setPreState("");
    setCurState("");
    setInput("0");
  };

  return (
    <div className="container">.
      <div className="wrapper">
        <div className="screen">{input}</div>
        <div className="btn light" onClick={reset}>AC</div>
        <div className="btn light" onClick={percent}>%</div>
        <div className="btn light" onClick={minusPlus}>+/-</div>
        <div className="btn dark" onClick={operatorType}>/</div>
        <div className="btn light" onClick={inputNum}>7</div>
        <div className="btn light" onClick={inputNum}>8</div>
        <div className="btn light" onClick={inputNum}>9</div>
        <div className="btn dark" onClick={operatorType}>*</div>
        <div className="btn light" onClick={inputNum}>4</div>
        <div className="btn light" onClick={inputNum}>5</div>
        <div className="btn light" onClick={inputNum}>6</div>
        <div className="btn dark" onClick={operatorType}>+</div>
        <div className="btn light" onClick={inputNum}>1</div>
        <div className="btn light" onClick={inputNum}>2</div>
        <div className="btn light" onClick={inputNum}>3</div>
        <div className="btn dark" onClick={operatorType}>-</div>
        <div className="btn zero" onClick={inputNum}>0</div>
        <div className="btn light" onClick={inputNum}>.</div>
        <div className="btn light" onClick={equals}>=</div>
      </div>

    </div>


  )
}

export default App;
