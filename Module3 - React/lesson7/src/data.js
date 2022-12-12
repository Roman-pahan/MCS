import React, {useState, useEffect} from "react"
import ReactDOM from 'react-dom/client';

export default function Data() {

    function handleWelcome() {
      console.log("Добро пожаловать!")
    }
  
    return <Shop onWelcome={handleWelcome} />
  }
  
  function Shop(props) {
    props.onWelcome()
  
    return <div>Витрина онлайн-стора</div>
  }


