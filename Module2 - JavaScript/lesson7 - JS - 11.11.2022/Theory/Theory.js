// const firstToken = new Token("FTM")
// firstToken.isStableCoin() // false

// const secondToken = new Token("DAI")
// secondToken.isStableCoin() // true

// class Token {
//     constructor(ticker) {
//       // Привязка параметра конструктора к переменной экземпляра.
//       this.ticker = ticker
//     }
  
//     isStableCoin() {
//       // Возвращает true, если тикер является стейблкоином, и false, если нет.
//     }
  
//     isFiatCoin() {
//       // Возвращает true, если тикер относится к фиатным валютам, и false, если нет.
//     }
//   }

class Token {
    constructor(supply) {
        this.supply = supply
        console.log("Токен создан!")
      
    }
  }
  
  const mintToken = () => {
    return new Token(10000)
  }

  const token = new Token
  

  class Wallet {
    constructor(address, balance) {
      this.address = address
      this.balance = balance
      console.log("Кошелек создан!")
    }
  }
  
  const createWallet = (a, b) => {
    return new Wallet(a, b)
  }

  const wallet = new Wallet

    class DoYourOwnResearch {

    }

    class Account {
        constructor(address,balance) {
        console.log(`Счет ${address} создан с балансом ${balance}!`)
        // Создаем переменную this.address со значением address
        this.address = address
        // Создаем переменную this.balance со значением balance
        this.balance = balance
        // Переменная экземпляра не из параметра конструктора.
        this.nonce = 42
        }
        
      }
    //   Однако, чтобы переменные address и balance стали доступны для других методов
    //    класса за пределами функции-конструктора нам нужно задать их значения так 
    //    называемым переменным экземпляра
    const account = new Account("0x0000", 100)
    console.log(account)

    class Account2 {
        constructor(address, balance,nonce){
            this.address = address
            this.balance = balance
            this.nonce = nonce
        }
    }
    
    const newAccount = new Account2("0x0000", 100, 42)
    console.log(newAccount)

    class Transaction {
        constructor(value,isFinalized){
            this.value = value
            this.isFinalized = isFinalized
        }
    }
    
    const newTx = new Transaction(100, true)
    console.log(newTx)

    class Account3 {
        constructor(address, balance) {
          this.address = address
          this.balance = balance
        }
      
        getBalance() {
          return `Баланс: ${this.balance}` //balance просто balance не сработает
        }
      }
      
      const acc = new Account3("0x0000", 1000)
      console.log(acc.getBalance()) // Баланс: 1000 

      class Transaction2 {
        constructor(value, isFinalized) {
          this.value = value
          this.isFinalized = isFinalized
        }
        
        getDetails() {
          if(this.isFinalized) {
            return `Перевод ${this.value} wei завершен!`
          } else {
            return "Транзакция в процессе..."
          }
        }
      }
      
      const firstTx = new Transaction2(100, true)
      console.log(firstTx.getDetails()) // Перевод 100 wei завершен!
      const secondTx = new Transaction2(999, false)
      console.log(secondTx.getDetails()) // Транзакция в процессе...


    class Punk {
        constructor (id,alien){
            this.id = id
            this.alien = alien
        }
        getId(){
            return `#${this.id}`
        }

        isAlien(){
            return this.alien === "Alien"
    }
}
    
    const punk3100 = new Punk(3100, "Alien")
    console.log(punk3100.getId()) // "#3100"
    console.log(punk3100.isAlien()) // true
    const punk5217 = new Punk(5217, "Ape")
    console.log(punk5217.getId()) // "#5217"
    console.log(punk5217.isAlien()) // false


    const getId = id => {
        return `#${id}`
      }
      
      const isAlien = type => {
        return type === "Alien"
      }
      
      console.log(getId(3100)) // "#3100"
      console.log(isAlien("Alien")) // true\


      class nPunk {
        constructor(id, price) {
          this.id = id
          this.price = price
        }
        
        getId() {
          return `#${this.id}`
        }
      
        printPrice() {
          return `Панк ${this.getId()} стоит ${this.price} ETH.`//вызывает метод через this.
        }
      }
      
      const newpunk3100 = new nPunk(3100, 4200)
      console.log(newpunk3100.printPrice()) // "Панк #3100 стоит 4200 ETH."


      class Todos {
        // В данном случае конструктор не принимает никаких параметров,
        // а только задает массив объектов — пунктов для списка задач
      
        constructor() {
          this.todos = [
            {
              title: "Изучить Solidity",
              category: "работа"
            },
            {
              title: "Продлить Netflix",
              category: "личное"
            }
          ]
        }
      
        // Задание: Напишите код для каждого из методов экземпляра
      
        getAll() {
            return this.todos;
          }
        
          getCount() {
            return this.todos.length;
          }
        
          add(title, category) {
            this.todos.push({title, category})
            return this.todos
          }
        
          getWork() {
            return this.todos.filter( x => {             
                return (x.category === "работа")         
            })

            
          }
        
          getWorkCount() {
            return this.getWork().length;
          }
        
          getPersonal() {
            return this.todos.filter( x => {             
                return (x.category === "личное")         
            })
          }
        
          getPersonalCount() {
            return this.getPersonal().length;
          }
        }

        const newTx7 = new Todos()
        console.log(newTx7.getPersonalCount())

     





    class Punk8 {
        constructor(id) {
            this.id = id
          }

        get id() {
            console.log("Сработал геттер id")
            return this._id
        }
        
        set id(value) {
            console.log("Сработал сеттер id")
            this._id = Number.parseInt(value, 10)
        }
        }

        const punk = new Punk8("3100")
        // console.log(punk.id) // 3100
        punk.id = "6529"
        console.log(punk.id) // 6529
      
    //   console.log(punk._id) // 6529
    //   console.log(punk.id) // undefined

    console.log("Новое задание")
    class Tasks {
        constructor(todos) {
          this._todos = todos
        }
        get todos() {
            console.log("Сработал геттер todos")
            return this._todos.join(", ")
        }
        
        // set todos(value) {
        //     console.log("Сработал сеттер todos")
        //     this._todos
        // }
      
      }
      
      // Пример использования
      const tasks = new Tasks(["Выспаться", "Попробовать Zwift"])
      console.log(tasks.todos) // "Выспаться, Попробовать Zwift"




      console.log("Новое задание2")
      class Transaction88 {
        constructor(amount) {
          this.amount = amount
        }
        get amount() {
            console.log("Прием переведенного значения экземпляру")
           return this._wei
            
        }
        
        set amount(value) {
            console.log("Прием значение и перевод")
            this._wei = Number.parseFloat(value, 10) * (Math.pow(10, 18))
        }

      
      }
      
      // Пример использования с инпутами в ETH
      const tx = new Transaction88(1.5)
      console.log(tx.amount) // 1500000000000000000
      tx.amount = 2
      console.log(tx.amount) // 2000000000000000000
      
    //   

    class Punk10 {
      static getTotalSupply2() {
        const totalSupply = 10000
        return totalSupply
      }
    }

    console.log(Punk10.getTotalSupply2())






    // course.markCompleted()
    // course.setGrade(5)
    // course.getCertificate()

    class Course {
      constructor(name, isCompleted) {
        this.name = name
        this.isCompleted = isCompleted
      }
      
      markCompleted() {
        this.isCompleted = true
        return this // Доступен внутри цепочки
      }
    
      setGrade(grade) {
        this.grade = grade
        return this // Доступен внутри цепочки
      }
    
      getCertificate() {
        this.issueCertificate = true
        return this // Доступен внутри цепочки
      }
    }

    const course = new Course("Solidity", false)
    console.log(course.markCompleted().setGrade(5).getCertificate())


    

    class Halving {
      constructor(totalSupply) {
        this.totalSupply = totalSupply
      }
    
      cutSupply() {
        if (Halving.getVote()) {
          this.totalSupply /= 2
        }
      }
    
      static getVote() { //для такого вызова ниже нужен статический метод
        return Math.random() <= 0.5 // Вероятность 50% на true
      }
    }
    
    // Пример использования новой версии класса
    console.log(Halving.getVote()) // Должен вернуть true или false
    const halving = new Halving(1000000)
    halving.cutSupply() //либо делает обрезание либо нет ( в данном контексте не возвращает сам значение, но присваивает его для totalSupply )
    console.log(halving.totalSupply) // Должен вернуть 1000000 или 500000 (totalSupply)

    //по больщому счету, если мы хотил спрятать функцию в класс, которая не зависит от параметров в конструкторе, то
    //её нужно обозначить как static и обозначить обращение через название класса без использования this
    //метод static работает напрямую без создания экземпляра


    class TokenSale {
      constructor() {
        this.amount = 1000
        this.token = "CRV"
        this.inWhitelist = false
      }
    
      addToWhitelist() {
        this.inWhitelist = true
        this.amount *= 10
        return this
      }
    
      setToken(symbol) {
        this.token = symbol
        return this
      }
    
      applyBoost(percent) {
        this.amount += this.amount / 100 * percent
        return this
      }
    }
    
    // Пример использования новой версии класса
    const tokenSale = new TokenSale
    console.log(tokenSale.addToWhitelist().setToken("CVX").applyBoost(5))
    console.log(tokenSale.amount) // Должен возвращать 10500 




    class Member {
      constructor(pseudonym, address) {
        this.pseudonym = pseudonym
        this.address = address
      }
    
      getPseudonym() {
        return this.pseudonym
      }
    
      getAddress() {
        return this.address
      }
    }

    class Founder extends Member {
      constructor(pseudonym, address, votes) {
        super(pseudonym, address) // Должен стоять вверху
        this.votes = votes
      }
      getPseudonym() {
        return super.getPseudonym()+ " (founder)"                                //`${this.pseudonym} (founder)`
      }
    
      vote() {
        console.log(`${this.votes} голосов засчитано!`)
      }
    }

    const founder = new Founder("PennilessWassie", "0x9c50…dac5",13) //запуск класса
    founder.vote() // Выведет в консоль "Ваши голоса засчитаны!"
    console.log(founder.getPseudonym()) // "PennilessWassie"
    console.log(founder.getAddress()) // "0x9c50…dac5"
    console.log(founder.vote()) // "0x9c50…dac5"
    const member = new Member("Roman", "0xddfj")
    console.log(member.getPseudonym())
    console.log(member.getAddress())


    class User {
    constructor(address, balance) {
      this.address = address
      this.balance = balance
    }

      getAddress() {
        return this.address
      }
      
      getBalance() {
        return this.balance
      }
}

