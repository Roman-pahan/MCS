import React, {useState} from "react"
import ReactDOM from 'react-dom/client';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import Card from "./Card.js"
import NameForm from "./NameForm";
import EmailForm from "./EmailForm";
import NameFForm from "./NameFForm";
import TodoApp1 from "./TodoApp1";
import TaskForm2 from "./TaskForm2"
import TodoList2 from "./TodoList2"



function App2() {

    function handleWelcome() {
      console.log("Добро пожаловать!")
    }
  
    return <Shop onWelcome={handleWelcome} />
  }
  
  function Shop(props) {
    props.onWelcome()
  
    return <div>Витрина онлайн-стора</div>
  }

  const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(

    <App2 />

);


function App3() {

    // function handleCardLoad() {
    //   console.log("Карточка загружена")
    // }

    function handleCardClick() {
        console.log("Кнопка нажата!")
      }
  
    // return <Card onCardLoad = {handleCardLoad}/>
    return <Card onCardClick = {handleCardClick}/>
  }

  const root1 = ReactDOM.createRoot(document.getElementById('root1'));
  root1.render(
  
      <App3 />
  
  );


  function App4() {		
    const [name, setName] = useState("")
      
    function handleNameChange(event) {
      setName(event.target.value)
    }
  
    return <div>
      <h2>Привет, {name}</h2>
    <NameForm name={name} onNameChange={handleNameChange} />
    </div>		
  }


  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  
      <App4 />
  
  );


  function App5() {
    const [email, setEmail] = useState("")
    
    function handleEmailChange(event) {
      setEmail(event.target.value)
    }
  
    return <div>
      <h2>Logged in as {email}</h2>
        <EmailForm value={email} onEmailChange={handleEmailChange}/>
    </div>
  }

  const root3 = ReactDOM.createRoot(document.getElementById('root3'));
  root3.render(
  
      <App5 />
  
  );

  function App6() {
    const [name, setName] = useState("")
  
    function handleNameChange(event) {
      setName(event.target.value)
    }
  
    function handleFormSubmit(event) {
      event.preventDefault()
      setName("")
    }
  
    return <div>
      <h2>Привет, {name}</h2>
        <NameFForm onNameChange={handleNameChange} onNameSubmit={handleFormSubmit} name={name}/>
    </div>
  }
  
  const root4 = ReactDOM.createRoot(document.getElementById('root4'));
  root4.render(
  
      <App6 />
  
  );

  function TodoApp() {
    const [todos, setTodos] = useState([])
    const [task, setTask] = useState("")
  
    function handleTaskChange(event) {
      setTask(event.target.value)
    }
  
    function handleFormSubmit(event) {
      event.preventDefault()
      setTodos([...todos, task])
      setTask("")
    }
   
    return <>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="task">Добавить таск: </label>
        <input type="text" id="task" value={task} onChange={handleTaskChange} />
      </form>
      <ul>
        {todos.map((todo, index) => <li key={index}>{todo}</li>)}
      </ul>
    </>
  }

  const root5 = ReactDOM.createRoot(document.getElementById('root5'));
  root5.render(
  
      <TodoApp />
  
  );



  const root6 = ReactDOM.createRoot(document.getElementById('root6'));
  root6.render(
  
      <TodoApp1 />
  
  );



  function TodoApp2() {
    const [todos, setTodos] = useState([])
    const [task, setTask] = useState("")
  
    function handleTaskChange(event) {
      setTask(event.target.value)
    }
  
    function handleFormSubmit(event) {
      event.preventDefault()
      setTodos([...todos, task])
      setTask("")
    }
  
    return <div>
      <TaskForm2 onTaskCharge={handleTaskChange} onFormSubmit={handleFormSubmit} task={task}/>
      <TodoList2 todos={todos}/>
    </div>
  }



  const root7 = ReactDOM.createRoot(document.getElementById('root7'));
  root7.render(
  
      <TodoApp2 />
  
  );