import React from 'react';
import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard';

const Home = () => {
  const { books } = useSelector((state) => state.books);
  const categories = [...new Set(books.map((book) => book.category))];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome to the Online Library</h1>
      <h2 className="mt-4 font-semibold">Categories:</h2>
      <ul className="flex gap-4">
        {categories.map((cat, i) => (
          <li key={i} className="text-blue-600 underline">
            <a href={`/books/${cat}`}>{cat}</a>
          </li>
        ))}
      </ul>

      <h2 className="mt-6 font-semibold">Popular Books:</h2>
      <div className="grid grid-cols-2 gap-4">
        {books.slice(0, 2).map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;