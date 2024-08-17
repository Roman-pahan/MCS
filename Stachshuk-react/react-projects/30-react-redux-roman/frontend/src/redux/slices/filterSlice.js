import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      // return { ...state, title: action.payload };
      // state = {
      //   title: action.payload,
      // };
      // return state;
      state.title = action.payload;
    },
    resetFilters: (state) => {
      return initialState;
    },
  },
});

export const { setTitleFilter, resetFilters } = filterSlice.actions; // экспорт actionCreator
export const selectTitleFilter = (state) => state.filter.title;

export default filterSlice.reducer;
// экспорт reducer
