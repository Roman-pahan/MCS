"use strict";

/** ЗАДАЧА 51 - Операторы "rest" (остаток) и "spread" (распространение)
 *
 * 1. Создайте функцию "meanScore",
 * которая будет принимать любое количество аргументов,
 * объединять их в один массив и возвращать среднее значение всех аргументов,
 * округленное до 2 знаков после запятой.
 *
 * 2. Если хотя бы один элемент в этом массиве не является числом -
 * выводим в консоль следующую ошибку:
 * "Все аргументы в вызове функции должны быть числами!"
 *
 * ПОДСКАЗКА: В этом задании вы должны использовать как оператор "rest",
 * так и оператор "spread".
 */
var scores1 = [0, 1.5, 2.5, 3.7];
var scores2 = [1.7, 4.5, 0, 4.9, 5.0, 4.2];
var scores3 = [1.3, 2.5, 1.9];
var scores4 = ['abc', 1.3, true, 2.5, 1.9];

function meanScore() {
  for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
    rest[_key] = arguments[_key];
  }

  if (rest.some(function (el) {
    return typeof el != "number";
  })) {
    return "Все аргументы в вызове функции должны быть числами!"; // throw new Error("Все аргументы в вызове функции должны быть числами!")
  }

  return rest.reduce(function (acc, el) {
    return acc + el / rest.length;
  }, 0).toFixed(2);
}

console.log(meanScore.apply(void 0, scores1)); // 1.93

console.log(meanScore.apply(void 0, scores1.concat(scores2))); // 2.8

console.log(meanScore.apply(void 0, scores1.concat(scores2, scores3))); // 2.59

console.log(meanScore.apply(void 0, scores4)); // Все аргументы в вызове функции должны быть числами!