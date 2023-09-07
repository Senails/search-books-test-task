import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export type BookInfo ={
    imageURL: string;
    autorName: string;
    bookName: string;
    categorie?: string;
    linkURL: string;
}

export interface booksState {
  isFirstLoading: boolean,
  isLoading: boolean,
  booksList: BookInfo[],
  countResults: number,
}

const initialState: booksState = {
  isFirstLoading: true,
  isLoading: false,
  booksList: [],
  countResults: 0,
}

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setFirstLoading: (state, action: PayloadAction<boolean>) => {
      state.isFirstLoading = action.payload;
    },
    setCountResults: (state, action: PayloadAction<number>) => {
      state.countResults = action.payload;
    },
    setBooksList: (state, action: PayloadAction<BookInfo[]>) => {
      state.booksList = action.payload;
    },
    pushToBooksList: (state, action: PayloadAction<BookInfo[]>) => {
      action.payload.forEach((e) => state.booksList.push(e));
    },
    reset: (state) => {
      Object.assign(state,initialState);
    },
  },
})

// Action creators are generated for each case reducer function
export const { 
  setLoading,
  setFirstLoading,
  setCountResults,
  setBooksList,
  pushToBooksList,
  reset,
} = booksSlice.actions
export default booksSlice.reducer