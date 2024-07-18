"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/** ЗАДАЧА 55 - Деструктуризация результата функции
 *
 * 1. Создайте функцию "minMax", которая принимает любое количество аргументов
 *
 * 2. Эта функция должна возвращать массив из двух элементов:
 *  - Первый элемент массива - минимальное значение среди всех аргументов.
 *  - Второй элемент массива - это максимальное значение среди всех аргументов.
 */
var min, max; // const minMax = (arg) =>{
//     const massive = arg.sort((a,b) => a-b)
//     min = arg[0]
//     max = arg[massive.length-1]
//     return[min,max]
// }

var minMax = function minMax() {
  return [Math.min.apply(Math, arguments), Math.max.apply(Math, arguments)];
};
/* Вызовите здесь функцию "minMax" с аргументами 24, 5, 34, 10 */
// minMax([24, 5, 34, 10])


var _minMax = minMax(24, 5, 34, 10);

var _minMax2 = _slicedToArray(_minMax, 2);

min = _minMax2[0];
max = _minMax2[1];

/*и используя деструктуризацию массивов присвойте значения переменным "min" и "max" */
console.log(min, max); // 5, 34

/* Вызовите здесь функцию "minMax" еще раз с аргументами 18, 23, 103, 70, 80, 25 */
// minMax([18, 23, 103, 70, 80, 25])

var _minMax3 = minMax(18, 23, 103, 70, 80, 25);

var _minMax4 = _slicedToArray(_minMax3, 2);

min = _minMax4[0];
max = _minMax4[1];
console.log(min, max); // 18, 103