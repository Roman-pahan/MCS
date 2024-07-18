"use strict";

/** ЗАДАЧА 79 - Перебор свойств объекта
 *
 * 1. Создайте функцию "sumObjectValues", которая будет суммировть
 * все значения свойств, которые являются числами.
 *
 * 2. Сумму чисел необходимо вернуть из функции
 *
 * 3. Убедитесь, что итерация выполняется только
 * по собственным свойствам объекта
 */
var objectWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12
};

sumObjectValues = function sumObjectValues(obj) {
  return Object.keys(obj).reduce(function (sum, el) {
    return typeof obj[el] === "number" ? sum + obj[el] : sum;
  }, 0);
}; // 


var result = sumObjectValues(objectWithNumbers);
console.log(result); //42