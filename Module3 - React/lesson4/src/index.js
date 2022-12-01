import React, {useState} from "react"
import ReactDOM from 'react-dom/client';
import {render} from 'react-dom';
import './index.css';
import App from './App';







// function Multistate() {
// const [mins, setMins] = useState(25)
// const [auth, setAuth] = useState(false)

// return null
// }

function Blaster() { 
  const [ammo, setAmmo] = useState(10)
  const [clip, setClip] = useState(3)

  function handleShootClick() { 
    if(ammo>0){
    setAmmo(ammo-1)
  }else if(clip>0){
    setAmmo(10)
    setClip(clip-1)
  }else{
    setAmmo(0)
    setClip(0)
  }
  }

  return <> 
    <h2>Зарядов: {ammo}</h2>   
    <h2>Обойм: {clip}</h2>
    <button onClick={handleShootClick}>Выстрелить</button>
  </>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Blaster />

);


function Pillbox(props) {
  const [dose, setDose] = useState(7)

  function handleTakeClick() {
    if (props.full) { 
      setDose(dose - 1)
    }
  }

  return <> 
    <h2>Таблеток: {dose}</h2>   
    <button onClick={handleTakeClick}>Принять</button>
  </>
}

const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(
<> 
  <Pillbox full={true} />
  <Pillbox full={false} />
  </>
);


function Streetball(){
  const [points, setPoints] = useState([])

  function handleScoreClick(){
    points.push(1)
    setPoints(points)
    console.log(points)
  }

  return <button onClick={handleScoreClick}>Score</button>
}

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(
<> 
  <Streetball/>
  </>
);


// function useState(default) {
//   let state = default
  
//   function setState(new) {
//     if (state === new) {
//       return //ререндер не нужен
//     }
//     state = new //нужен ререндер
//   }
  
//   return [state, setState]
// }


function Streetball2(){
  const [points, setPoints] = useState([])

  function handleScoreClick(){
    setPoints([...points, 1]) //создаем новый экземляр
    console.log(points)
  }

  return <button onClick={handleScoreClick}>Score</button>
}

const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root3.render(
<> 
  < Streetball2/>
  </>
);

// function Ikea(){
//   const names = ["MJOLKKLOCKA", "JARVFJALLET", "SJUTTIOFEM", "KRYDDNEJLIKA"]
  
//   return <ul>
//     {names.map(name => <li>{name}</li>)}
//   </ul>
// }

function Ikea(){
  // const names = ["MJOLKKLOCKA", "JARVFJALLET", "SJUTTIOFEM", "KRYDDNEJLIKA"] //база

  const [names, setNames] = useState(["MJOLKKLOCKA", "JARVFJALLET", "SJUTTIOFEM", "KRYDDNEJLIKA"]) //добавим функционал
  // const items = names.map(name => <li>{name}</li>)
  // const items = names.map((name, index) => <li key={index}>{name}</li>) //работа с индексем
  const items = names.map(name => <li key={name}>{name}</li>) //так грамотнее, чтобы свой ключ был

  const removeItem = () => { //добавим функционал удаления первого значения
    setNames(names.slice(1))
  }

  return ( //без ключей react все удаляет
  <>
    <ul>{items}</ul>
    <button onClick={removeItem}>Удалить элемент</button>
  </>)
}

const root4 = ReactDOM.createRoot(document.getElementById('root4'));
root4.render(
<> 
  < Ikea/>
  </>
);


function Pharmas() {
const items = pharmas.map(item => <li key={item}>{item}</li>)
  return <ul>{items}</ul>
}

const pharmas = ["AstraZeneca", "Novartis", "Pfizer", "Abbott"]
const root5 = ReactDOM.createRoot(document.getElementById('root5'));
root5.render(
<> 
  < Pharmas/>
  </>
);


