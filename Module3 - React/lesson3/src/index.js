import React, {useState} from "react";
import {render} from  'react-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import Void from "./Void.js" 



// render(App(), document.querySelector("#root"));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

function Item() {
  const [quantity, setQuantity] = useState(1)
  return <div>{quantity}</div>
}

const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(<Item />);


function Item2() {
  const [quantity, setQuantity] = useState(3)
  return <div>Количество товара: {quantity}</div>
}

function Pomodoro() {
  const [timer, setQuantity] = useState(25)
  return <h1>Осталось минут: {timer}</h1>
}

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(<Pomodoro/>);

function Clicker() {
  return (
    <button onClick={() => console.log("Клик детекдед!")}>Нажми меня!</button>
  )
}

const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root3.render(<Clicker/>);

function Pomodoro1() {
  const [mins, setMins] = useState(25)
  return (<>
    <h2>Продолжительность сессии: {mins}</h2>
    <button onClick={() => setMins(mins + 1)}>Добавить минуту</button>
  </>) 
}

const root4 = ReactDOM.createRoot(document.getElementById('root4'));
root4.render(<Pomodoro1/>);


function Paccbet() { 
  return <button onClick={()=>console.log("Рассвет не за горами")}>Click Clack</button>
} 

const root5 = ReactDOM.createRoot(document.getElementById('root5'));
root5.render(< Paccbet/>);


function Inventory() { 
  const [quantity, setQuantity] = useState(0)
  return (<>
    <h2>Количество: {quantity}</h2> 
    <button onClick={()=> setQuantity(quantity+1)}>Плюс один</button>
  </>)
} 

const root6 = ReactDOM.createRoot(document.getElementById('root6'));
root6.render(< Inventory/>);

function Inventory1() { 
  const [quantity, setQuantity] = useState(10)
  return (<>
    <h2>Количество: {quantity}</h2> 
    <button onClick={()=>{setQuantity(quantity-1)}}>Минус один</button>
  </>)
} 

const root7 = ReactDOM.createRoot(document.getElementById('root7'));
root7.render(< Inventory1/>);


function Counter() {
  let [count, setCount] = useState(0)  
  return (<> 
    <div>Кликов: {count}</div>
    <button onClick={() => setCount( count + 1)}>+1</button>
  </>); 
}


const root8 = ReactDOM.createRoot(document.getElementById('root8'));
root8.render(< Counter />);

function getDeity() {
  const name = "Omon Ra";

  const getMantra = () => {
    return `Sa Ta Na Ma ${name}`; 
  }

  return {
    name: name,
    mantra: getMantra()        
  }
}

console.log(getDeity())


function getDeity1(first, last) {
  
  function getFull() { 
    return `${first} ${last}`
  }

  return {
    first: first,
    last: last,
    full: getFull()
  }
}

console.log(getDeity1("Omon", "Ra"))




function getUser(age) {
    function isOld() {
      return age >= 30
    } 
  return {
    old: isOld()
  }
}

console.log(getUser(32))


function Counter2() {
  let [count, setCount] = useState(0);

  function addClick() {
    setCount(count + 1);
  }
  
  return (<>
    <div>Кликов: {count}</div>
    <button onClick={addClick}>+1</button>
  </>);
}

const root9 = ReactDOM.createRoot(document.getElementById('root9'));
root9.render(< Counter2 />);



function Coffee() {
  return (
    <select className="brands" onChange={()=>{console.log("Он или оно")}}>   
      <option>Illy</option> 
      <option>Lavazza</option> 
      <option>Danesi</option>
    </select>
  );
}

const root10 = ReactDOM.createRoot(document.getElementById('root10'));
root10.render(< Coffee />);


function Unlock() {
  const handleIdConfirm = ()=>{
    return (console.log("Face ID подтвержден"))
  }
  return <button onClick={handleIdConfirm}>Разблокировать</button>
}

const root11 = ReactDOM.createRoot(document.getElementById('root11'));
root11.render(< Unlock />);


function Pomodoro3() {
  const[min, setMin] = useState(25)
  const handleDecrementTime = ()=>{
    setMin(min - 1)
  }
  return (<>
    <h2>Осталось минут: {min}</h2>
    <button onClick={handleDecrementTime}>Убавить минуту</button>
  </>)
  }

const root12 = ReactDOM.createRoot(document.getElementById('root12'));
root12.render(< Pomodoro3 />);

function Tracker() {
  const [repeats, setRepeats] = useState(0)
  const handleAddRepeat = () =>{
    setRepeats(repeats+1)
  }
  return (<>
    <h2>Всего повторений: {repeats}</h2>
    <button onClick={handleAddRepeat}>+1 повторение</button>
  </>)
}

const root13 = ReactDOM.createRoot(document.getElementById('root13'));
root13.render(< Tracker />);


function Clock(props) {
  const [seconds, setSeconds] = useState(0)
  const enabled = props.enabled;
  function handleIncrementClick() {
    if (seconds < enabled) {
      setSeconds(seconds + 1)
    }
  }
  
  return (<>
    <h1>{seconds} seconds</h1>
    <button onClick={handleIncrementClick}></button>
  </>)
}

const root14 = ReactDOM.createRoot(document.getElementById('root14'));
root14.render(< Clock enabled = "5" />);


function Elevator() {
  const [count, setCount] = useState(0)
  function handleAddClick() {
    
    if(count < 7) {
      setCount(count + 1)
    } 
  }

  return (<>
    <h2>{count} пассажиров в лифте</h2>
    <button disabled={count===7} onClick={handleAddClick}>+1 пассажир</button>  
  </>)
}

