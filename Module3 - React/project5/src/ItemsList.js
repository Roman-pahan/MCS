import React from "react";
import Item from "./Item.js";

export default function ItemsList(props){
    return(
        <ul className="ui-list">
        <li className="ui-item-list">
          {props.items.map((item) => (
            <div key={item.id}>
              <Item info={item} />
              <button
                onClick={() =>props.onHandleDeleteItem(item.id)}

                className="item-button"
              >
                Удалить
              </button>
            </div>
          ))}
        </li>
      </ul>
    )
}