"use strict";

/** ЗАДАЧА 46 - Добавление уникальных элементов в массив
 *
 * 1. Создайте функцию "pushIfUnique" с двумя параметрами "inputArray" и "newElement"
 *
 * 2. Если "inputArray" уже содержит "newElement",
 * выведите в консоль "{newElement} уже находится в массиве"
 *
 * 3. В противном случае добавьте "newElement" в "inputArray"
 *
 * ПРИМЕЧАНИЕ: Мы предполагаем, что "inputArray" содержит элементы только примитивных типов
 */
var myNumbers = [123, 50, 27];

var pushIfUnique = function pushIfUnique(inputArray, newElement) {
  // if(inputArray.some(el => el === newElement)){
  //     return console.log(`${newElement} уже находится в массиве`)
  // }
  if (inputArray.includes(newElement)) {
    return console.log("".concat(newElement, " \u0443\u0436\u0435 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u043C\u0430\u0441\u0441\u0438\u0432\u0435"));
  }

  return inputArray.push(newElement);
};

pushIfUnique(myNumbers, 50); // "50 уже в массиве"

console.log(myNumbers); // [123, 50, 27]

pushIfUnique(myNumbers, 80);
console.log(myNumbers); // [123, 50, 27, 80]

pushIfUnique(myNumbers, 80); // "80 уже в массиве"

console.log(myNumbers); // [123, 50, 27, 80]

pushIfUnique(myNumbers, 77);
console.log(myNumbers); // [123, 50, 27, 80, 77]