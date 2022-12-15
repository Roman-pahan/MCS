import React, { useState } from "react"
import { render } from "react-dom"
import Shop from "./Shop"
import './index.css';
import styles from './Item.module.scss'

function App() {
  const [login, setLogin] = useState(false)

  if (login) {
    return (
      <div className={styles.log}>
        <Shop />
        <button className={styles.button} onClick={() => setLogin(false)}>Выйти</button>
      </div>
    )
  } else {
    return (
      <div  className={styles.log}>
        <h2>Нужно залогиниться!</h2>
        <button className={styles.button}  onClick={() => setLogin(true)}>
          Войти
        </button>
      </div>
    )
  }
}

render(<App />, document.querySelector("#root"))
