const { check } = require("prettier")

const block = {
  height: 13272801,
  transactions: 452,
  minedBy: "Spark Pool",
  reward: 2.4811,
  stateRoot: "0xaa8f4"
}

console.log(block.height)
console.log(block.transactions)
console.log(block.minedBy)
console.log(block.reward)
console.log(block.stateRoot)


//const оставляет возможность редактирования содержимого объекта
block.height = 13272801 + 1
block.transactions = 0
block.minedBy = "Hiveon Pool"

console.log(block.height)
console.log(block.transactions)
console.log(block.minedBy)
console.log(block.reward)
console.log(block.stateRoot)


// function getAnimeDetails() {
//   return {
//     title: "Dr. Stone",
//     episodes: 24,
//     ongoing: false
//   }
// }
function getAnimeDetails() {
  const film = {
    title: "Harry Potter",
    episodes: 8,
    ongoing: false
  }

  return film
}

console.log(getAnimeDetails())


function getEpisodes(anime) {
  return `Аниме ${anime.title} включает ${anime.episodes} серий`
}

console.log(getEpisodes({title: "Code Geass", episodes: 25})) // "Аниме Code Geass включает 25 серий"
console.log(getEpisodes({title: "Death Note", episodes: 37})) // "Аниме Death Note включает 37 серий"


function removeOpening(episode) {
  episode.opening = false;
  return episode
}

console.log(removeOpening({number: 23, opening: true})) // {number: 23, opening: false}
console.log(removeOpening({number: 37, opening: true})) // {number: 37, opening: false}


const bitcoin = { title: "Bitcoin", price: 47311 }

function renderTableRow(details) {
  let html = "";
  html += `<tr>
      <td>${details.title}</td>
      <td>${details.price}</td>
  </tr>`;
  return html;
}

console.log(renderTableRow(bitcoin))

function addOne(number = 0) { //для исключения underfined используются параметры по умолчанию
  return number + 1
}

console.log(addOne(2)) // 3
console.log(addOne(5)) // 6
console.log(addOne()) // ?


function welcomeUser(name = "user") {
  return `Hello ${name}`
}

console.log(welcomeUser("Vitalik")) // "Hello Vitalik"
console.log(welcomeUser()) // "Hello user"

function sum(a=0, b=0) {
  return a + b
}

console.log(sum(2, 4)) // 6
console.log(sum(3, 6)) // 9
console.log(sum(3)) // NaN (должна возвращать 3)
console.log(sum()) // NaN (должна возвращать 0)

function logEpisodes(season = []) {
  season.forEach(function(episode = 0) {
    console.log(episode)
  })
}

logEpisodes([1, 2, 3, 4]) // выводит номера серий в консоль
logEpisodes() // не должна ломаться

//одно и тоже
// function sum(a, b) {
//   return a + b
// }
// const sum = function(a, b) {
//   return a + b
// }
// const sum = (a, b) => {
//   return a + b
// }




// function triple

const triple = (value) => {
  return value * 3
}

console.log(triple(2)) // 6

const triple2 = (x) => {
  return x*3
}

console.log(triple2(5)) // 6

const sum1 = (a,b) => {
  return a+b
}

console.log(sum1(4,5))

const glucoseChecks = [5.4, 8.1, 6.3, 4.9]

glucoseChecks.forEach(glucoseCheck => {
  console.log(glucoseCheck)
})

const glucoseChecks2 = [5.4, 8.1, 6.3, 4.9]
const glucoseSpikes = glucoseChecks2.filter(glucoseCheck => {
  return glucoseCheck > 7.5
})

console.log(glucoseSpikes) // [8.1]

console.log("Практика 57")
const getAvgGlucose = (checks) => {
  let sum = 0;
  let amount = 0;
  checks.forEach( check=>{
    sum +=check;
    amount++;
    
  })

  return (sum/amount).toFixed(1);
}

console.log(getAvgGlucose([5.4, 8.1, 6.3, 4.9])) // 6.2

const getGlucoseSpikes = (checks) => {
  return checks.filter(check=>{
   return check > 7.5;
  })

}

console.log(getGlucoseSpikes([4.2, 8.5, 6.6, 9.1, 5.0])) // [8.5, 9.1]


const sum4 = (a, b) => {
  a + b
}
console.log(sum4(1, 2)) // undefined

