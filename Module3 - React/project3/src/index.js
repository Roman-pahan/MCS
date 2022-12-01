import React, { useState } from "react";
import { render } from "react-dom";
import "./index.css";
import Shop from "./Shop.js";

function App() {
  const [state, setState] = useState(2);

  const ChangeState = () => {
    if (state < 1) {
      setState(state + 1);
    } else {
      setState(0);
    }
  };

  return (
    <>
      <div className="ui-container">
        {state ? (
          <>
            <h2 className="ui-title">Нужно залогиниться!</h2>
            <button onClick={ChangeState} className="ui-button">
              Войти
            </button>
          </>
        ) : (
          <>
            <button onClick={ChangeState} className="ui-button">
              Выйти
            </button>
            <Shop />
          </>
        )}
      </div>
    </>
  );
}

render(<App />, document.querySelector("#root"));
