"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _client = _interopRequireDefault(require("react-dom/client"));

var _store = _interopRequireDefault(require("./redux/store"));

require("./index.css");

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var root = _client["default"].createRoot(document.getElementById('root'));

root.render();