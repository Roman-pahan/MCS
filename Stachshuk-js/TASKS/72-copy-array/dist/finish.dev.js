"use strict";

/** ЗАДАЧА 72 - Копия массива
 *
 * Создайте копию массива.
 * При изменении копии массива оригинальный массив не должен изменяться
 */
var a = [1, 2, 3]; // const b = [...a]
// const b = Array.from(a)

var b = JSON.parse(JSON.stringify(a)); // Напишите код здесь

b.push('newElement');
console.log(a); // [1, 2, 3]

console.log(b); // [1, 2, 3, "newElement"]