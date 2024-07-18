"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */
var myString = "Roman";
var myNumber = 32;
var myForce = true;
var myHave = null;
var myCondition = undefined;
var myObject = {
  name: "Roman",
  age: 32
};
var myArray = ["money", "keys", "phone"];
console.log(_typeof(myString), _typeof(myNumber), _typeof(myForce), _typeof(myHave), _typeof(myCondition), _typeof(myObject), _typeof(myArray));