class Owner extends User {
  getAddress() {
    return `${this.address} [owner]`
  }
	
  withdrawEth() {
    return "Transaction completed"
  }
}




    class User1 {
      constructor(address,balance){
        this.balance = balance
        this.address = address
      }

      getBalance() {
        return this.balance
      }

      getAddress() {
        return this.address
      }

    }
    
    class Owner1 extends User1 {
      getAddress(){
        return `${this.address} [owner]`
      }

      withdrawEth(){
        return `Transaction completed`
      }
    }

    const user = new User1("shitty.eth", 7.85)
    console.log(user.getBalance()) // 7.85
    console.log(user.getAddress()) // "shitty.eth"

    const owner = new Owner1("zeneca.eth", 1.55)
    console.log(owner.getBalance()) // 1.55
    console.log(owner.getAddress()) // "zeneca.eth [owner]"
    console.log(owner.withdrawEth()) // "Transaction completed"





    class VC {
      constructor(company, million){
        this.company = company
        this.million = million
      }

      getDeal(){
        return `${this.company} привлекли ${this.million}м долларов`
      }

      getCompany() {
        return this.company
      }

      getMillion() {
        return this.million
      }
    }
    
    class Multicoin extends VC {

      getInvestor() {
        return "Multicoin Capital"
      }
    }
    
    class Dragonfly extends VC {

      getInvestor() {
        return "Dragonfly Capital"
      }
    }


    const ceramic = new Multicoin("Ceramic Network", 30)
    console.log(ceramic.getDeal()) // "Ceramic Network привлекли 30м долларов"
    console.log(ceramic.getInvestor()) // "Multicoin Capital"

    const gelato = new Dragonfly("Gelato Network", 11)
    console.log(gelato.getDeal()) // "Gelato Network привлекли 11м долларов"
    console.log(gelato.getInvestor()) // "Dragonfly Capital"



    class User2 {
      constructor(address, balance) {
          this.address = address
          this.balance = balance
      }
    
      getAddress() {
        return this.address
      }
      
      getBalance() {
        return this.balance
      }
    }
    
    class Owner2 extends User2 {
      constructor(address, balance, role) {
        super(address, balance)
        this.role = role
      }

      getAddress() {
        return `${super.getAddress()} [${this.role}]`
      }
      
      withdrawEth() {
        return "Transaction completed"
      }
    }

    const owner2 = new Owner2("goth.eth", 1.51, "deployer")
    console.log(owner2.getAddress())

    class Rectangle {
      constructor(width, height) {
        this.width = width
        this.height = height
      }
    
      isSquare() {
        return this.width === this.height
      }
    }

    xzibit = new Rectangle(15, 15)
    console.log(xzibit.isSquare())
    console.log(xzibit)
    // console.log()



    // console.log(typeof Rectangle)


