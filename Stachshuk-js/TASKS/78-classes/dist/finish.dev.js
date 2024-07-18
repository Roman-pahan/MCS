"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** ЗАДАЧА 78 - Классы
 *
 * 1. Создайте класс "Fruit"
 *
 * 2. У каждого экземпляра этого класса должно быть
 * два собственных свойства:
 *  - title
 *  - price
 *
 * 3. Также нужно добавить метод "priceInfo", который
 * будет возвращать строку, содержащую название и цену фрукта
 *
 * 4. Выводы в консоли должны совпасть
 */
var Fruit =
/*#__PURE__*/
function () {
  function Fruit(title, price) {
    _classCallCheck(this, Fruit);

    this.title = title;
    this.price = price;
  }

  _createClass(Fruit, [{
    key: "priceInfo",
    value: function priceInfo() {
      return "Price of the ".concat(this.title, " is ").concat(this.price, "$");
    }
  }]);

  return Fruit;
}();

var apple = new Fruit('Apple', 2);
console.log(apple.priceInfo()); // Price of the Apple is 2$

var orange = new Fruit('Orange', 3);
console.log(orange.priceInfo()); // Price of the Orange is 3$