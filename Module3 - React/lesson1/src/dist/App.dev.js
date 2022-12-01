"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function App() {
  return _react["default"].createElement("li", {
    className: "first",
    style: {
      listStyle: "none"
    }
  }, "Yo!");
}

var _default = App;
exports["default"] = _default;