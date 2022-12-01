import React from "react";
import {render} from "react-dom";

function CustomerBasket(props){
  return (<div>«Товаров в корзине: {props.quantity}»</div>);
}

const root18 = document.querySelector("#root18");
render(<CustomerBasket quantity="3" />, root18);