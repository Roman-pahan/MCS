import React, {useState, useEffect} from "react"
import ReactDOM from 'react-dom/client';
import {render} from 'react-dom';
import './index.css';
import data from "./data.js"

function App() {
  const [count, setCount] = useState(0)
  
  // useEffect(() => { //с монтажом
  //   console.log(count)
  // }, [count])
   
  useEffect(() => { //без монтажа
    if (count > 0) {
      console.log(count)
    }
  }, [count])


  function handleButtonClick() {
    setCount(prev => prev + 1)
    // console.log(count) // выведет 0, а не 1
  }
  
  return <>
    <h1>{count}</h1>
    <button onClick={handleButtonClick}>+1</button>
  </>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);


function App1() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    if(count>0){
    console.log(count)}
  },[count])

  function handleButtonClick() {
    setCount(prev => prev + 5)
    
  }

  return <>
    <h1>{count}</h1>
    <button onClick={handleButtonClick}>+5</button>
  </>
}

const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(<App1/>);


function CoinList() {
  const [coin, setCoin] = useState("")

  useEffect(()=>{
    console.log(coin)
  },[coin])

  function handleCoinChange(e) {
    setCoin(e.target.value)
  }

  return <>
    <h3>Выбрать крипту</h3>
    <select onChange={handleCoinChange}>
      <option value="BTC">Bitcoin</option>
      <option value="ETH">Ethereum</option>
      <option value="XRP">Ripple</option>
    </select>
    <h1>{coin}</h1>
  </>
}

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(<CoinList/>);

function App2() {
  const [random, setRandom] = useState(Math.random())

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data))
  })

  return <>
    <h1>{random}</h1>
    <button>Ререндер</button>
  </>
}

const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root3.render(<App2/>);

function SaveVar(){
  let doc = "Живаго"
  localStorage.setItem("doc", doc) //localStorage.getItem("doc")
  const apm = "430"
  localStorage.setItem("apm", apm) //localStorage.getItem("apm")
  localStorage.getItem("apm")
  const apm2 = Number.parseInt(apm, 10)
  console.log(apm2)
  console.log(typeof apm2)
  const novichok = true
  localStorage.setItem("novichok", novichok)
  localStorage.getItem("novichok")
  const novichok2 = localStorage.getItem("novichok") === "true"
  console.log(novichok2)
  console.log(typeof novichok2)

  // useEffect(() => {
  //   localStorage.setItem("state", state)
  // }, [state])
  // localStorage.setItem("ключ", "значение") сохраняет пару ключ/значение в локальное хранилище
}

const root4 = ReactDOM.createRoot(document.getElementById('root4'));
root4.render(<SaveVar/>);

function App3() {
  const [dark, setDark] = useState(true)

  useEffect(()=>{
    localStorage.setItem("dark", dark)
    console.log(localStorage.getItem("dark"))
  },[dark])

 
  
  const className = dark ? "dark" : "light"


  function handleToggleClick() {
    setDark(!dark)
  }
  
  return <div className={className}>
    <button onClick={handleToggleClick}>Переключить тему</button>
    <p>{className}</p>
  </div>
}

const root5 = ReactDOM.createRoot(document.getElementById('root5'));
root5.render(<App3/>);

function Counter() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    localStorage.setItem("count",count)
    console.log(localStorage.getItem("count"))
  })

  function handleAddClick() {
    setCount(prev => prev + 1)
  }

  function handleSubClick() {
    setCount(prev => prev - 1)
  }

  return <>
    <h2>{count}</h2>
    <button onClick={handleAddClick}>+</button>
    <button onClick={handleSubClick}>-</button>
  </>
}

const root6 = ReactDOM.createRoot(document.getElementById('root6'));
root6.render(<Counter/>);

function Form() {
  const [name, setName] = useState("")

  useEffect(()=>{
    localStorage.setItem("name",name)
    console.log(localStorage.getItem("name"))
  },[name])

  return <>
    <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
    <p>Йоу, {name}!</p>
  </>
}

const root7 = ReactDOM.createRoot(document.getElementById('root7'));
root7.render(<Form/>);

