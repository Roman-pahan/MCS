"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.selectErrorMessage = exports.clearError = exports.setError = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = '';
var errorSlice = (0, _toolkit.createSlice)({
  name: 'error',
  initialState: initialState,
  reducers: {
    setError: function setError(state, action) {
      return action.payload;
    },
    clearError: function clearError() {
      return initialState;
    }
  }
});
var _errorSlice$actions = errorSlice.actions,
    setError = _errorSlice$actions.setError,
    clearError = _errorSlice$actions.clearError;
exports.clearError = clearError;
exports.setError = setError;

var selectErrorMessage = function selectErrorMessage(state) {
  return state.error;
};

exports.selectErrorMessage = selectErrorMessage;
var _default = errorSlice.reducer;
exports["default"] = _default;