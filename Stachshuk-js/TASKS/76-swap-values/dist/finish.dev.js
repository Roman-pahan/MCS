"use strict";

/** ЗАДАЧА 76 - Поменять местами значения двух переменных
 *
 * Поменяйте местами значения переменных "a" и "b".
 * Не используйте для этого какие-либо новые переменные.
 */
var a = 'first';
var b = 'second';
console.log(a, b); // first second

var _ref = [b, a];
a = _ref[0];
b = _ref[1];
console.log(a, b); // second first