function Obj(){
  const plant = {
    common: "Mother-in-law's tongue",
    latin: "Sansevieria trifasciata"  
  }
  
  localStorage.setItem("plant", JSON.stringify(plant))//Превращение объекта в строчный вид для сохранения

  let plant2 = localStorage.getItem("plant") //Вытаскиваем массив в строчном виде
  const plant3 = JSON.parse(plant2)//Превращения массива из строчного вида в объект
  console.log(plant)
  console.log(plant2)
  console.log(plant3)

}


const root8 = ReactDOM.createRoot(document.getElementById('root8'));
root8.render(<Obj/>);


function Paypal() {
  const [transfers, setTransfers] = useState([])

  useEffect(()=>{
    localStorage.setItem("transfers",JSON.stringify(transfers))
    console.log(JSON.parse(localStorage.getItem("transfers"))) //получение массива в сточном виде и перевод массив
  },[transfers])

  function handleReceiveClick() {
    setTransfers([...transfers, 10])
  }
  
  function handleSendClick() {
    setTransfers([...transfers, -10])
  }

  function handleResetClick() {
    setTransfers([])
  }

  const balance = transfers.reduce((sum, amount) => sum + amount, 0)

  return <>
    <button onClick={handleReceiveClick}>Принять 10</button>
    <button onClick={handleSendClick}>Перевести 10</button>
    <h2>Баланс: {balance}</h2>
    <button onClick={handleResetClick}>Сброс</button>
    <ul>
      {transfers.map(
        (transfer, index) => <li key={index}>{transfer}</li>
      )}
    </ul>
  </>
}

const root9 = ReactDOM.createRoot(document.getElementById('root9'));
root9.render(<Paypal/>);

function Form1() {
  const [name, setName] = useState(()=>localStorage.getItem("name"))

  useEffect(() => {
    localStorage.setItem("name", name)
  }, [name])

  return <>
    <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
    <p>Йоу, {name}!</p>
  </>
}

const root10 = ReactDOM.createRoot(document.getElementById('root10'));
root10.render(<Form1/>);


function App4() {
  const [dark, setDark] = useState(()=>localStorage.getItem("dark")==="true")

  useEffect(() => {
    localStorage.setItem("dark", dark)
  }, [dark])
  
  const className = dark ? "dark" : "light"

  console.log(dark)

  function handleToggleClick() {
    setDark(!dark)
  }
  
  return <div className={className}>
    <button onClick={handleToggleClick}>Переключить тему</button>
    <p>{className}</p>
  </div>
}

const root11 = ReactDOM.createRoot(document.getElementById('root11'));
root11.render(<App4/>);

function Counter1() {
  const [count, setCount] = useState(()=>{
    const value = localStorage.getItem("count")
    if (!value) {
      return 0
    }
    return Number.parseInt(value, 10)
  
  })
  useEffect(() => {
    localStorage.setItem("count", count)
  }, [count])

  function handleAddClick() {
    setCount(prev => prev + 1)
  }

  function handleSubClick() {
    setCount(prev => prev - 1)
  }

  return <>
    <h2>{count}</h2>
    <button onClick={handleAddClick}>+</button>
    <button onClick={handleSubClick}>-</button>
  </>
}

const root12 = ReactDOM.createRoot(document.getElementById('root12'));
root12.render(<Counter1/>);


function Paypal2() {
  const [transfers, setTransfers] = useState(()=>JSON.parse(localStorage.getItem("transfers")))

  useEffect(() => {
    localStorage.setItem("transfers", JSON.stringify(transfers))
  }, [transfers])

  function handleReceiveClick() {
    setTransfers([...transfers, 10])
  }
  
  function handleSendClick() {
    setTransfers([...transfers, -10])
  }

  function handleResetClick() {
    setTransfers([])
  }

  const balance = transfers.reduce((sum, amount) => sum + amount, 0)

  return <>
    <button onClick={handleReceiveClick}>Принять 10</button>
    <button onClick={handleSendClick}>Перевести 10</button>
    <h2>Баланс: {balance}</h2>
    <button onClick={handleResetClick}>Сброс</button>
    <ul>
      {transfers.map(
        (transfer, index) => <li key={index}>{transfer}</li>
      )}
    </ul>
  </>
}

const root13 = ReactDOM.createRoot(document.getElementById('root13'));
root13.render(<Paypal2/>);