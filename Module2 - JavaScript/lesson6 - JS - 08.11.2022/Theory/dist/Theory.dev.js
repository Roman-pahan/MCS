"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var user = {
  id: 1,
  name: "Nick Szabo",
  age: 57
};
var key = "id";
console.log(user[key]); // 1

var getValue = function getValue(user, key) {
  return user[key];
};

console.log(getValue({
  id: 2,
  name: "Vitalik Buterin"
}, "id")); // 2

console.log(getValue({
  id: 2,
  name: "Vitalik Buterin"
}, "name")); // "Vitalik Buterin"

var settings = {
  theme: "dark",
  version: "2.4.1",
  beta: false
};
var keys = Object.keys(settings);
console.log(keys); // ["theme", "version", "beta"]

keys.forEach(function (key) {
  console.log(settings[key]);
}); // "Dark"
// "2.4.1"  
// false

console.log("Практика 85");

var getObjectDetails = function getObjectDetails(obj, key) {
  // keys.forEach(key => obj[key])
  return "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435\u043C \u043A\u043B\u044E\u0447\u0430 ".concat(key, " \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F ").concat(obj[key]);
};

console.log(getObjectDetails({
  id: 1,
  name: "Vitalik"
}, "id")); // "Значением ключа id является 1"

console.log(getObjectDetails({
  id: 1,
  name: "Vitalik"
}, "name")); // "Значением ключа name является Vitalik"

var getNumberOfKeys = function getNumberOfKeys(obj) {
  // Вернуть количество ключей
  return Object.keys(obj).length;
};

console.log(getNumberOfKeys({
  id: 1,
  name: "Vitalik",
  country: "Canada"
})); // 3

console.log(getNumberOfKeys({
  id: 1,
  name: "Vitalik",
  country: "Canada",
  website: "vitalik.ca"
})); // 4

var getCapsKeys = function getCapsKeys(obj) {
  return Object.keys(obj).map(function (upper) {
    return upper.toUpperCase();
  });
};

console.log(getCapsKeys({
  id: 1,
  name: "Vitalik",
  country: "Canada"
})); // ["ID", "NAME", "COUNTRY"]

console.log(getCapsKeys({
  id: 1,
  name: "Vitalik",
  website: "vitalik.ca"
})); // ["ID", "NAME", "WEBSITE"]

var logValues = function logValues(obj) {
  Object.keys(obj).forEach(function (key) {
    console.log(obj[key]);
  });
};

logValues({
  id: 1,
  name: "Vitalik",
  country: "Canada"
}); // Выводит в консоль три сообщения: 1, "Vitalik", "Canada"

logValues({
  id: 1,
  name: "Vitalik",
  website: "vitalik.ca"
}); // Выводит в консоль три сообщения: 1, "Vitalik", "vitalik.ca"
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

var account1 = {
  nonce: 186,
  balance: 4032522415168559363
};
console.log(account1.codeHash); // undefined, так как поле codeHash есть только у контрактов

console.log("Balance: ".concat(account1, " WEI")); // "Balance: [object Object] WEI

console.log("Balance: ".concat(account1.balance, " WEI")); // Правильны вариант

var pudgyPenguin = {
  id: 1816,
  body: "Lab Coat",
  head: "Sombrero"
};
var values = Object.values(pudgyPenguin);
console.log(values); // [1816, "Lab Coat", "Sombrero"]

var pudgyPenguin1 = {
  id: 1816,
  body: "Lab Coat",
  head: "Sombrero"
};
var entries = Object.entries(pudgyPenguin1);
console.log(entries);

var getCapsValues = function getCapsValues(obj) {
  return Object.values(obj).map(function (element) {
    return element.toUpperCase();
  });
};

console.log(getCapsValues({
  body: "Lab Coat"
})); // ["LAB COAT"]

console.log(getCapsValues({
  body: "Lab Coat",
  head: "Sombrero"
})); // ["LAB COAT", "SOMBRERO"]

var logEntries = function logEntries(obj) {
  console.log(Object.entries(obj));
}; // Сверьтесь с результатом в консоли


logEntries({
  body: "Kimono Orange",
  head: "Backwards Hat Red"
});
logEntries({
  body: "Puffer Blue",
  head: "Mohawk Purple"
});
var tps = 30;
var blockchain = {
  name: "Ethereum",
  tps: tps // = tps: tps

};
var isAdmin = false;
var darkMode = true;
var settings2 = {
  isAdmin: isAdmin,
  darkMode: darkMode
};

