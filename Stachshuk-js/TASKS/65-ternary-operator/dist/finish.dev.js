"use strict";

/** ЗАДАЧА 65 - Тернарный оператор
 *
 * Измените функцию "isNumber", используя тернарный оператор
 */
// function isNumber(a) {
//   if (typeof a === 'number') {
//     return `${a} - это число`
//   } else {
//     return `${a} - это не число`
//   }
// }
var isNumber = function isNumber(a) {
  return typeof a === 'number' ? "".concat(a, " - \u044D\u0442\u043E \u0447\u0438\u0441\u043B\u043E") : "".concat(a, " - \u044D\u0442\u043E \u043D\u0435 \u0447\u0438\u0441\u043B\u043E");
};

console.log(isNumber(10)); // 10 - это число

console.log(isNumber('Привет')); // Привет - это не число

console.log(isNumber(true)); // true - это не число