import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard';

const BrowseBooks = () => {
  const { category } = useParams();
  const { books } = useSelector((state) => state.books);
  const [search, setSearch] = useState('');

  const filtered = books.filter(
    (book) =>
      book.category === category &&
      (book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Browsing: {category}</h2>
      <input
        type="text"
        placeholder="Search by title or author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mt-4 w-full"
      />
      <div className="grid grid-cols-2 gap-4 mt-4">
        {filtered.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BrowseBooks;