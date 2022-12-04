import React from "react"

export default function TodoList2(props){
    return(<ul>
    {props.todos.map((todo, index) => <li key={index}>{todo}</li>)}
  </ul>)
}

