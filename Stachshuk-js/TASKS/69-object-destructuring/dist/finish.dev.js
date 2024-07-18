"use strict";

/** ЗАДАЧА 69 - Деструктуризация объектов
 *
 * Создайте функцию "mult", в которой будут умножаться
 * значения свойств x, y, z переданного объекта
 *
 * Результат умножения верните из функции
 */
var objectWithNumbers = {
  x: 5,
  y: 20,
  z: 3
}; // Создайте функцию здесь
// const mult = (obj)=>{
//   const {x,y,z}= obj;
//   return x*y*z;
// }

var mult = function mult(_ref) {
  var x = _ref.x,
      y = _ref.y,
      z = _ref.z;
  return x * y * z;
};

var result = mult(objectWithNumbers);
console.log(result); // 300