"use strict";

/** ЗАДАЧА 32 - Добавление элементов в начало массива
 *
 * 1. Добавьте элементы а начало массива:
 *  - сначала строку "Привет"
 *  - потом число 100
 *
 * 2. Выведите длину результирующего массива в консоль
 */
var myArray = [true, null];
myArray.unshift("Hello");
console.log(myArray.unshift(100)); // Напишите код здесь

console.log(myArray); // [100, "Hello", true, null]