//     // Конструктор
// function Rectangle(width, height) {
//   this.width = width
//   this.height = height
// }

// // Метод экземпляра
// Rectangle.prototype.isSquare = function() {
//   return this.width === this.height
// }
console.log("Попытка")

// function Multisig(owners, min) {
//   this.owners = owners
//   this.min = min
// }

// Multisig.prototype.approveTx = function(sigs) {
//   return sigs >= this.min
// }

// Multisig.prototype.addOwner = function(owner) {
//   this.owners.push(owner)
// }

// const siga = new Multisig("собаки", 2)
// console.log(siga.addOwner())
// // console.log(siga.approveTx())



  // function Gorilla() { 

      
  //  }
  // function Banana() { 
  //   eat(){
  //     console.log("Привет")
  //   }
  //  }
  // function GorillaBanana() {  }
  
  // Gorilla.prototype.eat = function() { 
  //   if(this.gas > 0){
  //     this.gas = this.gas -20;
  //     return this.gas;
  //   }else{
  //     console.log("Бензин закончился")
  //   }
  //  }
  // Banana.prototype.grow = function() { 

  //  }
  
  // GorillaBanana.prototype.eat = Gorilla.prototype.eat
  // GorillaBanana.prototype.grow = Banana.prototype.grow

  class Welcome {
    sayGm() {
      return "gm!"
    }
  }
  
  const welcome = new Welcome()
  console.log(welcome.sayGm())

