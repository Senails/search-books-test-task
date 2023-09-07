import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../search-for-books/entities/redux-books-slice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const dispatch = store.dispatch;
export const getState = store.getState;