"use strict";

/** ЗАДАЧА 35 - Итерация по свойствам объекта
 *
 * 1. Переберите все собственные свойства объекта
 *
 * 2. Если имя свойства (ключ) равно "key1" или "key3",
 * выведите значение свойства в консоль.
 */
var myObject = {
  key1: true,
  key5: 10,
  key3: 'abc',
  key4: null,
  key10: NaN
};
var keys = Object.keys(myObject);
keys.forEach(function (el) {
  return console.log(el);
});
console.log("----------------------------------------------------------------------------------");
keys.forEach(function (el) {
  if (el === "key1" || el === "key3") {
    console.log(myObject[el]);
  }
});
console.log("----------------------------------------------------------------------------------");
var keys2 = Object.entries(myObject);
keys2.forEach(function (el) {
  if (el[0] === "key1" || el[0] === "key3") {
    console.log(el[1]);
  }
});