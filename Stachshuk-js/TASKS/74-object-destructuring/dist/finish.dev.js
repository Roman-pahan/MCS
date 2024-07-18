"use strict";

/** ЗАДАЧА 74 - Деструктуризация объектов
 *
 * Создайте функцию "shortPerson", которая деструктуризирует объект
 * и возвращает его короткую версию
 *
 * Пример результата:
 * { n: "Mike", c: "Spain", a: 23, p: 100 }
 *
 * Если входной объект не имеет поля postsQuantity,
 * он должен получить значение по умолчанию 0
 */
var _require = require("zlib"),
    inflate = _require.inflate;

var person1 = {
  name: 'Mike',
  info: {
    country: 'Spain',
    age: 23
  },
  postsQuantity: 100
};
var person2 = {
  name: 'Alice',
  info: {
    country: 'Italy',
    age: 25
  }
}; // Напишите функцию "shortPerson" здесь

var shortPerson = function shortPerson(_ref) {
  var n = _ref.name,
      _ref$info = _ref.info,
      c = _ref$info.country,
      a = _ref$info.age,
      _ref$postsQuantity = _ref.postsQuantity,
      p = _ref$postsQuantity === void 0 ? 0 : _ref$postsQuantity;
  return {
    n: n,
    c: c,
    a: a,
    p: p
  };
};

console.log(shortPerson(person1)); // { n: "Mike", c: "Spain", a: 23, p: 100 }

console.log(shortPerson(person2)); // { n: "Alice", c: "Italy", a: 25, p: 0 }