import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      id: '1',
      title: '1984',
      author: 'George Orwell',
      description: 'A dystopian novel.',
      category: 'Fiction',
      rating: 4.5,
    },
    {
      id: '2',
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      description: 'A brief history of humankind.',
      category: 'Non-Fiction',
      rating: 4.7,
    },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = { id: nanoid(), ...action.payload };
      state.books.push(newBook);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;