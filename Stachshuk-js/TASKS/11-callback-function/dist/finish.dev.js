"use strict";

/** ЗАДАЧА 11 - Колбэк функция
 *
 * 1. Выведите в консоль "Привет, мир!" с задержкой 5 секунд
 *
 * 2. Используйте стрелочную функцию
 */
var hello = function hello() {
  return setTimeout(function () {
    return console.log("Hello World!!!");
  }, 5000);
};

hello();