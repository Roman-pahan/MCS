"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/** ЗАДАЧА 54 - Деструктуризация массива
 *
 * Измените раздел параметров в функции "processQuantities" так,
 * чтобы совпали выводы в консоли
 *
 * Используйте деструктуризацию массива
 */
var processQuantities = function processQuantities(_ref) {
  var _ref2 = _slicedToArray(_ref, 3),
      minQty = _ref2[0],
      maxQty = _ref2[1],
      _ref2$ = _ref2[2],
      defaultQty = _ref2$ === void 0 ? 0 : _ref2$;

  console.log(minQty); // 8

  console.log(maxQty); // 29

  console.log(defaultQty); // 10 в первом вызове, 0 во втором вызове

  return defaultQty + maxQty - minQty;
};

var inputQuantities1 = [8, 29, 10];
console.log(processQuantities(inputQuantities1)); // 31

var inputQuantities2 = [8, 29];
console.log(processQuantities(inputQuantities2)); // 21