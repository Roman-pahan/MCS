"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.selectBooks = exports.toggleFavorite = exports.deleteBook = exports.addBook = exports.fetchBook = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _toolkit = require("@reduxjs/toolkit");

var _createBookWithID = _interopRequireDefault(require("../../utils/createBookWithID"));

var _errorSlice = require("./errorSlice");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initialState = [];
var fetchBook = (0, _toolkit.createAsyncThunk)('books/fetchBook', function _callee(url, thunkAPI) {
  var res;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get(url));

        case 3:
          res = _context.sent;
          return _context.abrupt("return", res.data);

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          thunkAPI.dispatch((0, _errorSlice.setError)(_context.t0.message)); // OPTION 1
          // return thunkAPI.rejectWithValue(error);
          // // OPTION 2

          throw _context.t0;

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
exports.fetchBook = fetchBook;
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
  },
  //OPTION 1
  extraReducers: function extraReducers(builder) {
    builder.addCase(fetchBook.fulfilled, function (state, action) {
      if (action.payload.title && action.payload.author) {
        state.push((0, _createBookWithID["default"])(action.payload, 'API'));
      }
    });
  } //OPTION 2
  // extraReducers: {
  //   [fetchBook.fulfilled]: (state, action) => {
  //     if (action.payload.title && action.payload.author) {
  //       state.push(createBookWithID(action.payload, 'API'));
  //     }
  //   },
  // },

});
var _booksSlice$actions = booksSlice.actions,
    addBook = _booksSlice$actions.addBook,
    deleteBook = _booksSlice$actions.deleteBook,
    toggleFavorite = _booksSlice$actions.toggleFavorite; // export const thunkFunction = async (dispatch, getState) => {
//   // console.log(getState());
//   try {
//     const res = await axios.get('http://localhost:4000/random-book');
//     if (res?.data?.title && res?.data?.author) {
//       dispatch(addBook(createBookWithID(res.data, 'API')));
//     }
//   } catch (error) {
//     console.log('Error fetching random book', error);
//   }
//   // console.log(getState());
// };

exports.toggleFavorite = toggleFavorite;
exports.deleteBook = deleteBook;
exports.addBook = addBook;

var selectBooks = function selectBooks(state) {
  return state.books;
};

exports.selectBooks = selectBooks;
var _default = booksSlice.reducer;
exports["default"] = _default;