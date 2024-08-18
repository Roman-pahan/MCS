"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.selectBooks = exports.toggleFavorite = exports.deleteBook = exports.addBook = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = [];
var booksSlice = (0, _toolkit.createSlice)({
  name: 'books',
  initialState: initialState,
  reducers: {
    addBook: function addBook(state, action) {
      state.push(action.payload);
    },
    deleteBook: function deleteBook(state, action) {
      return state.filter(function (book) {
        return book.id !== action.payload;
      });
    },
    toggleFavorite: function toggleFavorite(state, action) {
      state.forEach(function (book) {
        if (book.id === action.payload) {
          book.isFavorite = !book.isFavorite;
        }
      });
    }
  }
});
var _booksSlice$actions = booksSlice.actions,
    addBook = _booksSlice$actions.addBook,
    deleteBook = _booksSlice$actions.deleteBook,
    toggleFavorite = _booksSlice$actions.toggleFavorite;
exports.toggleFavorite = toggleFavorite;
exports.deleteBook = deleteBook;
exports.addBook = addBook;

var selectBooks = function selectBooks(state) {
  return state.books;
};

exports.selectBooks = selectBooks;
var _default = booksSlice.reducer;
exports["default"] = _default;