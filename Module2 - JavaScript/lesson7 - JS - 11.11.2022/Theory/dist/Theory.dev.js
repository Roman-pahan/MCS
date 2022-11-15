"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
var Token = function Token(supply) {
  _classCallCheck(this, Token);

  this.supply = supply;
  console.log("Токен создан!");
};

var mintToken = function mintToken() {
  return new Token(10000);
};

var token = new Token();

var Wallet = function Wallet(address, balance) {
  _classCallCheck(this, Wallet);

  this.address = address;
  this.balance = balance;
  console.log("Кошелек создан!");
};

var createWallet = function createWallet(a, b) {
  return new Wallet(a, b);
};

var wallet = new Wallet();

var DoYourOwnResearch = function DoYourOwnResearch() {
  _classCallCheck(this, DoYourOwnResearch);
};

var Account = function Account(address, balance) {
  _classCallCheck(this, Account);

  console.log("\u0421\u0447\u0435\u0442 ".concat(address, " \u0441\u043E\u0437\u0434\u0430\u043D \u0441 \u0431\u0430\u043B\u0430\u043D\u0441\u043E\u043C ").concat(balance, "!")); // Создаем переменную this.address со значением address

  this.address = address; // Создаем переменную this.balance со значением balance

  this.balance = balance; // Переменная экземпляра не из параметра конструктора.

  this.nonce = 42;
}; //   Однако, чтобы переменные address и balance стали доступны для других методов
//    класса за пределами функции-конструктора нам нужно задать их значения так 
//    называемым переменным экземпляра


var account = new Account("0x0000", 100);
console.log(account);

var Account2 = function Account2(address, balance, nonce) {
  _classCallCheck(this, Account2);

  this.address = address;
  this.balance = balance;
  this.nonce = nonce;
};

var newAccount = new Account2("0x0000", 100, 42);
console.log(newAccount);

var Transaction = function Transaction(value, isFinalized) {
  _classCallCheck(this, Transaction);

  this.value = value;
  this.isFinalized = isFinalized;
};

var newTx = new Transaction(100, true);
console.log(newTx);

var Account3 =
/*#__PURE__*/
function () {
  function Account3(address, balance) {
    _classCallCheck(this, Account3);

    this.address = address;
    this.balance = balance;
  }

  _createClass(Account3, [{
    key: "getBalance",
    value: function getBalance() {
      return "\u0411\u0430\u043B\u0430\u043D\u0441: ".concat(this.balance); //balance просто balance не сработает
    }
  }]);

  return Account3;
}();

var acc = new Account3("0x0000", 1000);
console.log(acc.getBalance()); // Баланс: 1000 

var Transaction2 =
/*#__PURE__*/
function () {
  function Transaction2(value, isFinalized) {
    _classCallCheck(this, Transaction2);

    this.value = value;
    this.isFinalized = isFinalized;
  }

  _createClass(Transaction2, [{
    key: "getDetails",
    value: function getDetails() {
      if (this.isFinalized) {
        return "\u041F\u0435\u0440\u0435\u0432\u043E\u0434 ".concat(this.value, " wei \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D!");
      } else {
        return "Транзакция в процессе...";
      }
    }
  }]);

  return Transaction2;
}();

var firstTx = new Transaction2(100, true);
console.log(firstTx.getDetails()); // Перевод 100 wei завершен!

var secondTx = new Transaction2(999, false);
console.log(secondTx.getDetails()); // Транзакция в процессе...

var Punk =
/*#__PURE__*/
function () {
  function Punk(id, alien) {
    _classCallCheck(this, Punk);

    this.id = id;
    this.alien = alien;
  }

  _createClass(Punk, [{
    key: "getId",
    value: function getId() {
      return "#".concat(this.id);
    }
  }, {
    key: "isAlien",
    value: function isAlien() {
      return this.alien === "Alien";
    }
  }]);

  return Punk;
}();

var punk3100 = new Punk(3100, "Alien");
console.log(punk3100.getId()); // "#3100"

console.log(punk3100.isAlien()); // true

var punk5217 = new Punk(5217, "Ape");
console.log(punk5217.getId()); // "#5217"

