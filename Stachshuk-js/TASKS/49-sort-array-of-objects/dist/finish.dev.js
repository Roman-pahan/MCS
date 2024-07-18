"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/** ЗАДАЧА 49 - Сортировка объектов в массиве
 *
 * 1. Создайте функцию "sortProductsByPrice" с одним параметром "products"
 *
 * 2. Эта функция должна отсортировать входной массив товаров
 * по цене каждого товара в порядке возрастания
 * и вернуть отсортированный массив
 *
 * 3. Оригинальный массив должен остаться без изменений
 */
var inputProducts = [{
  title: 'Phone case',
  price: 23,
  quantity: 2,
  category: 'Accessories'
}, {
  title: 'Android phone',
  price: 150,
  quantity: 1,
  category: 'Phones'
}, {
  title: 'Headphones',
  price: 78,
  quantity: 1,
  category: 'Accessories'
}, {
  title: 'Sport Watch',
  price: 55,
  quantity: 2,
  category: 'Watches'
}];

function sortProductsByPrice(products) {
  var massive = _toConsumableArray(products);

  return massive.sort(function (price1, price2) {
    return price1.price - price2.price;
  });
}

var sortedProducts = sortProductsByPrice(inputProducts);
console.log(sortedProducts); // Массив отсортированных товаров

console.log(inputProducts); // Оригинальный массив не должен измениться