import * as actionTypes from './actionTypes';

const InitialState = [];


const booksReducer = (state = InitialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case actionTypes.ADD_BOOK:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default booksReducer;
