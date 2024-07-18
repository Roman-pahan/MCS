"use strict";

/** ЗАДАЧА 43 - Сравнение двух массивов
 *
 * 1. Создайте функцию "areArraysEqual" с двумя параметрами "firstArray" и "secondArray"
 *
 * 2. Верните "true" если два массива равны, а именно:
 *  - имеют одинаковое количество элементов
 *  - все элементы совпадают, например, firstArray[0] === secondArray[0] и т. д.)
 *
 * 3. В противном случае верните "false"
 *
 * ВАЖНО: Исходите из того, что массивы содержат элементы примитивных типов
 */
var a = [1, 2, 3];
var b = [1, 2, 3]; // console.log(a === b) // false (Почему?)

var c = [2, 1, 3];
var d = [1, 2, 3, 4];

var areArraysEqual = function areArraysEqual(firstArray, secondArray) {
  if (firstArray.length === secondArray.length && firstArray.every(function (element, index) {
    return element === secondArray[index];
  })) {
    return true;
  }

  return false;
};

console.log(areArraysEqual(a, b)); // true

console.log(areArraysEqual(a, c)); // false

console.log(areArraysEqual(a, d)); // false