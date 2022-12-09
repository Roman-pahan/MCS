import React, {useState, useEffect} from "react"
import ReactDOM from 'react-dom/client';
import {render} from 'react-dom';
import './index.css';

function App() {
  const [date, setDate] = useState(new Date())
  const [counter, setCounter] = useState(0)

  // console.log("✅ рендер")
  // console.log(date)
  console.log(counter)

  function handleButtonClick() {
    // setDate(new Date())
    // setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(prev => prev + 1)
    // setCounter(prev => prev + 1)
  }
 
  return <button onClick={handleButtonClick}>"BUTTON"</button>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);

function FastingApp() {
  const [fast, setFast] = React.useState(18)

  useEffect(()=>{document.title = `Фастинг: ${fast} часов`})

  function handleMoreClick() {
    if (fast < 23) {
      setFast(prev => prev + 1)
    }
  }

  function handleLessClick() {
    if (fast > 16) {
      setFast(prev => prev - 1)
    }
  }
  
  return <>
    <h2>Схема фастинга: {fast} / {24 - fast}</h2>
    <button onClick={handleMoreClick}>+</button>
    <button onClick={handleLessClick}>-</button>
  </>
}


const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(

    <FastingApp />

);


function Counter() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    document.title = `Счетчик: ${counter}`
  })

  function handleButtonClick() {
    setCounter(prev => prev + 1)
  }

  return <button onClick={handleButtonClick}>{counter}</button>
}

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(

    <Counter />

);

function FastingApp1() {
  const [fast, setFast] = React.useState(18)
  
  
    useEffect(() => {
        if (fast < 20) {
        document.title = `Фастинг: ${fast} часов`
        }else{
        document.title = `Проконсультируйтесь с врачом!`
        }
    })

  function handleMoreClick() {
    if (fast < 23) {
      setFast(prev => prev + 1)
    }
  }

  function handleLessClick() {
    if (fast > 16) {
      setFast(prev => prev - 1)
    }
  }

  return <>
    <h2>Схема фастинга: {fast} / {24 - fast}</h2>
    <button onClick={handleMoreClick}>+</button>
    <button onClick={handleLessClick}>-</button>
  </>
}

const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root3.render(

    <FastingApp1 />

);


function Items() {
  const [items, setItems] = useState([])

  function handleButtonClick() {
    setItems([...items, { id: items.length }])
  }

  useEffect(()=> {
    if(items.length===0){
      document.title = `Добавьте первый товар`
    }else if(items.length===1){
      document.title = `Добавлен один товар`
    }else{
      document.title = `Добавлено ${items.length} товаров`
    }
  })

  console.log(items)

  return (<>
    <h2>Всего товаров: {items.length}</h2>
    <button onClick={handleButtonClick}>Добавить товар</button>
  </>)
}

const root4 = ReactDOM.createRoot(document.getElementById('root4'));
root4.render(

    <Items />

);


function Example() {
  useEffect(() => {
    const timerId = setTimeout(() => {
      console.log("⏲") // выведется
    }, 1000)
  
    return () => {
      clearTimeout(timerId)
    }
  })
}

const root5 = ReactDOM.createRoot(document.getElementById('root5'));
root5.render(

    <Example />

);

function SitNext() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    document.title = "Привет!"
    const timerId = setTimeout(() => {
      document.title = "Я подсяду?"
    }, 1000)

    return () => {
      clearTimeout(timerId)
    }

  })

  return <>
    <h2>Обновлений стейта: {counter}</h2>
    <button onClick={() => setCounter(prev => prev + 1)}>Обновить стейт</button>
  </>
}

const root6 = ReactDOM.createRoot(document.getElementById('root6'));
root6.render(

    <SitNext />

);

function HeyGuy(){
  function handleScroll(e) {
    console.log("скролл детектед")
  }
  
  useEffect(() => {
    // регистрация события
    window.addEventListener("scroll", handleScroll)
    // уборка события
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })
}

const root7 = ReactDOM.createRoot(document.getElementById('root7'));
root7.render(

    <HeyGuy />

);

function Scroll() {
  const [state, setState] = useState(Math.random())

  function handleWindowScroll(){
    console.log(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll)

    return(()=>window.removeEventListener("scroll",handleWindowScroll))
  })

  const duplicateItems = Array.from({length: 50})

  return <>
    <button onClick={() => setState(Math.random())}>Ререндер</button>
    <ul>
      {duplicateItems.map((item, index) => <li key={index}>Jacobs by Marc Jacobs for Marc by Marc Jacobs.</li>)}
    </ul>
  </>
}



