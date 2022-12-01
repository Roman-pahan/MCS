import  React from "react";
import  {useState} from "react";
import { render } from "react-dom";

// function Item() {
//   const [quantity, setQuantity] = useState(1)
//   return (<div>{quantity}</div>)
// }

function App(){
    const [count, setCount] = useState(4)
    return(
        <>
        <button>-</button>
        <span>{count}</span>
        <button>+</button>
        </>
    )
}

render(App(),document.querySelector("#root11"))
export default App;
// render(Item(),document.querySelector("#root11"))

