"use strict";

/** ЗАДАЧА 48 - Использование метода "reduce" для создания объекта
 *
 * 1. Создайте функцию "quantitiesByCategories" с одним параметром "products"
 *
 * 2. Эта функция должна возвращать объект с ключами,
 * равными категориям, и значениями,
 * равными сумме всех количеств в каждой категории
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

var quantitiesByCategories = function quantitiesByCategories(products) {
  return products.reduce(function (acc, el) {
    if (!acc[el.category]) {
      //Проверяем есть ли свойство в объекте
      acc[el.category] = el.quantity; //Если нет добавляем свойство со значением
    } else {
      acc[el.category] += el.quantity; //Если есть добавляем к текущему значение новое
    }

    return acc;
  }, {});
};

console.log(quantitiesByCategories(inputProducts));
/* {
  Accessories: 3,
  Phones: 1,
  Watches: 2
} */