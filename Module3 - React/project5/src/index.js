import React from "react";
import { render } from "react-dom";
import Shop from "./Shop.js";
import "./index.css";

function App() {
  return <Shop />;
}

render(<App />, document.querySelector("#root"));


function App2() {
  const [date, setDate] = useState(new Date())
  const [counter, setCounter] = useState(0)

  console.log("✅ рендер")

  function handleButtonClick() {
    setDate(new Date())
    setCounter(counter + 1)
  }
 
  return <button onClick={handleButtonClick}>"BUTTON"</button>
}

render(<App2 />, document.querySelector("#root"));