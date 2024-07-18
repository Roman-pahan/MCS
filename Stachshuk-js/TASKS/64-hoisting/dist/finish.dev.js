"use strict";

/** ЗАДАЧА 64 - Hoisting
 *
 * Измените код, чтобы исправить ошибку после строки 13.
 *
 * Ошибка после строки 21 все равно должна генерироваться.
 * Почему ошибка после строки 21 возникает?
 */
var a = 5;
var b = 10;

if (b > a) {
  var _c = 2;
  _c = a + b + _c; // ДО: ReferenceError: Cannot access 'c' before initialization
  // ПОСЛЕ: Нет ошибки

  console.log(_c); // 17
}

console.log(c); // Uncaught ReferenceError: c is not defined