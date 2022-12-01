import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from "react-dom";
import clsx from "clsx";
import  {useState} from "react";



function Order(props) {
  const name = `${props.item.brand} ${props.item.model}`;

  return (
    <div>
      Кроссовки {name}.<br />
      Осталось {props.item.quantity - 1} пар.
    </div>
  );
}

const item = {
  brand: "adidas YEEZY",
  model: "Boost 700 V2",
  quantity: 3
};

render(
  <>
    <Order item={item} />
    <Order item={item} />
  </>,
  document.querySelector("#root")
);


function Dashboard({status}) {
  if (!status) {
    return <p>Войти | Регистрация</p>
  }
  return <p>Добро пожаловать!</p>
} 

const user = <Dashboard status={true} /> 
const guest = <Dashboard status={false} />



render(user,  document.querySelector("#root1"))
render(guest,  document.querySelector("#root2"))



const itemz = { 
  brand: "adidas YEEZY",
  model: "Boost 700 V2",
  color: "Tephra"
}

function Raffle(props) {
  if(!props.itemz){ //эта комбинация props.itemz позволяет запускать код
    return null
  }
  return <div>Цвет: {props.itemz.color}</div>
}



render(<>
  <Raffle itemz={itemz} />
  <Raffle />
</>, document.querySelector("#root3"));



function Header(props) {
    let className = 'light';
    if(props.theme==="night"){
    <h1 className='dark'>Maison Martin Margiela</h1> 
  }
  return <h1 className={className}>Maison Martin Margiela</h1> 
} 

render(<> 
    <Header theme="day" /> 
    <Header theme="night" />
  </>, document.querySelector("#root4"));


const classes = clsx({ 
  "cost": true, 
  "cost-sale": true 
});

render(classes, document.querySelector("#root5"));

function Pricetag(props) { 
  const className = clsx({"cost-sale": props.onsale}); 
  return <li className={className}></li> 
} 

const element = <Pricetag onsale={true} />;

render(element, document.querySelector("#root6"));



// function Header1(props) {
//   const className = `header ${clsx({"light": props.theme.day, "dark": props.theme.night})}`
//   return <h1 className={className}>Maison Martin Margiela</h1> 
// } 

function Header1(props){
  const className = clsx({
    "header":true,
    "dark": props.theme === "night",
    "light": props.theme === "day"

  });

  return <h1 className={className}>Maison Martin Margiela</h1> 
}

render(<> 
{/* light */}
    <Header1 theme="day" /> 
{/* dark */}
    <Header1 theme="night" /> 
  </>, document.querySelector("#root7")); 




function Button7(props){
  const {children,...rest} = props;
  return <button {...rest}>{children}</button> 
}

render(<Button7 tabIndex="2" color="red" className="bible">Нажми</Button7>, document.querySelector("#root8")); 



