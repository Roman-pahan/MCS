import React from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom/client';
import Shop from "./Shop.js";
import "./index.css";

function App() {
  return <Shop />;
}

render(<App />, document.querySelector("#root"));
