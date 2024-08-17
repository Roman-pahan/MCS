"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.selectTitleFilter = exports.resetFilters = exports.setTitleFilter = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = {
  title: ''
};
var filterSlice = (0, _toolkit.createSlice)({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setTitleFilter: function setTitleFilter(state, action) {
      // return { ...state, title: action.payload };
      // state = {
      //   title: action.payload,
      // };
      // return state;
      state.title = action.payload;
    },
    resetFilters: function resetFilters(state) {
      return initialState;
    }
  }
});
var _filterSlice$actions = filterSlice.actions,
    setTitleFilter = _filterSlice$actions.setTitleFilter,
    resetFilters = _filterSlice$actions.resetFilters; // экспорт actionCreator

exports.resetFilters = resetFilters;
exports.setTitleFilter = setTitleFilter;

var selectTitleFilter = function selectTitleFilter(state) {
  return state.filter.title;
};

exports.selectTitleFilter = selectTitleFilter;
var _default = filterSlice.reducer; // экспорт reducer

exports["default"] = _default;