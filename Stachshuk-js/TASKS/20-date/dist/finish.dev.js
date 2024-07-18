"use strict";

/** ЗАДАЧА 20 - Дата
 *
 * 1. Создайте переменную и присвойте ей текущее время в миллисекундах
 *
 * 2. Выведите значение в консоль
 */
var newData = new Date();
var newDataInMs = newData.getTime();
console.log(newDataInMs);