function Standards() {
  const [gens, setGens] = useState(["GSM", "3G", "LTE", "5G"])
  const items = gens.map(gen => <li key={gen}>{gen}</li>)

  return <ul>{items}</ul>
}
const root6 = ReactDOM.createRoot(document.getElementById('root6'));
root6.render(
  <> 
    < Standards/>
    </>
  );

  function Pomodoro() {
    const [sessions, setSessions] = useState([])
    const list = sessions.map((session, index) => <li key={index}>{session}</li>)
    const total = sessions.reduce((sum, session) => sum + session, 0) //аккумулятор + значение по умолчанию
  
    function handleWorkClick() { 
      setSessions([...sessions, 25])
    }
  
    function handleBreakClick() { 
      setSessions([...sessions, 5])
    }
  
    function handleResetClick() { 
      setSessions([])
    }
  
    return <>
      <button onClick={handleWorkClick}>Поработать</button>  
      <button onClick={handleBreakClick}>Отдохнуть</button> 
      <h2>Всего: {total}</h2>
      <button onClick={handleResetClick}>Сброс</button>
      <ul>
        {list}
      </ul>
    </>
  }


  const root7 = ReactDOM.createRoot(document.getElementById('root7'));
  root7.render(
    <> 
      < Pomodoro/>
      </>
    );


    function Tracker() {
      const [reps, setReps] = useState([])
      const list = reps.map((sum,index) => <li key={index}>{sum}</li>)
    
      function handleAddClick() { 
        setReps([...reps, reps.length + 1])
      }
    
      function handleCancelClick() { 
        setReps(reps.slice(0, reps.length - 1))
      }
    
      return <>
        <button onClick={handleAddClick}>Добавить</button>  
        <button onClick={handleCancelClick}>Отмена</button> 
        <ul>
          {list}
        </ul>
      </>
    }

    const root8 = ReactDOM.createRoot(document.getElementById('root8'));
    root8.render(
      <> 
        < Tracker/>
        </>
      );


      function App3() {
        const user = { 
          mode: "dark",
          role: "admin"
        }
        
      
        const list = Object.entries(user).map(i => {
          return <li key={i[0]}>{i[0]}: {i[1]}</li>
        })
      
        return <>
        {/* <p>{Object.entries(user).join(" ")}</p> */}
        <ul>{list}</ul>
        </>
      }



      const root9 = ReactDOM.createRoot(document.getElementById('root9'));
      root9.render(
        <> 
          < App3/>
          </>
        );


        
        function App1() {
          const [theme, setTheme] = useState({
            desc: "Настройки темы",
            dark: true
          })
        
          const className = theme.dark ? "dark" : "light"
        
          function handleChangeClick() {
            setTheme({...theme, dark: !theme.dark})
          }
        
          return <div className={className}>
            <h1>{className}</h1>
            <h1>{theme.desc}</h1> 
            <button onClick={handleChangeClick}>Сменить тему</button>
          </div>
        }
        

const root10 = ReactDOM.createRoot(document.getElementById('root10'));
root10.render(
  <> 
    < App1/>
    </>
  );

  function Customer() {
    const [customer, setCustomer] = useState({
      name: "Телфар Клеменс",
      bonus: 20
    })


    const decreasePoints = ()=>{
      setCustomer({...customer, bonus: customer.bonus +10})
    }
  
    return <div>
      <p>У {customer.name} есть {customer.bonus} бонусов</p>   
      <button onClick={decreasePoints}>Добавить 10 бонусов</button>
    </div>
  }

  const root11 = ReactDOM.createRoot(document.getElementById('root11'));
root11.render(
  <> 
    < Customer/>
    </>
  );


  function BikeAssembly() {
    const [order, setOrder] = useState({
      frameset: "Cinelli MASH",
      groupset: "Aventon Push",
      wheelset: "Miche Pistard"
    })

    function handleAddClick(){
      setOrder({
        ...order,
        assembly: "express"
      })
    }

    function handleRemoveClick(){
      const{assembly,...parts} = order
      
        setOrder(parts)
      }
    
  
    return <div>
      <h1>Ваш заказ</h1>
      {order.assembly ? <p>Сборка включена</p> : <p>Сборка не включена</p>}
      <button onClick= {handleAddClick} disabled={order.assembly === "express"}>Со сборкой</button>
      <button onClick= {handleRemoveClick} disabled={order.assembly === undefined}>Без сборки</button>
    </div>
  }

  const root12 = ReactDOM.createRoot(document.getElementById('root12'));
  root12.render(
    <> 
      < BikeAssembly/>
      </>
    );

    function Input(){
      return <input type="text" name="delivery" defaultValue="DHL" />
    }
  
    

    const root13 = ReactDOM.createRoot(document.getElementById('root13'));
    root13.render(
      <> 
        < Input/>
        </>
      );


      function Delivery(props) {
        return <form>
          <input type="number" defaultValue={props.silverware} name="silverware" />
        </form>
      }
      
      render(<>
        <Delivery silverware={0} />
        <Delivery silverware={2} />
      </>, document.querySelector("#root14"))

function Checkout(props) {
  return (<form>
    <input type="text" name={props.name} onChange={event=>console.log(event.target.value)}/>
  </form>)
}

const root15 = ReactDOM.createRoot(document.getElementById('root15'));
root15.render(
  <> 
    <Checkout name="name" />
    </>
  );

  function App2() {
    const [city, setCity] = useState("Chelyabinsk")
    
    return<>
    <h1>{city}</h1>
    <input type="text" value={city} onChange={e => setCity(e.target.value)} />
    </>
  }

  const root16 = ReactDOM.createRoot(document.getElementById('root16'));
root16.render(
  <> 
    <App2  />
    </>
  );


  function App5() {

    const [town, setTown]=useState("Kaluga")

    return <>
      <input type="text" name="city" value={town} onChange={el=>setTown(el.target.value)}/>     
      <p>{town}</p>
    </>
  }
  
  const root17 = ReactDOM.createRoot(document.getElementById('root17'));
