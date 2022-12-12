import React from "react";
import Item from "./Item";
import styles from './ItemsList.module.scss';

export default function ItemsList(props) {
  return ( 
    <ul className={styles.parent}>
      {props.items.map((item) => (
        <li className={styles.child} key={item.id}>
          <Item info={item} />
          <button
            className={styles.delete}
            onClick={() => props.onDeleteClick(item.id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}
