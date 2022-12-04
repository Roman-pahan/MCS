import React from "react"
export default function Card(props){
    // if(props.onCardLoad){
    //     props.onCardLoad()
    // }

    // return <div className="card">Содержимое карточки</div>
    return (<div className="card">
    <button onClick={props.onCardClick}>Нажать</button>
  </div>)
}