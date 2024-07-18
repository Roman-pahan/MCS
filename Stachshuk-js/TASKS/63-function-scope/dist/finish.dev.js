"use strict";

/** ЗАДАЧА 63 - Зона видимости функции
 *
 * Что будет выведено в консоль?
 * Ответьте на вопрос без запуска кода
 */
var b = 2;
var d = 15;

function myFn1(a) {
  var b;
  var d = 10;
  myFn2(b);
}

function myFn2(a) {
  var c = 5;
  console.log(a, b, c, d); // underfined 2 5 15
  // a = underfined,  передается через значение b, т.е. вызывается внутри функции myFn1
  // b = 2, значение не найдено внутри самой функции, а функциия объявлена в глобальной области видимости,
  //хоть и вызывается изнутри myFn1, поиск значения будет в глобальной области видимости
  // с = 5, значение будет взято изнутри myFn2
  // d = 15, аналогично с b внутри нет, переход в глобальную зону видимости
}

myFn1();