console.log(punk5217.isAlien()); // false

var getId = function getId(id) {
  return "#".concat(id);
};

var isAlien = function isAlien(type) {
  return type === "Alien";
};

console.log(getId(3100)); // "#3100"

console.log(isAlien("Alien")); // true\

var nPunk =
/*#__PURE__*/
function () {
  function nPunk(id, price) {
    _classCallCheck(this, nPunk);

    this.id = id;
    this.price = price;
  }

  _createClass(nPunk, [{
    key: "getId",
    value: function getId() {
      return "#".concat(this.id);
    }
  }, {
    key: "printPrice",
    value: function printPrice() {
      return "\u041F\u0430\u043D\u043A ".concat(this.getId(), " \u0441\u0442\u043E\u0438\u0442 ").concat(this.price, " ETH."); //вызывает метод через this.
    }
  }]);

  return nPunk;
}();

var newpunk3100 = new nPunk(3100, 4200);
console.log(newpunk3100.printPrice()); // "Панк #3100 стоит 4200 ETH."

var Todos =
/*#__PURE__*/
function () {
  // В данном случае конструктор не принимает никаких параметров,
  // а только задает массив объектов — пунктов для списка задач
  function Todos() {
    _classCallCheck(this, Todos);

    this.todos = [{
      title: "Изучить Solidity",
      category: "работа"
    }, {
      title: "Продлить Netflix",
      category: "личное"
    }];
  } // Задание: Напишите код для каждого из методов экземпляра


  _createClass(Todos, [{
    key: "getAll",
    value: function getAll() {
      return this.todos;
    }
  }, {
    key: "getCount",
    value: function getCount() {
      return this.todos.length;
    }
  }, {
    key: "add",
    value: function add(title, category) {
      this.todos.push({
        title: title,
        category: category
      });
      return this.todos;
    }
  }, {
    key: "getWork",
    value: function getWork() {
      return this.todos.filter(function (x) {
        return x.category === "работа";
      });
    }
  }, {
    key: "getWorkCount",
    value: function getWorkCount() {
      return this.getWork().length;
    }
  }, {
    key: "getPersonal",
    value: function getPersonal() {
      return this.todos.filter(function (x) {
        return x.category === "личное";
      });
    }
  }, {
    key: "getPersonalCount",
    value: function getPersonalCount() {
      return this.getPersonal().length;
    }
  }]);

  return Todos;
}();

var newTx7 = new Todos();
console.log(newTx7.getPersonalCount());

var Punk8 =
/*#__PURE__*/
function () {
  function Punk8(id) {
    _classCallCheck(this, Punk8);

    this.id = id;
  }

  _createClass(Punk8, [{
    key: "id",
    get: function get() {
      console.log("Сработал геттер id");
      return this._id;
    },
    set: function set(value) {
      console.log("Сработал сеттер id");
      this._id = Number.parseInt(value, 10);
    }
  }]);

  return Punk8;
}();

var punk = new Punk8("3100"); // console.log(punk.id) // 3100

punk.id = "6529";
console.log(punk.id); // 6529
//   console.log(punk._id) // 6529
//   console.log(punk.id) // undefined

console.log("Новое задание");

var Tasks =
/*#__PURE__*/
function () {
  function Tasks(todos) {
    _classCallCheck(this, Tasks);

    this._todos = todos;
  }

  _createClass(Tasks, [{
    key: "todos",
    get: function get() {
      console.log("Сработал геттер todos");
      return this._todos.join(", ");
    } // set todos(value) {
    //     console.log("Сработал сеттер todos")
    //     this._todos
    // }

  }]);

  return Tasks;
}(); // Пример использования


var tasks = new Tasks(["Выспаться", "Попробовать Zwift"]);
console.log(tasks.todos); // "Выспаться, Попробовать Zwift"

console.log("Новое задание2");

var Transaction88 =
/*#__PURE__*/
function () {
  function Transaction88(amount) {
    _classCallCheck(this, Transaction88);

    this.amount = amount;
  }

  _createClass(Transaction88, [{
    key: "amount",
    get: function get() {
      console.log("Прием переведенного значения экземпляру");
      return this._wei;
    },
    set: function set(value) {
      console.log("Прием значение и перевод");
      this._wei = Number.parseFloat(value, 10) * Math.pow(10, 18);
    }
  }]);

  return Transaction88;
}(); // Пример использования с инпутами в ETH


