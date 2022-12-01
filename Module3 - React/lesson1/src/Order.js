import React from "react"; 
import {render} from "react-dom"; 

export default function Order(props) {  
  let name = `${props.item.brand} ${props.item.model}`;

    return (<div>
    Кроссовки {name}.<br />
    Осталось {props.item.quantity} пар.
    </div>);
    }

const item = { 
  brand: "adidas YEEZY",
  model: "Boost 700 V2",
  quantity: 3
}

render(<>
  <Order item={item} />
  <Order item={item} />
</>, document.querySelector("#root26"));