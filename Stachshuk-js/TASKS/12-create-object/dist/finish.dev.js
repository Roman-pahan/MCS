"use strict";

/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */
var myObj = {
  name: "Roman",
  surname: "Korotkov",
  favoriteNumber: 26
};
console.log("My name is ".concat(myObj.name, " ").concat(myObj.surname, " and my favorite number is ").concat(myObj.favoriteNumber));