var sum = function sum(a, b) {
  console.log(a); // 1

  console.log(b); // 3

  var total = a + b;
  console.log(total); // 4

  return total;
};

sum(1, 3);

var sum2 = function sum2(a, b) {
  console.log({
    a: a
  }); // {а: 1}

  console.log({
    b: b
  }); // {b: 3}

  var total = a + b;
  console.log({
    total: total
  }); // {total: 4}

  return total;
};

sum2(1, 3);

var getAccount = function getAccount(address, balance) {
  return {
    address: address,
    balance: balance
  };
};

console.log(getAccount("1BoatSLRHtKNngkdXEeobR76b53LETtpyT", 211234));

var getResult = function getResult(a, b) {
  console.log({
    a: a
  }, {
    b: b
  });
  var result = a * b;
  console.log({
    result: result
  });
  return result;
};

getResult(2, 3); // {a: 2, b: 3}
// {result: 6}

var config = {
  id: 1,
  isAdmin2: false,
  theme: {
    dark: true,
    zoom: false
  }
};
console.log(config); // const id = config.id
// const isAdmin2 = config.isAdmin2
// const theme = config.theme
// console.log(id)
// console.log(isAdmin2)
// console.log(theme)

var id = config.id,
    isAdmin2 = config.isAdmin2,
    theme = config.theme; // const {id, theme} = config //можно деструкторизировать часть переменных

var account = {
  address: "0xFF9...13D7",
  type: "contract"
};
var address = account.address,
    _account$balance = account.balance,
    balance = _account$balance === void 0 ? 0 : _account$balance;
console.log(balance); // 0

console.log(account);
var type = "USB-C";
var account3 = {
  address3: "0xFF9...13D7",
  type: "contract"
};
var accountType = account3.type,
    address3 = account3.address3;
console.log(accountType); // "contract"

var punk7804 = {
  owner: "0xf4b4a",
  type: "Alien"
};
var punk8857 = {
  type: "Zombie",
  accessories: "3D Glasses"
};

var megaPunk = _objectSpread({}, punk7804, {}, punk8857);

console.log(megaPunk); // {owner: "0xf4b4a", type: "Zombie", accessories: "3D Glasses"}
// Пример использования

var rare = {
  head: "Ornate Helm of Rage"
};
var common = {
  head: "Linen Hood",
  chest: "Chain Mail",
  weapon: "Grave Wand"
};

var joinLoot = function joinLoot(rare, common) {
  return _objectSpread({}, common, {}, rare);
};

console.log(joinLoot(rare, common)); // {head: "Ornate Helm of Rage", chest: "Chain Mail", weapon: "Grave Wand"}

var getRarityScore = function getRarityScore(loot) {
  var bag = loot.bag,
      score = loot.score;
  return "\u041C\u0435\u0448\u043E\u043A #".concat(bag, " \u0438\u043C\u0435\u0435\u0442 ").concat(score, " \u043E\u0447\u043A\u043E\u0432 \u0440\u0435\u0434\u043A\u043E\u0441\u0442\u0438.");
};

console.log(getRarityScore({
  bag: 6189,
  score: 164.41
})); // "Мешок #6189 имеет 164.41 очков редкости."

var getRarityScoreRank = function getRarityScoreRank(loot) {
  var bag = loot.bag,
      score = loot.score,
      _loot$rank = loot.rank,
      rank = _loot$rank === void 0 ? 0 : _loot$rank;
  return "\u041C\u0435\u0448\u043E\u043A #".concat(bag, " \u0438\u043C\u0435\u0435\u0442 ").concat(score, " \u043E\u0447\u043A\u043E\u0432 \u0440\u0435\u0434\u043A\u043E\u0441\u0442\u0438 \u0438 \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442 ").concat(rank, " \u043C\u0435\u0441\u0442\u043E \u0432 \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0435.");
};

console.log(getRarityScoreRank({
  bag: 6189,
  score: 164.41,
  rank: 2372
})); // "Мешок #6189 имеет 164.41 очков редкости и занимает 2372 место в рейтинге."

console.log(getRarityScoreRank({
  bag: 7498,
  score: 40.39
})); // rank не указан
// "Мешок 7498 имеет 40.39 очков редкости и занимает 0 место в рейтинге."