"use strict";

/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */
console.log(firstFunction(2, 3)); //функцию можно вызывать до самой функции

function firstFunction(a, b) {
  return a + b;
}

firstFunction = "1,334"; //в таком виде если функция, можем функции присвоить новое значение

console.log(firstFunction);

var secondFunction = function secondFunction(a, b) {
  return a + b;
};