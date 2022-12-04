import React, {useState} from "react"
import TaskForm from "./TaskForm"
import TodoList from "./TodoList"

export default function TodoApp1() {
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
    <TaskForm task={task} onTaskChange={handleTaskChange} onFormSubmit={handleFormSubmit} />
    <TodoList todos={todos} />
  </>
}