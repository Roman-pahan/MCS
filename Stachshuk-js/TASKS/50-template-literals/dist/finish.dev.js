"use strict";

/** ЗАДАЧА 50 - Шаблонные строки
 *
 * 1. Создайте функцию "templateLiteral" с одним параметром "num"
 *
 * 2. Функция должна возвращать многострочную строку.
 *
 * 3. Ниже приведены примеры вызовов функции.
 */
var templateLiteral = function templateLiteral(num) {
  var moreLess;
  num < 10 ? moreLess = "меньше" : moreLess = "больше или равно";
  return "\u0427\u0438\u0441\u043B\u043E ".concat(num, ".\n\u042D\u0442\u043E \u0447\u0438\u0441\u043B\u043E ").concat(moreLess, " 10.\n\u041A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u044B\u0439 \u043A\u043E\u0440\u0435\u043D\u044C \u044D\u0442\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430 - ").concat(Math.sqrt(num), ".");
}; // ТЕСТ 1


var myNumber = 9;
console.log(templateLiteral(myNumber));
/* 
Число 9.
Это число меньше 10.
Квадратный корень этого числа - 3.
*/
// ТЕСТ 2

var myAnotherNumber = 25;
console.log(templateLiteral(myAnotherNumber));
/* 
Число 25.
Это число больше или равно 10.
Квадратный корень этого числа - 5.
*/