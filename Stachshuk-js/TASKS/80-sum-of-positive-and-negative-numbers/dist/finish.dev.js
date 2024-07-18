"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** ЗАДАЧА 80 - Сумма положительных и отрицательных чисел
 *
 * 1. Создайте функцию "sumPositiveNegative", которая принимает массив
 * и суммирует отдельно положительные и отрицательные числа.
 *
 * 2. Функция должна вернуть такой объект:
 *  {
 *    positive: 74, // сумма всех положительных чисел
 *    negative: -54 // сумма всех отрицательных чисел
 *  }
 */
var nums = [10, -12, 30, -1, -8, 0, 14, -33, 20]; // Создайте функцию "sumPositiveNegative" здесь

var sumPositiveNegative = function sumPositiveNegative(massive) {
  // let positive = 0;
  // let negative = 0;
  // massive.forEach(element => element>0?positive+=element:negative+=element);
  // return {
  //     positive,
  //     negative
  // }
  return massive.reduce(function (sum, element) {
    if (element > 0) {
      return _objectSpread({}, sum, {
        positive: sum.positive + element // negative:sum.negative,

      });
    } else {
      return _objectSpread({}, sum, {
        // positive: sum.positive,
        negative: sum.negative + element
      });
    }
  }, {
    positive: 0,
    negative: 0
  });
};

var result = sumPositiveNegative(nums);
console.log(result); // { positive: 74, negative: -54 }