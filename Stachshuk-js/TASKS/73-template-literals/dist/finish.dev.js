"use strict";

/** ЗАДАЧА 73 - Шаблонные строки
 *
 * Создайте функцию "carInfo", которая возвращает информацию о машине:
 *  - Автомобиль считается дешевым, если его цена <= 20000
 *  - Автомобиль считается дорогим, если его цена > 20000
 *
 * Выводы в консоли должны совпадать с теми, которые в конце задачи
 */
var cars = [{
  brand: "Honda",
  price: 13000
}, {
  brand: "Rolls-Royce",
  price: 120000
}]; // Создайте функцию "carInfo" здесь

var carInfo = function carInfo(car) {
  return "\u0426\u0435\u043D\u0430 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F ".concat(car.brand, " - ").concat(car.price, "$ \u0438 \u044D\u0442\u043E ").concat(car.price > 20000 ? "дорогая" : "дешевая", " \u043C\u0430\u0448\u0438\u043D\u0430");
};

cars.forEach(function (car) {
  return console.log(carInfo(car));
}); // Цена автомобиля Honda - 13000$ и это дешёвая машина
// Цена автомобиля Rolls-Royce - 120000$ и это дорогая машина