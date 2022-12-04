import React from "react"

export default function TaskForm2(props) {
 return(
    <form onSubmit={props.onFormSubmit}>
        <label htmlFor="task">Следующий таск: </label>
        <input type="text" id="task" value={props.task} onChange={props.onTaskCharge} />
        <input type="submit" value="Добавить таск" />
  </form>
 )
}