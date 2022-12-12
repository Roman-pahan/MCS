import React from "react";
import styles from './AddItem.module.scss';

export default function AddItem(props) {
  return (
    <form className={styles.form} onSubmit={props.onFormSubmit}>
      <div className={styles.addform}>
      <div className={styles.inner}> 
        <label className={styles.inputlabel} htmlFor="item-name">Название:</label>
        <input
          type="text"
          value={props.name}
          onChange={props.onNameChange}
          id="item-name"
          placeholder="Название товара"
          className={styles.inputbackground}
        />
      </div>
      <div className={styles.inner}>
        <label className={styles.inputlabel} htmlFor="item-description">Описание:</label>
        <input

          type="text"
          value={props.desc}
          onChange={props.onDescChange}
          id="item-description"
          placeholder="Описание товара"
          className={styles.inputbackground}
        />
      </div>
      <div className={styles.footer}>
        <div className={styles.msgfooter}>{props.valid}</div>
        <input type="submit" className={styles.addbutton} value="Добавить" />
      </div>
      </div>
    </form>
  );
}
