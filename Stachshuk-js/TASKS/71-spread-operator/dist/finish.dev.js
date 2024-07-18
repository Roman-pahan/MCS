"use strict";

/** ЗАДАЧА 71 - Spread Operator
 *
 * Используя оператор "spread" создайте новый массив
 * Вывод в консоли должен быть таким же как в конце задания
 */
var a = [1, 2];
var b = [4, 5];
var c = [8, 9, 10];
var d = 11; // Напишите код здесь

var combinedArray = [0].concat(a, [3], b, [6, 7], c, [d]);
console.log(combinedArray); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]