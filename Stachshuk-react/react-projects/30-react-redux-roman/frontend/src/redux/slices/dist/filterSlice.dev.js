"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.selectOnlyFavoriteFilter = exports.selectAuthorFilter = exports.selectTitleFilter = exports.resetFilters = exports.setOnlyFavoriteFilter = exports.setAuthorFilter = exports.setTitleFilter = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = {
  title: '',
  author: '',
  onlyFavorite: false
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
    setAuthorFilter: function setAuthorFilter(state, action) {
      state.author = action.payload;
    },
    setOnlyFavoriteFilter: function setOnlyFavoriteFilter(state) {
      state.onlyFavorite = !state.onlyFavorite;
    },
    resetFilters: function resetFilters() {
      return initialState;
    }
  }
});
var _filterSlice$actions = filterSlice.actions,
    setTitleFilter = _filterSlice$actions.setTitleFilter,
    setAuthorFilter = _filterSlice$actions.setAuthorFilter,
    setOnlyFavoriteFilter = _filterSlice$actions.setOnlyFavoriteFilter,
    resetFilters = _filterSlice$actions.resetFilters; // экспорт actionCreator

exports.resetFilters = resetFilters;
exports.setOnlyFavoriteFilter = setOnlyFavoriteFilter;
exports.setAuthorFilter = setAuthorFilter;
exports.setTitleFilter = setTitleFilter;

var selectTitleFilter = function selectTitleFilter(state) {
  return state.filter.title;
};

exports.selectTitleFilter = selectTitleFilter;

var selectAuthorFilter = function selectAuthorFilter(state) {
  return state.filter.author;
};

exports.selectAuthorFilter = selectAuthorFilter;

var selectOnlyFavoriteFilter = function selectOnlyFavoriteFilter(state) {
  return state.filter.onlyFavorite;
};

exports.selectOnlyFavoriteFilter = selectOnlyFavoriteFilter;
var _default = filterSlice.reducer; // экспорт reducer

exports["default"] = _default;