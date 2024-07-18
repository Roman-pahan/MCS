"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/** ЗАДАЧА 36 - Случайные числа
 *
 * 1. Cгенерируйте новое 4-значное случайное число.
 * Диапазон для случайного числа 1000 - 9999.
 *
 * 2. Убедитесь, что это новое случайное число не совпадает ни с одним из чисел в массиве myNumbers.
 *
 * 3. Если совпадает, вам нужно сгенерировать новое 4-значное число.
 *
 * 4. Если совпадений нет (новый номер уникален), добавьте его в массив myNumbers.
 *
 * ВАЖНО: В решении задачи используйте функции:
 *  - для генерации случайного числа в заданном диапазоне
 *  - для добавления случайного числа в массив с возвратом измененного массива
 */
// const MIN = 1000
// const MAX = 9999
// const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351]
var MIN = 1;
var MAX = 10;
var myNumbers = [1, 3, 5, 7, 9, 2];

var randomNumber = function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

var addRandomNumberToArray = function addRandomNumberToArray(arr, min, max) {
  var newRandomNumber;

  var updatedArr = _toConsumableArray(arr); //чтобы не мутировать массив


  do {
    newRandomNumber = randomNumber(min, max);
    console.log(newRandomNumber);
  } while (updatedArr.includes(newRandomNumber));

  updatedArr.push(newRandomNumber);
  return updatedArr;
};

var updatedArray = addRandomNumberToArray(myNumbers, MIN, MAX);
console.log("ORIGINAL MASSIVE", myNumbers);
console.log("UPDATED MASSIVE", updatedArray);