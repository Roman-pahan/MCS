"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _reducer = _interopRequireDefault(require("./books/reducer"));

var _filterSlice = _interopRequireDefault(require("./slices/filterSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _toolkit.configureStore)({
  reducer: {
    books: _reducer["default"],
    filter: _filterSlice["default"]
  }
});
var _default = store;
exports["default"] = _default;