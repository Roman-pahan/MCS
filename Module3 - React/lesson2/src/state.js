import { render } from "react-dom";


const dimensions = [20, 5]
const width = dimensions[0]
const height = dimensions[1]
console.log(width, height)

const profile = ["Michael Jordan", 1963, {
    team: "Chicago Bulls",
    number: 23 
  }];

console.log(profile)

function getFullName(name) {
    const [first,last] = name
    return `${first} ${last}`
  }

  console.log(getFullName(["Virgil", "Abloh"]))

  function playVanga(boomer) {
    const [name,age]= boomer
    return `${name} скоро стукнет ${age+1} лет`
  }

  console.log( playVanga(["Elon Musk", 50]))

  function useQuotes(word){
    return `"${word}"`
  }
  
  function offWhite(){
    return ["Virgil Abloh", useQuotes]
  }
  
  const [name, quote] = offWhite()


  console.log(offWhite())

  function offWhite1() { 
    const item = "SCULPTURE"
    function inQuotes() {
      return `"${item}"`
    }
    return [item, inQuotes]
  }
  
  function destructureIt() {
    const [item, inQuotes] = offWhite1()
  }



  
  function offWhite2() { 
    const item2 = "RAINCOAT"
    function inQuotes2() {
      return `"${item2}"`
    }
    return [item2, inQuotes2]
  }
  
  function destructureIt2() { 
    const [item2, inQuotes2] = offWhite2()
  }

  render(destructureIt(),document.querySelector("#root9")); 
  render(destructureIt2(),document.querySelector("#root10")); 
  render(App(),document.querySelector("#root11"))