var tx = new Transaction88(1.5);
console.log(tx.amount); // 1500000000000000000

tx.amount = 2;
console.log(tx.amount); // 2000000000000000000
//   

var Punk10 =
/*#__PURE__*/
function () {
  function Punk10() {
    _classCallCheck(this, Punk10);
  }

  _createClass(Punk10, null, [{
    key: "getTotalSupply2",
    value: function getTotalSupply2() {
      var totalSupply = 10000;
      return totalSupply;
    }
  }]);

  return Punk10;
}();

console.log(Punk10.getTotalSupply2()); // course.markCompleted()
// course.setGrade(5)
// course.getCertificate()

var Course =
/*#__PURE__*/
function () {
  function Course(name, isCompleted) {
    _classCallCheck(this, Course);

    this.name = name;
    this.isCompleted = isCompleted;
  }

  _createClass(Course, [{
    key: "markCompleted",
    value: function markCompleted() {
      this.isCompleted = true;
      return this; // Доступен внутри цепочки
    }
  }, {
    key: "setGrade",
    value: function setGrade(grade) {
      this.grade = grade;
      return this; // Доступен внутри цепочки
    }
  }, {
    key: "getCertificate",
    value: function getCertificate() {
      this.issueCertificate = true;
      return this; // Доступен внутри цепочки
    }
  }]);

  return Course;
}();

var course = new Course("Solidity", false);
console.log(course.markCompleted().setGrade(5).getCertificate());

var Halving =
/*#__PURE__*/
function () {
  function Halving(totalSupply) {
    _classCallCheck(this, Halving);

    this.totalSupply = totalSupply;
  }

  _createClass(Halving, [{
    key: "cutSupply",
    value: function cutSupply() {
      if (Halving.getVote()) {
        this.totalSupply /= 2;
      }
    }
  }], [{
    key: "getVote",
    value: function getVote() {
      //для такого вызова ниже нужен статический метод
      return Math.random() <= 0.5; // Вероятность 50% на true
    }
  }]);

  return Halving;
}(); // Пример использования новой версии класса


console.log(Halving.getVote()); // Должен вернуть true или false

var halving = new Halving(1000000);
halving.cutSupply(); //либо делает обрезание либо нет ( в данном контексте не возвращает сам значение, но присваивает его для totalSupply )

console.log(halving.totalSupply); // Должен вернуть 1000000 или 500000 (totalSupply)
//по больщому счету, если мы хотил спрятать функцию в класс, которая не зависит от параметров в конструкторе, то
//её нужно обозначить как static и обозначить обращение через название класса без использования this
//метод static работает напрямую без создания экземпляра

var TokenSale =
/*#__PURE__*/
function () {
  function TokenSale() {
    _classCallCheck(this, TokenSale);

    this.amount = 1000;
    this.token = "CRV";
    this.inWhitelist = false;
  }

  _createClass(TokenSale, [{
    key: "addToWhitelist",
    value: function addToWhitelist() {
      this.inWhitelist = true;
      this.amount *= 10;
      return this;
    }
  }, {
    key: "setToken",
    value: function setToken(symbol) {
      this.token = symbol;
      return this;
    }
  }, {
    key: "applyBoost",
    value: function applyBoost(percent) {
      this.amount += this.amount / 100 * percent;
      return this;
    }
  }]);

  return TokenSale;
}(); // Пример использования новой версии класса


var tokenSale = new TokenSale();
console.log(tokenSale.addToWhitelist().setToken("CVX").applyBoost(5));
console.log(tokenSale.amount); // Должен возвращать 10500 

var Member =
/*#__PURE__*/
function () {
  function Member(pseudonym, address) {
    _classCallCheck(this, Member);

    this.pseudonym = pseudonym;
    this.address = address;
  }

  _createClass(Member, [{
    key: "getPseudonym",
    value: function getPseudonym() {
      return this.pseudonym;
    }
  }, {
    key: "getAddress",
    value: function getAddress() {
      return this.address;
    }
  }]);

  return Member;
}();

