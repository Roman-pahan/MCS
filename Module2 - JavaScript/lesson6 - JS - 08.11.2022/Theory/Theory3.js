

const auto = {
    brand: 'Tesla',
    model: 'ModelX',
    // details: {
    //     color: 'красный',
    //     year: 2021,
    //     atStock: true
    // }
}

const cars = [auto];

cars.forEach(car =>{
    console.log(`${car.brand} ${car.details?.year}: цвет - ${car.details?.color}`)
})

const getBalance = wallet => {
  return console.log(wallet?.ethereum?.balance.toUpperCase())
}

// Примеры использования
getBalance({ethereum: {balance: "0.2 eth"}}) // "0.2 ETH"
getBalance({ethereum: null}) // undefined
getBalance({}) // undefined

const getAddress = address => {
    return address ?? "wagmi.eth" //Предоставление дефолтного значения - "Коротков замыкание"
  }
  
  console.log(getAddress("mcs.eth")) // "mcs.eth"
  console.log(getAddress(null)) // "wagmi.eth"
  console.log(getAddress(undefined)) // "wagmi.eth"

//Комбинация с функциями по умолчанию
  const getPlaceholder = () => {
    console.log("Вызов getPlaceholder")
    return "Anon"
  }
  
  const sayHello = name => {
    return `Hello ${name ?? getPlaceholder()}`
  }
  
  console.log(sayHello("Vitalik")) // "Hello Vitalik"
  console.log(sayHello())



  const getBalance1 = address => {
    return console.log(address?.balance ?? "N/A")
}

// Примеры использования
getBalance1({balance: 42}) // 42
getBalance1({}) // "N/A"

const getGreeting = user => {
      return `Привет, ${user?.name ?? "аноним"}`
  }
  
  // Примеры использования
  console.log(getGreeting({name: "Виталик"})) // "Привет, Виталик"
  console.log(getGreeting({})) // "Привет, аноним"

  const dao = {
    members:{
        founder:{
            // address9: "rkferjgek"
        }
    }
  }


//РАБОЧИЙ КОД
//   let address9 = undefined
//     if (dao.members && dao.members.founder && dao.members.founder.address9) {
//     console.log(address9 = dao.members.founder.address9)
//     } else {
//         address9 = "N/A"
//         console.log(address9)
//     }

//РЕФАКТОРИНГ
const address9 = dao.members?.founder?.address9 ?? "N/A"

console.log(address9)





const network = {
    chainId: 1
  }
  
  const url = "https://" + (network.url ?? "")
  console.log(url) // https://undefined //("https://" + network.url) ?? ""

const getChainId = network => {
  return (network?.info?.chainId ?? 0)
}

console.log("Примеры использования")
console.log(getChainId({info: { chainId: 31337}})) // 31337
console.log(getChainId({info: null})) // 0
console.log(getChainId({})) // 0


// const getTxValue = tx => {
//     if (tx.details && tx.details.value && tx.details.value.eth) {
//       return tx.details.value.eth
//     }
//     return "N/A"
//   }
  

const getTxValue = tx => {
    return ((tx.details?.value?.eth) ?? "N/A")
  }
  // Примеры использования
  console.log(getTxValue({hash: 0x1, success: false})) // "N/A"
  console.log(getTxValue({hash: 0x2, success: true, details: {value: {eth: 0.2}}})) // 0.2




const getNetworkName = network => {
    return ((network.info?.name.toLowerCase())??"network")
} 

// Примеры использования
console.log(getNetworkName({info: {name: "Rinkeby"}})) // "rinkeby"
console.log(getNetworkName({info: null})) // "network"
console.log(getNetworkName({})) // "network"



// const getPushNotification = status => {
//     if (status === "received") {
//       return "Ресторан готовит заказ."
//     } else if (status === "prepared") {
//       return "Передаем заказ курьеру."
//     } else if (status === "picked") {
//       return "Курьер скоро будет у вас!"
//     } else if (status === "arrived") {
//       return "Заказ доставлен!"
//     } else {
//       return "Статус неизвестен"
//     }
//   }

//   console.log(getPushNotification("received"))

const getPushNotification = status => {
    const notifications = {
      received: "Ресторан готовит заказ.",
      prepared: "Передаем заказ курьеру.",
      picked: "Курьер скоро будет у вас!",
      arrived: "Заказ доставлен!"
    }
  
    return notifications[status] ?? "Статус неизвестен"
  }
  console.log(getPushNotification("received"))


//   const getTxStatus = tx => {
//     if (tx.status === "pending") {
//         return "Ожидаем подтверждения от сети."
//     } else if (tx.status === "confirmed") {
//         return "Пробуем выполнить транзакцию."
//     } else if (tx.status === "canceled") {
//         return "Не удалось выполнить транзакцию."
//     } else if (tx.status === "success") {
//         return "Транзакция выполнена успешно!"
//     } else {
//         return "Статус транзакции недоступен."
//     }
// }



const getTxStatus = tx => {
    const messages = {
        pending: "Ожидаем подтверждения от сети.",
        confirmed: "Пробуем выполнить транзакцию.",
        canceled: "Не удалось выполнить транзакцию.",
        success: "Транзакция выполнена успешно!"
    }
    return messages[tx.status] ?? "Статус транзакции недоступен."
}

const tx1 = {status: "pending"}
console.log(getTxStatus(tx1)) // Ожидаем подтверждения от сети.
const tx2 = {status: "success"}
console.log(getTxStatus(tx2)) // Транзакция выполнена успешно!


const string = "stonks"
const number = 0

if (string) { // ✅
  console.log("Строка в условии") 
}

if (number) { // ❌
  console.log("Число в условии") 
}

// Преобраузются в false:
// 🤥 false (уже false)
// 🤥 null
// 🤥 undefined
// 🤥 0
// 🤥 NaN
// 🤥 "" (пустая строка без пробела)


// !true // false
// !false // true
// !"stonks" // false
// !0 // true

// if (!name) { // Если НЕТ name, то...
//     //...
//    }