console.log(Object.getPrototypeOf(welcome))
// {constructor: ƒ, sayGm: ƒ}
console.log(Object.getPrototypeOf(Object.getPrototypeOf(welcome)))
// {constructor: ƒ, hasOwnProperty: ƒ, isPrototypeOf: ƒ, …}
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(welcome))))


class Parent {
  constructor(perec, welcome){
    this.perec = perec
    this.welcome = welcome
  }
  parentMethod() {
    return `${this.perec}${this.welcome}!`
  }
}

class Child extends Parent {
  constructor(perec,welcome,malish){
    super(perec,welcome)
    this.malish = malish
}



  childMethod() {
    return (`${this.perec} ${this.welcome}! А ты все лишь оказывается ${this.malish}...` + super.parentMethod())
  }
}
//Super для вызова функций из родительского метода
const child = new Child("Перец", "Велкам", "Малыш")
console.log(child.childMethod())

console.log(Object.getPrototypeOf(child))
// {constructor: ƒ, childMethod: ƒ}
console.log(Object.getPrototypeOf(Object.getPrototypeOf(child)))
// {constructor: ƒ, parentMethod: ƒ}
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(child))))
// {constructor: ƒ, hasOwnProperty: ƒ, isPrototypeOf: ƒ, …}
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(child)))))
// null

class Coin {
  // Сделать: constructor, collect(), getValue(), getMessage()
  constructor(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }

  collect() {
    return this.count++;
  }

  getValue() {
    return this.count * this.price;
  }

  getMessage() {
    return `${this.count} ${this.name} в кошельке"`;
  }
}

class Ether extends Coin {
  constructor(name, price, count) {
    super(name, price, count);
    this.name = "Ether";
    this.price = 3000;
    this.count = 1;
  }
}

class Bitcoin extends Coin {
  constructor(name, price, count) {
    super(name, price, count);
    this.name = "Bitcoin";
    this.price = 50000;
    this.count = 1;
  }
}

 


class Wallet1 extends Bitcoin{
  // Сделать: constructor, addCoin() и getBalance()
  constructor(name, price, count, coin){
     super(name, price, count)
     this.coin = coin

  }

  addCoin() {
    const coin = {
      name: this.name,
      price: this.price,
      count: this.count
    }
    let coins = [];
    coins.push(coin);
    return coins
  }

  getBalance() {}
}
const bitcoin = new Bitcoin()
console.log(bitcoin.collect())
const wallet3 = new Wallet1()
console.log(wallet3.addCoin())