const root8 = ReactDOM.createRoot(document.getElementById('root8'));
root8.render(

    <Scroll />

);
function Multibrand() {
  const [scrip, setScrip] = useState(Math.random())

  useEffect(() => {
    console.log("Ей нужны бэнгеры, а я только отрендерил.")
  }, [])

  console.log(scrip)
  return <>
    <button onClick={() => setScrip(Math.random())}>Ререндер</button>
  </>
}

const root9 = ReactDOM.createRoot(document.getElementById('root9'));
root9.render(

    <Multibrand />

);


function SpecialOffer() {
  const [items, setItems] = useState(0)
  const [free, setFree] = useState(0)

  useEffect(() => {
    document.title = `Подарков: ${free}`
    console.log("срабатывание эффекта")
  },[free])

  function handleQuantityClick() {
    if (items > 0 && !(items % 3)) {
      setItems(items + 1)
      setFree(free + 1)
    } else {
      setItems (items + 1)
    }
  }

  return <>
    <h2>Товаров: {items}</h2>
    <button onClick={handleQuantityClick}>Еще один</button>
    <h3>Подарков: {free}</h3>
  </>
}

const root10 = ReactDOM.createRoot(document.getElementById('root10'));
root10.render(

    <SpecialOffer />

);


function SpecialOffer1() {
  const [items, setItems] = useState(0)
  const [free, setFree] = useState(0)


  useEffect(() => {
    console.log("монтаж завершен")
    return () => {
      console.log("начался демонтаж")
    }
  }, [])

  useEffect(() => {
    console.log("апдейт items")
  }, [items])

  useEffect(() => {
    console.log("апдейт free")
  }, [free])

  useEffect(() => {
    console.log("апдейт items или free")
  }, [items, free])

  function handleQuantityClick() {
    if (items > 0 && !(items % 3)) {
      setItems(items + 1)
      setFree(free + 1)
    } else {
      setItems (items + 1)
    }
  }

  return <>
    <h2>Товаров: {items}</h2>
    <button onClick={handleQuantityClick}>Еще один</button>
    <h3>Подарков: {free}</h3>
  </>
}

const root11 = ReactDOM.createRoot(document.getElementById('root11'));
root11.render(

    <SpecialOffer1 />

);

function Rolex() {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date())
    }, 1000)
  

  return () => {
    clearInterval(intervalId)
  }
}, [])
  
  return <h2>{date.toLocaleTimeString()}</h2>
}


const root12 = ReactDOM.createRoot(document.getElementById('root12'));
root12.render(

    <Rolex />

);

function Timex() {
  const [timekeeper, setTimekeeper] = useState(0)
  const [startstop, setStartstop] = useState(true)

  useEffect(() => {
    if (startstop) {
      console.log("Таймер включен")
      let timerId = setTimeout(() => {
        setTimekeeper(prev => prev + 1)
      }, 1000)
      return () => {
        clearTimeout(timerId)
        console.log("Таймер выключен")
      }
    }
  })

  function handleButtonClick() {
    setStartstop(prev => !prev)
  }

  return <>
    <h2>{timekeeper}</h2>
    <button onClick={handleButtonClick}>Старт/Стоп</button>
  </>
} 


const root13 = ReactDOM.createRoot(document.getElementById('root13'));
root13.render(

    <Timex />

);

function Timex1() {
  const [timekeeper, setTimekeeper] = useState(0)
  const [startstop, setStartstop] = useState(false)

  useEffect(() => {
    if (startstop) {
      console.log("Таймер включен")
      let timerId = setTimeout(() => {
        setTimekeeper(prev => prev + 1)
      }, 1000)
      return () => {
        clearTimeout(timerId)
        console.log("Таймер выключен")
      }
    }
  })

  function handleButtonClick1() {
    setStartstop(true)
  }

  function handleButtonClick2() {
    setStartstop(false)
    setTimekeeper(timekeeper)
  }

  function handleButtonClick3() {
    setStartstop(false)
    setTimekeeper(0)
  }

  return <>
    <h2>{timekeeper}</h2>
    <button onClick={handleButtonClick1}>Старт</button>
    <button onClick={handleButtonClick2}>Пауза</button>
    <button onClick={handleButtonClick3}>Стоп</button>
  </>
} 


const root14 = ReactDOM.createRoot(document.getElementById('root14'));
root14.render(

    <Timex1 />

);