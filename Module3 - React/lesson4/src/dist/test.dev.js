"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// import React from "react"
var turtles = ["Leonardo", "Michelangelo", "Donatello", "Raphael"];
var ninjas = [].concat(turtles);
var ninjas1 = turtles;
console.log(ninjas);
console.log(ninjas1);
console.log(turtles === ninjas);
console.log(turtles === ninjas1);
console.log(ninjas1 === ninjas);
var boys = ["Тинки-Винки", "Дипси"];
var girls = ["Ляля", "По"];
var teletubbies = [].concat(boys, girls);
console.log(teletubbies);

function addBull(bulls, bull) {
  var newBulls = [].concat(_toConsumableArray(bulls), [bull]);
  return newBulls;
}

var bulls = ["Jordan", "Pippen", "Rodman"];
console.log(addBull(bulls, "Kukoc"));

function addBase(bases, base) {
  return [base].concat(_toConsumableArray(bases));
}

var bases = ["Гуанин", "Цитозин", "Тимин"];
var dna = addBase(bases, "Аденин");
console.log(dna);
var dna2 = ["A", "T", "C", "G"];
var rna = dna2.map(function (base) {
  if (base === "T") {
    return "U";
  }

  return base;
});
console.log(rna); //["A", "U", "C", "G"]

console.log(dna2);

function change(players, starter, bench) {
  return players.map(function (player) {
    if (player === starter) {
      return bench;
    }

    return player;
  });
} //пример использования


var firstHalf = ["Jordan", "Pippen", "Rodman", "Kukoc"];
var secondHalf = change(firstHalf, "Jordan", "Harper");
console.log(change(firstHalf, "Jordan", "Harper"));
console.log(firstHalf === secondHalf);
var gogo = firstHalf.slice(1); //удаляет все предыдущие элементы (удаляет с начала)

var gogo1 = firstHalf.slice(0, firstHalf.length - 2); //удаляет с конца
//Первый аргумент слайса — индекс элемента, с которого нужно начать, второй — индекс того, на котором нужно остановиться

console.log(gogo);
console.log(gogo1);
var nums = [10, 11, 12, 13, 14];
var odd = nums.filter(function (num) {
  return num % 2;
});
var ban = nums.filter(function (num) {
  return num !== 13;
});
console.log(odd);
console.log(ban);
var ban2 = nums.filter(function (num, index) {
  return index !== 3;
}); //удаление по индексу (второй опциональный аргумент)

console.log(ban2);

function removeDj(lineup, out) {
  return lineup.filter(function (dj) {
    return dj !== out;
  });
} //пример использования


var oldLineup = ["Jaar", "Villalobos", "Hawtin", "Allien"];
var newLineup = removeDj(oldLineup, "Villalobos");
console.log(newLineup);
var streamer = {
  name: "Sasha Grey",
  hobby: "Cooking"
}; //   streamer.age = 32

var new1 = _objectSpread({}, streamer, {
  age: 32,
  hobby: "music"
}); //порядок важен


console.log(streamer);
console.log(new1);

function checkFake(item, fake) {
  var newItem = _objectSpread({}, item, {
    fake: fake
  });

  return newItem;
} //пример использования


var cap = {
  brand: "Supreme",
  condition: "like new"
};
var forSale = checkFake(cap, false);
console.log(cap);
console.log(forSale);

function addTimestamp(cargo) {
  return _objectSpread({}, cargo, {
    timestamp: Date.now()
  });
} //пример использования


var cargo = {
  from: "Bogota, Colombia",
  weight: "20kg"
};
var received = addTimestamp(cargo);
console.log(received);

function giftSub(user) {
  return _objectSpread({}, user, {
    role: "subscriber"
  });
} //пример использования


var user = {
  name: "Sharishaxd",
  role: "follower"
};
var sub = giftSub(user);
console.log(sub); // const taxpayer = {
//     ИП: "Пелевин Виктор Олегович",
//     ОГРНИП: 318774600540978, 
//     ИНН: 772602270717
//   }
// //   delete taxpayer.ИНН
// // const {ИНН, ...pelevin} = taxpayer
// console.log(taxpayer)

var taxpayer = {
  ИП: "Пелевин Виктор Олегович",
  ОГРНИП: 318774600540978,
  ИНН: 772602270717
};

var ИНН = taxpayer.ИНН,
    ОГРНИП = taxpayer.ОГРНИП,
    ВО = _objectWithoutProperties(taxpayer, ["\u0418\u041D\u041D", "\u041E\u0413\u0420\u041D\u0418\u041F"]); //убираем и разделяем массив


console.log(ВО);

function goVegan(dish) {
  var meat = dish.meat,
      newdish = _objectWithoutProperties(dish, ["meat"]);

  return newdish;
} //пример использования


var burger = {
  bun: "Чиабатта",
  toppings: "Экстра",
  meat: "Говядина"
};
var nomeat = goVegan(burger);
console.log(nomeat);