"use strict";

/** ЗАДАЧА 37 - Цикл "for .. in"
 *
 * Внутри цикла "for .. in" перед выводом значения свойства в консоль
 * выполните проверку того, что свойство является
 * собственным свойством объекта
 */
var myObject = {
  name: 'Mike',
  age: 30,
  city: 'London'
};
Object.prototype.country = 'England';

for (var key in myObject) {
  if (myObject.hasOwnProperty(key)) {
    console.log(myObject[key]);
  }
}