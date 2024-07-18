"use strict";

/** ЗАДАЧА 15 - Замена части строки
 *
 * 1. Создайте переменную и присвойте ей строку "Good Morning"
 *
 * 2. Замените "Morning" на "Evening" и присвойте результат новой переменной
 *
 * 3. Выведите значение второй переменной в консоль
 */
var morning = "Good Morning!";
var evening = morning.replace("Morning", "Evening"); // const evening = morning.slice(0,-8)+"Evening!"

console.log(evening);