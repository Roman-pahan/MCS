const user = {
    id: 1,
    name: "Nick Szabo",
    age: 57
  }
  
  const key = "id"
  console.log(user[key]) // 1


  const getValue = (user, key) => {
    return user[key]
  }
  
  console.log(getValue({id: 2, name: "Vitalik Buterin"}, "id")) // 2
  console.log(getValue({id: 2, name: "Vitalik Buterin"}, "name")) // "Vitalik Buterin"


  const settings = {
    theme: "dark",
    version: "2.4.1",
    beta: false
  }
  
  const keys = Object.keys(settings)
  console.log(keys) // ["theme", "version", "beta"]
  
  keys.forEach(key => {
    console.log(settings[key])
  })
  // "Dark"
  // "2.4.1"  
  // false
console.log("Практика 85")
  const getObjectDetails = (obj, key) => {
    // keys.forEach(key => obj[key])
      
    return `Значением ключа ${key} является ${obj[key]}`

}

console.log(getObjectDetails({id: 1, name: "Vitalik"}, "id")) // "Значением ключа id является 1"
console.log(getObjectDetails({id: 1, name: "Vitalik"}, "name"))  // "Значением ключа name является Vitalik"

const getNumberOfKeys = obj => { // Вернуть количество ключей
    return Object.keys(obj).length
}

console.log(getNumberOfKeys({id: 1, name: "Vitalik",  country: "Canada"})) // 3
console.log(getNumberOfKeys({id: 1, name: "Vitalik",  country: "Canada", website: "vitalik.ca"})) // 4

const getCapsKeys = obj => {
    return Object.keys(obj).map(upper => {
       return upper.toUpperCase()
    })
}

console.log(getCapsKeys({id: 1, name: "Vitalik",  country: "Canada"})) // ["ID", "NAME", "COUNTRY"]
console.log(getCapsKeys({id: 1, name: "Vitalik",  website: "vitalik.ca"})) // ["ID", "NAME", "WEBSITE"]


const logValues = obj => {
    Object.keys(obj).forEach(key =>{
        console.log(obj[key])
    })
}

logValues({id: 1, name: "Vitalik",  country: "Canada"}) // Выводит в консоль три сообщения: 1, "Vitalik", "Canada"
logValues({id: 1, name: "Vitalik",  website: "vitalik.ca"}) // Выводит в консоль три сообщения: 1, "Vitalik", "vitalik.ca"



// console.log("Практика 89")
// const prices = {
//   ethereum: {
//     usd: 3382,
//     eur: 2916,
//     rub: 246392
//   }
// }

// const getPrice = (currency) => {
//   return prices.ethereum[currency]
// }







// console.log(getPrice(prices))
// console.log("Практика 89 - конец")
const account1 = {
  nonce: 186,
  balance: 4032522415168559363
}

console.log(account1.codeHash) // undefined, так как поле codeHash есть только у контрактов



console.log(`Balance: ${account1} WEI`) // "Balance: [object Object] WEI
console.log(`Balance: ${account1.balance} WEI`) // Правильны вариант

const pudgyPenguin = {
  id: 1816,
  body: "Lab Coat",
  head: "Sombrero"
}

const values = Object.values(pudgyPenguin)
console.log(values) // [1816, "Lab Coat", "Sombrero"]

const pudgyPenguin1 = {
  id: 1816,
  body: "Lab Coat",
  head: "Sombrero"
}

const entries = Object.entries(pudgyPenguin1)
console.log(entries)

const getCapsValues = obj => {
  return Object.values(obj).map(element =>{ return element.toUpperCase()})
}

console.log(getCapsValues({body: "Lab Coat"})) // ["LAB COAT"]
console.log(getCapsValues({body: "Lab Coat", head: "Sombrero"})) // ["LAB COAT", "SOMBRERO"]

const logEntries = obj => {
  console.log(Object.entries(obj))
}

// Сверьтесь с результатом в консоли
logEntries({body: "Kimono Orange", head: "Backwards Hat Red"}) 
logEntries({body: "Puffer Blue", head: "Mohawk Purple"})


const tps = 30
const blockchain = {
  name: "Ethereum",
  tps// = tps: tps
}

const isAdmin = false
const darkMode = true

const settings2 = {
  isAdmin,
  darkMode
}


const sum = (a, b) => {
  console.log(a) // 1
  console.log(b) // 3

  let total = a + b
  console.log(total) // 4
  
  return total
}

sum(1, 3)

const sum2 = (a, b) => {
  console.log({a}) // {а: 1}
  console.log({b}) // {b: 3}

  let total = a + b
  console.log({total}) // {total: 4}
  
  return total
}

sum2(1, 3)

const getAccount = (address, balance) => {
  return {address, balance}
}

console.log(getAccount("1BoatSLRHtKNngkdXEeobR76b53LETtpyT", 211234))

const getResult = (a, b) => {
  console.log({a}, {b})
  let result = a * b
  console.log({result})
  return result
}

getResult(2, 3)
// {a: 2, b: 3}
// {result: 6}

const config = {
  id: 1,
  isAdmin2: false,
  theme: {
    dark: true,
    zoom: false
  }
}

console.log(config)
// const id = config.id
// const isAdmin2 = config.isAdmin2
// const theme = config.theme
// console.log(id)
// console.log(isAdmin2)
// console.log(theme)
const {id, isAdmin2, theme} = config
// const {id, theme} = config //можно деструкторизировать часть переменных
const account = {
  address: "0xFF9...13D7",
  type: "contract"
}

const {address, balance = 0} = account
console.log(balance) // 0
console.log(account)
const type = "USB-C"

const account3 = {
  address3: "0xFF9...13D7",
  type: "contract"
}

const {type: accountType, address3} = account3
console.log(accountType) // "contract"

const punk7804 = {
  owner: "0xf4b4a",
  type: "Alien"
}

const punk8857 = {
  type: "Zombie",
  accessories: "3D Glasses"
}

const megaPunk = {...punk7804, ...punk8857}
console.log(megaPunk) // {owner: "0xf4b4a", type: "Zombie", accessories: "3D Glasses"}



// Пример использования
const rare = {
  head: "Ornate Helm of Rage"
}

const common = {
  head: "Linen Hood",
  chest: "Chain Mail",
  weapon: "Grave Wand"
}

const joinLoot = (rare, common) => {
  return {...common,...rare };
}

console.log(joinLoot(rare, common))
// {head: "Ornate Helm of Rage", chest: "Chain Mail", weapon: "Grave Wand"}

const getRarityScore = (loot) => {

  const{bag, score} = loot;

  return `Мешок #${bag} имеет ${score} очков редкости.`
}

console.log(getRarityScore({bag: 6189, score: 164.41}))
// "Мешок #6189 имеет 164.41 очков редкости."

const getRarityScoreRank = (loot) => {

  const{bag, score, rank=0} = loot;

  return `Мешок #${bag} имеет ${score} очков редкости и занимает ${rank} место в рейтинге.`
}

console.log(getRarityScoreRank({bag: 6189, score: 164.41, rank: 2372}))
// "Мешок #6189 имеет 164.41 очков редкости и занимает 2372 место в рейтинге."
console.log(getRarityScoreRank({bag: 7498, score: 40.39})) // rank не указан
// "Мешок 7498 имеет 40.39 очков редкости и занимает 0 место в рейтинге."

let address3 = undefined
if (dao.members && dao.members.founder && dao.members.founder.address3)
{
  console.log(address3 = dao.members.founder.address3)
}