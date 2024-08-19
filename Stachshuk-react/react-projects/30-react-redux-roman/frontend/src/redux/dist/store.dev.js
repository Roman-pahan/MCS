"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _booksSlice = _interopRequireDefault(require("./slices/booksSlice"));

var _filterSlice = _interopRequireDefault(require("./slices/filterSlice"));

var _errorSlice = _interopRequireDefault(require("./slices/errorSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _toolkit.configureStore)({
  reducer: {
    books: _booksSlice["default"],
    filter: _filterSlice["default"],
    error: _errorSlice["default"]
  }
});
var _default = store;
exports["default"] = _default;