var Founder =
/*#__PURE__*/
function (_Member) {
  _inherits(Founder, _Member);

  function Founder(pseudonym, address, votes) {
    var _this;

    _classCallCheck(this, Founder);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Founder).call(this, pseudonym, address)); // Должен стоять вверху

    _this.votes = votes;
    return _this;
  }

  _createClass(Founder, [{
    key: "getPseudonym",
    value: function getPseudonym() {
      return _get(_getPrototypeOf(Founder.prototype), "getPseudonym", this).call(this) + " (founder)"; //`${this.pseudonym} (founder)`
    }
  }, {
    key: "vote",
    value: function vote() {
      console.log("".concat(this.votes, " \u0433\u043E\u043B\u043E\u0441\u043E\u0432 \u0437\u0430\u0441\u0447\u0438\u0442\u0430\u043D\u043E!"));
    }
  }]);

  return Founder;
}(Member);

var founder = new Founder("PennilessWassie", "0x9c50…dac5", 13); //запуск класса

founder.vote(); // Выведет в консоль "Ваши голоса засчитаны!"

console.log(founder.getPseudonym()); // "PennilessWassie"

console.log(founder.getAddress()); // "0x9c50…dac5"

console.log(founder.vote()); // "0x9c50…dac5"

var member = new Member("Roman", "0xddfj");
console.log(member.getPseudonym());
console.log(member.getAddress());

var User =
/*#__PURE__*/
function () {
  function User(address, balance) {
    _classCallCheck(this, User);

    this.address = address;
    this.balance = balance;
  }

  _createClass(User, [{
    key: "getAddress",
    value: function getAddress() {
      return this.address;
    }
  }, {
    key: "getBalance",
    value: function getBalance() {
      return this.balance;
    }
  }]);

  return User;
}();

var Owner =
/*#__PURE__*/
function (_User) {
  _inherits(Owner, _User);

  function Owner() {
    _classCallCheck(this, Owner);

    return _possibleConstructorReturn(this, _getPrototypeOf(Owner).apply(this, arguments));
  }

  _createClass(Owner, [{
    key: "getAddress",
    value: function getAddress() {
      return "".concat(this.address, " [owner]");
    }
  }, {
    key: "withdrawEth",
    value: function withdrawEth() {
      return "Transaction completed";
    }
  }]);

  return Owner;
}(User);

var User1 =
/*#__PURE__*/
function () {
  function User1(address, balance) {
    _classCallCheck(this, User1);

    this.balance = balance;
    this.address = address;
  }

  _createClass(User1, [{
    key: "getBalance",
    value: function getBalance() {
      return this.balance;
    }
  }, {
    key: "getAddress",
    value: function getAddress() {
      return this.address;
    }
  }]);

  return User1;
}();

var Owner1 =
/*#__PURE__*/
function (_User2) {
  _inherits(Owner1, _User2);

  function Owner1() {
    _classCallCheck(this, Owner1);

    return _possibleConstructorReturn(this, _getPrototypeOf(Owner1).apply(this, arguments));
  }

  _createClass(Owner1, [{
    key: "getAddress",
    value: function getAddress() {
      return "".concat(this.address, " [owner]");
    }
  }, {
    key: "withdrawEth",
    value: function withdrawEth() {
      return "Transaction completed";
    }
  }]);

  return Owner1;
}(User1);

var user = new User1("shitty.eth", 7.85);
console.log(user.getBalance()); // 7.85

console.log(user.getAddress()); // "shitty.eth"

var owner = new Owner1("zeneca.eth", 1.55);
console.log(owner.getBalance()); // 1.55

console.log(owner.getAddress()); // "zeneca.eth [owner]"

console.log(owner.withdrawEth()); // "Transaction completed"