root17.render(
  <> 
    <App5 />
    </>
  );

  function App6() {
    const[value, setValue] = useState(0)



    return <>
      <input type="number" name="quantity" value={value} onChange={el=>setValue(el.target.value)}/>     
      <p>Количество товара: {value}</p>
    </>
  }
  const root18 = ReactDOM.createRoot(document.getElementById('root18'));
  root18.render(
  <> 
    <App6 />
    </>
  );

  function App7() {
    const [city, setCity] = useState("")
  
    return <select value={city} onChange={e => setCity(e.target.value)}>
      <option>Город</option>
      <option value="msk">Москва</option> 
      <option value="spb">Санкт-Петербург</option>  
    </select> 
  }

  const root19 = ReactDOM.createRoot(document.getElementById('root19'));
  root19.render(
  <> 
    <App7  />
    </>
  );


  function App8() {
    const [comment, setComment] = useState("")
  
  return <textarea value={comment} onChange={e => setComment(e.target.value)} />
  }
  
  const root20 = ReactDOM.createRoot(document.getElementById('root20'));
  root20.render(
  <> 
    <App8 />
    </>
  );
  function Form() {
    const [name, setName] = useState("Roman") 
    const [city, setCity] = useState("Kaluga")
  
    return <form>
      <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
      <input type="text" name="city" value={city} onChange={e => setCity(e.target.value)} />
    </form>
  }



  const root21 = ReactDOM.createRoot(document.getElementById('root21'));
  root21.render(
  <> 
    <Form  />
    </>
  );

  function App9(){
    function handleFormSubmit(e) {   
      e.preventDefault() //блокировка перезагрузки при подтверждении
    }

    return (<>
    <form onSubmit={handleFormSubmit}>
            <input type="text" name="name" />
            <input type="submit" value="Send" />   
          </form>
          </>)
  }

  
  const root22 = ReactDOM.createRoot(document.getElementById('root22'));
  root22.render(
  <> 
    <App9 />
    </>
  );

  function Application() {
    const [participant,setParticipant]=useState("")
    const [nameYacht,setNameYacht]=useState("")
    const [typeYacht,setTypeYacht]=useState("")

    function handleFormSubmit(event){
      event.preventDefault()
      setParticipant("")
      setNameYacht("")
      setTypeYacht("")

    }



    return <>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="name" placeholder="Имя" value={participant} onChange={event=>{setParticipant(event.target.value)}}/>
        <textarea name="yacht" placeholder="Название яхты"value={nameYacht} onChange={event=>{setNameYacht(event.target.value)}}/>
        <select name="type"value={typeYacht} onChange={event=>{setTypeYacht(event.target.value)}}>
          <option>Класс яхты</option>
          <option>Farr 30</option>
          <option>Sydney 38</option>
          <option>Transpac 52</option>
        </select>
        <input type="submit" value="Регистрация" />
      </form>
      <ul>
        <li>Участник: {participant}</li>
        <li>Название яхты: {nameYacht}</li>
        <li>Тип яхты: {typeYacht}</li>
      </ul>
    </>
  }

  const root23 = ReactDOM.createRoot(document.getElementById('root23'));
  root23.render(
  <> 
    <Application />
    </>
  );

  function Sending(){
    return<>
      <form>	
        <label htmlFor="login-email">Email: </label>	
        <input type="email" id="login-email" placeholder="yo@moscoding.ru"/>
              
        <label htmlFor="login-password">Password: </label>	
        <input type="password" id="login-password" placeholder="Пароль"/>

        <input type="submit"/>
      </form>

    </>
    }
  



  const root24 = ReactDOM.createRoot(document.getElementById('root24'));
  root24.render(
  <> 
    <Sending/>
    </>
  );

  function App10() {
    const [name, setName] = useState("")
  
    return <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} placeholder="Имя" />  
      <input type="submit" />
      <p>Привет, {name}!</p>
    </form>
  }

  const root25 = ReactDOM.createRoot(document.getElementById('root25'));
  root25.render(
  <> 
    <App10/>
    </>
  );

  function Application2() {
    const [name, setName] = useState("")
    const [yacht, setYacht] = useState("")
    const [type, setType] = useState("")
  
    return <>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} placeholder="Имя" />
        <label htmlFor="yacht">Yacht name:</label>
        <textarea id="yacht" name="yacht" value={yacht} onChange={e => setYacht(e.target.value)} placeholder="Название яхты" />
        <label htmlFor="type">Yacht type:</label>
        <select id="type" name="type" value={type} onChange={e => setType(e.target.value)}>
          <option>Класс яхты</option>
          <option>Farr 30</option>
          <option>Sydney 38</option>
          <option>Transpac 52</option>
        </select>
        <input type="submit" value="Регистрация" />
      </form>
      <ul>
        <li>Участник: {name}</li>
        <li>Название яхты: {yacht}</li>
        <li>Тип яхты: {type}</li>
      </ul>
    </>
  }


  const root26 = ReactDOM.createRoot(document.getElementById('root26'));
  root26.render(
  <> 
    <Application2/>
    </>
  )



  function Test(){
    const items = [];


    addToList("productName", "productDesc")
    addToList("productName", "productDesc")
    addToList("productName", "productDesc")
  function addToList(productName, productDesc) {
    items.push([{ productName }, { productDesc }]);

    return<>
    <ul>
        
    </ul>
    </>
  }
  }


  const root27 = ReactDOM.createRoot(document.getElementById('root27'));
  root27.render(
  <> 
    <Test/>
    </>
  )
