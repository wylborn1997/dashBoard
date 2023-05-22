import logo from "./logo.svg";
import { hot } from "react-hot-loader/root";
import "./App.css";
import { useState } from "react";

function MyButton() {
  const [count, setCount] = useState(0);
  function handelClick() {
    console.log("你居然敢点我");
    setCount(count + 2);
    // console.log(count);
  }
  return (
    <div>
      <button onClick={handelClick}>点我试试{count + 2}</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyButton></MyButton>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default hot(App);