var VC =
/*#__PURE__*/
function () {
  function VC(company, million) {
    _classCallCheck(this, VC);

    this.company = company;
    this.million = million;
  }

  _createClass(VC, [{
    key: "getDeal",
    value: function getDeal() {
      return "".concat(this.company, " \u043F\u0440\u0438\u0432\u043B\u0435\u043A\u043B\u0438 ").concat(this.million, "\u043C \u0434\u043E\u043B\u043B\u0430\u0440\u043E\u0432");
    }
  }, {
    key: "getCompany",
    value: function getCompany() {
      return this.company;
    }
  }, {
    key: "getMillion",
    value: function getMillion() {
      return this.million;
    }
  }]);

  return VC;
}();

var Multicoin =
/*#__PURE__*/
function (_VC) {
  _inherits(Multicoin, _VC);

  function Multicoin() {
    _classCallCheck(this, Multicoin);

    return _possibleConstructorReturn(this, _getPrototypeOf(Multicoin).apply(this, arguments));
  }

  _createClass(Multicoin, [{
    key: "getInvestor",
    value: function getInvestor() {
      return "Multicoin Capital";
    }
  }]);

  return Multicoin;
}(VC);

var Dragonfly =
/*#__PURE__*/
function (_VC2) {
  _inherits(Dragonfly, _VC2);

  function Dragonfly() {
    _classCallCheck(this, Dragonfly);

    return _possibleConstructorReturn(this, _getPrototypeOf(Dragonfly).apply(this, arguments));
  }

  _createClass(Dragonfly, [{
    key: "getInvestor",
    value: function getInvestor() {
      return "Dragonfly Capital";
    }
  }]);

  return Dragonfly;
}(VC);

var ceramic = new Multicoin("Ceramic Network", 30);
console.log(ceramic.getDeal()); // "Ceramic Network привлекли 30м долларов"

console.log(ceramic.getInvestor()); // "Multicoin Capital"

var gelato = new Dragonfly("Gelato Network", 11);
console.log(gelato.getDeal()); // "Gelato Network привлекли 11м долларов"

console.log(gelato.getInvestor()); // "Dragonfly Capital"

var User2 =
/*#__PURE__*/
function () {
  function User2(address, balance) {
    _classCallCheck(this, User2);

    this.address = address;
    this.balance = balance;
  }

  _createClass(User2, [{
    key: "getAddress",
    value: function getAddress() {
      return this.address;
    }
  }, {
    key: "getBalance",
    value: function getBalance() {
      return this.balance;
    }
  }]);

  return User2;
}();

var Owner2 =
/*#__PURE__*/
function (_User3) {
  _inherits(Owner2, _User3);

  function Owner2(address, balance, role) {
    var _this2;

    _classCallCheck(this, Owner2);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Owner2).call(this, address, balance));
    _this2.role = role;
    return _this2;
  }

  _createClass(Owner2, [{
    key: "getAddress",
    value: function getAddress() {
      return "".concat(_get(_getPrototypeOf(Owner2.prototype), "getAddress", this).call(this), " [").concat(this.role, "]");
    }
  }, {
    key: "withdrawEth",
    value: function withdrawEth() {
      return "Transaction completed";
    }
  }]);

  return Owner2;
}(User2);

var owner2 = new Owner2("goth.eth", 1.51, "deployer");
console.log(owner2.getAddress());

var Rectangle =
/*#__PURE__*/
function () {
  function Rectangle(width, height) {
    _classCallCheck(this, Rectangle);

    this.width = width;
    this.height = height;
  }

  _createClass(Rectangle, [{
    key: "isSquare",
    value: function isSquare() {
      return this.width === this.height;
    }
  }]);

  return Rectangle;
}();

xzibit = new Rectangle(15, 15);
console.log(xzibit.isSquare());
console.log(xzibit); // console.log()
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

console.log("Попытка"); // function Multisig(owners, min) {
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

var Welcome =
/*#__PURE__*/
function () {
  function Welcome() {
    _classCallCheck(this, Welcome);
  }

  _createClass(Welcome, [{
    key: "sayGm",
    value: function sayGm() {
      return "gm!";
    }
  }]);

  return Welcome;
}();

var welcome = new Welcome();
console.log(welcome.sayGm());
console.log(Object.getPrototypeOf(welcome)); // {constructor: ƒ, sayGm: ƒ}

console.log(Object.getPrototypeOf(Object.getPrototypeOf(welcome))); // {constructor: ƒ, hasOwnProperty: ƒ, isPrototypeOf: ƒ, …}

