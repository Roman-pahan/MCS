"use strict";

/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */
var name = "Roman";
var surname = "Korotkov";
var profession = "Engineer"; // const sentence = `Меня зовут ${name} ${surname} и я ${profession}`

var sentence = "Меня зовут " + name + " " + surname + "и я " + profession;
console.log(sentence);