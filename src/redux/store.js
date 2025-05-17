import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './bookSlice.js';

export default configureStore({
  reducer: {
    books: booksReducer,
  },
});