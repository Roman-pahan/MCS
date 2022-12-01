import React,{useState} from 'react';



export default function App() {
  const [count, setCount] = useState(4)

  function decrementCount(){
    setCount(prevCount => prevCount-1) //Если используем prevCount, то дублируем значения,
    // setCount(prevCount => prevCount-1) // если count , то один раз будет выполняться  
  }

  
  function incrementCount(){
    setCount(prevCount => prevCount+1) 
 
  }
  
 
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