const sum5 = (a, b) => a + b //Другой подход


console.log(sum5(1, 2)) // 3

// Чтобы скрытый return сработал должны выполняться следующие условия:
// 1️⃣ Функция должна быть стрелочной.
// 2️⃣ Тело функции должно помещаться на одной линии.
// 3️⃣ Нужно убрать фигурные скобки {} и return.


const isHighRated = (imdbScore) => { //возвращает true/false
  return imdbScore > 8
}

const isHighRated2 = (imdbScore2) => imdbScore2 > 8 //возвращает true/false, тоже самое, на одной и той же строке.

console.log(isHighRated(12))
console.log(isHighRated2(12))
// [12,10,4,2,33,5]


const triple3 = value =>  value * 3

console.log(triple3(2)) // 6
console.log(triple3(3)) // 9



const multiply = (multiply1, multiply2) => multiply1*multiply2
console.log(multiply(2, 4)) // 8
console.log(multiply(3, 3)) // 9

const imdbScores2 = [8.2, 6.3, 8.8, 5.8, 9.1]
const imdbScores3 = [8.2, 6.3, 8.8, 5.8, 9.1]

const getHighRated2 = imdbScores2.filter(function(imdbScore) {
  return imdbScore > 8
})

const getHighRated3 = imdbScores3.filter(imdbScore =>  imdbScore > 8)

console.log(getHighRated2)
console.log(getHighRated3)

const testnets = ["Ropsten", "Kovan", "Rinkeby", "Goerli"]

const result = testnets.find(function(testnet) {
  return testnet === "Rinkeby"
})

console.log(result)

const testnets2 = ["Ropsten", "Kovan", "Rinkeby", "Goerli"]

const result2 = testnets2.find(testnet => testnet === "Goerli")

console.log(result2)

const numbers3 = [1, 2, 3, 4]

const doubled3 = numbers3.map(number => number * 2)

console.log(doubled3) // [2, 4, 6, 8]

const getTopRetweets = retweets => retweets.filter(retweet => retweet>100)

console.log(getTopRetweets([2, 234, 21, 620])) // [234, 620]
console.log(getTopRetweets([234, 47, 157])) // [234, 157]

const getLowRetweets = retweets => retweets.filter(retweet => retweet<10)

console.log(getLowRetweets([2, 23, 4, 62])) // [2, 4]
console.log(getLowRetweets([34, 7, 15, 0])) // [7, 0]


const getTwitterHandle = (users, searchUser) => (users.find(user=>user === searchUser))

console.log(getTwitterHandle(["@kyled116", "@dhof", "@karl_dot_tech"], "@kyled116")) // "@kyled116"
console.log(getTwitterHandle(["@ukolodny", "@punk4156", "@iamDCinvestor"], "@cdixon")) // undefined

const getUsernameLengths = users => {
  return users.map(user => user.length - 1)
}

console.log(getUsernameLengths(["@kyled116", "@dhof", "@karl_dot_tech"])) // [8, 4, 13]
console.log(getUsernameLengths(["@ukolodny", "@punk4156", "@iamDCinvestor"])) // [8, 8, 13]


const name = "   Beeple Crap "
console.log(name.trim()) // "Beeple Crap"

const sentence = "Non-fungible token"

console.log(sentence.startsWith("Non")) // true
console.log(sentence.startsWith("Non-f")) // true
console.log(sentence.startsWith("en")) // false
console.log(sentence.startsWith("token")) // false 

console.log(sentence.endsWith("Non")) // false 
console.log(sentence.endsWith("Non-f")) // false 
console.log(sentence.endsWith("en")) // true
console.log(sentence.endsWith("token")) // true

console.log(sentence.includes("fun") )// true
console.log(sentence.includes("le to") )// true
console.log(sentence.includes("NFT") )// false
console.log(sentence.includes("tokens") )// false

const getTwitterHandle1 = twitterHandle => {
  if(twitterHandle.startsWith("@")){
      return twitterHandle;
    } else{
      return ("@" + twitterHandle);
    }
}

console.log(getTwitterHandle1("@kyled116")) // "@kyled116"
console.log(getTwitterHandle1("hasufl")) // "@hasufl"


