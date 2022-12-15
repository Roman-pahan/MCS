"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireWildcard(require("react"));

var _client = _interopRequireDefault(require("react-dom/client"));

var _reactDom = require("react-dom");

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// getPromise()
// .then(result => {
//   console.log(result)
// })
// .catch(error => {
//   console.log(error)
// })
var queue = function queue(time) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(true);
    }, time);
  });
};

console.log(queue(500).then(function () {
  console.log("Ожидание завершено");
}));
fetch("https://api.kanye.rest/").then(function (response) {
  return response.json();
}).then(function (data) {
  console.log(data);
});

function getRate() {
  fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data.bpi.USD.rate);
  });
}

getRate(); // function getFilms() {
//     fetch("https://ghibliapi.herokuapp.com/films")
//     .then(response => response.json())
//     .then(data => {
//       console.log(data.map(film => film.original_title))
//     })
//   }
// getFilms()

function App() {
  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      quote = _useState2[0],
      setQuote = _useState2[1];

  (0, _react.useEffect)(function () {
    fetch("https://api.kanye.rest/").then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log(data);
      setQuote(data);
    });
  }, []);
  return null;
}

App(); // const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );