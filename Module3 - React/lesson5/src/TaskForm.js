import React from "react"

export default function TaskForm(props) {
  return <form onSubmit={props.onFormSubmit}>
    <label htmlFor="task">Добавить таск: </label>
    <input type="text" id="task" value={props.task} onChange={props.onTaskChange} />
  </form>
}