const getCurrency = price => {
  if (price.includes("$")){
    console.log("Доллар")
  }
  else if(price.includes("€")){
    console.log("Евро")
  }else{
    console.log("Недоступно")
  }
}
getCurrency("$100") // "Доллар"
getCurrency("5€") // "Евро"
getCurrency("30 USD") // "Недоступно"


//Формирование массива с определенным разделителем из строки
let rollups = "Arbitrum,Optimism,Starkware"
rollups.split(",") // ["Arbitrum", "Optimism", "Starkware"]
console.log(rollups)

const kampai = "За ростовскую братву!"
const replace = kampai.replace(" ", "_") // "За_ростовскую братву!"
console.log(kampai) // "За ростовскую братву!"
const allreplace = kampai.replaceAll(" ", "_") // "За_ростовскую_братву!"
console.log(kampai)
console.log(replace)
console.log(allreplace)


const getSlug = title => {
  let string = title.toLowerCase()
  return string = string.substring(0,15).replaceAll(" ", "-")
  
}

console.log(getSlug("Shill your bags")) // "shill-your-bags"
console.log(getSlug("Buy the dips")) // "buy-the-dips"
console.log(getSlug("Ignore the FUD")) // "ignore-the-fud"
console.log(getSlug("We are all gonna make it")) // "we-are-all-gonn"


const getTodosNumber = todos => {
    todos =  todos.split(",")
    return todos.length
}

console.log(getTodosNumber("Сдать пластик,Купить капучинатор,Пересадить аглаонему")) // 3
console.log(getTodosNumber("Установить метамаск,Заправить картридж")) // 2


const users = [{
  id: 1,
  name: "Nick Szabo"
}, {
  id: 2,
  name: "Gavin Wood"
}]

const names = users.map(user => user.name) // ["Nick Szabo, Gavin Wood"]
const csv = names.join(", ") // "Nick Szabo, Gavin Wood"
console.log(users)
console.log(names)
console.log(csv)

//Работа с формированием html
const html = `<ul>
  ${users.map(user => `<li>${user.name}</li>`).join("")} 
</ul>`
console.log(html)//двойной ${${}}

console.log("Практика 71")
//Практика 71
function renderTableRows(rows) {
  const html = `${rows.map(row =>`<tr>${row.map(r=> `<td>${r}</td>`).join("")}</tr>`).join("")}
  </tr>`
  
  console.log(html)

}

renderTableRows([["Bitcoin", 47311], ["Ethereum", 3407], ["Solana", 163], ["Tether", 1]])


const getDropdown = (currencies) => {
  const html = `<option value="">Выберите валюту</option>${currencies.map(currency => `<option value=${currency.toLowerCase()}>${currency}</option>`).join("")}`
  return html;
}

  //`<option value=${currency.toLowerCase()}>${currency}</option>`)
console.log(getDropdown(["Bitcoin", "Ethereum", "Tether", "Solana"]))

console.log("После практики")
const levels = [5.6, 6.9, 3.5, 4.7, 6.3]
//Если все элементы соответствуют условию в колбек функции
const allSafe = levels.every(lvl => lvl < 7) // true
const allElevated = levels.every(lvl => lvl > 7) // false
console.log(levels)
console.log(allSafe)
console.log(allElevated)
//Если хотя бы один элемент соответствует условию в колбекфункции
const someLow = levels.some(lvl => lvl < 4) // true
const someTooLow = levels.some(lvl => lvl < 3) // false
console.log(someLow)
console.log(someTooLow)


const needOtrabotka = grades => {
  return grades.some(grade => grade < 3); 
}

console.log(needOtrabotka([3, 4, 5, 3])) // false
console.log(needOtrabotka([4, 2, 3, 5])) // true


const allFromMoscow = codes => {
  return codes.every(code => code === 495)
}

console.log(allFromMoscow([495, 495, 495])) // true
console.log(allFromMoscow([812, 495, 351])) // false


const scam = ["$ADA", "$XRP", "$EOS"]
scam.length = 0

console.log(scam) // []




const tokens = ["$UNI", "$LINK", "$DAI"]
// Удаляет первый элемент массива и присваивает его переменной firstItem
const firstItem = tokens.splice(1, 2) //внутри первая переменная (откуда отсчет), вторая переменная количество, splice создает новый массив
console.log(tokens) // ["$LINK", "$DAI"]
console.log(firstItem) // ["$UNI"]

const resetUser = roles => {
  return roles.length = [];
}