const root15 = ReactDOM.createRoot(document.getElementById('root15'));
root15.render(< Elevator  />);

function Timer() {
  const [sec, setSec] = useState(0)

  function handleAddClick() {
    if (sec < 59){
    setSec(sec + 1)
  }else{
    setSec(0)
  }
  }

  return (<>
    <h2>{sec} секунд</h2>
    <button onClick={handleAddClick}>+1 секунда</button>  
  </>)
}

const root16 = ReactDOM.createRoot(document.getElementById('root16'));
root16.render(< Timer  />);



function Counter1(props) {
  const [counter, setCounter] = useState(0)
  // const mode = props.mode;
  function handleButtonClick() {
    if(props.mode==="plus"){
      setCounter(counter+1)
    }else if (props.mode==="minus"){
      setCounter(counter-1)
    }
  }

  return (<>
    <h3>Счет: {counter}</h3>
    <button onClick={handleButtonClick}>{props.mode}</button>
  </>)
}

const root17 = ReactDOM.createRoot(document.getElementById('root17'));
root17.render(<> 
  <Counter1 mode="plus" />
  <Counter1 mode="minus" />
</>);


function Counter3(props) {
  const [count, setCount] = useState(0)
  function handleButtonClick() {
    setCount(count+props.step)
  }

  return (<>
    <h3>Счет: {count}</h3>
    <button onClick={handleButtonClick}>Увеличить на:{props.step}</button>
  </>)
}
const root18 = ReactDOM.createRoot(document.getElementById('root18'));
root18.render(<> 
  <Counter3 step={1} />
  <Counter3 step={2} />
  <Counter3 step={3} />
</>);


function Greeting(props){
  if (props.user) {
    return <h1>Привет, {props.user}!</h1>
  } else {
    return <h1>Залогиниться</h1>
  }
}

const root19 = ReactDOM.createRoot(document.getElementById('root19'));
root19.render(<> 
  <Greeting user="Roman"/>
  <Greeting />

</>);




function Admin(props) {
  if(props.type==="admin"){
    return <h1>Привет, админ!</h1>
  }
  return   <Void />
}

const root20 = ReactDOM.createRoot(document.getElementById('root20'));
root20.render(<> 
  <Admin type="admin" />
  <Admin type="user" />
</>);




function Movie(props) { 
  const h1 = <h3>Оценить фильм</h3>
  const h2 = <h3>Смотреть фильм</h3>

   return(<div>{props.seen?h1:h2}</div>)
}


const root21 = ReactDOM.createRoot(document.getElementById('root21'));
root21.render(<> 
  <Movie seen={true} />
  <Movie seen={false} />
</>);

function Otis(props) {
  const {occupants} = props
  return <>
    <h1>Пассажиров: {occupants}</h1>
    {occupants > 7 && <p>Перегруз!</p>}
  </>
}



const root22 = ReactDOM.createRoot(document.getElementById('root22'));
root22.render(<> 
<Otis occupants={10} />
<Otis occupants={6} />

</>);





function Profile(props) { 
  return (<>
  <h2>Хороший день для учебы!</h2>
  {props.courses.length > 0 && <p>Вам доступно {props.courses.length} курсов</p>}
  </>)
}


const courses = [{
  id: 1,
  text: "HTML/CSS"
}, {
  id: 2,
  text: "JavaScript"
}, {
  id: 3,
  text: "React"
}]


const root23 = ReactDOM.createRoot(document.getElementById('root23'));
root23.render(<>
  <Profile courses={[]} />
  <Profile courses={courses} /> </>);


function App3() {
  const [state, setState] = useState(0);
  const logIn = "Войти"
  const logOut = "Выйти"
  const changeState = () =>{
    if (state < 1) {
      setState(state+1)
    }else{
      setState(0)
    }

}

  return (
    <>
      <div className="ui-container">


        <h2 className="ui-title">Нужно залогиниться!</h2>
        <button className="ui-button">{state ? logIn : logOut}</button>
      </div>
    </>
  );
}

const root24 = ReactDOM.createRoot(document.getElementById('root24'));
root24.render(<>
  <App3 /></>);

function Item3(props) {
  const [itemQuantity, setQuantity] = useState(0);
  const {el} = props

  
  const handleIncrementClick = ()=>{
    setQuantity(itemQuantity+1)
  }

  const handleDecrementClick = ()=>{
    if (itemQuantity>0){
    setQuantity(itemQuantity-1)}
  }
  

  return (
    <div className="item">
      <img src={items.image} />
      <div className="item-info">
        <h2>{props.name}</h2>
        <p>{items.desc}</p>
      </div>
      <div className="item-quantity">
        <button onClick={handleDecrementClick} className="item-button">-</button>
        <h3 className="item-total">{itemQuantity}</h3>
        <button  onClick={handleIncrementClick} className="item-button">+</button>
      </div>
    </div>
  );
}

const root25 = ReactDOM.createRoot(document.getElementById('root25'));
root25.render(<>
  <Item3 /></>);

const Shop = () => {
  const items = [
    {
      name: "Респиратор 3M",
      desc: "Степень защиты FFP2, есть клапан выдоха",
      image: "https://source.unsplash.com/400x300/?3M,mask"
    },
    {
      name: "Перчатки латексные",
      desc: "Одноразовые перчатки повышенной прочности",
      image: "https://source.unsplash.com/400x300/?latex,gloves"
    }

  ];





  // return <div className="shop">{}</div>;
};

const root26 = ReactDOM.createRoot(document.getElementById('root26'));
root26.render(<>
  <Shop /></>);
