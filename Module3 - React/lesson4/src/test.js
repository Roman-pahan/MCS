// import React from "react"

const turtles = ["Leonardo", "Michelangelo", "Donatello", "Raphael"]
const ninjas = [...turtles]
const ninjas1 = turtles
console.log(ninjas)
console.log(ninjas1)
console.log(turtles===ninjas)
console.log(turtles===ninjas1)
console.log(ninjas1===ninjas)

const boys = ["Тинки-Винки", "Дипси"]
const girls = ["Ляля", "По"]
const teletubbies = [...boys, ...girls]
console.log(teletubbies)




function addBull(bulls, bull) {
    const newBulls = [...bulls, bull]
    return newBulls
}
const bulls = ["Jordan", "Pippen", "Rodman"]
console.log(addBull(bulls,"Kukoc"))


function addBase(bases, base) {
    return [base, ...bases]
}

const bases = ["Гуанин", "Цитозин", "Тимин"]
const dna = addBase(bases, "Аденин")

console.log(dna)


const dna2 = ["A", "T", "C", "G"]

const rna = dna2.map(base => {
  if (base === "T"){
    return "U"
  }
  return base
})

console.log(rna) //["A", "U", "C", "G"]
console.log(dna2)


function change(players, starter, bench) {
    return players.map(player => {
        if (player === starter){
            return bench;
        }
        return player
    })
}

//пример использования
const firstHalf = ["Jordan", "Pippen", "Rodman", "Kukoc"]
const secondHalf = change(firstHalf, "Jordan", "Harper")
console.log(change(firstHalf, "Jordan", "Harper"))
console.log(firstHalf === secondHalf)

const gogo = firstHalf.slice(1) //удаляет все предыдущие элементы (удаляет с начала)
const gogo1 = firstHalf.slice(0, firstHalf.length - 2)//удаляет с конца
//Первый аргумент слайса — индекс элемента, с которого нужно начать, второй — индекс того, на котором нужно остановиться
console.log(gogo)
console.log(gogo1)

const nums = [10, 11, 12, 13, 14]

const odd = nums.filter(num => num % 2)
const ban = nums.filter(num => num !== 13)
console.log(odd)
console.log(ban)
const ban2 = nums.filter((num, index) => index !== 3) //удаление по индексу (второй опциональный аргумент)
console.log(ban2)

function removeDj(lineup, out) {
    return lineup.filter(dj=>{
        return dj!==out
    })

}

//пример использования
const oldLineup = ["Jaar", "Villalobos", "Hawtin", "Allien"]
const newLineup = removeDj(oldLineup, "Villalobos")
console.log(newLineup)

const streamer = {
    name: "Sasha Grey",
    hobby: "Cooking"
  }
  
//   streamer.age = 32
const new1 = {...streamer, age: 32, hobby: "music"}//порядок важен
console.log(streamer)
console.log(new1)

function checkFake(item, fake) {
    const newItem = {...item, fake}
    return newItem;
}

//пример использования
const cap = {
  brand: "Supreme",
  condition: "like new"
}
const forSale = checkFake(cap, false)
console.log(cap)
console.log(forSale)


function addTimestamp(cargo) {
    return {...cargo, timestamp: Date.now()}
}

//пример использования
const cargo = {
  from: "Bogota, Colombia",
  weight: "20kg"
}
const received = addTimestamp(cargo)
console.log(received)

function giftSub(user) {
    return {...user, role: "subscriber"}
}

//пример использования
const user = {
  name: "Sharishaxd",
  role: "follower"
}
const sub = giftSub(user)
console.log(sub)

// const taxpayer = {
//     ИП: "Пелевин Виктор Олегович",
//     ОГРНИП: 318774600540978, 
//     ИНН: 772602270717
//   }
  
// //   delete taxpayer.ИНН
// // const {ИНН, ...pelevin} = taxpayer
// console.log(taxpayer)

const taxpayer = {
    ИП: "Пелевин Виктор Олегович",
    ОГРНИП: 318774600540978, 
    ИНН: 772602270717
  }
  
  const {ИНН, ОГРНИП, ...ВО} = taxpayer //убираем и разделяем массив
  console.log(ВО)


  function goVegan(dish) {
    const {meat, ...newdish} = dish;
    return newdish
}

//пример использования
const burger = {
  bun: "Чиабатта",
  toppings: "Экстра",
  meat: "Говядина"
}
const nomeat = goVegan(burger)
console.log(nomeat)







