import React from "react";
export default function Title(props){
    return(
        <div>
        <p className="ui-title">
          {props.items.length === 0 ? "Добавить первый товар" : ""}
        </p>
      </div>
    )
}