console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(welcome))));

var Parent =
/*#__PURE__*/
function () {
  function Parent(perec, welcome) {
    _classCallCheck(this, Parent);

    this.perec = perec;
    this.welcome = welcome;
  }

  _createClass(Parent, [{
    key: "parentMethod",
    value: function parentMethod() {
      return "".concat(this.perec).concat(this.welcome, "!");
    }
  }]);

  return Parent;
}();

var Child =
/*#__PURE__*/
function (_Parent) {
  _inherits(Child, _Parent);

  function Child(perec, welcome, malish) {
    var _this3;

    _classCallCheck(this, Child);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Child).call(this, perec, welcome));
    _this3.malish = malish;
    return _this3;
  }

  _createClass(Child, [{
    key: "childMethod",
    value: function childMethod() {
      return "".concat(this.perec, " ").concat(this.welcome, "! \u0410 \u0442\u044B \u0432\u0441\u0435 \u043B\u0438\u0448\u044C \u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F ").concat(this.malish, "...") + _get(_getPrototypeOf(Child.prototype), "parentMethod", this).call(this);
    }
  }]);

  return Child;
}(Parent); //Super для вызова функций из родительского метода


var child = new Child("Перец", "Велкам", "Малыш");
console.log(child.childMethod());
console.log(Object.getPrototypeOf(child)); // {constructor: ƒ, childMethod: ƒ}

console.log(Object.getPrototypeOf(Object.getPrototypeOf(child))); // {constructor: ƒ, parentMethod: ƒ}

console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(child)))); // {constructor: ƒ, hasOwnProperty: ƒ, isPrototypeOf: ƒ, …}

console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(child))))); // null

var Coin =
/*#__PURE__*/
function () {
  // Сделать: constructor, collect(), getValue(), getMessage()
  function Coin(name, price, count) {
    _classCallCheck(this, Coin);

    this.name = name;
    this.price = price;
    this.count = count;
  }

  _createClass(Coin, [{
    key: "collect",
    value: function collect() {
      return this.count++;
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.count * this.price;
    }
  }, {
    key: "getMessage",
    value: function getMessage() {
      return "".concat(this.count, " ").concat(this.name, " \u0432 \u043A\u043E\u0448\u0435\u043B\u044C\u043A\u0435\"");
    }
  }]);

  return Coin;
}();

var Ether =
/*#__PURE__*/
function (_Coin) {
  _inherits(Ether, _Coin);

  function Ether(name, price, count) {
    var _this4;

    _classCallCheck(this, Ether);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(Ether).call(this, name, price, count));
    _this4.name = "Ether";
    _this4.price = 3000;
    _this4.count = 1;
    return _this4;
  }

  return Ether;
}(Coin);

var Bitcoin =
/*#__PURE__*/
function (_Coin2) {
  _inherits(Bitcoin, _Coin2);

  function Bitcoin(name, price, count) {
    var _this5;

    _classCallCheck(this, Bitcoin);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(Bitcoin).call(this, name, price, count));
    _this5.name = "Bitcoin";
    _this5.price = 50000;
    _this5.count = 1;
    return _this5;
  }

  return Bitcoin;
}(Coin);

var Wallet1 =
/*#__PURE__*/
function (_Bitcoin) {
  _inherits(Wallet1, _Bitcoin);

  // Сделать: constructor, addCoin() и getBalance()
  function Wallet1(name, price, count, coin) {
    var _this6;

    _classCallCheck(this, Wallet1);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Wallet1).call(this, name, price, count));
    _this6.coin = coin;
    return _this6;
  }

  _createClass(Wallet1, [{
    key: "addCoin",
    value: function addCoin() {
      var coin = {
        name: this.name,
        price: this.price,
        count: this.count
      };
      var coins = [];
      coins.push(coin);
      return coins;
    }
  }, {
    key: "getBalance",
    value: function getBalance() {}
  }]);

  return Wallet1;
}(Bitcoin);

var bitcoin = new Bitcoin();
console.log(bitcoin.collect());
var wallet3 = new Wallet1();
console.log(wallet3.addCoin());