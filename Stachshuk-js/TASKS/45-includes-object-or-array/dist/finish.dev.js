"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/** ЗАДАЧА 45 - Поиск элементов в массивах
 *
 * 1. Создайте функцию isElementInArray с двумя параметрами "searchElement" и "inputArray"
 *
 * 2. Если "searchElement" - не объект, просто используйте метод "includes"
 *
 * 3. Если "searchElement" - это объект или массив,
 * вам необходимо сначала преобразовать каждый элемент "inputArray" в строку,
 * а затем применить метод "includes" с аргументом, который также будет преобразован в строку
 */
var tags = [["javascript", "es6"], ["css", "flexbox"], ["html", "web-browser"]];
var fruits = [{
  title: "Orange",
  quantity: 10
}, {
  title: "Banana",
  quantity: 5
}, {
  title: "Apple",
  quantity: 25
}];
var primitiveTypesArray = [25, "x", true, undefined, null];

var isElementInArray = function isElementInArray(searchElement, inputArray) {
  if (_typeof(searchElement) !== "object") {
    return inputArray.includes(searchElement);
  } // return inputArray.some(element => JSON.stringify(element) === JSON.stringify(searchElement))


  return inputArray.map(function (element) {
    return JSON.stringify(element);
  }).includes(JSON.stringify(searchElement));
};

console.log(isElementInArray(["css", "flexbox"], tags)); // true

console.log(isElementInArray(["flexbox", "css"], tags)); // false

console.log(isElementInArray({
  title: "Apple",
  quantity: 25
}, fruits)); // true

console.log(isElementInArray({
  title: "Banana"
}, fruits)); // false

console.log(isElementInArray(25, primitiveTypesArray)); // true