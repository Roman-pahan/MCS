import React, { useState } from "react";
import styles from './Item.module.scss'


export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  return (

    <div className={styles.prdesc}>
      <img className={styles.image} src={info.image} width="500" alt="" />
      <div className="item-info">
        <h2>{info.name}</h2>
        <p>{info.desc}</p>
      </div>
      <div className={styles.amountlocation}>
        <button
          className={styles.incdecbutton}
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 className="item-total">{total ? total : 0}</h3>
        <button className={styles.incdecbutton} onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  );
}
