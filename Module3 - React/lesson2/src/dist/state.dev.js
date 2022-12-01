"use strict";

var _reactDom = require("react-dom");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var dimensions = [20, 5];
var width = dimensions[0];
var height = dimensions[1];
console.log(width, height);
var profile = ["Michael Jordan", 1963, {
  team: "Chicago Bulls",
  number: 23
}];
console.log(profile);

function getFullName(name) {
  var _name = _slicedToArray(name, 2),
      first = _name[0],
      last = _name[1];

  return "".concat(first, " ").concat(last);
}

console.log(getFullName(["Virgil", "Abloh"]));

function playVanga(boomer) {
  var _boomer = _slicedToArray(boomer, 2),
      name = _boomer[0],
      age = _boomer[1];

  return "".concat(name, " \u0441\u043A\u043E\u0440\u043E \u0441\u0442\u0443\u043A\u043D\u0435\u0442 ").concat(age + 1, " \u043B\u0435\u0442");
}

console.log(playVanga(["Elon Musk", 50]));

function useQuotes(word) {
  return "\"".concat(word, "\"");
}

function offWhite() {
  return ["Virgil Abloh", useQuotes];
}

var _offWhite = offWhite(),
    _offWhite2 = _slicedToArray(_offWhite, 2),
    name = _offWhite2[0],
    quote = _offWhite2[1];

console.log(offWhite());

function offWhite1() {
  var item = "SCULPTURE";

  function inQuotes() {
    return "\"".concat(item, "\"");
  }

  return [item, inQuotes];
}

function destructureIt() {
  var _offWhite3 = offWhite1(),
      _offWhite4 = _slicedToArray(_offWhite3, 2),
      item = _offWhite4[0],
      inQuotes = _offWhite4[1];
}

function offWhite2() {
  var item2 = "RAINCOAT";

  function inQuotes2() {
    return "\"".concat(item2, "\"");
  }

  return [item2, inQuotes2];
}

function destructureIt2() {
  var _offWhite5 = offWhite2(),
      _offWhite6 = _slicedToArray(_offWhite5, 2),
      item2 = _offWhite6[0],
      inQuotes2 = _offWhite6[1];
}

(0, _reactDom.render)(destructureIt(), document.querySelector("#root9"));
(0, _reactDom.render)(destructureIt2(), document.querySelector("#root10"));
(0, _reactDom.render)(App(), document.querySelector("#root11"));