const user = ["Admin", "Moderator"]
resetUser(user)
console.log(user) // []


console.log("Практика 76")
const demoteUser1 = roles => {
  roles.splice(0,1);
  return roles;
}

const user2 = ["Admin", "Moderator", "Editor"]
console.log(demoteUser1(user2)) // ["Moderator", "Editor"]
console.log(demoteUser1(user2)) // ["Editor"]

const removeSecondary = roles => {
  return roles.splice(0,1);
}

const user4 = ["Admin", "Moderator", "Editor"]
console.log(removeSecondary(user4)) // ["Admin"]


const nums = [2, 4, 3]
console.log(nums.reduce((acc, cur) => {
  return acc + cur
}, 0)) // 9


const nums1 = [10, 2, 2]
console.log(nums1.reduce((acc, cur) => {
  return acc * cur
}, 1)) // 40


let nums5 = [10, 5, 15, 20]

let sum6 = nums5.reduce((acc, cur) => {
  console.log(`Аккумулятор: ${acc}`)
  console.log(`Текущее значение: ${cur}`)
  console.log("-----------------------")
  return acc + cur
}, 0)

console.log(`Итоговая сумма: ${sum6}`)

console.log("Punk")
let punks = [3100, 7804, 5217, 8857]

let sum7 = punks.reduce((acc, cur) => {
  return acc + cur
}, 0)

console.log(sum7);

console.log("Практика 80");
const sumPunks = punks => {
    let sumPunk = punks.reduce((acc,cur) =>{
      return acc + cur
    },0)
    return sumPunk;
}

console.log(sumPunks([3100, 7804, 5217, 8857])) // 24978
console.log(sumPunks([2140, 7252, 2338, 6275])) // 18005

const multiplyPunks = punks => {
    return punks.reduce((acc,cur)=>{
      return acc*cur
    },1)
}

console.log(multiplyPunks([3100, 7804])) // 24192400
console.log(multiplyPunks([2140, 7252, 2338])) // 36284076640


// const block10 = [13335416, 355]

// const blockHeight = block10[0]
// const totalTxs = block10[1]

// console.log(blockHeight) // 13335416
// console.log(totalTxs) // 355

//Тот же самый код с использованием деструктуризации
const block10 = [13335416, 355]
//[]= - деструктуризация
const [blockHeight, totalTxs] = block10

console.log(blockHeight) // 13335416
console.log(totalTxs) // 355

function App() {
  const [counter, setCounter] = useState(0)
  return null
}

const getBlockReport = block => {
  // Деструктурируйте blockHeight и totalTxs
  const [blockHeight, totalTxs] = block;
  return `Блок номер ${blockHeight} содержит ${totalTxs} транзакций.`
}

console.log(getBlockReport([9585604, 110])) // "Блок номер 9585604 содержит 110 транзакций."
console.log(getBlockReport([12585603, 185])) // "Блок номер 12585603 содержит 185 транзакций."


const getMinerInfo = block => {
  const [name, time] = block;
  return `Этот блок замайнил ${name} за ${time} секунд.`
}

console.log(getMinerInfo(["Nanopool", 25])) // "Этот блок замайнил Nanopool за 25 секунд."
console.log(getMinerInfo(["Ethermine", 11])) // "Этот блок замайнил Ethermine за 11 секунд."

const weapon = ["Wand of Vitriol"]
const chest = ["Dragonskin Armor"]

const gear = [...weapon, ...chest] //Конкатенация массивов (склеивание с помощью ...)
console.log(gear)


const loot = ["Amulet of Reflection", "Helm of Fury"]

const extraLoot = [...loot, "Pandemonium Moon Demon Husk of Detection"]
console.log(extraLoot) // ["Amulet of Reflection", "Helm of Fury", "Pandemonium Moon Demon Husk of Detection"]


const joinAssets = (wallet1, wallet2) => {
  return [...wallet1,...wallet2]
}

console.log(joinAssets(["21 IFY", "18 AAVE"], ["32 MATIC", "73 CRV"])) // ["21 IFY", "18 AAVE", "32 MATIC", "73 CRV"]
console.log(joinAssets(["8 DAI", "59 GTC"], ["5 DYDX", "46 SHIB"])) // ["8 DAI", "59 GTC", "5 DYDX", "46 SHIB"]

