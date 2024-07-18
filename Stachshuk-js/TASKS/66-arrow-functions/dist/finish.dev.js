"use strict";

/** ЗАДАЧА 66 - Стрелочные функции
 *
 * Замените обычные функции на стрелочные
 */
var mult = function mult(a, b) {
  return a * b;
};

setTimeout(function () {
  return console.log(mult(5, 10));
}, 1000); // 50